import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

import { parseScript } from 'esprima';
import { ScriptTraverser } from './script-traverser';
import { Program } from 'estree';

@Component({
  selector: 'app-script-evaluator',
  templateUrl: './script-evaluator.component.html',
  styleUrls: ['./script-evaluator.component.scss']
})
export class ScriptEvaluatorComponent implements OnInit, OnDestroy {
  @Output()
  logLine = new EventEmitter<string>();

  @ViewChild('ref', { static: false }) containerRef: ElementRef<HTMLIFrameElement>;

  @Output() terminated = new EventEmitter();
  @Output() parsingError = new EventEmitter();

  private iFrameRef: HTMLIFrameElement | undefined;

  private isRunning = false;

  constructor(private renderer: Renderer2) {}

  get running(): boolean {
    return this.isRunning;
  }

  public terminate() {
    if (!this.isRunning) {
      throw new Error('cant stop script because its not running');
    }
    this.isRunning = false;
    if (this.iFrameRef) {
      this.iFrameRef.remove();
    }
    this.terminated.emit();
  }

  public async run(scriptText: string): Promise<number> {
    if (this.isRunning) {
      throw new Error('can not run a new script if the old one is still running');
    }
    const now = Date.now();
    this.isRunning = true;
    const template = this.createScriptSource();
    const nEl = this.containerRef.nativeElement;
    this.iFrameRef = this.renderer.createElement('iframe');
    this.renderer.setProperty(this.iFrameRef, 'sandbox', 'allow-scripts allow-same-origin');
    this.renderer.setStyle(this.iFrameRef, 'display', 'none');
    this.renderer.appendChild(nEl, this.iFrameRef);
    this.renderer.setAttribute(this.iFrameRef, 'src', template);
    this.isRunning = true;

    const processedScript = this.preprocessScript(scriptText);

    this.iFrameRef.onload = () => {
      const contentWindow = this.iFrameRef.contentWindow;
      const runnableCode = btoa(this.getSandboxCode()) + ',' + btoa(processedScript);
      contentWindow.postMessage(runnableCode, '*', []);
    };
    return new Promise<number>(resolve => {
      const sub = this.terminated.subscribe(() => {
        sub.unsubscribe();
        const elapsedTime = Date.now() - now;
        resolve(elapsedTime);
      });
    });
  }

  ngOnInit() {
    window.addEventListener('message', this.logger, false);
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this.logger);
  }

  private preprocessScript(scriptSource: string): string {
    const scriptLines = scriptSource.split('\n');
    let testedCode: Program;
    try {
      testedCode = parseScript(scriptSource, {
        loc: true
      });
    } catch (e) {
      this.parsingError.emit(e);
      return;
    }

    const traverser = new ScriptTraverser(scriptLines);
    traverser.traverseProgram(testedCode);
    console.log('testedCode', testedCode);
    const producedCode = this.wrapIntoAsyncFunction(scriptLines.join('\n'));
    console.log('produced code:', producedCode);
    return producedCode;
  }

  private wrapIntoAsyncFunction(scriptSource: string): string {
    return `(async function(){${scriptSource}})()`;
  }

  private logger = (m: { data: { fromChild: string; consoleType: 'log' | 'warn' | 'error'; terminated: boolean } }) => {
    if (m.data && m.data.fromChild && typeof m.data.fromChild === 'string') {
      if (m.data.terminated) {
        this.isRunning = false;
        if (this.iFrameRef) {
          this.iFrameRef.remove();
        }
        this.terminated.emit();
      } else {
        // console.log(`message ${m.data.consoleType} on host:`, m.data.fromChild);
        this.logLine.emit(m.data.fromChild);
      }
    }
  };

  private createScriptSource() {
    const src = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Page title</title>
      <script>
      function bindEvent(element, eventName, eventHandler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
      }
      bindEvent(window, 'message', function (e) {
          if (e.data) {
              const parts = e.data.split(',');
              if (parts && parts.length === 2) {
                  try {
                      const sandbox = atob(parts[0]);
                      const scriptSrc = atob(parts[1]);
                      eval(sandbox);
                      scriptRunner(scriptSrc);
                  } catch (e) {
                      console.log('failed to run script src', e);
                  }
              }
          }
      });
      </script>
      </head>
      <body>
      </body>
    </html>
  `;
    return 'data:text/html;charset=utf-8,' + encodeURI(src);
  }

  private getSandboxCode(): string {
    const script = `<script>
      function scriptRunner(scriptSrc) {
        const _encapsulatedRunningState = (function() {
          const log = console.log;
          const _emitEnded = (function() {
            const _parent = parent;
            return function() {
              _parent.postMessage({ fromChild: 'ended', terminated: true }, '*', []);
            };
          })();
          let countTimeouts = 0;
          let countIntervals = 0;
          let mainRunning = true;
          return function(timeoutAdd, intervalAdd, mainR = true) {
            if (timeoutAdd === 1) {
              countTimeouts++;
            } else if (timeoutAdd === -1) {
              countTimeouts--;
            }
            if (intervalAdd === 1) {
              countIntervals++;
            } else if (intervalAdd === -1) {
              countIntervals--;
            }
            if (!mainR) {
                mainRunning = false;
            }
            // log('call _encapsulatedRunningState,', timeoutAdd, intervalAdd, mainR, '|', countTimeouts, countIntervals, mainRunning);
            if (countIntervals <= 0 && countTimeouts <= 0 && !mainRunning) {
              // end;
              _emitEnded();
            }
          };
        })();

        const __timeoutIds = [];
        let __setTimeout = (function() {
          const _setTimeout = setTimeout;
          return function(fun, timeout) {
            timeout = timeout || 0;
            _encapsulatedRunningState(1, 0);
            const timeoutId = _setTimeout(function() {
              fun();
              _setTimeout(function() {
                  _encapsulatedRunningState(-1, 0);
              }, 0);
            }, timeout);
            __timeoutIds.push(timeoutId);
            return timeoutId;
          };
        })();
        setTimeout = __setTimeout;
        __setTimeout = undefined;

        const __intervalIds = [];
        let __setInterval = (function() {
          const _setInterval = setInterval;
          return function(fun, interval) {
            interval = interval || 0;
            _encapsulatedRunningState(0, 1);
            const intervalId = _setInterval(fun, interval);
            __intervalIds.push(intervalId);
            return intervalId;
          };
        })();
        setInterval = __setInterval;
        __setInterval = undefined;

        let __clearTimeout = (function() {
          const _clearTimeout = clearTimeout;
          return function(timeoutId) {
            _clearTimeout(timeoutId);
            const timeoutIndex = __timeoutIds.indexOf(timeoutId);
            if (timeoutIndex >= 0) {
              _encapsulatedRunningState(-1, 0);
              __timeoutIds.splice(timeoutIndex, 1);
            }
          };
        })();
        clearTimeout = __clearTimeout;
        __clearTimeout = undefined;

        let __clearInterval = (function() {
          const _clearInterval = clearInterval;
          return function(intervalId) {
            _clearInterval(intervalId);
            const intervalIndex = __intervalIds.indexOf(intervalId);
            if (intervalIndex >= 0) {
              _encapsulatedRunningState(0, -1);
              __intervalIds.splice(intervalIndex, 1);
            }
          };
        })();
        clearInterval = __clearInterval;
        __clearInterval = undefined;

        let logFunc = (function(consoleType) {
          const _parent = parent;
          return function(...t) {
            _parent.postMessage({
              consoleType,
              fromChild: t.map(elm => typeof elm === 'string' ? elm : JSON.stringify(elm)).join(' '),
              terminated: false
            }, '*', []);
          };
        });
        console.warn = logFunc('warn');
        console.error = logFunc('error');
        console.log = logFunc('log');
        logFunc = undefined;
        parent = undefined;

        try {
          eval(scriptSrc);
        } catch (e) {
          console.log('error', e);
        }
        _encapsulatedRunningState(0, 0, false);
      }</script>`;
    return script.substring('<script>'.length, script.length - '</script>'.length);
  }
}
