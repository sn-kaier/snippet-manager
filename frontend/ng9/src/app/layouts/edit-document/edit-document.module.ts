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
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditDocumentComponent],
  imports: [
    CommonModule,
    EditDocumentRoutingModule,
    FeedModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    MatInputModule,
    FormsModule
  ]
})
export class EditDocumentModule { }
