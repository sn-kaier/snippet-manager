import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { LogLine, ScriptEvaluatorComponent } from '../script-evaluator/script-evaluator.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-script-evaluator-console-log',
  templateUrl: './script-evaluator-console-log.component.html',
  styleUrls: ['./script-evaluator-console-log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScriptEvaluatorConsoleLogComponent implements OnInit {
  maxBufferedLines = 1000;
  lines: LogLine[] = [];

  showLog = false;

  changeTriggered = false;
  @ViewChild('scriptContainer') scriptContainer: ElementRef<HTMLDivElement>;
  @ViewChild(ScriptEvaluatorComponent) scriptEvaluator: ScriptEvaluatorComponent;

  @Input()
  scriptText: string;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly domSanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  clear() {
    this.lines = [];
    this.changeDetectorRef.detectChanges();
  }

  runScript(): void {
    if (!this.scriptEvaluator.running) {
      this.clear();
      this.showLog = true;
      this.scriptEvaluator.run(this.scriptText).then(() => {
        console.log('stopped execution');
      });
    } else {
      this.scriptEvaluator.terminate();
    }
  }

  addLine(line: LogLine): void {
    if (this.lines.length >= this.maxBufferedLines) {
      this.lines.splice(0, 1);
    }
    this.lines.push(line);

    if (!this.changeTriggered) {
      this.changeTriggered = true;
      setTimeout(() => {
        this.changeTriggered = false;
        this.changeDetectorRef.detectChanges();
        setTimeout(() => {
          this.scrollToBottom();
        });
      });
    }
  }

  private escapeHtml(unsafe: string): string {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  renderCode(): SafeHtml {
    const rendered = this.lines
      .map(line => {
        const lEscaped = this.escapeHtml(line.line);
        switch (line.logLevel) {
          case 'log':
            return lEscaped;
          case 'warn':
            return `<span style="color: orange">${lEscaped}</span>`;
          case 'error':
            return `<span style="color: red">${lEscaped}</span>`;
        }
      })
      .join('\n');
    return this.domSanitizer.bypassSecurityTrustHtml(rendered);
  }

  scrollToBottom() {
    console.log('scriptContainer', this.scriptContainer);
    const el = this.scriptContainer.nativeElement;
    el.scrollTop = el.scrollHeight;
  }
}
