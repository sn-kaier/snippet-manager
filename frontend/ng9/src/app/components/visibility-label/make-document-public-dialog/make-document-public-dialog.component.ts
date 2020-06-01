import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-make-document-public-dialog',
  templateUrl: './make-document-public-dialog.component.html',
  styleUrls: ['./make-document-public-dialog.component.scss']
})
export class MakeDocumentPublicDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public title: string) {
  }

  ngOnInit(): void {
  }

}
