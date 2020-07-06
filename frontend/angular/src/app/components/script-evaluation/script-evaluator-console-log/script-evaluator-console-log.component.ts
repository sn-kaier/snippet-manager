import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ScriptEvaluatorService } from '../script-evaluator/script-evaluator.service';
import { Subscription } from 'rxjs';
import { LogLine } from '../script-evaluator/script-evaluator';
import { MatDialog } from '@angular/material/dialog';
import { EvaluatorInfoDialogComponent } from './evaluator-info-dialog.component';

@Component({
  selector: 'app-script-evaluator-console-log',
  templateUrl: './script-evaluator-console-log.component.html',
  styleUrls: ['./script-evaluator-console-log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScriptEvaluatorConsoleLogComponent implements OnInit, OnDestroy {
  maxBufferedLines = 10000;
  lines: LogLine[] = [];

  showLog = false;

  changeTriggered = false;
  @ViewChild('scriptContainer') scriptContainer: ElementRef<HTMLDivElement>;
  @Input() scriptText: string;
  @Input() runLabel?: string;

  readonly scriptEvaluator = this.evaluatorService.createRunner();
  private subs: Subscription[] = [];

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly domSanitizer: DomSanitizer,
    private readonly evaluatorService: ScriptEvaluatorService,
    private readonly dialog: MatDialog
  ) {}

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
    this.subs = [];
  }

  ngOnInit(): void {
    this.subs.push(
      this.scriptEvaluator.logLine.subscribe(line => {
        this.addLine(line);
      })
    );
  }

  clear() {
    this.lines = [];
    this.changeDetectorRef.detectChanges();
  }

  runScript(): void {
    if (!this.scriptEvaluator.running) {
      this.clear();
      this.showLog = true;
      this.scriptEvaluator.run(this.scriptText).then(() => {
        this.changeDetectorRef.detectChanges();
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
    const el = this.scriptContainer.nativeElement;
    el.scrollTop = el.scrollHeight;
  }

  close() {
    this.showLog = false;
    this.clear();
  }

  private escapeHtml(unsafe: string): string {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  openScriptInfoDialog() {
    this.dialog.open(EvaluatorInfoDialogComponent);
  }
}
