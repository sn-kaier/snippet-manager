import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfirmDeleteDialogData {
  subject: string;
}

@Component({
  selector: 'app-confirm-delete-dialog',
  template: `
    <h1 mat-dialog-title class="center-xs">{{ 'dialog.deleteTitle' | translate : { subject: data.subject } }}</h1>
    <div mat-dialog-content class="mts">{{ 'dialog.deleteContent' | translate : { subject: data.subject } }}</div>
    <div mat-dialog-actions class="mts row">
      <div class="col-xs-6">
        <button mat-button mat-dialog-close>{{ 'common.cancel' | translate }}</button>
      </div>
      <div class="col-xs-6 end-xs">
        <button mat-button [mat-dialog-close]="true" color="warn">{{ 'common.delete' | translate }}</button>
      </div>
    </div>
  `,
  styles: []
})
export class ConfirmDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDeleteDialogData) {
  }

  ngOnInit(): void {
  }

}
