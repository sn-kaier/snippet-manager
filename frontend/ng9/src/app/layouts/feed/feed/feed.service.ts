import { Injectable } from '@angular/core';
import { AFeedDocsGQL } from '../../../__generated/anonymous-gql-services';
import {
  Comment_Reaction_Insert_Input,
  Document_Reaction_Insert_Input,
  UAddDocumentReactionGQL,
  UFeedDocsGQL,
  URemoveDocumentReactionGQL
} from '../../../__generated/user-gql-services';
import { AuthService, AuthState } from '../../../core/auth.service';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private readonly aFeedDocsGQL: AFeedDocsGQL,
              private readonly uFeedDocsGQL: UFeedDocsGQL,
              private readonly authService: AuthService,
              private readonly uAddDocumentReactionGQL: UAddDocumentReactionGQL,
              private readonly uRemoveDocumentReactionGQL: URemoveDocumentReactionGQL,
              ) {
    this.authService.authState.pipe(filter(s => s.state !== 'pending')).subscribe(async (s: AuthState) => {
      this.offset = 0;
      if (s.state === 'in') {
        await this.userQueryRef.refetch({ authorId: s.userId, limit: this.limit, offset: 0 });
      } else {
        await this.anonymousQueryRef.refetch({ limit: this.limit, offset: 0 });
      }
    });
  }

  private readonly limit = 10;
  private offset = 0;

  readonly userQueryRef = this.uFeedDocsGQL.watch({ authorId: '', limit: this.limit, offset: 0 }, { fetchResults: false });
  readonly anonymousQueryRef = this.aFeedDocsGQL.watch({ limit: this.limit, offset: 0 }, { fetchResults: false });

  private requestsPerSecond = 0;

  fetchMore() {
    const s = this.authService.authState.getValue();
    if (s.state === 'in') {
      this.offset += this.limit;
      this.userQueryRef.fetchMore({
        variables: {
          authorId: s.userId,
          limit: this.limit,
          offset: this.offset
        },
        updateQuery: (prev, res) => {
          if (!res.fetchMoreResult) {
            return prev;
          }
          return Object.assign({}, prev, {
            allDocuments: [...prev.allDocuments, ...res.fetchMoreResult.allDocuments]
          });
        }
      }).then();
    } else {
      this.anonymousQueryRef.fetchMore({
        variables: {
          limit: this.limit,
          offset: this.offset
        },
        updateQuery: (prev, res) => {
          if (!res.fetchMoreResult) {
            return prev;
          }
          return Object.assign({}, prev, {
            allDocuments: [...prev.allDocuments, ...res.fetchMoreResult.allDocuments]
          });
        }
      }).then();
    }
  }

  toggleDocumentReaction(doc: Document_Reaction_Insert_Input) {

    this.userQueryRef.updateQuery(prev => {
      const docToUpdateIndex = prev.allDocuments.findIndex(docs => docs.id === doc.documentId);
      const docToUpdate = prev.allDocuments[docToUpdateIndex];

      const reactionsGroupIndex = docToUpdate.reactionsGroup.findIndex(g => g.reactionId === doc.reaction_id);
      const alreadyExists = reactionsGroupIndex !== -1;
      let isSelected = false;

      if (alreadyExists) {
        const reactionsIndex = docToUpdate.reactions.findIndex(r => r.reaction_id === doc.reaction_id);
        isSelected = reactionsIndex !== -1;
        const rGroup = docToUpdate.reactionsGroup[reactionsGroupIndex];

        if (isSelected) {
          // unselect:
          // decrement in reactionsGroup

          // remove from reactions
          docToUpdate.reactions.splice(reactionsIndex, 1);
          if (rGroup.count <= 1) {
            // remove group
            docToUpdate.reactionsGroup.splice(reactionsGroupIndex, 1);
            docToUpdate.reactionsGroup = [...docToUpdate.reactionsGroup];
          } else {
            // decrement
            rGroup.count--;
          }
        } else {
          // add to reactionsGroup and to selected
          docToUpdate.reactions.push({ id: '', reaction_id: doc.reaction_id, __typename: 'document_reaction' });
          rGroup.count++;
          docToUpdate.reactionsGroup = [...docToUpdate.reactionsGroup];
        }
      } else {
        // add new
        docToUpdate.reactions = [...docToUpdate.reactions, { id: '', reaction_id: doc.reaction_id, __typename: 'document_reaction' }];
        docToUpdate.reactionsGroup = [...docToUpdate.reactionsGroup, {
          count: 1,
          reactionId: doc.reaction_id,
          __typename: 'document_reaction_group_persisted'
        }];
      }

      if (isSelected) {
        this.uRemoveDocumentReactionGQL.mutate({documentId: doc.documentId, reactionId: doc.reaction_id}).toPromise()
          .then(res => console.log('removed document reaction', res))
          .catch(err => console.error('failed to remove document reaction', err));
      } else {
        this.uAddDocumentReactionGQL.mutate({
          documentReaction: doc
        }, {}).toPromise()
          .then(res => console.log('added document reaction', res))
          .catch(err => console.error('failed to add document reaction', err));
      }

      prev.allDocuments[docToUpdateIndex] = { ...docToUpdate };
      console.log('updated document reaction in userQueryRef', prev);
      return {
        allDocuments: [...prev.allDocuments]
      };
    });
  }

  addCommentReaction(documentId: string, commentReaction: Comment_Reaction_Insert_Input) {

  }

  private async testPerformance() {
    const s = await this.authService.waitUntilLoggedIn();

    let countRequest = 0;
    setInterval(() => {
      this.requestsPerSecond = countRequest;
      countRequest = 0;
    }, 1000);

    while (true) {
      await this.userQueryRef.fetchMore({
        variables: {
          offset: Math.floor(Math.random() * 1000),
          limit: this.limit,
          authorId: s.userId
        },
        updateQuery: prev => prev
      });
      countRequest++;
    }
  }

}
