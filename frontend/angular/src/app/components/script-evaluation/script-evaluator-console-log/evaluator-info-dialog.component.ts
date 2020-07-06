import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluator-info-dialog',
  template: `
    <h2 class="c-accent-dark" mat-dialog-title translate>evaluatorInfo.title</h2>
    <mat-dialog-content class="mat-typography" [innerHTML]="'evaluatorInfo.body' | translate"> </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button color="accent" mat-button mat-dialog-close>{{ 'common.close' | translate }}</button>
    </mat-dialog-actions>
  `,
  styles: []
})
export class EvaluatorInfoDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
