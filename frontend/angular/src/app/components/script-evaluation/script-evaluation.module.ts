import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptEvaluatorConsoleLogComponent } from './script-evaluator-console-log/script-evaluator-console-log.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { EvaluatorInfoDialogComponent } from './script-evaluator-console-log/evaluator-info-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ScriptEvaluatorConsoleLogComponent, EvaluatorInfoDialogComponent],
  imports: [CommonModule, MatIconModule, MatTooltipModule, TranslateModule, MatButtonModule, MatDialogModule],
  exports: [ScriptEvaluatorConsoleLogComponent]
})
export class ScriptEvaluationModule {}
