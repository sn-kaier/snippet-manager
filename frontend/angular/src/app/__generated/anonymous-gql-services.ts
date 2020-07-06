import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  timestamptz: any;
  uuid: any;
};



/** columns and relationships of "color" */
export type Color = {
  __typename?: 'color';
  color: Scalars['String'];
  name: Scalars['String'];
};

/** columns and relationships of "comment" */
export type Comment = {
  __typename?: 'comment';
  /** An object relationship */
  author: User;
  authorId: Scalars['String'];
  comment: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  document: Document;
  documentId: Scalars['uuid'];
  id: Scalars['uuid'];
  reactionBalance: Scalars['Int'];
  /** An array relationship */
  reactions: Array<CommentReaction>;
  /** An array relationship */
  reactionsGroup: Array<CommentReactionsGroup>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "comment" */
export type CommentReactionsArgs = {
  distinct_on?: Maybe<Array<CommentReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentReactionOrderBy>>;
  where?: Maybe<CommentReactionBoolExp>;
};


/** columns and relationships of "comment" */
export type CommentReactionsGroupArgs = {
  distinct_on?: Maybe<Array<CommentReactionsGroupSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentReactionsGroupOrderBy>>;
  where?: Maybe<CommentReactionsGroupBoolExp>;
};

/** columns and relationships of "comment_reaction" */
export type CommentReaction = {
  __typename?: 'comment_reaction';
  /** An object relationship */
  author: User;
  authorId: Scalars['String'];
  /** An object relationship */
  comment: Comment;
  commentId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  reaction: Reaction;
};

/** columns and relationships of "comment_reactions_group" */
export type CommentReactionsGroup = {
  __typename?: 'comment_reactions_group';
  count?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
};

/** columns and relationships of "document" */
export type Document = {
  __typename?: 'document';
  allowComments: Scalars['Boolean'];
  /** An object relationship */
  author: User;
  authorId: Scalars['String'];
  /** An array relationship */
  comments: Array<Comment>;
  content: Scalars['String'];
  countComments: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isPublic: Scalars['Boolean'];
  /** An array relationship */
  labels: Array<DocumentLabel>;
  reactionBalance: Scalars['Int'];
  /** An array relationship */
  reactions: Array<DocumentReaction>;
  /** An array relationship */
  reactionsGroup: Array<DocumentReactionGroupPersisted>;
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "document" */
export type DocumentCommentsArgs = {
  distinct_on?: Maybe<Array<CommentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentOrderBy>>;
  where?: Maybe<CommentBoolExp>;
};


/** columns and relationships of "document" */
export type DocumentLabelsArgs = {
  distinct_on?: Maybe<Array<DocumentLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentLabelOrderBy>>;
  where?: Maybe<DocumentLabelBoolExp>;
};


/** columns and relationships of "document" */
export type DocumentReactionsArgs = {
  distinct_on?: Maybe<Array<DocumentReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentReactionOrderBy>>;
  where?: Maybe<DocumentReactionBoolExp>;
};


/** columns and relationships of "document" */
export type DocumentReactionsGroupArgs = {
  distinct_on?: Maybe<Array<DocumentReactionGroupPersistedSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentReactionGroupPersistedOrderBy>>;
  where?: Maybe<DocumentReactionGroupPersistedBoolExp>;
};

/** columns and relationships of "document_label" */
export type DocumentLabel = {
  __typename?: 'document_label';
  /** An object relationship */
  author: User;
  /** An object relationship */
  document: Document;
  /** An object relationship */
  label: Label;
  labelId: Scalars['uuid'];
};

/** columns and relationships of "document_reaction" */
export type DocumentReaction = {
  __typename?: 'document_reaction';
  authorId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  document: Document;
  documentId: Scalars['uuid'];
  /** An object relationship */
  reaction: Reaction;
  reactionId: Scalars['String'];
};

/** columns and relationships of "document_reaction_group" */
export type DocumentReactionGroup = {
  __typename?: 'document_reaction_group';
  count?: Maybe<Scalars['bigint']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/**
 * persisted version of the document_reaction_group
 * 
 * 
 * columns and relationships of "document_reaction_group_persisted"
 */
export type DocumentReactionGroupPersisted = {
  __typename?: 'document_reaction_group_persisted';
  count: Scalars['Int'];
  reactionid: Scalars['String'];
};

/** columns and relationships of "label" */
export type Label = {
  __typename?: 'label';
  /** An object relationship */
  author: User;
  /** An object relationship */
  color: Color;
  colorName: Scalars['String'];
  /** An array relationship */
  document_labels: Array<DocumentLabel>;
  label: Scalars['String'];
};


/** columns and relationships of "label" */
export type LabelDocumentLabelsArgs = {
  distinct_on?: Maybe<Array<DocumentLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentLabelOrderBy>>;
  where?: Maybe<DocumentLabelBoolExp>;
};

/** query root */
export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "color" */
  allColors: Array<Color>;
  /** fetch data from the table: "comment_reaction" */
  allCommentReactions: Array<CommentReaction>;
  /** fetch data from the table: "comment" */
  allComments: Array<Comment>;
  /** fetch data from the table: "document_label" */
  allDocumentLabels: Array<DocumentLabel>;
  /** fetch data from the table: "document_reaction" */
  allDocumentReactions: Array<DocumentReaction>;
  /** fetch data from the table: "document" */
  allDocuments: Array<Document>;
  /** fetch data from the table: "label" */
  allLabels: Array<Label>;
  /** fetch data from the table: "reaction" */
  allReactions: Array<Reaction>;
  /** fetch data from the table: "user" */
  allUsers: Array<User>;
  /** fetch data from the table: "color" using primary key columns */
  color?: Maybe<Color>;
  /** fetch data from the table: "comment" using primary key columns */
  comment?: Maybe<Comment>;
  /** fetch data from the table: "comment_reaction" using primary key columns */
  commentReaction?: Maybe<CommentReaction>;
  /** fetch data from the table: "comment_reactions_group" */
  comment_reactions_group: Array<CommentReactionsGroup>;
  /** fetch data from the table: "document" using primary key columns */
  document?: Maybe<Document>;
  /** fetch data from the table: "document_label" using primary key columns */
  documentLabel?: Maybe<DocumentLabel>;
  /** fetch data from the table: "document_reaction" using primary key columns */
  documentReactino?: Maybe<DocumentReaction>;
  /** fetch data from the table: "document_reaction_group" */
  document_reaction_group: Array<DocumentReactionGroup>;
  /** fetch data from the table: "document_reaction_group_persisted" */
  document_reaction_group_persisted: Array<DocumentReactionGroupPersisted>;
  /** fetch data from the table: "document_reaction_group_persisted" using primary key columns */
  document_reaction_group_persisted_by_pk?: Maybe<DocumentReactionGroupPersisted>;
  /** fetch data from the table: "label" using primary key columns */
  label?: Maybe<Label>;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction?: Maybe<Reaction>;
  /** execute function "search_documents" which returns "document" */
  search_documents: Array<Document>;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
};


/** query root */
export type QueryRootAllColorsArgs = {
  distinct_on?: Maybe<Array<ColorSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ColorOrderBy>>;
  where?: Maybe<ColorBoolExp>;
};


/** query root */
export type QueryRootAllCommentReactionsArgs = {
  distinct_on?: Maybe<Array<CommentReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentReactionOrderBy>>;
  where?: Maybe<CommentReactionBoolExp>;
};


/** query root */
export type QueryRootAllCommentsArgs = {
  distinct_on?: Maybe<Array<CommentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentOrderBy>>;
  where?: Maybe<CommentBoolExp>;
};


/** query root */
export type QueryRootAllDocumentLabelsArgs = {
  distinct_on?: Maybe<Array<DocumentLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentLabelOrderBy>>;
  where?: Maybe<DocumentLabelBoolExp>;
};


/** query root */
export type QueryRootAllDocumentReactionsArgs = {
  distinct_on?: Maybe<Array<DocumentReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentReactionOrderBy>>;
  where?: Maybe<DocumentReactionBoolExp>;
};


/** query root */
export type QueryRootAllDocumentsArgs = {
  distinct_on?: Maybe<Array<DocumentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentOrderBy>>;
  where?: Maybe<DocumentBoolExp>;
};


/** query root */
export type QueryRootAllLabelsArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};


/** query root */
export type QueryRootAllReactionsArgs = {
  distinct_on?: Maybe<Array<ReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ReactionOrderBy>>;
  where?: Maybe<ReactionBoolExp>;
};


/** query root */
export type QueryRootAllUsersArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};


/** query root */
export type QueryRootColorArgs = {
  name: Scalars['String'];
};


/** query root */
export type QueryRootCommentArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootCommentReactionArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootCommentReactionsGroupArgs = {
  distinct_on?: Maybe<Array<CommentReactionsGroupSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentReactionsGroupOrderBy>>;
  where?: Maybe<CommentReactionsGroupBoolExp>;
};


/** query root */
export type QueryRootDocumentArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootDocumentLabelArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootDocumentReactinoArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootDocumentReactionGroupArgs = {
  distinct_on?: Maybe<Array<DocumentReactionGroupSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentReactionGroupOrderBy>>;
  where?: Maybe<DocumentReactionGroupBoolExp>;
};


/** query root */
export type QueryRootDocumentReactionGroupPersistedArgs = {
  distinct_on?: Maybe<Array<DocumentReactionGroupPersistedSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentReactionGroupPersistedOrderBy>>;
  where?: Maybe<DocumentReactionGroupPersistedBoolExp>;
};


/** query root */
export type QueryRootDocumentReactionGroupPersistedByPkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type QueryRootLabelArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootReactionArgs = {
  htmlCode: Scalars['String'];
};


/** query root */
export type QueryRootSearchDocumentsArgs = {
  args: SearchDocumentsArgs;
  distinct_on?: Maybe<Array<DocumentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentOrderBy>>;
  where?: Maybe<DocumentBoolExp>;
};


/** query root */
export type QueryRootUserArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "reaction" */
export type Reaction = {
  __typename?: 'reaction';
  htmlCode: Scalars['String'];
  title: Scalars['String'];
};

/** subscription root */
export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "color" */
  allColors: Array<Color>;
  /** fetch data from the table: "comment_reaction" */
  allCommentReactions: Array<CommentReaction>;
  /** fetch data from the table: "comment" */
  allComments: Array<Comment>;
  /** fetch data from the table: "document_label" */
  allDocumentLabels: Array<DocumentLabel>;
  /** fetch data from the table: "document_reaction" */
  allDocumentReactions: Array<DocumentReaction>;
  /** fetch data from the table: "document" */
  allDocuments: Array<Document>;
  /** fetch data from the table: "label" */
  allLabels: Array<Label>;
  /** fetch data from the table: "reaction" */
  allReactions: Array<Reaction>;
  /** fetch data from the table: "user" */
  allUsers: Array<User>;
  /** fetch data from the table: "color" using primary key columns */
  color?: Maybe<Color>;
  /** fetch data from the table: "comment" using primary key columns */
  comment?: Maybe<Comment>;
  /** fetch data from the table: "comment_reaction" using primary key columns */
  commentReaction?: Maybe<CommentReaction>;
  /** fetch data from the table: "comment_reactions_group" */
  comment_reactions_group: Array<CommentReactionsGroup>;
  /** fetch data from the table: "document" using primary key columns */
  document?: Maybe<Document>;
  /** fetch data from the table: "document_label" using primary key columns */
  documentLabel?: Maybe<DocumentLabel>;
  /** fetch data from the table: "document_reaction" using primary key columns */
  documentReactino?: Maybe<DocumentReaction>;
  /** fetch data from the table: "document_reaction_group" */
  document_reaction_group: Array<DocumentReactionGroup>;
  /** fetch data from the table: "document_reaction_group_persisted" */
  document_reaction_group_persisted: Array<DocumentReactionGroupPersisted>;
  /** fetch data from the table: "document_reaction_group_persisted" using primary key columns */
  document_reaction_group_persisted_by_pk?: Maybe<DocumentReactionGroupPersisted>;
  /** fetch data from the table: "label" using primary key columns */
  label?: Maybe<Label>;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction?: Maybe<Reaction>;
  /** execute function "search_documents" which returns "document" */
  search_documents: Array<Document>;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
};


/** subscription root */
export type SubscriptionRootAllColorsArgs = {
  distinct_on?: Maybe<Array<ColorSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ColorOrderBy>>;
  where?: Maybe<ColorBoolExp>;
};


/** subscription root */
export type SubscriptionRootAllCommentReactionsArgs = {
  distinct_on?: Maybe<Array<CommentReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentReactionOrderBy>>;
  where?: Maybe<CommentReactionBoolExp>;
};


/** subscription root */
export type SubscriptionRootAllCommentsArgs = {
  distinct_on?: Maybe<Array<CommentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentOrderBy>>;
  where?: Maybe<CommentBoolExp>;
};


/** subscription root */
export type SubscriptionRootAllDocumentLabelsArgs = {
  distinct_on?: Maybe<Array<DocumentLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentLabelOrderBy>>;
  where?: Maybe<DocumentLabelBoolExp>;
};


/** subscription root */
export type SubscriptionRootAllDocumentReactionsArgs = {
  distinct_on?: Maybe<Array<DocumentReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentReactionOrderBy>>;
  where?: Maybe<DocumentReactionBoolExp>;
};


/** subscription root */
export type SubscriptionRootAllDocumentsArgs = {
  distinct_on?: Maybe<Array<DocumentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentOrderBy>>;
  where?: Maybe<DocumentBoolExp>;
};


/** subscription root */
export type SubscriptionRootAllLabelsArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};


/** subscription root */
export type SubscriptionRootAllReactionsArgs = {
  distinct_on?: Maybe<Array<ReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ReactionOrderBy>>;
  where?: Maybe<ReactionBoolExp>;
};


/** subscription root */
export type SubscriptionRootAllUsersArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};


/** subscription root */
export type SubscriptionRootColorArgs = {
  name: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootCommentArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootCommentReactionArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootCommentReactionsGroupArgs = {
  distinct_on?: Maybe<Array<CommentReactionsGroupSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentReactionsGroupOrderBy>>;
  where?: Maybe<CommentReactionsGroupBoolExp>;
};


/** subscription root */
export type SubscriptionRootDocumentArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootDocumentLabelArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootDocumentReactinoArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootDocumentReactionGroupArgs = {
  distinct_on?: Maybe<Array<DocumentReactionGroupSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentReactionGroupOrderBy>>;
  where?: Maybe<DocumentReactionGroupBoolExp>;
};


/** subscription root */
export type SubscriptionRootDocumentReactionGroupPersistedArgs = {
  distinct_on?: Maybe<Array<DocumentReactionGroupPersistedSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentReactionGroupPersistedOrderBy>>;
  where?: Maybe<DocumentReactionGroupPersistedBoolExp>;
};


/** subscription root */
export type SubscriptionRootDocumentReactionGroupPersistedByPkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type SubscriptionRootLabelArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootReactionArgs = {
  htmlCode: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootSearchDocumentsArgs = {
  args: SearchDocumentsArgs;
  distinct_on?: Maybe<Array<DocumentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentOrderBy>>;
  where?: Maybe<DocumentBoolExp>;
};


/** subscription root */
export type SubscriptionRootUserArgs = {
  id: Scalars['uuid'];
};

/**
 * add author table
 * 
 * 
 * columns and relationships of "user"
 */
export type User = {
  __typename?: 'user';
  balanceDocumentReaction: Scalars['bigint'];
  countWrittenComments: Scalars['Int'];
  /** An array relationship */
  document_labels: Array<DocumentLabel>;
  /** An array relationship */
  documents: Array<Document>;
  imageUrl?: Maybe<Scalars['String']>;
  /** An array relationship */
  labels: Array<Label>;
  name: Scalars['String'];
};


/**
 * add author table
 * 
 * 
 * columns and relationships of "user"
 */
export type UserDocumentLabelsArgs = {
  distinct_on?: Maybe<Array<DocumentLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentLabelOrderBy>>;
  where?: Maybe<DocumentLabelBoolExp>;
};


/**
 * add author table
 * 
 * 
 * columns and relationships of "user"
 */
export type UserDocumentsArgs = {
  distinct_on?: Maybe<Array<DocumentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentOrderBy>>;
  where?: Maybe<DocumentBoolExp>;
};


/**
 * add author table
 * 
 * 
 * columns and relationships of "user"
 */
export type UserLabelsArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};

/** select columns of table "color" */
export enum ColorSelectColumn {
  /** column name */
  Color = 'color',
  /** column name */
  Name = 'name'
}

/** select columns of table "comment_reaction" */
export enum CommentReactionSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CommentId = 'commentId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id'
}

/** select columns of table "comment_reactions_group" */
export enum CommentReactionsGroupSelectColumn {
  /** column name */
  Count = 'count',
  /** column name */
  Reactionid = 'reactionid'
}

/** select columns of table "comment" */
export enum CommentSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  ReactionBalance = 'reactionBalance',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select columns of table "document_label" */
export enum DocumentLabelSelectColumn {
  /** column name */
  LabelId = 'labelId'
}

/** select columns of table "document_reaction_group_persisted" */
export enum DocumentReactionGroupPersistedSelectColumn {
  /** column name */
  Count = 'count',
  /** column name */
  Reactionid = 'reactionid'
}

/** select columns of table "document_reaction_group" */
export enum DocumentReactionGroupSelectColumn {
  /** column name */
  Count = 'count',
  /** column name */
  ReactionId = 'reaction_id'
}

/** select columns of table "document_reaction" */
export enum DocumentReactionSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  ReactionId = 'reactionId'
}

/** select columns of table "document" */
export enum DocumentSelectColumn {
  /** column name */
  AllowComments = 'allowComments',
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Content = 'content',
  /** column name */
  CountComments = 'countComments',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  ReactionBalance = 'reactionBalance',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select columns of table "label" */
export enum LabelSelectColumn {
  /** column name */
  ColorName = 'colorName',
  /** column name */
  Label = 'label'
}

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** select columns of table "reaction" */
export enum ReactionSelectColumn {
  /** column name */
  HtmlCode = 'htmlCode',
  /** column name */
  Title = 'title'
}

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  BalanceDocumentReaction = 'balanceDocumentReaction',
  /** column name */
  CountWrittenComments = 'countWrittenComments',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  Name = 'name'
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to filter rows from the table "color". All fields are combined with a logical 'AND'. */
export type ColorBoolExp = {
  _and?: Maybe<Array<Maybe<ColorBoolExp>>>;
  _not?: Maybe<ColorBoolExp>;
  _or?: Maybe<Array<Maybe<ColorBoolExp>>>;
  color?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

/** ordering options when selecting data from "color" */
export type ColorOrderBy = {
  color?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** primary key columns input for table: "color" */
export type ColorPkColumnsInput = {
  name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "comment". All fields are combined with a logical 'AND'. */
export type CommentBoolExp = {
  _and?: Maybe<Array<Maybe<CommentBoolExp>>>;
  _not?: Maybe<CommentBoolExp>;
  _or?: Maybe<Array<Maybe<CommentBoolExp>>>;
  author?: Maybe<UserBoolExp>;
  authorId?: Maybe<StringComparisonExp>;
  comment?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  document?: Maybe<DocumentBoolExp>;
  documentId?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  reactionBalance?: Maybe<IntComparisonExp>;
  reactions?: Maybe<CommentReactionBoolExp>;
  reactionsGroup?: Maybe<CommentReactionsGroupBoolExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
};

/** ordering options when selecting data from "comment" */
export type CommentOrderBy = {
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  comment?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  document?: Maybe<DocumentOrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "comment" */
export type CommentPkColumnsInput = {
  id: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "comment_reaction". All fields are combined with a logical 'AND'. */
export type CommentReactionBoolExp = {
  _and?: Maybe<Array<Maybe<CommentReactionBoolExp>>>;
  _not?: Maybe<CommentReactionBoolExp>;
  _or?: Maybe<Array<Maybe<CommentReactionBoolExp>>>;
  author?: Maybe<UserBoolExp>;
  authorId?: Maybe<StringComparisonExp>;
  comment?: Maybe<CommentBoolExp>;
  commentId?: Maybe<UuidComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  reaction?: Maybe<ReactionBoolExp>;
};

/** ordering options when selecting data from "comment_reaction" */
export type CommentReactionOrderBy = {
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  comment?: Maybe<CommentOrderBy>;
  commentId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reaction?: Maybe<ReactionOrderBy>;
};

/** primary key columns input for table: "comment_reaction" */
export type CommentReactionPkColumnsInput = {
  id: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "comment_reactions_group". All fields are combined with a logical 'AND'. */
export type CommentReactionsGroupBoolExp = {
  _and?: Maybe<Array<Maybe<CommentReactionsGroupBoolExp>>>;
  _not?: Maybe<CommentReactionsGroupBoolExp>;
  _or?: Maybe<Array<Maybe<CommentReactionsGroupBoolExp>>>;
  count?: Maybe<BigintComparisonExp>;
  reactionid?: Maybe<StringComparisonExp>;
};

/** ordering options when selecting data from "comment_reactions_group" */
export type CommentReactionsGroupOrderBy = {
  count?: Maybe<OrderBy>;
  reactionid?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "document". All fields are combined with a logical 'AND'. */
export type DocumentBoolExp = {
  _and?: Maybe<Array<Maybe<DocumentBoolExp>>>;
  _not?: Maybe<DocumentBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentBoolExp>>>;
  allowComments?: Maybe<BooleanComparisonExp>;
  author?: Maybe<UserBoolExp>;
  authorId?: Maybe<StringComparisonExp>;
  comments?: Maybe<CommentBoolExp>;
  content?: Maybe<StringComparisonExp>;
  countComments?: Maybe<IntComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  isPublic?: Maybe<BooleanComparisonExp>;
  labels?: Maybe<DocumentLabelBoolExp>;
  reactionBalance?: Maybe<IntComparisonExp>;
  reactions?: Maybe<DocumentReactionBoolExp>;
  reactionsGroup?: Maybe<DocumentReactionGroupPersistedBoolExp>;
  title?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
};

/** Boolean expression to filter rows from the table "document_label". All fields are combined with a logical 'AND'. */
export type DocumentLabelBoolExp = {
  _and?: Maybe<Array<Maybe<DocumentLabelBoolExp>>>;
  _not?: Maybe<DocumentLabelBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentLabelBoolExp>>>;
  author?: Maybe<UserBoolExp>;
  document?: Maybe<DocumentBoolExp>;
  label?: Maybe<LabelBoolExp>;
  labelId?: Maybe<UuidComparisonExp>;
};

/** ordering options when selecting data from "document_label" */
export type DocumentLabelOrderBy = {
  author?: Maybe<UserOrderBy>;
  document?: Maybe<DocumentOrderBy>;
  label?: Maybe<LabelOrderBy>;
  labelId?: Maybe<OrderBy>;
};

/** primary key columns input for table: "document_label" */
export type DocumentLabelPkColumnsInput = {
  id: Scalars['uuid'];
};

/** ordering options when selecting data from "document" */
export type DocumentOrderBy = {
  allowComments?: Maybe<OrderBy>;
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  content?: Maybe<OrderBy>;
  countComments?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isPublic?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "document" */
export type DocumentPkColumnsInput = {
  id: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "document_reaction". All fields are combined with a logical 'AND'. */
export type DocumentReactionBoolExp = {
  _and?: Maybe<Array<Maybe<DocumentReactionBoolExp>>>;
  _not?: Maybe<DocumentReactionBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentReactionBoolExp>>>;
  authorId?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  document?: Maybe<DocumentBoolExp>;
  documentId?: Maybe<UuidComparisonExp>;
  reaction?: Maybe<ReactionBoolExp>;
  reactionId?: Maybe<StringComparisonExp>;
};

/** Boolean expression to filter rows from the table "document_reaction_group". All fields are combined with a logical 'AND'. */
export type DocumentReactionGroupBoolExp = {
  _and?: Maybe<Array<Maybe<DocumentReactionGroupBoolExp>>>;
  _not?: Maybe<DocumentReactionGroupBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentReactionGroupBoolExp>>>;
  count?: Maybe<BigintComparisonExp>;
  reaction_id?: Maybe<StringComparisonExp>;
};

/** ordering options when selecting data from "document_reaction_group" */
export type DocumentReactionGroupOrderBy = {
  count?: Maybe<OrderBy>;
  reaction_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "document_reaction_group_persisted". All fields are combined with a logical 'AND'. */
export type DocumentReactionGroupPersistedBoolExp = {
  _and?: Maybe<Array<Maybe<DocumentReactionGroupPersistedBoolExp>>>;
  _not?: Maybe<DocumentReactionGroupPersistedBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentReactionGroupPersistedBoolExp>>>;
  count?: Maybe<IntComparisonExp>;
  reactionid?: Maybe<StringComparisonExp>;
};

/** ordering options when selecting data from "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedOrderBy = {
  count?: Maybe<OrderBy>;
  reactionid?: Maybe<OrderBy>;
};

/** primary key columns input for table: "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedPkColumnsInput = {
  id: Scalars['bigint'];
};

/** ordering options when selecting data from "document_reaction" */
export type DocumentReactionOrderBy = {
  authorId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  document?: Maybe<DocumentOrderBy>;
  documentId?: Maybe<OrderBy>;
  reaction?: Maybe<ReactionOrderBy>;
  reactionId?: Maybe<OrderBy>;
};

/** primary key columns input for table: "document_reaction" */
export type DocumentReactionPkColumnsInput = {
  id: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "label". All fields are combined with a logical 'AND'. */
export type LabelBoolExp = {
  _and?: Maybe<Array<Maybe<LabelBoolExp>>>;
  _not?: Maybe<LabelBoolExp>;
  _or?: Maybe<Array<Maybe<LabelBoolExp>>>;
  author?: Maybe<UserBoolExp>;
  color?: Maybe<ColorBoolExp>;
  colorName?: Maybe<StringComparisonExp>;
  document_labels?: Maybe<DocumentLabelBoolExp>;
  label?: Maybe<StringComparisonExp>;
};

/** ordering options when selecting data from "label" */
export type LabelOrderBy = {
  author?: Maybe<UserOrderBy>;
  color?: Maybe<ColorOrderBy>;
  colorName?: Maybe<OrderBy>;
  label?: Maybe<OrderBy>;
};

/** primary key columns input for table: "label" */
export type LabelPkColumnsInput = {
  id: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "reaction". All fields are combined with a logical 'AND'. */
export type ReactionBoolExp = {
  _and?: Maybe<Array<Maybe<ReactionBoolExp>>>;
  _not?: Maybe<ReactionBoolExp>;
  _or?: Maybe<Array<Maybe<ReactionBoolExp>>>;
  htmlCode?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

/** ordering options when selecting data from "reaction" */
export type ReactionOrderBy = {
  htmlCode?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

/** primary key columns input for table: "reaction" */
export type ReactionPkColumnsInput = {
  htmlCode: Scalars['String'];
};

export type SearchDocumentsArgs = {
  search?: Maybe<Scalars['String']>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: Maybe<Array<Maybe<UserBoolExp>>>;
  _not?: Maybe<UserBoolExp>;
  _or?: Maybe<Array<Maybe<UserBoolExp>>>;
  balanceDocumentReaction?: Maybe<BigintComparisonExp>;
  countWrittenComments?: Maybe<IntComparisonExp>;
  document_labels?: Maybe<DocumentLabelBoolExp>;
  documents?: Maybe<DocumentBoolExp>;
  imageUrl?: Maybe<StringComparisonExp>;
  labels?: Maybe<LabelBoolExp>;
  name?: Maybe<StringComparisonExp>;
};

/** ordering options when selecting data from "user" */
export type UserOrderBy = {
  balanceDocumentReaction?: Maybe<OrderBy>;
  countWrittenComments?: Maybe<OrderBy>;
  imageUrl?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** primary key columns input for table: "user" */
export type UserPkColumnsInput = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};




export type ACommentSectionCommentAuthorFragment = { __typename?: 'user', name: string, imageUrl?: Maybe<string> };

export type ACommentSectionCommentReactionGroupFragment = { __typename?: 'comment_reactions_group', count?: Maybe<any>, reactionid?: Maybe<string> };

export type ACommentSectionCommentFragment = { __typename?: 'comment', id: any, comment: string, createdAt: any, reactionBalance: number, author: (
    { __typename?: 'user' }
    & ACommentSectionCommentAuthorFragment
  ), reactionsGroup: Array<(
    { __typename?: 'comment_reactions_group' }
    & ACommentSectionCommentReactionGroupFragment
  )> };

export type ACommentSectionCommentsQueryVariables = Exact<{
  documentId: Scalars['uuid'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type ACommentSectionCommentsQuery = { __typename?: 'query_root', allComments: Array<(
    { __typename?: 'comment' }
    & ACommentSectionCommentFragment
  )> };

export type AFeedDocAuthorFragment = { __typename?: 'user', imageUrl?: Maybe<string>, name: string };

export type AFeedDocLabelFragment = { __typename?: 'document_label', label: { __typename?: 'label', label: string, color: { __typename?: 'color', color: string } } };

export type AFeedDocFragment = { __typename?: 'document', updatedAt: any, countComments: number, allowComments: boolean, isPublic: boolean, title: string, content: string, id: any, author: (
    { __typename?: 'user' }
    & AFeedDocAuthorFragment
  ), reactionsGroup: Array<{ __typename?: 'document_reaction_group_persisted', count: number, reactionid: string }>, labels: Array<(
    { __typename?: 'document_label' }
    & AFeedDocLabelFragment
  )> };

export type AFeedDocsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  filter?: Maybe<DocumentBoolExp>;
}>;


export type AFeedDocsQuery = { __typename?: 'query_root', allDocuments: Array<(
    { __typename?: 'document' }
    & AFeedDocFragment
  )> };

export type ASearchFeedDocsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  filter?: Maybe<DocumentBoolExp>;
  search?: Maybe<Scalars['String']>;
}>;


export type ASearchFeedDocsQuery = { __typename?: 'query_root', allDocuments: Array<(
    { __typename?: 'document' }
    & AFeedDocFragment
  )> };

export const ACommentSectionCommentAuthorFragmentDoc = gql`
    fragment ACommentSectionCommentAuthor on user {
  name
  imageUrl
}
    `;
export const ACommentSectionCommentReactionGroupFragmentDoc = gql`
    fragment ACommentSectionCommentReactionGroup on comment_reactions_group {
  count
  reactionid
}
    `;
export const ACommentSectionCommentFragmentDoc = gql`
    fragment ACommentSectionComment on comment {
  id
  author {
    ...ACommentSectionCommentAuthor
  }
  comment
  createdAt
  reactionBalance
  reactionsGroup {
    ...ACommentSectionCommentReactionGroup
  }
}
    ${ACommentSectionCommentAuthorFragmentDoc}
${ACommentSectionCommentReactionGroupFragmentDoc}`;
export const AFeedDocAuthorFragmentDoc = gql`
    fragment AFeedDocAuthor on user {
  imageUrl
  name
}
    `;
export const AFeedDocLabelFragmentDoc = gql`
    fragment AFeedDocLabel on document_label {
  label {
    color {
      color
    }
    label
  }
}
    `;
export const AFeedDocFragmentDoc = gql`
    fragment AFeedDoc on document {
  author {
    ...AFeedDocAuthor
  }
  updatedAt
  reactionsGroup(limit: 10, order_by: {count: desc}) {
    count
    reactionid
  }
  countComments
  allowComments
  isPublic
  labels(limit: 10) {
    ...AFeedDocLabel
  }
  title
  content
  id
}
    ${AFeedDocAuthorFragmentDoc}
${AFeedDocLabelFragmentDoc}`;
export const ACommentSectionCommentsDocument = gql`
    query ACommentSectionComments($documentId: uuid!, $limit: Int!, $offset: Int!) {
  allComments(where: {documentId: {_eq: $documentId}}, limit: $limit, offset: $offset, order_by: [{createdAt: desc}]) {
    ...ACommentSectionComment
  }
}
    ${ACommentSectionCommentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ACommentSectionCommentsGQL extends Apollo.Query<ACommentSectionCommentsQuery, ACommentSectionCommentsQueryVariables> {
    document = ACommentSectionCommentsDocument;
    
  }
export const AFeedDocsDocument = gql`
    query AFeedDocs($limit: Int!, $offset: Int!, $filter: document_bool_exp) {
  allDocuments(limit: $limit, offset: $offset, where: $filter) {
    ...AFeedDoc
  }
}
    ${AFeedDocFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AFeedDocsGQL extends Apollo.Query<AFeedDocsQuery, AFeedDocsQueryVariables> {
    document = AFeedDocsDocument;
    
  }
export const ASearchFeedDocsDocument = gql`
    query ASearchFeedDocs($limit: Int!, $offset: Int!, $filter: document_bool_exp, $search: String) {
  allDocuments: search_documents(limit: $limit, offset: $offset, where: $filter, args: {search: $search}) {
    ...AFeedDoc
  }
}
    ${AFeedDocFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ASearchFeedDocsGQL extends Apollo.Query<ASearchFeedDocsQuery, ASearchFeedDocsQueryVariables> {
    document = ASearchFeedDocsDocument;
    
  }