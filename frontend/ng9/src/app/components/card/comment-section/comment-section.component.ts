import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import {
  ACommentSectionCommentFragment,
  ACommentSectionCommentsGQL,
  ACommentSectionCommentsQuery,
  ACommentSectionCommentsQueryVariables
} from '../../../__generated/anonymous-gql-services';
import {
  UCommentSectionCommentFragment,
  UCommentSectionCommentsGQL,
  UCommentSectionCommentsQuery,
  UCommentSectionCommentsQueryVariables
} from '../../../__generated/user-gql-services';
import { QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.less']
})
export class CommentSectionComponent implements OnInit {

  private docId: string;
  private limit = 10;
  private offset = 0;

  @Input()
  set documentId(id: string) {
    this.docId = id;
  }

  get documentId() {
    return this.docId;
  }

  userQueryRef: QueryRef<UCommentSectionCommentsQuery, UCommentSectionCommentsQueryVariables>;
  anonymousQueryRef: QueryRef<ACommentSectionCommentsQuery, ACommentSectionCommentsQueryVariables>;

  uComments$: Observable<UCommentSectionCommentFragment[]>;
  aComments$: Observable<ACommentSectionCommentFragment[]>;

  constructor(
    private readonly aCommentsQuery: ACommentSectionCommentsGQL,
    private readonly uCommentsQuery: UCommentSectionCommentsGQL,
    readonly authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.userQueryRef = this.uCommentsQuery.watch({
      authorId: this.authService.authState.value?.userId,
      documentId: this.docId,
      limit: this.limit,
      offset: this.offset
    }, { fetchResults: false });

    this.uComments$ = this.userQueryRef.valueChanges.pipe(map(res => res.data?.allComments));

    this.anonymousQueryRef = this.aCommentsQuery.watch({
      documentId: this.docId,
      limit: this.limit,
      offset: this.offset
    }, { fetchResults: false });

    this.aComments$ = this.anonymousQueryRef.valueChanges.pipe(map(res => res.data?.allComments));
  }

}
