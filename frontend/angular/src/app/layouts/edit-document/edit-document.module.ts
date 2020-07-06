import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { EditDocumentRoutingModule } from './edit-document-routing-module';
import { FeedModule } from '../feed/feed.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ComponentsModule } from '../../components/components.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScriptEvaluationModule } from '../../components/script-evaluation/script-evaluation.module';
import { MonacoEditorModule } from 'ngx-monaco-editor';

@NgModule({
  declarations: [EditDocumentComponent],
  imports: [
    CommonModule,
    EditDocumentRoutingModule,
    FeedModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatInputModule,
    ComponentsModule,
    FormsModule,
    MatCheckboxModule,
    TranslateModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot(),
    ScriptEvaluationModule
  ]
})
export class EditDocumentModule {}
