import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptEvaluatorConsoleLogComponent } from './script-evaluator-console-log/script-evaluator-console-log.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ScriptEvaluatorConsoleLogComponent],
  imports: [CommonModule, MatIconModule, MatTooltipModule, TranslateModule, MatButtonModule],
  exports: [ScriptEvaluatorConsoleLogComponent]
})
export class ScriptEvaluationModule {}
