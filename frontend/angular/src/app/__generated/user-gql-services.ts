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
export interface Color {
  __typename?: 'color';
  color: Scalars['String'];
  name: Scalars['String'];
}

/** columns and relationships of "comment" */
export interface Comment {
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
}


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

/** response of any mutation on the table "comment" */
export interface CommentMutationResponse {
  __typename?: 'comment_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comment>;
}

/** columns and relationships of "comment_reaction" */
export interface CommentReaction {
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
  reactionId: Scalars['String'];
}

/** response of any mutation on the table "comment_reaction" */
export interface CommentReactionMutationResponse {
  __typename?: 'comment_reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<CommentReaction>;
}

/** columns and relationships of "comment_reactions_group" */
export interface CommentReactionsGroup {
  __typename?: 'comment_reactions_group';
  count?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
}

/** columns and relationships of "document" */
export interface Document {
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
  tags?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
}


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
export interface DocumentLabel {
  __typename?: 'document_label';
  /** An object relationship */
  author: User;
  authorId: Scalars['String'];
  /** An object relationship */
  document: Document;
  id: Scalars['uuid'];
  /** An object relationship */
  label: Label;
  labelId: Scalars['uuid'];
}

/** response of any mutation on the table "document_label" */
export interface DocumentLabelMutationResponse {
  __typename?: 'document_label_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<DocumentLabel>;
}

/** response of any mutation on the table "document" */
export interface DocumentMutationResponse {
  __typename?: 'document_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document>;
}

/** columns and relationships of "document_reaction" */
export interface DocumentReaction {
  __typename?: 'document_reaction';
  authorId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  document: Document;
  documentId: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  reaction: Reaction;
  reactionId: Scalars['String'];
}

/** columns and relationships of "document_reaction_group" */
export interface DocumentReactionGroup {
  __typename?: 'document_reaction_group';
  count?: Maybe<Scalars['bigint']>;
  reaction_id?: Maybe<Scalars['String']>;
}

/**
 * persisted version of the document_reaction_group
 * 
 * 
 * columns and relationships of "document_reaction_group_persisted"
 */
export interface DocumentReactionGroupPersisted {
  __typename?: 'document_reaction_group_persisted';
  count: Scalars['Int'];
  reactionid: Scalars['String'];
}

/** response of any mutation on the table "document_reaction" */
export interface DocumentReactionMutationResponse {
  __typename?: 'document_reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<DocumentReaction>;
}

/** columns and relationships of "follow" */
export interface Follow {
  __typename?: 'follow';
  /** An object relationship */
  author: User;
  authorId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  following: User;
  followingId: Scalars['String'];
  id: Scalars['uuid'];
}

/** response of any mutation on the table "follow" */
export interface FollowMutationResponse {
  __typename?: 'follow_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Follow>;
}

/** columns and relationships of "label" */
export interface Label {
  __typename?: 'label';
  /** An object relationship */
  author: User;
  authorId: Scalars['String'];
  /** An object relationship */
  color: Color;
  colorName: Scalars['String'];
  /** An array relationship */
  document_labels: Array<DocumentLabel>;
  id: Scalars['uuid'];
  label: Scalars['String'];
}


/** columns and relationships of "label" */
export type LabelDocumentLabelsArgs = {
  distinct_on?: Maybe<Array<DocumentLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentLabelOrderBy>>;
  where?: Maybe<DocumentLabelBoolExp>;
};

/** response of any mutation on the table "label" */
export interface LabelMutationResponse {
  __typename?: 'label_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Label>;
}

/** mutation root */
export interface MutationRoot {
  __typename?: 'mutation_root';
  /** insert data into the table: "comment" */
  addComment?: Maybe<CommentMutationResponse>;
  /** insert data into the table: "comment_reaction" */
  addCommentReaction?: Maybe<CommentReactionMutationResponse>;
  /** insert data into the table: "document" */
  addDocument?: Maybe<DocumentMutationResponse>;
  /** insert data into the table: "document_label" */
  addDocumentLabel?: Maybe<DocumentLabelMutationResponse>;
  /** insert data into the table: "document_reaction" */
  addDocumentReaction?: Maybe<DocumentReactionMutationResponse>;
  /** insert data into the table: "follow" */
  addFollow?: Maybe<FollowMutationResponse>;
  /** insert data into the table: "label" */
  addLabel?: Maybe<LabelMutationResponse>;
  /** delete single row from the table: "comment" */
  delete_comment_by_pk?: Maybe<Comment>;
  /** delete single row from the table: "comment_reaction" */
  delete_comment_reaction_by_pk?: Maybe<CommentReaction>;
  /** delete single row from the table: "document" */
  delete_document_by_pk?: Maybe<Document>;
  /** delete single row from the table: "document_label" */
  delete_document_label_by_pk?: Maybe<DocumentLabel>;
  /** delete single row from the table: "document_reaction" */
  delete_document_reaction_by_pk?: Maybe<DocumentReaction>;
  /** delete single row from the table: "follow" */
  delete_follow_by_pk?: Maybe<Follow>;
  /** delete single row from the table: "label" */
  delete_label_by_pk?: Maybe<Label>;
  /** insert a single row into the table: "comment" */
  insert_comment_one?: Maybe<Comment>;
  /** insert a single row into the table: "comment_reaction" */
  insert_comment_reaction_one?: Maybe<CommentReaction>;
  /** insert a single row into the table: "document_label" */
  insert_document_label_one?: Maybe<DocumentLabel>;
  /** insert a single row into the table: "document" */
  insert_document_one?: Maybe<Document>;
  /** insert a single row into the table: "document_reaction" */
  insert_document_reaction_one?: Maybe<DocumentReaction>;
  /** insert a single row into the table: "follow" */
  insert_follow_one?: Maybe<Follow>;
  /** insert a single row into the table: "label" */
  insert_label_one?: Maybe<Label>;
  /** delete data from the table: "comment" */
  removeComment?: Maybe<CommentMutationResponse>;
  /** delete data from the table: "comment_reaction" */
  removeCommentReaction?: Maybe<CommentReactionMutationResponse>;
  /** delete data from the table: "document" */
  removeDocument?: Maybe<DocumentMutationResponse>;
  /** delete data from the table: "document_label" */
  removeDocumentLabel?: Maybe<DocumentLabelMutationResponse>;
  /** delete data from the table: "document_reaction" */
  removeDocumentReaction?: Maybe<DocumentReactionMutationResponse>;
  /** delete data from the table: "follow" */
  removeFollow?: Maybe<FollowMutationResponse>;
  /** delete data from the table: "label" */
  removeLabel?: Maybe<LabelMutationResponse>;
  /** update data of the table: "comment" */
  updateComment?: Maybe<CommentMutationResponse>;
  /** update data of the table: "document" */
  updateDocument?: Maybe<DocumentMutationResponse>;
  /** update data of the table: "label" */
  updateLabel?: Maybe<LabelMutationResponse>;
  /** update data of the table: "user" */
  updateUser?: Maybe<UserMutationResponse>;
  /** update single row of the table: "comment" */
  update_comment_by_pk?: Maybe<Comment>;
  /** update single row of the table: "document" */
  update_document_by_pk?: Maybe<Document>;
  /** update single row of the table: "label" */
  update_label_by_pk?: Maybe<Label>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
}


/** mutation root */
export type MutationRootAddCommentArgs = {
  objects: Array<CommentInsertInput>;
  on_conflict?: Maybe<CommentOnConflict>;
};


/** mutation root */
export type MutationRootAddCommentReactionArgs = {
  objects: Array<CommentReactionInsertInput>;
};


/** mutation root */
export type MutationRootAddDocumentArgs = {
  objects: Array<DocumentInsertInput>;
  on_conflict?: Maybe<DocumentOnConflict>;
};


/** mutation root */
export type MutationRootAddDocumentLabelArgs = {
  objects: Array<DocumentLabelInsertInput>;
};


/** mutation root */
export type MutationRootAddDocumentReactionArgs = {
  objects: Array<DocumentReactionInsertInput>;
};


/** mutation root */
export type MutationRootAddFollowArgs = {
  objects: Array<FollowInsertInput>;
};


/** mutation root */
export type MutationRootAddLabelArgs = {
  objects: Array<LabelInsertInput>;
  on_conflict?: Maybe<LabelOnConflict>;
};


/** mutation root */
export type MutationRootDeleteCommentByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteCommentReactionByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteDocumentByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteDocumentLabelByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteDocumentReactionByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteFollowByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteLabelByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootInsertCommentOneArgs = {
  object: CommentInsertInput;
  on_conflict?: Maybe<CommentOnConflict>;
};


/** mutation root */
export type MutationRootInsertCommentReactionOneArgs = {
  object: CommentReactionInsertInput;
};


/** mutation root */
export type MutationRootInsertDocumentLabelOneArgs = {
  object: DocumentLabelInsertInput;
};


/** mutation root */
export type MutationRootInsertDocumentOneArgs = {
  object: DocumentInsertInput;
  on_conflict?: Maybe<DocumentOnConflict>;
};


/** mutation root */
export type MutationRootInsertDocumentReactionOneArgs = {
  object: DocumentReactionInsertInput;
};


/** mutation root */
export type MutationRootInsertFollowOneArgs = {
  object: FollowInsertInput;
};


/** mutation root */
export type MutationRootInsertLabelOneArgs = {
  object: LabelInsertInput;
  on_conflict?: Maybe<LabelOnConflict>;
};


/** mutation root */
export type MutationRootRemoveCommentArgs = {
  where: CommentBoolExp;
};


/** mutation root */
export type MutationRootRemoveCommentReactionArgs = {
  where: CommentReactionBoolExp;
};


/** mutation root */
export type MutationRootRemoveDocumentArgs = {
  where: DocumentBoolExp;
};


/** mutation root */
export type MutationRootRemoveDocumentLabelArgs = {
  where: DocumentLabelBoolExp;
};


/** mutation root */
export type MutationRootRemoveDocumentReactionArgs = {
  where: DocumentReactionBoolExp;
};


/** mutation root */
export type MutationRootRemoveFollowArgs = {
  where: FollowBoolExp;
};


/** mutation root */
export type MutationRootRemoveLabelArgs = {
  where: LabelBoolExp;
};


/** mutation root */
export type MutationRootUpdateCommentArgs = {
  _set?: Maybe<CommentSetInput>;
  where: CommentBoolExp;
};


/** mutation root */
export type MutationRootUpdateDocumentArgs = {
  _set?: Maybe<DocumentSetInput>;
  where: DocumentBoolExp;
};


/** mutation root */
export type MutationRootUpdateLabelArgs = {
  _set?: Maybe<LabelSetInput>;
  where: LabelBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserArgs = {
  _set?: Maybe<UserSetInput>;
  where: UserBoolExp;
};


/** mutation root */
export type MutationRootUpdateCommentByPkArgs = {
  _set?: Maybe<CommentSetInput>;
  pk_columns: CommentPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateDocumentByPkArgs = {
  _set?: Maybe<DocumentSetInput>;
  pk_columns: DocumentPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateLabelByPkArgs = {
  _set?: Maybe<LabelSetInput>;
  pk_columns: LabelPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserByPkArgs = {
  _set?: Maybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
};

/** query root */
export interface QueryRoot {
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
  /** fetch data from the table: "follow" */
  allFollows: Array<Follow>;
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
  /** fetch data from the table: "follow" using primary key columns */
  follow?: Maybe<Follow>;
  /** fetch data from the table: "label" using primary key columns */
  label?: Maybe<Label>;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction?: Maybe<Reaction>;
  /** execute function "search_documents" which returns "document" */
  search_documents: Array<Document>;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
}


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
export type QueryRootAllFollowsArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
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
export type QueryRootFollowArgs = {
  id: Scalars['uuid'];
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
export interface Reaction {
  __typename?: 'reaction';
  htmlCode: Scalars['String'];
  title: Scalars['String'];
}

/** subscription root */
export interface SubscriptionRoot {
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
  /** fetch data from the table: "follow" */
  allFollows: Array<Follow>;
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
  /** fetch data from the table: "follow" using primary key columns */
  follow?: Maybe<Follow>;
  /** fetch data from the table: "label" using primary key columns */
  label?: Maybe<Label>;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction?: Maybe<Reaction>;
  /** execute function "search_documents" which returns "document" */
  search_documents: Array<Document>;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
}


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
export type SubscriptionRootAllFollowsArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
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
export type SubscriptionRootFollowArgs = {
  id: Scalars['uuid'];
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
export interface User {
  __typename?: 'user';
  authId: Scalars['String'];
  balanceCommentReaction: Scalars['bigint'];
  balanceDocumentReaction: Scalars['bigint'];
  countPrivateDocs: Scalars['Int'];
  countWrittenComments: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  document_labels: Array<DocumentLabel>;
  /** An array relationship */
  documents: Array<Document>;
  /** An array relationship */
  followers: Array<Follow>;
  /** An array relationship */
  followings: Array<Follow>;
  id: Scalars['uuid'];
  imageUrl?: Maybe<Scalars['String']>;
  /** An array relationship */
  labels: Array<Label>;
  maxPrivateDocs: Scalars['Int'];
  name: Scalars['String'];
}


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
export type UserFollowersArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
};


/**
 * add author table
 * 
 * 
 * columns and relationships of "user"
 */
export type UserFollowingsArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
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

/** response of any mutation on the table "user" */
export interface UserMutationResponse {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
}

/** select columns of table "color" */
export enum ColorSelectColumn {
  /** column name */
  Color = 'color',
  /** column name */
  Name = 'name'
}

/** unique or primary key constraints on table "comment" */
export enum CommentConstraint {
  /** unique or primary key constraint */
  CommentPkey = 'comment_pkey'
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
  Id = 'id',
  /** column name */
  ReactionId = 'reactionId'
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

/** update columns of table "comment" */
export enum CommentUpdateColumn {
  /** column name */
  Comment = 'comment'
}

/** unique or primary key constraints on table "document" */
export enum DocumentConstraint {
  /** unique or primary key constraint */
  DocumentPkey = 'document_pkey'
}

/** select columns of table "document_label" */
export enum DocumentLabelSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Id = 'id',
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
  Id = 'id',
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
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** update columns of table "document" */
export enum DocumentUpdateColumn {
  /** column name */
  AllowComments = 'allowComments',
  /** column name */
  Content = 'content',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title'
}

/** select columns of table "follow" */
export enum FollowSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FollowingId = 'followingId',
  /** column name */
  Id = 'id'
}

/** unique or primary key constraints on table "label" */
export enum LabelConstraint {
  /** unique or primary key constraint */
  LabelPkey = 'label_pkey'
}

/** select columns of table "label" */
export enum LabelSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  ColorName = 'colorName',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** update columns of table "label" */
export enum LabelUpdateColumn {
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

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint */
  UserAuthIdKey = 'user_auth_id_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  AuthId = 'authId',
  /** column name */
  BalanceCommentReaction = 'balanceCommentReaction',
  /** column name */
  BalanceDocumentReaction = 'balanceDocumentReaction',
  /** column name */
  CountPrivateDocs = 'countPrivateDocs',
  /** column name */
  CountWrittenComments = 'countWrittenComments',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  MaxPrivateDocs = 'maxPrivateDocs',
  /** column name */
  Name = 'name'
}

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  Name = 'name'
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export interface BooleanComparisonExp {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export interface IntComparisonExp {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface StringComparisonExp {
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
}

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export interface BigintComparisonExp {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
}

/** Boolean expression to filter rows from the table "color". All fields are combined with a logical 'AND'. */
export interface ColorBoolExp {
  _and?: Maybe<Array<Maybe<ColorBoolExp>>>;
  _not?: Maybe<ColorBoolExp>;
  _or?: Maybe<Array<Maybe<ColorBoolExp>>>;
  color?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
}

/** ordering options when selecting data from "color" */
export interface ColorOrderBy {
  color?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
}

/** primary key columns input for table: "color" */
export interface ColorPkColumnsInput {
  name: Scalars['String'];
}

/** input type for inserting array relation for remote table "comment" */
export interface CommentArrRelInsertInput {
  data: Array<CommentInsertInput>;
  on_conflict?: Maybe<CommentOnConflict>;
}

/** Boolean expression to filter rows from the table "comment". All fields are combined with a logical 'AND'. */
export interface CommentBoolExp {
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
}

/** input type for inserting data into table "comment" */
export interface CommentInsertInput {
  comment?: Maybe<Scalars['String']>;
  document?: Maybe<DocumentObjRelInsertInput>;
  documentId?: Maybe<Scalars['uuid']>;
  reactions?: Maybe<CommentReactionArrRelInsertInput>;
}

/** input type for inserting object relation for remote table "comment" */
export interface CommentObjRelInsertInput {
  data: CommentInsertInput;
  on_conflict?: Maybe<CommentOnConflict>;
}

/** on conflict condition type for table "comment" */
export interface CommentOnConflict {
  constraint: CommentConstraint;
  update_columns: Array<CommentUpdateColumn>;
  where?: Maybe<CommentBoolExp>;
}

/** ordering options when selecting data from "comment" */
export interface CommentOrderBy {
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  comment?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  document?: Maybe<DocumentOrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
}

/** primary key columns input for table: "comment" */
export interface CommentPkColumnsInput {
  id: Scalars['uuid'];
}

/** input type for inserting array relation for remote table "comment_reaction" */
export interface CommentReactionArrRelInsertInput {
  data: Array<CommentReactionInsertInput>;
}

/** Boolean expression to filter rows from the table "comment_reaction". All fields are combined with a logical 'AND'. */
export interface CommentReactionBoolExp {
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
  reactionId?: Maybe<StringComparisonExp>;
}

/** input type for inserting data into table "comment_reaction" */
export interface CommentReactionInsertInput {
  comment?: Maybe<CommentObjRelInsertInput>;
  commentId?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['String']>;
}

/** input type for inserting object relation for remote table "comment_reaction" */
export interface CommentReactionObjRelInsertInput {
  data: CommentReactionInsertInput;
}

/** ordering options when selecting data from "comment_reaction" */
export interface CommentReactionOrderBy {
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  comment?: Maybe<CommentOrderBy>;
  commentId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reaction?: Maybe<ReactionOrderBy>;
  reactionId?: Maybe<OrderBy>;
}

/** primary key columns input for table: "comment_reaction" */
export interface CommentReactionPkColumnsInput {
  id: Scalars['uuid'];
}

/** Boolean expression to filter rows from the table "comment_reactions_group". All fields are combined with a logical 'AND'. */
export interface CommentReactionsGroupBoolExp {
  _and?: Maybe<Array<Maybe<CommentReactionsGroupBoolExp>>>;
  _not?: Maybe<CommentReactionsGroupBoolExp>;
  _or?: Maybe<Array<Maybe<CommentReactionsGroupBoolExp>>>;
  count?: Maybe<BigintComparisonExp>;
  reactionid?: Maybe<StringComparisonExp>;
}

/** ordering options when selecting data from "comment_reactions_group" */
export interface CommentReactionsGroupOrderBy {
  count?: Maybe<OrderBy>;
  reactionid?: Maybe<OrderBy>;
}

/** input type for updating data in table "comment" */
export interface CommentSetInput {
  comment?: Maybe<Scalars['String']>;
}

/** input type for inserting array relation for remote table "document" */
export interface DocumentArrRelInsertInput {
  data: Array<DocumentInsertInput>;
  on_conflict?: Maybe<DocumentOnConflict>;
}

/** Boolean expression to filter rows from the table "document". All fields are combined with a logical 'AND'. */
export interface DocumentBoolExp {
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
  tags?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
}

/** input type for inserting data into table "document" */
export interface DocumentInsertInput {
  allowComments?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<CommentArrRelInsertInput>;
  content?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  labels?: Maybe<DocumentLabelArrRelInsertInput>;
  reactions?: Maybe<DocumentReactionArrRelInsertInput>;
  title?: Maybe<Scalars['String']>;
}

/** input type for inserting array relation for remote table "document_label" */
export interface DocumentLabelArrRelInsertInput {
  data: Array<DocumentLabelInsertInput>;
}

/** Boolean expression to filter rows from the table "document_label". All fields are combined with a logical 'AND'. */
export interface DocumentLabelBoolExp {
  _and?: Maybe<Array<Maybe<DocumentLabelBoolExp>>>;
  _not?: Maybe<DocumentLabelBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentLabelBoolExp>>>;
  author?: Maybe<UserBoolExp>;
  authorId?: Maybe<StringComparisonExp>;
  document?: Maybe<DocumentBoolExp>;
  id?: Maybe<UuidComparisonExp>;
  label?: Maybe<LabelBoolExp>;
  labelId?: Maybe<UuidComparisonExp>;
}

/** input type for inserting data into table "document_label" */
export interface DocumentLabelInsertInput {
  document?: Maybe<DocumentObjRelInsertInput>;
  documentId?: Maybe<Scalars['uuid']>;
  label?: Maybe<LabelObjRelInsertInput>;
  labelId?: Maybe<Scalars['uuid']>;
}

/** input type for inserting object relation for remote table "document_label" */
export interface DocumentLabelObjRelInsertInput {
  data: DocumentLabelInsertInput;
}

/** ordering options when selecting data from "document_label" */
export interface DocumentLabelOrderBy {
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  document?: Maybe<DocumentOrderBy>;
  id?: Maybe<OrderBy>;
  label?: Maybe<LabelOrderBy>;
  labelId?: Maybe<OrderBy>;
}

/** primary key columns input for table: "document_label" */
export interface DocumentLabelPkColumnsInput {
  id: Scalars['uuid'];
}

/** input type for inserting object relation for remote table "document" */
export interface DocumentObjRelInsertInput {
  data: DocumentInsertInput;
  on_conflict?: Maybe<DocumentOnConflict>;
}

/** on conflict condition type for table "document" */
export interface DocumentOnConflict {
  constraint: DocumentConstraint;
  update_columns: Array<DocumentUpdateColumn>;
  where?: Maybe<DocumentBoolExp>;
}

/** ordering options when selecting data from "document" */
export interface DocumentOrderBy {
  allowComments?: Maybe<OrderBy>;
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  content?: Maybe<OrderBy>;
  countComments?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isPublic?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
  tags?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
}

/** primary key columns input for table: "document" */
export interface DocumentPkColumnsInput {
  id: Scalars['uuid'];
}

/** input type for inserting array relation for remote table "document_reaction" */
export interface DocumentReactionArrRelInsertInput {
  data: Array<DocumentReactionInsertInput>;
}

/** Boolean expression to filter rows from the table "document_reaction". All fields are combined with a logical 'AND'. */
export interface DocumentReactionBoolExp {
  _and?: Maybe<Array<Maybe<DocumentReactionBoolExp>>>;
  _not?: Maybe<DocumentReactionBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentReactionBoolExp>>>;
  authorId?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  document?: Maybe<DocumentBoolExp>;
  documentId?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  reaction?: Maybe<ReactionBoolExp>;
  reactionId?: Maybe<StringComparisonExp>;
}

/** Boolean expression to filter rows from the table "document_reaction_group". All fields are combined with a logical 'AND'. */
export interface DocumentReactionGroupBoolExp {
  _and?: Maybe<Array<Maybe<DocumentReactionGroupBoolExp>>>;
  _not?: Maybe<DocumentReactionGroupBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentReactionGroupBoolExp>>>;
  count?: Maybe<BigintComparisonExp>;
  reaction_id?: Maybe<StringComparisonExp>;
}

/** ordering options when selecting data from "document_reaction_group" */
export interface DocumentReactionGroupOrderBy {
  count?: Maybe<OrderBy>;
  reaction_id?: Maybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "document_reaction_group_persisted". All fields are combined with a logical 'AND'. */
export interface DocumentReactionGroupPersistedBoolExp {
  _and?: Maybe<Array<Maybe<DocumentReactionGroupPersistedBoolExp>>>;
  _not?: Maybe<DocumentReactionGroupPersistedBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentReactionGroupPersistedBoolExp>>>;
  count?: Maybe<IntComparisonExp>;
  reactionid?: Maybe<StringComparisonExp>;
}

/** ordering options when selecting data from "document_reaction_group_persisted" */
export interface DocumentReactionGroupPersistedOrderBy {
  count?: Maybe<OrderBy>;
  reactionid?: Maybe<OrderBy>;
}

/** primary key columns input for table: "document_reaction_group_persisted" */
export interface DocumentReactionGroupPersistedPkColumnsInput {
  id: Scalars['bigint'];
}

/** input type for inserting data into table "document_reaction" */
export interface DocumentReactionInsertInput {
  document?: Maybe<DocumentObjRelInsertInput>;
  documentId?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['String']>;
}

/** input type for inserting object relation for remote table "document_reaction" */
export interface DocumentReactionObjRelInsertInput {
  data: DocumentReactionInsertInput;
}

/** ordering options when selecting data from "document_reaction" */
export interface DocumentReactionOrderBy {
  authorId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  document?: Maybe<DocumentOrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reaction?: Maybe<ReactionOrderBy>;
  reactionId?: Maybe<OrderBy>;
}

/** primary key columns input for table: "document_reaction" */
export interface DocumentReactionPkColumnsInput {
  id: Scalars['uuid'];
}

/** input type for updating data in table "document" */
export interface DocumentSetInput {
  allowComments?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

/** input type for inserting array relation for remote table "follow" */
export interface FollowArrRelInsertInput {
  data: Array<FollowInsertInput>;
}

/** Boolean expression to filter rows from the table "follow". All fields are combined with a logical 'AND'. */
export interface FollowBoolExp {
  _and?: Maybe<Array<Maybe<FollowBoolExp>>>;
  _not?: Maybe<FollowBoolExp>;
  _or?: Maybe<Array<Maybe<FollowBoolExp>>>;
  author?: Maybe<UserBoolExp>;
  authorId?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  following?: Maybe<UserBoolExp>;
  followingId?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
}

/** input type for inserting data into table "follow" */
export interface FollowInsertInput {
  followingId?: Maybe<Scalars['String']>;
}

/** input type for inserting object relation for remote table "follow" */
export interface FollowObjRelInsertInput {
  data: FollowInsertInput;
}

/** ordering options when selecting data from "follow" */
export interface FollowOrderBy {
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  following?: Maybe<UserOrderBy>;
  followingId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
}

/** primary key columns input for table: "follow" */
export interface FollowPkColumnsInput {
  id: Scalars['uuid'];
}

/** input type for inserting array relation for remote table "label" */
export interface LabelArrRelInsertInput {
  data: Array<LabelInsertInput>;
  on_conflict?: Maybe<LabelOnConflict>;
}

/** Boolean expression to filter rows from the table "label". All fields are combined with a logical 'AND'. */
export interface LabelBoolExp {
  _and?: Maybe<Array<Maybe<LabelBoolExp>>>;
  _not?: Maybe<LabelBoolExp>;
  _or?: Maybe<Array<Maybe<LabelBoolExp>>>;
  author?: Maybe<UserBoolExp>;
  authorId?: Maybe<StringComparisonExp>;
  color?: Maybe<ColorBoolExp>;
  colorName?: Maybe<StringComparisonExp>;
  document_labels?: Maybe<DocumentLabelBoolExp>;
  id?: Maybe<UuidComparisonExp>;
  label?: Maybe<StringComparisonExp>;
}

/** input type for inserting data into table "label" */
export interface LabelInsertInput {
  colorName?: Maybe<Scalars['String']>;
  document_labels?: Maybe<DocumentLabelArrRelInsertInput>;
  label?: Maybe<Scalars['String']>;
}

/** input type for inserting object relation for remote table "label" */
export interface LabelObjRelInsertInput {
  data: LabelInsertInput;
  on_conflict?: Maybe<LabelOnConflict>;
}

/** on conflict condition type for table "label" */
export interface LabelOnConflict {
  constraint: LabelConstraint;
  update_columns: Array<LabelUpdateColumn>;
  where?: Maybe<LabelBoolExp>;
}

/** ordering options when selecting data from "label" */
export interface LabelOrderBy {
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  color?: Maybe<ColorOrderBy>;
  colorName?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  label?: Maybe<OrderBy>;
}

/** primary key columns input for table: "label" */
export interface LabelPkColumnsInput {
  id: Scalars['uuid'];
}

/** input type for updating data in table "label" */
export interface LabelSetInput {
  colorName?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
}

/** Boolean expression to filter rows from the table "reaction". All fields are combined with a logical 'AND'. */
export interface ReactionBoolExp {
  _and?: Maybe<Array<Maybe<ReactionBoolExp>>>;
  _not?: Maybe<ReactionBoolExp>;
  _or?: Maybe<Array<Maybe<ReactionBoolExp>>>;
  htmlCode?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
}

/** ordering options when selecting data from "reaction" */
export interface ReactionOrderBy {
  htmlCode?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
}

/** primary key columns input for table: "reaction" */
export interface ReactionPkColumnsInput {
  htmlCode: Scalars['String'];
}

export interface SearchDocumentsArgs {
  search?: Maybe<Scalars['String']>;
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface UserBoolExp {
  _and?: Maybe<Array<Maybe<UserBoolExp>>>;
  _not?: Maybe<UserBoolExp>;
  _or?: Maybe<Array<Maybe<UserBoolExp>>>;
  authId?: Maybe<StringComparisonExp>;
  balanceCommentReaction?: Maybe<BigintComparisonExp>;
  balanceDocumentReaction?: Maybe<BigintComparisonExp>;
  countPrivateDocs?: Maybe<IntComparisonExp>;
  countWrittenComments?: Maybe<IntComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  document_labels?: Maybe<DocumentLabelBoolExp>;
  documents?: Maybe<DocumentBoolExp>;
  followers?: Maybe<FollowBoolExp>;
  followings?: Maybe<FollowBoolExp>;
  id?: Maybe<UuidComparisonExp>;
  imageUrl?: Maybe<StringComparisonExp>;
  labels?: Maybe<LabelBoolExp>;
  maxPrivateDocs?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
}

/** on conflict condition type for table "user" */
export interface UserOnConflict {
  constraint: UserConstraint;
  update_columns: Array<UserUpdateColumn>;
  where?: Maybe<UserBoolExp>;
}

/** ordering options when selecting data from "user" */
export interface UserOrderBy {
  authId?: Maybe<OrderBy>;
  balanceCommentReaction?: Maybe<OrderBy>;
  balanceDocumentReaction?: Maybe<OrderBy>;
  countPrivateDocs?: Maybe<OrderBy>;
  countWrittenComments?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  imageUrl?: Maybe<OrderBy>;
  maxPrivateDocs?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
}

/** primary key columns input for table: "user" */
export interface UserPkColumnsInput {
  id: Scalars['uuid'];
}

/** input type for updating data in table "user" */
export interface UserSetInput {
  name?: Maybe<Scalars['String']>;
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export interface UuidComparisonExp {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
}




export type UCommentSectionCommentAuthorFragment = { __typename?: 'user', authId: string, name: string, imageUrl?: Maybe<string> };

export type UCommentSectionCommentReactionGroupFragment = { __typename?: 'comment_reactions_group', count?: Maybe<any>, reactionid?: Maybe<string> };

export type UCommentSectionCommentReactionFragment = { __typename?: 'comment_reaction', reactionId: string };

export type UCommentSectionCommentFragment = { __typename?: 'comment', id: any, comment: string, createdAt: any, reactionBalance: number, author: (
    { __typename?: 'user' }
    & UCommentSectionCommentAuthorFragment
  ), reactionsGroup: Array<(
    { __typename?: 'comment_reactions_group' }
    & UCommentSectionCommentReactionGroupFragment
  )>, myReactions: Array<(
    { __typename?: 'comment_reaction' }
    & UCommentSectionCommentReactionFragment
  )> };

export type UCommentSectionCommentsQueryVariables = Exact<{
  documentId: Scalars['uuid'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  authorId: Scalars['String'];
}>;


export type UCommentSectionCommentsQuery = { __typename?: 'query_root', allComments: Array<(
    { __typename?: 'comment' }
    & UCommentSectionCommentFragment
  )> };

export type UCommentSectionAddCommentReactionMutationVariables = Exact<{
  commentId: Scalars['uuid'];
  reactionId: Scalars['String'];
}>;


export type UCommentSectionAddCommentReactionMutation = { __typename?: 'mutation_root', addCommentReaction?: Maybe<{ __typename?: 'comment_reaction_mutation_response', affected_rows: number }> };

export type UCommentSectionRemoveCommentReactionMutationVariables = Exact<{
  commentId: Scalars['uuid'];
  reactionId: Scalars['String'];
}>;


export type UCommentSectionRemoveCommentReactionMutation = { __typename?: 'mutation_root', removeCommentReaction?: Maybe<{ __typename?: 'comment_reaction_mutation_response', affected_rows: number }> };

export type UAddCommentMutationVariables = Exact<{
  comment: Scalars['String'];
  documentId: Scalars['uuid'];
}>;


export type UAddCommentMutation = { __typename?: 'mutation_root', addComment?: Maybe<{ __typename?: 'comment_mutation_response', returning: Array<{ __typename?: 'comment', id: any }> }> };

export type URemoveCommentMutationVariables = Exact<{
  commentId: Scalars['uuid'];
}>;


export type URemoveCommentMutation = { __typename?: 'mutation_root', removeComment?: Maybe<{ __typename?: 'comment_mutation_response', affected_rows: number }> };

export type UEditCommentMutationVariables = Exact<{
  commentId: Scalars['uuid'];
  comment: Scalars['String'];
}>;


export type UEditCommentMutation = { __typename?: 'mutation_root', updateComment?: Maybe<{ __typename?: 'comment_mutation_response', affected_rows: number }> };

export type UHasuraUserFragment = { __typename?: 'user', authId: string, name: string, id: any, countPrivateDocs: number, countWrittenComments: number, imageUrl?: Maybe<string> };

export type UMeQueryVariables = Exact<{
  authId: Scalars['String'];
}>;


export type UMeQuery = { __typename?: 'query_root', allUsers: Array<(
    { __typename?: 'user' }
    & UHasuraUserFragment
  )> };

export type UUpdateUserNameMutationVariables = Exact<{
  authId: Scalars['String'];
  name: Scalars['String'];
}>;


export type UUpdateUserNameMutation = { __typename?: 'mutation_root', updateUser?: Maybe<{ __typename?: 'user_mutation_response', affected_rows: number }> };

export type UEditDocAuthorFragment = { __typename?: 'user', authId: string, imageUrl?: Maybe<string>, name: string, followers: Array<{ __typename?: 'follow', id: any }> };

export type UEditDocLabelFragment = { __typename?: 'document_label', label: { __typename?: 'label', label: string, color: { __typename?: 'color', color: string } } };

export type UEditDocReactionGroupFragment = { __typename?: 'document_reaction_group_persisted', count: number, reactionid: string };

export type UEditDocReactionFragment = { __typename?: 'document_reaction', reactionId: string };

export type UEditDocFragment = { __typename?: 'document', updatedAt: any, countComments: number, allowComments: boolean, isPublic: boolean, title: string, content: string, id: any, tags?: Maybe<string>, author: (
    { __typename?: 'user' }
    & UEditDocAuthorFragment
  ), reactionsGroup: Array<(
    { __typename?: 'document_reaction_group_persisted' }
    & UEditDocReactionGroupFragment
  )>, labels: Array<(
    { __typename?: 'document_label' }
    & UEditDocLabelFragment
  )>, reactions: Array<(
    { __typename?: 'document_reaction' }
    & UEditDocReactionFragment
  )> };

export type UEditDocumentGetQueryVariables = Exact<{
  documentId: Scalars['uuid'];
  authorId: Scalars['String'];
}>;


export type UEditDocumentGetQuery = { __typename?: 'query_root', document?: Maybe<(
    { __typename?: 'document' }
    & UEditDocFragment
  )> };

export type UEditDocumentSaveMutationVariables = Exact<{
  documentId: Scalars['uuid'];
  documentInput?: Maybe<DocumentSetInput>;
}>;


export type UEditDocumentSaveMutation = { __typename?: 'mutation_root', updateDocument?: Maybe<{ __typename?: 'document_mutation_response', affected_rows: number }> };

export type UEditDocumentAddMutationVariables = Exact<{
  newDocument: DocumentInsertInput;
}>;


export type UEditDocumentAddMutation = { __typename?: 'mutation_root', addDocument?: Maybe<{ __typename?: 'document_mutation_response', returning: Array<{ __typename?: 'document', id: any }> }> };

export type UDeleteDocumentMutationVariables = Exact<{
  documentId: Scalars['uuid'];
}>;


export type UDeleteDocumentMutation = { __typename?: 'mutation_root', removeDocument?: Maybe<{ __typename?: 'document_mutation_response', affected_rows: number }> };

export type USetDocumentTagMutationVariables = Exact<{
  documentId: Scalars['uuid'];
  tags?: Maybe<Scalars['String']>;
}>;


export type USetDocumentTagMutation = { __typename?: 'mutation_root', updateDocument?: Maybe<{ __typename?: 'document_mutation_response', affected_rows: number }> };

export type UFeedDocAuthorFragment = { __typename?: 'user', authId: string, imageUrl?: Maybe<string>, name: string, followers: Array<{ __typename?: 'follow', id: any }> };

export type UFeedDocLabelFragment = { __typename?: 'document_label', label: { __typename?: 'label', label: string, color: { __typename?: 'color', color: string } } };

export type UFeedDocReactionGroupFragment = { __typename?: 'document_reaction_group_persisted', count: number, reactionid: string };

export type UFeedDocReactionFragment = { __typename?: 'document_reaction', reactionId: string };

export type UFeedDocFragment = { __typename?: 'document', updatedAt: any, countComments: number, allowComments: boolean, isPublic: boolean, title: string, content: string, tags?: Maybe<string>, id: any, author: (
    { __typename?: 'user' }
    & UFeedDocAuthorFragment
  ), reactionsGroup: Array<(
    { __typename?: 'document_reaction_group_persisted' }
    & UFeedDocReactionGroupFragment
  )>, labels: Array<(
    { __typename?: 'document_label' }
    & UFeedDocLabelFragment
  )>, reactions: Array<(
    { __typename?: 'document_reaction' }
    & UFeedDocReactionFragment
  )> };

export type UFeedDocsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  authorId: Scalars['String'];
  filter?: Maybe<DocumentBoolExp>;
}>;


export type UFeedDocsQuery = { __typename?: 'query_root', allDocuments: Array<(
    { __typename?: 'document' }
    & UFeedDocFragment
  )> };

export type USearchFeedDocsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  authorId: Scalars['String'];
  filter?: Maybe<DocumentBoolExp>;
  search?: Maybe<Scalars['String']>;
}>;


export type USearchFeedDocsQuery = { __typename?: 'query_root', allDocuments: Array<(
    { __typename?: 'document' }
    & UFeedDocFragment
  )> };

export type UAddDocumentReactionMutationVariables = Exact<{
  documentReaction: DocumentReactionInsertInput;
}>;


export type UAddDocumentReactionMutation = { __typename?: 'mutation_root', addDocumentReaction?: Maybe<{ __typename?: 'document_reaction_mutation_response', returning: Array<{ __typename?: 'document_reaction', reactionId: string, documentId: any }> }> };

export type UAddCommentReactionMutationVariables = Exact<{
  commentReaction: CommentReactionInsertInput;
}>;


export type UAddCommentReactionMutation = { __typename?: 'mutation_root', addCommentReaction?: Maybe<{ __typename?: 'comment_reaction_mutation_response', returning: Array<{ __typename?: 'comment_reaction', reactionId: string, commentId: any }> }> };

export type URemoveDocumentReactionMutationVariables = Exact<{
  reactionId: Scalars['String'];
  documentId: Scalars['uuid'];
}>;


export type URemoveDocumentReactionMutation = { __typename?: 'mutation_root', removeDocumentReaction?: Maybe<{ __typename?: 'document_reaction_mutation_response', affected_rows: number }> };

export type URemoveCommentReactionMutationVariables = Exact<{
  reactionId: Scalars['String'];
  commentId: Scalars['uuid'];
}>;


export type URemoveCommentReactionMutation = { __typename?: 'mutation_root', removeCommentReaction?: Maybe<{ __typename?: 'comment_reaction_mutation_response', affected_rows: number }> };

export type UChangeDocumentVisibilityMutationVariables = Exact<{
  documentId: Scalars['uuid'];
  isPublic: Scalars['Boolean'];
}>;


export type UChangeDocumentVisibilityMutation = { __typename?: 'mutation_root', updateDocument?: Maybe<{ __typename?: 'document_mutation_response', affected_rows: number }> };

export const UCommentSectionCommentAuthorFragmentDoc = gql`
    fragment UCommentSectionCommentAuthor on user {
  authId
  name
  imageUrl
}
    `;
export const UCommentSectionCommentReactionGroupFragmentDoc = gql`
    fragment UCommentSectionCommentReactionGroup on comment_reactions_group {
  count
  reactionid
}
    `;
export const UCommentSectionCommentReactionFragmentDoc = gql`
    fragment UCommentSectionCommentReaction on comment_reaction {
  reactionId
}
    `;
export const UCommentSectionCommentFragmentDoc = gql`
    fragment UCommentSectionComment on comment {
  id
  author {
    ...UCommentSectionCommentAuthor
  }
  comment
  createdAt
  reactionBalance
  reactionsGroup {
    ...UCommentSectionCommentReactionGroup
  }
  myReactions: reactions(where: {authorId: {_eq: $authorId}}) {
    ...UCommentSectionCommentReaction
  }
}
    ${UCommentSectionCommentAuthorFragmentDoc}
${UCommentSectionCommentReactionGroupFragmentDoc}
${UCommentSectionCommentReactionFragmentDoc}`;
export const UHasuraUserFragmentDoc = gql`
    fragment UHasuraUser on user {
  authId
  name
  id
  countPrivateDocs
  countWrittenComments
  imageUrl
}
    `;
export const UEditDocAuthorFragmentDoc = gql`
    fragment UEditDocAuthor on user {
  authId
  imageUrl
  name
  followers(where: {authorId: {_eq: $authorId}}) {
    id
  }
}
    `;
export const UEditDocReactionGroupFragmentDoc = gql`
    fragment UEditDocReactionGroup on document_reaction_group_persisted {
  count
  reactionid
}
    `;
export const UEditDocLabelFragmentDoc = gql`
    fragment UEditDocLabel on document_label {
  label {
    label
    color {
      color
    }
  }
}
    `;
export const UEditDocReactionFragmentDoc = gql`
    fragment UEditDocReaction on document_reaction {
  reactionId
}
    `;
export const UEditDocFragmentDoc = gql`
    fragment UEditDoc on document {
  author {
    ...UEditDocAuthor
  }
  updatedAt
  reactionsGroup(limit: 10, order_by: {count: desc}) {
    ...UEditDocReactionGroup
  }
  countComments
  allowComments
  isPublic
  labels(limit: 10) {
    ...UEditDocLabel
  }
  title
  content
  id
  tags
  reactions(where: {authorId: {_eq: $authorId}}) {
    ...UEditDocReaction
  }
}
    ${UEditDocAuthorFragmentDoc}
${UEditDocReactionGroupFragmentDoc}
${UEditDocLabelFragmentDoc}
${UEditDocReactionFragmentDoc}`;
export const UFeedDocAuthorFragmentDoc = gql`
    fragment UFeedDocAuthor on user {
  authId
  imageUrl
  name
  followers(where: {authorId: {_eq: $authorId}}) {
    id
  }
}
    `;
export const UFeedDocReactionGroupFragmentDoc = gql`
    fragment UFeedDocReactionGroup on document_reaction_group_persisted {
  count
  reactionid
}
    `;
export const UFeedDocLabelFragmentDoc = gql`
    fragment UFeedDocLabel on document_label {
  label {
    label
    color {
      color
    }
  }
}
    `;
export const UFeedDocReactionFragmentDoc = gql`
    fragment UFeedDocReaction on document_reaction {
  reactionId
}
    `;
export const UFeedDocFragmentDoc = gql`
    fragment UFeedDoc on document {
  author {
    ...UFeedDocAuthor
  }
  updatedAt
  reactionsGroup(limit: 10, order_by: {count: desc}) {
    ...UFeedDocReactionGroup
  }
  countComments
  allowComments
  isPublic
  labels(limit: 10) {
    ...UFeedDocLabel
  }
  title
  content
  tags
  id
  reactions(where: {authorId: {_eq: $authorId}}) {
    ...UFeedDocReaction
  }
}
    ${UFeedDocAuthorFragmentDoc}
${UFeedDocReactionGroupFragmentDoc}
${UFeedDocLabelFragmentDoc}
${UFeedDocReactionFragmentDoc}`;
export const UCommentSectionCommentsDocument = gql`
    query UCommentSectionComments($documentId: uuid!, $limit: Int!, $offset: Int!, $authorId: String!) {
  allComments(where: {documentId: {_eq: $documentId}}, limit: $limit, offset: $offset, order_by: [{createdAt: desc}]) {
    ...UCommentSectionComment
  }
}
    ${UCommentSectionCommentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UCommentSectionCommentsGQL extends Apollo.Query<UCommentSectionCommentsQuery, UCommentSectionCommentsQueryVariables> {
    document = UCommentSectionCommentsDocument;
    
  }
export const UCommentSectionAddCommentReactionDocument = gql`
    mutation UCommentSectionAddCommentReaction($commentId: uuid!, $reactionId: String!) {
  addCommentReaction(objects: [{commentId: $commentId, reactionId: $reactionId}]) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UCommentSectionAddCommentReactionGQL extends Apollo.Mutation<UCommentSectionAddCommentReactionMutation, UCommentSectionAddCommentReactionMutationVariables> {
    document = UCommentSectionAddCommentReactionDocument;
    
  }
export const UCommentSectionRemoveCommentReactionDocument = gql`
    mutation UCommentSectionRemoveCommentReaction($commentId: uuid!, $reactionId: String!) {
  removeCommentReaction(where: {commentId: {_eq: $commentId}, reactionId: {_eq: $reactionId}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UCommentSectionRemoveCommentReactionGQL extends Apollo.Mutation<UCommentSectionRemoveCommentReactionMutation, UCommentSectionRemoveCommentReactionMutationVariables> {
    document = UCommentSectionRemoveCommentReactionDocument;
    
  }
export const UAddCommentDocument = gql`
    mutation UAddComment($comment: String!, $documentId: uuid!) {
  addComment(objects: [{comment: $comment, documentId: $documentId}]) {
    returning {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UAddCommentGQL extends Apollo.Mutation<UAddCommentMutation, UAddCommentMutationVariables> {
    document = UAddCommentDocument;
    
  }
export const URemoveCommentDocument = gql`
    mutation URemoveComment($commentId: uuid!) {
  removeComment(where: {id: {_eq: $commentId}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class URemoveCommentGQL extends Apollo.Mutation<URemoveCommentMutation, URemoveCommentMutationVariables> {
    document = URemoveCommentDocument;
    
  }
export const UEditCommentDocument = gql`
    mutation UEditComment($commentId: uuid!, $comment: String!) {
  updateComment(where: {id: {_eq: $commentId}}, _set: {comment: $comment}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UEditCommentGQL extends Apollo.Mutation<UEditCommentMutation, UEditCommentMutationVariables> {
    document = UEditCommentDocument;
    
  }
export const UMeDocument = gql`
    query UMe($authId: String!) {
  allUsers(where: {authId: {_eq: $authId}}) {
    ...UHasuraUser
  }
}
    ${UHasuraUserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UMeGQL extends Apollo.Query<UMeQuery, UMeQueryVariables> {
    document = UMeDocument;
    
  }
export const UUpdateUserNameDocument = gql`
    mutation UUpdateUserName($authId: String!, $name: String!) {
  updateUser(where: {authId: {_eq: $authId}}, _set: {name: $name}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UUpdateUserNameGQL extends Apollo.Mutation<UUpdateUserNameMutation, UUpdateUserNameMutationVariables> {
    document = UUpdateUserNameDocument;
    
  }
export const UEditDocumentGetDocument = gql`
    query UEditDocumentGet($documentId: uuid!, $authorId: String!) {
  document(id: $documentId) {
    ...UEditDoc
  }
}
    ${UEditDocFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UEditDocumentGetGQL extends Apollo.Query<UEditDocumentGetQuery, UEditDocumentGetQueryVariables> {
    document = UEditDocumentGetDocument;
    
  }
export const UEditDocumentSaveDocument = gql`
    mutation UEditDocumentSave($documentId: uuid!, $documentInput: document_set_input) {
  updateDocument(where: {id: {_eq: $documentId}}, _set: $documentInput) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UEditDocumentSaveGQL extends Apollo.Mutation<UEditDocumentSaveMutation, UEditDocumentSaveMutationVariables> {
    document = UEditDocumentSaveDocument;
    
  }
export const UEditDocumentAddDocument = gql`
    mutation UEditDocumentAdd($newDocument: document_insert_input!) {
  addDocument(objects: [$newDocument]) {
    returning {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UEditDocumentAddGQL extends Apollo.Mutation<UEditDocumentAddMutation, UEditDocumentAddMutationVariables> {
    document = UEditDocumentAddDocument;
    
  }
export const UDeleteDocumentDocument = gql`
    mutation UDeleteDocument($documentId: uuid!) {
  removeDocument(where: {id: {_eq: $documentId}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UDeleteDocumentGQL extends Apollo.Mutation<UDeleteDocumentMutation, UDeleteDocumentMutationVariables> {
    document = UDeleteDocumentDocument;
    
  }
export const USetDocumentTagDocument = gql`
    mutation USetDocumentTag($documentId: uuid!, $tags: String) {
  updateDocument(where: {id: {_eq: $documentId}}, _set: {tags: $tags}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class USetDocumentTagGQL extends Apollo.Mutation<USetDocumentTagMutation, USetDocumentTagMutationVariables> {
    document = USetDocumentTagDocument;
    
  }
export const UFeedDocsDocument = gql`
    query UFeedDocs($limit: Int!, $offset: Int!, $authorId: String!, $filter: document_bool_exp) {
  allDocuments(limit: $limit, offset: $offset, order_by: {createdAt: desc}, where: $filter) {
    ...UFeedDoc
  }
}
    ${UFeedDocFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UFeedDocsGQL extends Apollo.Query<UFeedDocsQuery, UFeedDocsQueryVariables> {
    document = UFeedDocsDocument;
    
  }
export const USearchFeedDocsDocument = gql`
    query USearchFeedDocs($limit: Int!, $offset: Int!, $authorId: String!, $filter: document_bool_exp, $search: String) {
  allDocuments: search_documents(limit: $limit, offset: $offset, where: $filter, args: {search: $search}) {
    ...UFeedDoc
  }
}
    ${UFeedDocFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class USearchFeedDocsGQL extends Apollo.Query<USearchFeedDocsQuery, USearchFeedDocsQueryVariables> {
    document = USearchFeedDocsDocument;
    
  }
export const UAddDocumentReactionDocument = gql`
    mutation UAddDocumentReaction($documentReaction: document_reaction_insert_input!) {
  addDocumentReaction(objects: [$documentReaction]) {
    returning {
      reactionId
      documentId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UAddDocumentReactionGQL extends Apollo.Mutation<UAddDocumentReactionMutation, UAddDocumentReactionMutationVariables> {
    document = UAddDocumentReactionDocument;
    
  }
export const UAddCommentReactionDocument = gql`
    mutation UAddCommentReaction($commentReaction: comment_reaction_insert_input!) {
  addCommentReaction(objects: [$commentReaction]) {
    returning {
      reactionId
      commentId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UAddCommentReactionGQL extends Apollo.Mutation<UAddCommentReactionMutation, UAddCommentReactionMutationVariables> {
    document = UAddCommentReactionDocument;
    
  }
export const URemoveDocumentReactionDocument = gql`
    mutation URemoveDocumentReaction($reactionId: String!, $documentId: uuid!) {
  removeDocumentReaction(where: {documentId: {_eq: $documentId}, reactionId: {_eq: $reactionId}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class URemoveDocumentReactionGQL extends Apollo.Mutation<URemoveDocumentReactionMutation, URemoveDocumentReactionMutationVariables> {
    document = URemoveDocumentReactionDocument;
    
  }
export const URemoveCommentReactionDocument = gql`
    mutation URemoveCommentReaction($reactionId: String!, $commentId: uuid!) {
  removeCommentReaction(where: {commentId: {_eq: $commentId}, reactionId: {_eq: $reactionId}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class URemoveCommentReactionGQL extends Apollo.Mutation<URemoveCommentReactionMutation, URemoveCommentReactionMutationVariables> {
    document = URemoveCommentReactionDocument;
    
  }
export const UChangeDocumentVisibilityDocument = gql`
    mutation UChangeDocumentVisibility($documentId: uuid!, $isPublic: Boolean!) {
  updateDocument(where: {id: {_eq: $documentId}}, _set: {isPublic: $isPublic}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UChangeDocumentVisibilityGQL extends Apollo.Mutation<UChangeDocumentVisibilityMutation, UChangeDocumentVisibilityMutationVariables> {
    document = UChangeDocumentVisibilityDocument;
    
  }