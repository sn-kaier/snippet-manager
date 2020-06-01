import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-make-document-private-dialog',
  templateUrl: './make-document-private-dialog.component.html',
  styleUrls: ['./make-document-private-dialog.component.scss']
})
export class MakeDocumentPrivateDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public readonly title: string) { }

  ngOnInit(): void {
  }

}
