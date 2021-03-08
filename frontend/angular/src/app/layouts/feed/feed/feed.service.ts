import { ApolloQueryResult } from '@apollo/client/core';
import { EventEmitter, Injectable } from '@angular/core';
import { AFeedDocsGQL, AFeedDocsQuery, ASearchFeedDocsGQL } from '../../../__generated/anonymous-gql-services';
import {
  DocumentBoolExp,
  DocumentReactionInsertInput,
  UAddDocumentReactionGQL,
  UChangeDocumentVisibilityGQL,
  UFeedDocsGQL,
  UFeedDocsQuery,
  URemoveDocumentReactionGQL,
  USearchFeedDocsGQL,
} from '../../../__generated/user-gql-services';
import { AuthService, AuthState } from '../../../core/auth/auth.service';
import { debounceTime, filter, withLatestFrom } from 'rxjs/operators';
import { SearchService } from '../../../core/search.service';

import { BehaviorSubject, Subscription } from 'rxjs';
import { NavBarService } from '../../nav-bar/nav-bar.service';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private readonly limit = 10;
  private offset = 0;
  private filter: DocumentBoolExp = {};
  private searchText = '';

  private readonly userQueryRef = this.uFeedDocsGQL.watch(
    {
      authorId: '',
      limit: this.limit,
      offset: 0,
      filter: this.filter,
    },
    { useInitialLoading: true },
  );
  private readonly anonymousQueryRef = this.aFeedDocsGQL.watch(
    { limit: this.limit, offset: 0 },
    { useInitialLoading: true },
  );

  private readonly userSearchQueryRef = this.uSearchFeedDocsGQL.watch(
    {
      authorId: '',
      limit: this.limit,
      offset: 0,
      filter: this.filter,
      search: '',
    },
    { useInitialLoading: true },
  );
  private readonly anonymousSearchQueryRef = this.aSearchFeedDocsGQL.watch(
    { limit: this.limit, offset: 0, search: '' },
    { useInitialLoading: true },
  );

  private requestsPerSecond = 0;

  private feedSubject$ = new BehaviorSubject<ApolloQueryResult<UFeedDocsQuery> | ApolloQueryResult<AFeedDocsQuery>>({
    loading: true,
  } as any);
  private feedSubscription: Subscription;
  feed$ = this.feedSubject$.asObservable();
  secondaryLoading$ = new EventEmitter<boolean>();

  constructor(
    private readonly aFeedDocsGQL: AFeedDocsGQL,
    private readonly aSearchFeedDocsGQL: ASearchFeedDocsGQL,
    private readonly uFeedDocsGQL: UFeedDocsGQL,
    private readonly uSearchFeedDocsGQL: USearchFeedDocsGQL,
    private readonly authService: AuthService,
    private readonly uAddDocumentReactionGQL: UAddDocumentReactionGQL,
    private readonly uRemoveDocumentReactionGQL: URemoveDocumentReactionGQL,
    private readonly uChangeDocumentVisibility: UChangeDocumentVisibilityGQL,
    private readonly searchService: SearchService,
    private readonly navBarService: NavBarService,
  ) {
    this.navBarService.triggerReload
      .pipe(
        withLatestFrom(this.authService.authState),
        filter(([_, s]) => s.state !== 'pending'),
      )
      .subscribe(async ([_, authState]) => {
        await this.refetch(authState);
      });
    this.authService.authState.pipe(filter(s => s.state !== 'pending')).subscribe(async (s: AuthState) => {
      await this.refetch(s);
    });
    this.searchService.onSearch.pipe(debounceTime(200)).subscribe(async searchTerm => {
      this.searchText = searchTerm;
      await this.refetch(this.authService.authState.value);
    });
  }

  async configure({ onlyMyDocuments = false }: { onlyMyDocuments: boolean }) {
    const authState = await this.authService.waitUntilLoggedIn();
    if (onlyMyDocuments) {
      this.filter = {
        ...this.filter,
        authorId: {
          _eq: authState.userId,
        },
      };
    } else {
      this.filter = {};
    }
    await this.refetch(authState);
  }

  private async refetch(s: AuthState) {
    this.offset = 0;
    setTimeout(() => {
      this.secondaryLoading$.emit(true);
    });
    if (this.feedSubscription) {
      this.feedSubscription.unsubscribe();
    }
    if (s.state === 'in') {
      if (this.searchText) {
        this.feedSubscription = this.userSearchQueryRef.valueChanges.subscribe(this.feedSubject$);
        await this.userSearchQueryRef.refetch({
          authorId: s.userId,
          limit: this.limit,
          offset: 0,
          filter: this.filter,
          search: this.searchText,
        });
      } else {
        this.feedSubscription = this.userQueryRef.valueChanges.subscribe(this.feedSubject$);
        await this.userQueryRef.refetch({
          authorId: s.userId,
          limit: this.limit,
          offset: 0,
          filter: this.filter,
        });
      }
    } else {
      if (this.searchText) {
        this.feedSubscription = this.anonymousSearchQueryRef.valueChanges.subscribe(this.feedSubject$);
        await this.anonymousSearchQueryRef.refetch({
          limit: this.limit,
          offset: 0,
          filter: this.filter,
          search: this.searchText,
        });
      } else {
        this.feedSubscription = this.anonymousQueryRef.valueChanges.subscribe(this.feedSubject$);
        await this.anonymousQueryRef.setVariables({
          limit: this.limit,
          offset: 0,
          filter: this.filter,
        });
      }
    }

    setTimeout(() => {
      this.secondaryLoading$.emit(false);
    });
  }

  fetchMore() {
    const s = this.authService.authState.getValue();
    this.offset += this.limit;

    const variables: any = {
      limit: this.limit,
      offset: this.offset,
      filter: this.filter,
    };
    if (this.searchText) {
      variables.search = this.searchText;
    }
    if (s.state === 'in') {
      variables.authorId = s.userId;
    }

    const queryRef =
      s.state === 'in'
        ? this.searchText
        ? this.userSearchQueryRef
        : this.userQueryRef
        : this.searchText
        ? this.anonymousSearchQueryRef
        : this.anonymousQueryRef;

    queryRef
      .fetchMore({
        variables,
        updateQuery: (prev, res) => {
          if (!res.fetchMoreResult) {
            return prev;
          }
          return {
            ...prev,
            allDocuments: [...prev.allDocuments, ...res.fetchMoreResult.allDocuments],
          };
        },
      })
      .then();
  }

  toggleDocumentReaction(doc: DocumentReactionInsertInput) {
    (this.searchText ? this.userSearchQueryRef : this.userQueryRef).updateQuery(prev => {
      const docToUpdateIndex = prev.allDocuments.findIndex(docs => docs.id === doc.documentId);
      const docI = prev.allDocuments[docToUpdateIndex];
      const docToUpdate = { ...docI, reactionsGroup: [...docI.reactionsGroup], reactions: [...docI.reactions]};

      const reactionsGroupIndex = docToUpdate.reactionsGroup.findIndex(g => g.reactionid === doc.reactionId);
      const alreadyExists = reactionsGroupIndex !== -1;
      let isSelected = false;

      if (alreadyExists) {
        const reactionsIndex = docToUpdate.reactions.findIndex(r => r.reactionId === doc.reactionId);
        isSelected = reactionsIndex !== -1;
        const rGroup = { ...docToUpdate.reactionsGroup[reactionsGroupIndex] };
        docToUpdate.reactionsGroup[reactionsGroupIndex] = rGroup;

        if (isSelected) {
          // unselect:
          // decrement in reactionsGroup

          // remove from reactions
          docToUpdate.reactions.splice(reactionsIndex, 1);
          if (rGroup.count <= 1) {
            // remove group
            docToUpdate.reactionsGroup.splice(reactionsGroupIndex, 1);
          } else {
            rGroup.count--;
          }
        } else {
          // add to reactionsGroup and to selected
          docToUpdate.reactions.push({ reactionId: doc.reactionId, __typename: 'document_reaction' });
          rGroup.count++;
        }
      } else {
        // add new
        docToUpdate.reactions.push({
          reactionId: doc.reactionId,
          __typename: 'document_reaction',
        });

        docToUpdate.reactionsGroup.push({
          count: 1,
          reactionid: doc.reactionId,
          __typename: 'document_reaction_group_persisted',
        });
      }

      if (isSelected) {
        this.uRemoveDocumentReactionGQL
          .mutate({ documentId: doc.documentId, reactionId: doc.reactionId })
          .toPromise()
          .then(res => console.log('removed document reaction', res))
          .catch(err => console.error('failed to remove document reaction', err));
      } else {
        this.uAddDocumentReactionGQL
          .mutate(
            {
              documentReaction: doc,
            },
            {},
          )
          .toPromise()
          .then(res => console.log('added document reaction', res))
          .catch(err => console.error('failed to add document reaction', err));
      }

      const allDocuments = [...prev.allDocuments];
      allDocuments[docToUpdateIndex] = docToUpdate;
      console.log('updated document reaction in userQueryRef', docToUpdate);
      return {
        ...prev,
        allDocuments,
      };
    });
  }

  changeDocumentVisibility(documentId: string, isPublic: boolean) {
    this.uChangeDocumentVisibility
      .mutate({
        isPublic,
        documentId,
      })
      .toPromise()
      .then(res => {
        console.log('updated visibility of document', res);
      })
      .catch(err => {
        console.warn('failed do update visibility of document', err);
      });

    // update apollo store
    (this.searchText ? this.userSearchQueryRef : this.userQueryRef).updateQuery(prev => {
      const allDocuments = [...prev.allDocuments];
      const docIndex = allDocuments.findIndex(d => d.id === documentId);
      if (docIndex >= 0) {
        allDocuments[docIndex] = {
          ...allDocuments[docIndex],
          isPublic,
        };
      }
      return {
        ...prev,
        allDocuments,
      };
    });
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
          authorId: s.userId,
        },
        updateQuery: prev => prev,
      });
      countRequest++;
    }
  }
}
