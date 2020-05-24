import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import {
  ACommentSectionCommentFragment,
  ACommentSectionCommentsGQL,
  ACommentSectionCommentsQuery,
  ACommentSectionCommentsQueryVariables
} from '../../../__generated/anonymous-gql-services';
import {
  UAddCommentGQL,
  UCommentSectionAddCommentReactionGQL,
  UCommentSectionCommentFragment,
  UCommentSectionCommentsGQL,
  UCommentSectionCommentsQuery,
  UCommentSectionCommentsQueryVariables,
  UCommentSectionRemoveCommentReactionGQL, URemoveCommentGQL
} from '../../../__generated/user-gql-services';
import { QueryRef } from 'apollo-angular';
import { map, mergeMap } from 'rxjs/operators';
import { iif, Observable } from 'rxjs';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentSectionComponent implements OnInit {

  private docId: string;
  private limit = 5;
  private offset = 0;

  @Input()
  set documentId(id: string) {
    this.docId = id;
  }

  get documentId() {
    return this.docId;
  }

  @Input()
  countComments: number;

  userQueryRef: QueryRef<UCommentSectionCommentsQuery, UCommentSectionCommentsQueryVariables>;
  anonymousQueryRef: QueryRef<ACommentSectionCommentsQuery, ACommentSectionCommentsQueryVariables>;

  comments$: Observable<UCommentSectionCommentFragment[] | ACommentSectionCommentFragment[]>;

  constructor(
    private readonly aCommentsQuery: ACommentSectionCommentsGQL,
    private readonly uCommentsQuery: UCommentSectionCommentsGQL,
    private readonly addCommentReactionGQL: UCommentSectionAddCommentReactionGQL,
    private readonly removeCommentReactionGQL: UCommentSectionRemoveCommentReactionGQL,
    private readonly addComment: UAddCommentGQL,
    private readonly removeComment: URemoveCommentGQL,
    readonly authService: AuthService
  ) {
  }

  ngOnInit(): void {
    const getUserComments = () => {
      this.userQueryRef = this.uCommentsQuery.watch({
        authorId: this.authService.authState.value?.userId,
        documentId: this.docId,
        limit: this.limit,
        offset: this.offset
      }, { fetchResults: false });

      return this.userQueryRef.valueChanges.pipe(map(res => res.data?.allComments));
    };

    const getAnonymousComments = () => {
      this.anonymousQueryRef = this.aCommentsQuery.watch({
        documentId: this.docId,
        limit: this.limit,
        offset: this.offset
      }, { fetchResults: false });

      return this.anonymousQueryRef.valueChanges.pipe(map(res => res.data?.allComments));
    };

    this.comments$ = this.authService.authState.pipe(mergeMap(s => iif(() => s.state === 'in', getUserComments(), getAnonymousComments())));
  }

  get canLoadMore(): boolean {
    return this.offset + this.limit < this.countComments;
  }

  toggleReaction(commentId: string, reactionId: string) {
    if (!this.userQueryRef) {
      return;
    }
    this.userQueryRef.updateQuery(prev => {
      const allComments = prev.allComments;
      const prevComment = allComments.find(c => c.id === commentId);
      console.log('toggle for comment', prevComment);

      const gIndex = prevComment.reactionsGroup.findIndex(g => g.reactionid === reactionId);


      const rIndex = prevComment.myReactions.findIndex(r => r.reactionId === reactionId);
      const doAdd = rIndex === -1;

      if (doAdd) {
        prevComment.myReactions = [...prevComment.myReactions, { reactionId, __typename: 'comment_reaction' }];

        if (gIndex !== -1) {
          prevComment.reactionsGroup[gIndex].count++;
        } else {
          prevComment.reactionsGroup.push({ count: 1, reactionid: reactionId, __typename: 'comment_reactions_group' });
        }
      } else {
        prevComment.myReactions.splice(rIndex, 1);
        prevComment.myReactions = [...prevComment.myReactions];

        const newCount = --prevComment.reactionsGroup[gIndex].count;
        if (newCount <= 0) {
          prevComment.reactionsGroup.splice(gIndex, 1);
        }
      }

      prevComment.reactionsGroup = [...prevComment.reactionsGroup];

      // mutations
      if (doAdd) {
        this.addCommentReactionGQL.mutate({
          commentId,
          reactionId
        }).toPromise().then(res => console.log('added comment reaction', res))
          .catch(e => console.error('failed to add comment reaction', e));
      } else {
        this.removeCommentReactionGQL.mutate({
          commentId,
          reactionId
        }).toPromise().then(res => console.log('removed comment reaction', res))
          .catch(e => console.error('failed to remove comment reaction', e));
      }

      return {
        allComments: [...allComments]
      };
    });
  }

  loadMore() {
    const s = this.authService.authState.getValue();

    if (s.state === 'in') {
      this.offset += this.limit;
      this.userQueryRef.fetchMore({
        variables: {
          documentId: this.docId,
          authorId: s.userId,
          limit: this.limit,
          offset: this.offset
        },
        updateQuery: (prev, res) => {
          if (!res.fetchMoreResult) {
            return prev;
          }
          return {
            allComments: [...prev.allComments, ...res.fetchMoreResult.allComments]
          };
        }
      }).then();
    } else {
      this.anonymousQueryRef.fetchMore({
        variables: {
          documentId: this.docId,
          limit: this.limit,
          offset: this.offset
        },
        updateQuery: (prev, res) => {
          if (!res.fetchMoreResult) {
            return prev;
          }
          return {
            allComments: [...prev.allComments, ...res.fetchMoreResult.allComments]
          };
        }
      }).then();
    }
  }

  postComment(comment: string) {
    this.addComment.mutate({
      comment,
      documentId: this.docId
    }).toPromise()
      .then(res => {
        // update id of added comment in apollo cache
        const newCommentId = res.data?.addComment?.returning?.[0]?.id;
        if (newCommentId) {
          this.userQueryRef.updateQuery(prev => {
            const addedComment = prev.allComments.splice(0, 1)[0];
            return {
              allComments: [{
                ...addedComment,
                id: newCommentId
              }, ...prev.allComments]
            };
          });
        } else {
          console.error('failed to add comment', comment, res);
        }
      })
      .catch(err => console.error('failed to add comment', err));

    const newComment: UCommentSectionCommentFragment = {
      myReactions: [],
      reactionsGroup: [],
      author: {
        __typename: 'user',
        imageUrl: this.authService.authState?.value?.imageUrl,
        name: this.authService.authState?.value?.name,
        authId: this.authService.authState?.value.userId
      },
      createdAt: new Date(),
      comment,
      __typename: 'comment',
      reactionBalance: 0,
      id: ''
    };

    this.userQueryRef.updateQuery(prev => {
      return {
        allComments: [newComment, ...prev.allComments]
      };
    });
  }

  deleteComment(comment: UCommentSectionCommentFragment | ACommentSectionCommentFragment) {
    this.removeComment.mutate({
      commentId: comment.id
    }).toPromise().then(res => console.log('removed comment', comment, res))
      .catch(err => console.error('failed to remove comment', comment, err));

    this.userQueryRef.updateQuery(prev => {
      const removedIndex = prev.allComments.findIndex(c => c.id === comment.id);
      if (removedIndex >= 0) {
        prev.allComments.splice(removedIndex, 1);
      }
      return {
        allComments: [...prev.allComments]
      };
    });
  }

}
