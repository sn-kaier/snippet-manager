import { QueryRef } from 'apollo-angular';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DocumentSetInput,
  UDeleteDocumentGQL,
  UEditDocFragment,
  UEditDocumentAddGQL,
  UEditDocumentGetGQL,
  UEditDocumentGetQuery,
  UEditDocumentGetQueryVariables,
  UEditDocumentSaveGQL
} from '../../../__generated/user-gql-services';
import { Subject, Subscription } from 'rxjs';

import { filter, map, tap } from 'rxjs/operators';
import { RoutingHistoryService } from '../../../core/routing-history.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../../../components/confirm-delete-dialog.component';
import { DocumentTags } from '../../feed/feed-card/document-tags';
import { ScriptEvaluatorService } from '../../../components/script-evaluation/script-evaluator/script-evaluator.service';
import { ScriptEvaluatorConsoleLogComponent } from '../../../components/script-evaluation/script-evaluator-console-log/script-evaluator-console-log.component';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDocumentComponent implements OnInit, OnDestroy {
  documentId: string;
  documentSetInput: DocumentSetInput;

  doc: UEditDocFragment;
  docTags: DocumentTags;
  scriptEvaluatorEnabled = false;
  loading$ = new Subject<boolean>();

  monacoOptions = { theme: 'vs-light', language: 'javascript' };
  @ViewChild(ScriptEvaluatorConsoleLogComponent) scriptConsole: ScriptEvaluatorConsoleLogComponent;
  private userQueryRef: QueryRef<UEditDocumentGetQuery, UEditDocumentGetQueryVariables>;
  private subscriptions: Subscription[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly activeRoute: ActivatedRoute,
    private readonly getEditDocument: UEditDocumentGetGQL,
    private readonly saveDocumentMutation: UEditDocumentSaveGQL,
    private readonly addDocumentMutation: UEditDocumentAddGQL,
    private readonly deleteDocumentMutation: UDeleteDocumentGQL,
    private readonly router: Router,
    private readonly historyService: RoutingHistoryService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly snackBar: MatSnackBar,
    private readonly translate: TranslateService,
    private readonly dialog: MatDialog,
    private readonly scriptEvaluatorService: ScriptEvaluatorService
  ) {}

  get isNewDocument(): boolean {
    return !this.documentId;
  }

  get canSave() {
    if (!this.documentSetInput?.content.length || !this.documentSetInput.title.length) {
      return false;
    }
    if (this.doc) {
      return (
        this.documentSetInput.title !== this.doc.title ||
        this.documentSetInput.content !== this.doc.content ||
        this.documentSetInput.allowComments !== this.doc.allowComments ||
        this.documentSetInput.isPublic !== this.doc.isPublic
      );
    }
    return true;
  }

  async ngOnInit(): Promise<void> {
    this.loading$.next(true);
    this.documentId = this.activeRoute.snapshot.paramMap.get('id');
    const authState = await this.authService.waitUntilLoggedIn();

    if (this.documentId) {
      this.userQueryRef = this.getEditDocument.watch(
        {
          authorId: authState.userId,
          documentId: this.documentId
        },
        {
          useInitialLoading: true
        }
      );

      const sub = this.userQueryRef.valueChanges
        .pipe(
          tap(res => setTimeout(() => this.loading$.next(res.loading))),
          filter(res => !!res.data),
          map(res => res.data.document)
        )
        .subscribe(doc => {
          this.doc = doc;
          this.setDocumentInput(doc);
        });

      this.subscriptions.push(sub);
    } else {
      this.setDefaultDocumentInput();
      this.changeDetectorRef.detectChanges();
    }
  }

  saveDocument() {
    const scriptTestResults = this.scriptEvaluatorService.testScript(this.documentSetInput.content);
    this.docTags.validJs = scriptTestResults.valid;
    this.documentSetInput.tags = this.docTags.toString();
    if (this.doc) {
      // update
      this.saveDocumentMutation
        .mutate({
          documentId: this.doc.id,
          documentInput: this.documentSetInput
        })
        .toPromise()
        .then(res => {
          console.log('updated document', res);
        });
    } else {
      // create new
      this.addDocumentMutation
        .mutate({
          newDocument: {
            ...this.documentSetInput
          }
        })
        .toPromise()
        .then(res => {
          const id = res.data?.addDocument?.returning?.[0]?.id;
          if (id) {
            this.documentId = id;
          }
          this.navigateBack();
        });
    }
    this.doc = {
      ...this.doc,
      ...this.documentSetInput
    };

    this.showSnackBar('edit.savedDocumentSnack').then();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }

  reset() {
    if (this.doc) {
      this.setDocumentInput(this.doc);
    } else {
      this.setDefaultDocumentInput();
    }
  }

  navigateBack() {
    const prevRoute = this.historyService.previousRoute;
    if (prevRoute) {
      this.router.navigate([prevRoute]);
    } else {
      this.router.navigate(['/feed', 'my-documents']);
    }
  }

  async deleteDocument() {
    const documentTranslated = await this.translate.get('common.document').toPromise();
    const shouldDelete = await this.dialog
      .open(ConfirmDeleteDialogComponent, { data: { subject: documentTranslated } })
      .afterClosed()
      .toPromise();
    if (shouldDelete) {
      this.deleteDocumentMutation
        .mutate({ documentId: this.documentId })
        .toPromise()
        .then(() => {
          this.showSnackBar('edit.successfullyDeleted').then();
          this.navigateBack();
        })
        .catch(() => {
          this.showSnackBar('edit.deleteFailed').then();
        });
    }
  }

  runScript() {
    this.scriptConsole?.runScript();
  }

  private setDefaultDocumentInput() {
    this.documentSetInput = {
      allowComments: true,
      isPublic: false,
      title: '',
      content: '',
      tags: ''
    };
    this.docTags = new DocumentTags('');
  }

  private setDocumentInput(doc: UEditDocFragment) {
    this.documentSetInput = {
      allowComments: doc.allowComments,
      content: doc.content,
      isPublic: doc.isPublic,
      title: doc.title,
      tags: doc.tags
    };
    this.docTags = new DocumentTags(doc.tags);
    this.scriptEvaluatorEnabled = this.docTags.validJs;
  }

  private async showSnackBar(mainText: string) {
    const savedDocumentSnackTranslated = await this.translate.get(mainText).toPromise();
    const closeTranslated = await this.translate.get('common.close').toPromise();
    this.snackBar.open(savedDocumentSnackTranslated, closeTranslated, {
      duration: 1000 * 5,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
