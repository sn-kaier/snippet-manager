import * as uuid from 'uuid';
import { EventEmitter, Renderer2 } from '@angular/core';
import { Program } from 'estree';
import { parseScript } from 'esprima';
import { ScriptTraverser } from './script-traverser';

export type ConsoleType = 'log' | 'warn' | 'error';

export interface LogLine {
  line: string;
  logLevel: ConsoleType;
}

export class ScriptEvaluator {
  readonly logLine = new EventEmitter<LogLine>();
  readonly terminated = new EventEmitter();

  readonly parsingError = new EventEmitter();
  private readonly uniqueId: string = uuid.v4();
  private iFrameRef: HTMLIFrameElement | undefined;

  private isRunning = false;

  constructor(private readonly renderer: Renderer2) {}

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

    const logger = (m: { data: { fromChild: string; consoleType: ConsoleType; terminated: boolean; id: string } }) => {
      if (m.data && m.data.fromChild && typeof m.data.fromChild === 'string' && m.data.id === this.uniqueId) {
        if (m.data.terminated) {
          this.isRunning = false;
          if (this.iFrameRef) {
            this.iFrameRef.remove();
          }
          this.terminated.emit();
        } else {
          // console.log(`message ${m.data.consoleType} on host:`, m.data.fromChild);
          this.logLine.emit({ line: m.data.fromChild, logLevel: m.data.consoleType });
        }
      }
    };
    window.addEventListener('message', logger, false);

    const now = Date.now();
    this.isRunning = true;
    const template = this.createScriptSource();
    const nEl = this.createContainerElement();
    this.iFrameRef = this.createIFrame();
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
        window.removeEventListener('message', logger);
        const elapsedTime = Date.now() - now;
        nEl.remove();
        resolve(elapsedTime);
      });
    });
  }

  private createContainerElement() {
    const divElement = this.renderer.createElement('div');
    this.renderer.appendChild(document.body, divElement);
    divElement.style.display = 'none';
    return divElement;
  }

  private createIFrame() {
    const iFrame = this.renderer.createElement('iframe');
    this.renderer.setProperty(iFrame, 'sandbox', 'allow-scripts allow-same-origin');
    this.renderer.setStyle(iFrame, 'display', 'none');
    return iFrame;
  }

  /**
   * add timeouts to loops to be able to interrupt the program
   */
  private preprocessScript(scriptSource: string): string {
    const scriptLines = scriptSource.split('\n');
    let testedCode: Program;
    try {
      testedCode = parseScript(scriptSource, {
        loc: true
      });
    } catch (e) {
      this.parsingError.emit(e);
      console.error(e);
      this.logLine.emit({ logLevel: 'error', line: `Line ${e.lineNumber}: ${e.description}` });
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
              _parent.postMessage({ fromChild: 'ended', terminated: true, id: '${this.uniqueId}' }, '*', []);
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
              id: '${this.uniqueId}',
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
