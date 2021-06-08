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
  UEditDocumentSaveGQL,
} from '../../../__generated/user-gql-services';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

import { filter, map, tap } from 'rxjs/operators';
import { RoutingHistoryService } from '../../../core/routing-history.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../../../components/confirm-delete-dialog.component';
import { DocumentTags } from '../../feed/feed-card/document-tags';
import { ScriptEvaluatorService } from '../../../components/script-evaluation/script-evaluator/script-evaluator.service';
import { ScriptEvaluatorConsoleLogComponent } from '../../../components/script-evaluation/script-evaluator-console-log/script-evaluator-console-log.component';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Platform } from '@angular/cdk/platform';
import { editor } from 'monaco-editor';
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDocumentComponent implements OnInit, OnDestroy {

  readonly availableMonacoLanguages = ['abap', 'apex', 'azcli', 'bat', 'cameligo', 'clojure', 'coffee', 'cpp', 'csharp', 'csp', 'css', 'dart', 'dockerfile', 'ecl', 'fillers', 'fsharp', 'go', 'graphql', 'handlebars', 'hcl', 'html', 'ini', 'java', 'javascript', 'julia', 'kotlin', 'less', 'lexon', 'lua', 'm3', 'markdown', 'mips', 'msdax', 'mysql', 'objective-c', 'pascal', 'pascaligo', 'perl', 'pgsql', 'php', 'postiats', 'powerquery', 'powershell', 'pug', 'python', 'r', 'razor', 'redis', 'redshift', 'restructuredtext', 'ruby', 'rust', 'sb', 'scala', 'scheme', 'scss', 'shell', 'solidity', 'sophia', 'sql', 'st', 'swift', 'systemverilog', 'tcl', 'test', 'text', 'twig', 'typescript', 'vb', 'xml', 'yaml'];
  readonly favoriteMonacoLanguages = ['text', 'javascript', 'typescript', 'java', 'csharp', 'html'];


  documentId: string;
  documentSetInput: DocumentSetInput;

  doc: UEditDocFragment;
  docTags: DocumentTags;
  scriptEvaluatorEnabled = false;
  loading$ = new Subject<boolean>();
  codeSelectionAsString = '';

  monacoOptions = new BehaviorSubject({ theme: 'vs-light', language: 'text' });
  @ViewChild(ScriptEvaluatorConsoleLogComponent) scriptConsole: ScriptEvaluatorConsoleLogComponent;
  private userQueryRef: QueryRef<UEditDocumentGetQuery, UEditDocumentGetQueryVariables>;
  private subscriptions: Subscription[] = [];

  private editor: IStandaloneCodeEditor;

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
    private readonly scriptEvaluatorService: ScriptEvaluatorService,
    private readonly platform: Platform,
    private readonly cdRef: ChangeDetectorRef,
  ) {
  }

  get isNewDocument(): boolean {
    return !this.documentId;
  }

  get isMobile(): boolean {
    return this.platform.ANDROID || this.platform.IOS;
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
        this.documentSetInput.isPublic !== this.doc.isPublic ||
        this.documentSetInput.language !== this.doc.language
      );
    }
    return true;
  }

  async ngOnInit(): Promise<void> {
    this.registerShortcutSaveListener();
    this.loading$.next(true);
    this.documentId = this.activeRoute.snapshot.paramMap.get('id');
    const authState = await this.authService.waitUntilLoggedIn();

    if (this.documentId) {
      this.userQueryRef = this.getEditDocument.watch(
        {
          authorId: authState.userId,
          documentId: this.documentId,
        },
        {
          useInitialLoading: true,
        },
      );

      const sub = this.userQueryRef.valueChanges
        .pipe(
          tap(res => setTimeout(() => this.loading$.next(res.loading))),
          filter(res => !!res.data),
          map(res => res.data.document),
        )
        .subscribe(doc => {
          this.doc = doc;
          this.updateEditorLanguage(doc.language);
          this.setDocumentInput(doc);
        });

      this.subscriptions.push(sub);
    } else {
      this.setDefaultDocumentInput();
      this.changeDetectorRef.detectChanges();
    }
  }

  readonly shortcutSaveListener = (event: KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      switch (event.key.toLowerCase()) {
        case 's':
          event.preventDefault();
          this.saveDocument();
          this.cdRef.markForCheck();
          break;
      }
    }
  }

  private registerShortcutSaveListener() {
    window.addEventListener('keydown', this.shortcutSaveListener);
  }

  private unRegisterShortcutSaveListener() {
    window.removeEventListener('keydown', this.shortcutSaveListener);
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
          documentInput: this.documentSetInput,
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
            ...this.documentSetInput,
          },
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
      ...this.documentSetInput,
    };

    this.showSnackBar('edit.savedDocumentSnack').then();
  }

  ngOnDestroy(): void {
    this.unRegisterShortcutSaveListener();
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }

  reset() {
    if (this.doc) {
      this.setDocumentInput(this.doc);
      this.updateEditorLanguage(this.doc.language);
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

  updateEditorLanguage(language?: string) {
    if (this.documentSetInput) {
      this.documentSetInput.language = language;
    }

    const defaultLang = this.docTags?.validJs ? 'javascript' : 'text';
    language = language || defaultLang;

    this.monacoOptions.next({
      ...this.monacoOptions.value,
      language,
    });
  }

  private setDefaultDocumentInput() {
    this.documentSetInput = {
      allowComments: true,
      isPublic: false,
      title: '',
      content: '',
      tags: '',
    };
    this.docTags = new DocumentTags('');
  }

  private setDocumentInput(doc: UEditDocFragment) {
    this.documentSetInput = {
      allowComments: doc.allowComments,
      content: doc.content,
      isPublic: doc.isPublic,
      title: doc.title,
      tags: doc.tags,
      language: doc.language,
    };
    this.docTags = new DocumentTags(doc.tags);
    this.scriptEvaluatorEnabled = this.docTags.validJs;
    if (this.scriptEvaluatorEnabled && !this.doc.language && !this.documentSetInput.language) {
      this.updateEditorLanguage('javascript');
    }
  }

  private async showSnackBar(mainText: string, panelClass = '') {
    const savedDocumentSnackTranslated = await this.translate.get(mainText).toPromise();
    const closeTranslated = await this.translate.get('common.ok').toPromise();
    this.snackBar.open(savedDocumentSnackTranslated, closeTranslated, {
      duration: 1000 * 5,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass
    });
  }

  toggleScriptEvaluatorEnabled(event: MatCheckboxChange) {
    if ((!this.documentSetInput.language || this.documentSetInput.language === 'text') && event.checked) {
      this.updateEditorLanguage('javascript');
    } else if (!event.checked && !this.doc.language) {
      this.updateEditorLanguage('text');
    }
  }

  onSelectRange() {
    const selection = this.editor?.getSelection();
    this.codeSelectionAsString = selection?.toString();
  }

  initMonacoEditor(monacoEditor: IStandaloneCodeEditor) {
    this.editor = monacoEditor;
  }

  get hasMonaco(): boolean {
    return !!this.editor;
  }

  onCopiedSelection(success: boolean) {
    if (success) {
      this.showSnackBar('edit.copiedToClipboard');
    } else {
      this.showSnackBar('edit.copiedToClipboardFailed', 'error');
    }
  }
}
