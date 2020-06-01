import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MakeDocumentPublicDialogComponent } from './make-document-public-dialog/make-document-public-dialog.component';
import { MakeDocumentPrivateDialogComponent } from './make-document-private-dialog/make-document-private-dialog.component';
import { filter, take } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-visibility-label',
  templateUrl: './visibility-label.component.html',
  styleUrls: ['./visibility-label.component.scss']
})
export class VisibilityLabelComponent implements OnInit {

  @Input() isPublic: boolean;
  @Input() title: string;
  @Input() showDialog: boolean;

  @Output() changeIsPublic = new EventEmitter<boolean>();

  constructor(public readonly dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  updateIsPublic(visibility: boolean) {
    if (this.showDialog) {
      this.dialog.open(visibility ? MakeDocumentPublicDialogComponent : MakeDocumentPrivateDialogComponent, { data: this.title })
        .afterClosed()
        .pipe(take(1), filter(okay => okay))
        .subscribe(() => {
          this.changeIsPublic.emit(visibility);
        });
    } else {
      this.changeIsPublic.emit(visibility);
    }

  }
}
