import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import {
  DocumentSetInput,
  UEditDocFragment,
  UEditDocumentAddGQL,
  UEditDocumentGetGQL,
  UEditDocumentGetQuery,
  UEditDocumentGetQueryVariables,
  UEditDocumentSaveGQL
} from '../../../__generated/user-gql-services';
import { Subject, Subscription } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent implements OnInit, OnDestroy {
  documentId: string;
  documentSetInput: DocumentSetInput;

  doc: UEditDocFragment;
  loading$ = new Subject<boolean>();
  private userQueryRef: QueryRef<UEditDocumentGetQuery, UEditDocumentGetQueryVariables>;
  private subscriptions: Subscription[] = [];

  constructor(private readonly authService: AuthService,
              private readonly activeRoute: ActivatedRoute,
              private readonly getEditDocument: UEditDocumentGetGQL,
              private readonly saveDocumentMutation: UEditDocumentSaveGQL,
              private readonly addDocumentMutation: UEditDocumentAddGQL
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.loading$.next(true);
    this.documentId = this.activeRoute.snapshot.paramMap.get('id');
    const authState = await this.authService.waitUntilLoggedIn();

    if (this.documentId) {
      this.userQueryRef = this.getEditDocument.watch({
        authorId: authState.userId,
        documentId: this.documentId
      }, {
        useInitialLoading: true,
        fetchResults: false
      });

      const sub = this.userQueryRef.valueChanges.pipe(
        tap(res => setTimeout(() => this.loading$.next(res.loading))),
        filter(res => !!res.data),
        map(res => res.data.document)
      ).subscribe(doc => {
        this.doc = doc;
        this.setDocumentInput(doc);
      });

      this.subscriptions.push(sub);
    } else {
      this.setDefaultDocumentInput();
    }
  }

  private setDefaultDocumentInput() {
    this.documentSetInput = {
      allowComments: true,
      isPublic: false,
      title: '',
      description: ''
    };
  }

  private setDocumentInput(doc: UEditDocFragment) {
    this.documentSetInput = {
      allowComments: doc.allowComments,
      description: doc.description,
      isPublic: doc.isPublic,
      title: doc.title
    };
  }

  saveDocument() {
    if (this.doc) {
      // update
      this.saveDocumentMutation.mutate({
        documentId: this.doc.id,
        documentInput: this.documentSetInput
      }).toPromise().then(res => {
        console.log('updated document', res);
      });
    } else {
      // create new
      this.addDocumentMutation.mutate({
        newDocument: {
          ...this.documentSetInput
        }
      }).toPromise()
        .then(res => {
          const id = res.data?.addDocument?.returning?.[0]?.id;
          if (id) {
            this.documentId = id;
          }
        });
    }
    this.doc = {
      ...this.doc,
      ...this.documentSetInput
    };
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }

  get canSave() {
    if (!this.documentSetInput.description.length || !this.documentSetInput.title.length) {
      return false;
    }
    if (this.doc) {
      return this.documentSetInput.title !== this.doc.title ||
        this.documentSetInput.description !== this.doc.description;
    }
    return true;
  }

  reset() {
    if (this.doc) {
      this.setDocumentInput(this.doc);
    } else {
      this.setDefaultDocumentInput();
    }
  }
}
