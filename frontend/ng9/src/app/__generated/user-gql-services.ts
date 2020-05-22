import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
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




/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export interface Bigint_Comparison_Exp {
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

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export interface Boolean_Comparison_Exp {
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

/** columns and relationships of "color" */
export interface Color {
   __typename?: 'color';
  color: Scalars['String'];
  name: Scalars['String'];
}

/** Boolean expression to filter rows from the table "color". All fields are combined with a logical 'AND'. */
export interface Color_Bool_Exp {
  _and?: Maybe<Array<Maybe<Color_Bool_Exp>>>;
  _not?: Maybe<Color_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Color_Bool_Exp>>>;
  color?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
}

/** ordering options when selecting data from "color" */
export interface Color_Order_By {
  color?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
}

/** primary key columns input for table: "color" */
export interface Color_Pk_Columns_Input {
  name: Scalars['String'];
}

/** select columns of table "color" */
export enum Color_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Name = 'name'
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
  reactionsGroup: Array<Comment_Reactions_Group>;
  updatedAt: Scalars['timestamptz'];
}


/** columns and relationships of "comment" */
export type CommentReactionsGroupArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Group_Order_By>>;
  where?: Maybe<Comment_Reactions_Group_Bool_Exp>;
};

/** input type for inserting array relation for remote table "comment" */
export interface Comment_Arr_Rel_Insert_Input {
  data: Array<Comment_Insert_Input>;
  on_conflict?: Maybe<Comment_On_Conflict>;
}

/** Boolean expression to filter rows from the table "comment". All fields are combined with a logical 'AND'. */
export interface Comment_Bool_Exp {
  _and?: Maybe<Array<Maybe<Comment_Bool_Exp>>>;
  _not?: Maybe<Comment_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comment_Bool_Exp>>>;
  author?: Maybe<User_Bool_Exp>;
  authorId?: Maybe<String_Comparison_Exp>;
  comment?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  document?: Maybe<Document_Bool_Exp>;
  documentId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  reactionBalance?: Maybe<Int_Comparison_Exp>;
  reactionsGroup?: Maybe<Comment_Reactions_Group_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
}

/** unique or primary key constraints on table "comment" */
export enum Comment_Constraint {
  /** unique or primary key constraint */
  CommentPkey = 'comment_pkey'
}

/** input type for inserting data into table "comment" */
export interface Comment_Insert_Input {
  comment?: Maybe<Scalars['String']>;
  document?: Maybe<Document_Obj_Rel_Insert_Input>;
  documentId?: Maybe<Scalars['uuid']>;
}

/** response of any mutation on the table "comment" */
export interface Comment_Mutation_Response {
   __typename?: 'comment_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comment>;
}

/** input type for inserting object relation for remote table "comment" */
export interface Comment_Obj_Rel_Insert_Input {
  data: Comment_Insert_Input;
  on_conflict?: Maybe<Comment_On_Conflict>;
}

/** on conflict condition type for table "comment" */
export interface Comment_On_Conflict {
  constraint: Comment_Constraint;
  update_columns: Array<Comment_Update_Column>;
  where?: Maybe<Comment_Bool_Exp>;
}

/** ordering options when selecting data from "comment" */
export interface Comment_Order_By {
  author?: Maybe<User_Order_By>;
  authorId?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  document?: Maybe<Document_Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
}

/** primary key columns input for table: "comment" */
export interface Comment_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** columns and relationships of "comment_reaction" */
export interface Comment_Reaction {
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
  reaction_id: Scalars['String'];
}

/** input type for inserting array relation for remote table "comment_reaction" */
export interface Comment_Reaction_Arr_Rel_Insert_Input {
  data: Array<Comment_Reaction_Insert_Input>;
}

/** Boolean expression to filter rows from the table "comment_reaction". All fields are combined with a logical 'AND'. */
export interface Comment_Reaction_Bool_Exp {
  _and?: Maybe<Array<Maybe<Comment_Reaction_Bool_Exp>>>;
  _not?: Maybe<Comment_Reaction_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comment_Reaction_Bool_Exp>>>;
  author?: Maybe<User_Bool_Exp>;
  authorId?: Maybe<String_Comparison_Exp>;
  comment?: Maybe<Comment_Bool_Exp>;
  commentId?: Maybe<Uuid_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  reaction?: Maybe<Reaction_Bool_Exp>;
  reaction_id?: Maybe<String_Comparison_Exp>;
}

/** input type for inserting data into table "comment_reaction" */
export interface Comment_Reaction_Insert_Input {
  comment?: Maybe<Comment_Obj_Rel_Insert_Input>;
  commentId?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "comment_reaction" */
export interface Comment_Reaction_Mutation_Response {
   __typename?: 'comment_reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comment_Reaction>;
}

/** input type for inserting object relation for remote table "comment_reaction" */
export interface Comment_Reaction_Obj_Rel_Insert_Input {
  data: Comment_Reaction_Insert_Input;
}

/** ordering options when selecting data from "comment_reaction" */
export interface Comment_Reaction_Order_By {
  author?: Maybe<User_Order_By>;
  authorId?: Maybe<Order_By>;
  comment?: Maybe<Comment_Order_By>;
  commentId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reaction?: Maybe<Reaction_Order_By>;
  reaction_id?: Maybe<Order_By>;
}

/** primary key columns input for table: "comment_reaction" */
export interface Comment_Reaction_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "comment_reaction" */
export enum Comment_Reaction_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CommentId = 'commentId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ReactionId = 'reaction_id'
}

/** columns and relationships of "comment_reactions_group" */
export interface Comment_Reactions_Group {
   __typename?: 'comment_reactions_group';
  count?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
}

/** Boolean expression to filter rows from the table "comment_reactions_group". All fields are combined with a logical 'AND'. */
export interface Comment_Reactions_Group_Bool_Exp {
  _and?: Maybe<Array<Maybe<Comment_Reactions_Group_Bool_Exp>>>;
  _not?: Maybe<Comment_Reactions_Group_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comment_Reactions_Group_Bool_Exp>>>;
  count?: Maybe<Bigint_Comparison_Exp>;
  reactionid?: Maybe<String_Comparison_Exp>;
}

/** ordering options when selecting data from "comment_reactions_group" */
export interface Comment_Reactions_Group_Order_By {
  count?: Maybe<Order_By>;
  reactionid?: Maybe<Order_By>;
}

/** select columns of table "comment_reactions_group" */
export enum Comment_Reactions_Group_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Reactionid = 'reactionid'
}

/** select columns of table "comment" */
export enum Comment_Select_Column {
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

/** input type for updating data in table "comment" */
export interface Comment_Set_Input {
  comment?: Maybe<Scalars['String']>;
}

/** update columns of table "comment" */
export enum Comment_Update_Column {
  /** column name */
  Comment = 'comment'
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
  /** An object relationship */
  content?: Maybe<Document_Content>;
  countComments: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  isPublic: Scalars['Boolean'];
  /** An array relationship */
  labels: Array<Document_Label>;
  reactionBalance: Scalars['Int'];
  /** An array relationship */
  reactions: Array<Document_Reaction>;
  /** An array relationship */
  reactionsGroup: Array<Document_Reaction_Group_Persisted>;
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
}


/** columns and relationships of "document" */
export type DocumentCommentsArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};


/** columns and relationships of "document" */
export type DocumentLabelsArgs = {
  distinct_on?: Maybe<Array<Document_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Label_Order_By>>;
  where?: Maybe<Document_Label_Bool_Exp>;
};


/** columns and relationships of "document" */
export type DocumentReactionsArgs = {
  distinct_on?: Maybe<Array<Document_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Reaction_Order_By>>;
  where?: Maybe<Document_Reaction_Bool_Exp>;
};


/** columns and relationships of "document" */
export type DocumentReactionsGroupArgs = {
  distinct_on?: Maybe<Array<Document_Reaction_Group_Persisted_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Reaction_Group_Persisted_Order_By>>;
  where?: Maybe<Document_Reaction_Group_Persisted_Bool_Exp>;
};

/** input type for inserting array relation for remote table "document" */
export interface Document_Arr_Rel_Insert_Input {
  data: Array<Document_Insert_Input>;
  on_conflict?: Maybe<Document_On_Conflict>;
}

/** Boolean expression to filter rows from the table "document". All fields are combined with a logical 'AND'. */
export interface Document_Bool_Exp {
  _and?: Maybe<Array<Maybe<Document_Bool_Exp>>>;
  _not?: Maybe<Document_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Bool_Exp>>>;
  allowComments?: Maybe<Boolean_Comparison_Exp>;
  author?: Maybe<User_Bool_Exp>;
  authorId?: Maybe<String_Comparison_Exp>;
  comments?: Maybe<Comment_Bool_Exp>;
  content?: Maybe<Document_Content_Bool_Exp>;
  countComments?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  isPublic?: Maybe<Boolean_Comparison_Exp>;
  labels?: Maybe<Document_Label_Bool_Exp>;
  reactionBalance?: Maybe<Int_Comparison_Exp>;
  reactions?: Maybe<Document_Reaction_Bool_Exp>;
  reactionsGroup?: Maybe<Document_Reaction_Group_Persisted_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
}

/** unique or primary key constraints on table "document" */
export enum Document_Constraint {
  /** unique or primary key constraint */
  DocumentPkey = 'document_pkey'
}

/** columns and relationships of "document_content" */
export interface Document_Content {
   __typename?: 'document_content';
  content: Scalars['String'];
  /** An object relationship */
  document: Document;
  documentId: Scalars['uuid'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
}

/** input type for inserting array relation for remote table "document_content" */
export interface Document_Content_Arr_Rel_Insert_Input {
  data: Array<Document_Content_Insert_Input>;
  on_conflict?: Maybe<Document_Content_On_Conflict>;
}

/** Boolean expression to filter rows from the table "document_content". All fields are combined with a logical 'AND'. */
export interface Document_Content_Bool_Exp {
  _and?: Maybe<Array<Maybe<Document_Content_Bool_Exp>>>;
  _not?: Maybe<Document_Content_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Content_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  document?: Maybe<Document_Bool_Exp>;
  documentId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
}

/** unique or primary key constraints on table "document_content" */
export enum Document_Content_Constraint {
  /** unique or primary key constraint */
  DocumentContentDocumentIdKey = 'document_content_document_id_key',
  /** unique or primary key constraint */
  DocumentContentPkey = 'document_content_pkey'
}

/** input type for inserting data into table "document_content" */
export interface Document_Content_Insert_Input {
  content?: Maybe<Scalars['String']>;
  document?: Maybe<Document_Obj_Rel_Insert_Input>;
  documentId?: Maybe<Scalars['uuid']>;
}

/** response of any mutation on the table "document_content" */
export interface Document_Content_Mutation_Response {
   __typename?: 'document_content_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document_Content>;
}

/** input type for inserting object relation for remote table "document_content" */
export interface Document_Content_Obj_Rel_Insert_Input {
  data: Document_Content_Insert_Input;
  on_conflict?: Maybe<Document_Content_On_Conflict>;
}

/** on conflict condition type for table "document_content" */
export interface Document_Content_On_Conflict {
  constraint: Document_Content_Constraint;
  update_columns: Array<Document_Content_Update_Column>;
  where?: Maybe<Document_Content_Bool_Exp>;
}

/** ordering options when selecting data from "document_content" */
export interface Document_Content_Order_By {
  content?: Maybe<Order_By>;
  document?: Maybe<Document_Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
}

/** primary key columns input for table: "document_content" */
export interface Document_Content_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "document_content" */
export enum Document_Content_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "document_content" */
export interface Document_Content_Set_Input {
  content?: Maybe<Scalars['String']>;
}

/** update columns of table "document_content" */
export enum Document_Content_Update_Column {
  /** column name */
  Content = 'content'
}

/** input type for inserting data into table "document" */
export interface Document_Insert_Input {
  allowComments?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Comment_Arr_Rel_Insert_Input>;
  content?: Maybe<Document_Content_Obj_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  labels?: Maybe<Document_Label_Arr_Rel_Insert_Input>;
  reactions?: Maybe<Document_Reaction_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
}

/** columns and relationships of "document_label" */
export interface Document_Label {
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

/** input type for inserting array relation for remote table "document_label" */
export interface Document_Label_Arr_Rel_Insert_Input {
  data: Array<Document_Label_Insert_Input>;
}

/** Boolean expression to filter rows from the table "document_label". All fields are combined with a logical 'AND'. */
export interface Document_Label_Bool_Exp {
  _and?: Maybe<Array<Maybe<Document_Label_Bool_Exp>>>;
  _not?: Maybe<Document_Label_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Label_Bool_Exp>>>;
  author?: Maybe<User_Bool_Exp>;
  authorId?: Maybe<String_Comparison_Exp>;
  document?: Maybe<Document_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  label?: Maybe<Label_Bool_Exp>;
  labelId?: Maybe<Uuid_Comparison_Exp>;
}

/** input type for inserting data into table "document_label" */
export interface Document_Label_Insert_Input {
  document?: Maybe<Document_Obj_Rel_Insert_Input>;
  documentId?: Maybe<Scalars['uuid']>;
  label?: Maybe<Label_Obj_Rel_Insert_Input>;
  labelId?: Maybe<Scalars['uuid']>;
}

/** response of any mutation on the table "document_label" */
export interface Document_Label_Mutation_Response {
   __typename?: 'document_label_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document_Label>;
}

/** input type for inserting object relation for remote table "document_label" */
export interface Document_Label_Obj_Rel_Insert_Input {
  data: Document_Label_Insert_Input;
}

/** ordering options when selecting data from "document_label" */
export interface Document_Label_Order_By {
  author?: Maybe<User_Order_By>;
  authorId?: Maybe<Order_By>;
  document?: Maybe<Document_Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Label_Order_By>;
  labelId?: Maybe<Order_By>;
}

/** primary key columns input for table: "document_label" */
export interface Document_Label_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "document_label" */
export enum Document_Label_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Id = 'id',
  /** column name */
  LabelId = 'labelId'
}

/** response of any mutation on the table "document" */
export interface Document_Mutation_Response {
   __typename?: 'document_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document>;
}

/** input type for inserting object relation for remote table "document" */
export interface Document_Obj_Rel_Insert_Input {
  data: Document_Insert_Input;
  on_conflict?: Maybe<Document_On_Conflict>;
}

/** on conflict condition type for table "document" */
export interface Document_On_Conflict {
  constraint: Document_Constraint;
  update_columns: Array<Document_Update_Column>;
  where?: Maybe<Document_Bool_Exp>;
}

/** ordering options when selecting data from "document" */
export interface Document_Order_By {
  allowComments?: Maybe<Order_By>;
  author?: Maybe<User_Order_By>;
  authorId?: Maybe<Order_By>;
  content?: Maybe<Document_Content_Order_By>;
  countComments?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isPublic?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
}

/** primary key columns input for table: "document" */
export interface Document_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** columns and relationships of "document_reaction" */
export interface Document_Reaction {
   __typename?: 'document_reaction';
  authorId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  document: Document;
  documentId: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  reaction: Reaction;
  reaction_id: Scalars['String'];
}

/** input type for inserting array relation for remote table "document_reaction" */
export interface Document_Reaction_Arr_Rel_Insert_Input {
  data: Array<Document_Reaction_Insert_Input>;
}

/** Boolean expression to filter rows from the table "document_reaction". All fields are combined with a logical 'AND'. */
export interface Document_Reaction_Bool_Exp {
  _and?: Maybe<Array<Maybe<Document_Reaction_Bool_Exp>>>;
  _not?: Maybe<Document_Reaction_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Reaction_Bool_Exp>>>;
  authorId?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  document?: Maybe<Document_Bool_Exp>;
  documentId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  reaction?: Maybe<Reaction_Bool_Exp>;
  reaction_id?: Maybe<String_Comparison_Exp>;
}

/** columns and relationships of "document_reaction_group" */
export interface Document_Reaction_Group {
   __typename?: 'document_reaction_group';
  count?: Maybe<Scalars['bigint']>;
  reaction_id?: Maybe<Scalars['String']>;
}

/** Boolean expression to filter rows from the table "document_reaction_group". All fields are combined with a logical 'AND'. */
export interface Document_Reaction_Group_Bool_Exp {
  _and?: Maybe<Array<Maybe<Document_Reaction_Group_Bool_Exp>>>;
  _not?: Maybe<Document_Reaction_Group_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Reaction_Group_Bool_Exp>>>;
  count?: Maybe<Bigint_Comparison_Exp>;
  reaction_id?: Maybe<String_Comparison_Exp>;
}

/** ordering options when selecting data from "document_reaction_group" */
export interface Document_Reaction_Group_Order_By {
  count?: Maybe<Order_By>;
  reaction_id?: Maybe<Order_By>;
}

/** 
 * persisted version of the document_reaction_group
 * 
 * 
 * columns and relationships of \"document_reaction_group_persisted\"
 */
export interface Document_Reaction_Group_Persisted {
   __typename?: 'document_reaction_group_persisted';
  count: Scalars['Int'];
  reactionId: Scalars['String'];
}

/** 
 * Boolean expression to filter rows from the table
 * "document_reaction_group_persisted". All fields are combined with a logical 'AND'.
 */
export interface Document_Reaction_Group_Persisted_Bool_Exp {
  _and?: Maybe<Array<Maybe<Document_Reaction_Group_Persisted_Bool_Exp>>>;
  _not?: Maybe<Document_Reaction_Group_Persisted_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Reaction_Group_Persisted_Bool_Exp>>>;
  count?: Maybe<Int_Comparison_Exp>;
  reactionId?: Maybe<String_Comparison_Exp>;
}

/** ordering options when selecting data from "document_reaction_group_persisted" */
export interface Document_Reaction_Group_Persisted_Order_By {
  count?: Maybe<Order_By>;
  reactionId?: Maybe<Order_By>;
}

/** primary key columns input for table: "document_reaction_group_persisted" */
export interface Document_Reaction_Group_Persisted_Pk_Columns_Input {
  id: Scalars['bigint'];
}

/** select columns of table "document_reaction_group_persisted" */
export enum Document_Reaction_Group_Persisted_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  ReactionId = 'reactionId'
}

/** select columns of table "document_reaction_group" */
export enum Document_Reaction_Group_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  ReactionId = 'reaction_id'
}

/** input type for inserting data into table "document_reaction" */
export interface Document_Reaction_Insert_Input {
  document?: Maybe<Document_Obj_Rel_Insert_Input>;
  documentId?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "document_reaction" */
export interface Document_Reaction_Mutation_Response {
   __typename?: 'document_reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document_Reaction>;
}

/** input type for inserting object relation for remote table "document_reaction" */
export interface Document_Reaction_Obj_Rel_Insert_Input {
  data: Document_Reaction_Insert_Input;
}

/** ordering options when selecting data from "document_reaction" */
export interface Document_Reaction_Order_By {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  document?: Maybe<Document_Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reaction?: Maybe<Reaction_Order_By>;
  reaction_id?: Maybe<Order_By>;
}

/** primary key columns input for table: "document_reaction" */
export interface Document_Reaction_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "document_reaction" */
export enum Document_Reaction_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  ReactionId = 'reaction_id'
}

/** select columns of table "document" */
export enum Document_Select_Column {
  /** column name */
  AllowComments = 'allowComments',
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CountComments = 'countComments',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
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

/** input type for updating data in table "document" */
export interface Document_Set_Input {
  allowComments?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
}

/** update columns of table "document" */
export enum Document_Update_Column {
  /** column name */
  AllowComments = 'allowComments',
  /** column name */
  Description = 'description',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  Title = 'title'
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

/** input type for inserting array relation for remote table "follow" */
export interface Follow_Arr_Rel_Insert_Input {
  data: Array<Follow_Insert_Input>;
}

/** Boolean expression to filter rows from the table "follow". All fields are combined with a logical 'AND'. */
export interface Follow_Bool_Exp {
  _and?: Maybe<Array<Maybe<Follow_Bool_Exp>>>;
  _not?: Maybe<Follow_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Follow_Bool_Exp>>>;
  author?: Maybe<User_Bool_Exp>;
  authorId?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  following?: Maybe<User_Bool_Exp>;
  followingId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
}

/** input type for inserting data into table "follow" */
export interface Follow_Insert_Input {
  followingId?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "follow" */
export interface Follow_Mutation_Response {
   __typename?: 'follow_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Follow>;
}

/** input type for inserting object relation for remote table "follow" */
export interface Follow_Obj_Rel_Insert_Input {
  data: Follow_Insert_Input;
}

/** ordering options when selecting data from "follow" */
export interface Follow_Order_By {
  author?: Maybe<User_Order_By>;
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  following?: Maybe<User_Order_By>;
  followingId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
}

/** primary key columns input for table: "follow" */
export interface Follow_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "follow" */
export enum Follow_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FollowingId = 'followingId',
  /** column name */
  Id = 'id'
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export interface Int_Comparison_Exp {
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

/** columns and relationships of "label" */
export interface Label {
   __typename?: 'label';
  /** An object relationship */
  author: User;
  authorId: Scalars['String'];
  /** An object relationship */
  color: Color;
  color_name: Scalars['String'];
  /** An array relationship */
  document_labels: Array<Document_Label>;
  id: Scalars['uuid'];
  label: Scalars['String'];
}


/** columns and relationships of "label" */
export type LabelDocument_LabelsArgs = {
  distinct_on?: Maybe<Array<Document_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Label_Order_By>>;
  where?: Maybe<Document_Label_Bool_Exp>;
};

/** input type for inserting array relation for remote table "label" */
export interface Label_Arr_Rel_Insert_Input {
  data: Array<Label_Insert_Input>;
  on_conflict?: Maybe<Label_On_Conflict>;
}

/** Boolean expression to filter rows from the table "label". All fields are combined with a logical 'AND'. */
export interface Label_Bool_Exp {
  _and?: Maybe<Array<Maybe<Label_Bool_Exp>>>;
  _not?: Maybe<Label_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Label_Bool_Exp>>>;
  author?: Maybe<User_Bool_Exp>;
  authorId?: Maybe<String_Comparison_Exp>;
  color?: Maybe<Color_Bool_Exp>;
  color_name?: Maybe<String_Comparison_Exp>;
  document_labels?: Maybe<Document_Label_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  label?: Maybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "label" */
export enum Label_Constraint {
  /** unique or primary key constraint */
  LabelPkey = 'label_pkey'
}

/** input type for inserting data into table "label" */
export interface Label_Insert_Input {
  color_name?: Maybe<Scalars['String']>;
  document_labels?: Maybe<Document_Label_Arr_Rel_Insert_Input>;
  label?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "label" */
export interface Label_Mutation_Response {
   __typename?: 'label_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Label>;
}

/** input type for inserting object relation for remote table "label" */
export interface Label_Obj_Rel_Insert_Input {
  data: Label_Insert_Input;
  on_conflict?: Maybe<Label_On_Conflict>;
}

/** on conflict condition type for table "label" */
export interface Label_On_Conflict {
  constraint: Label_Constraint;
  update_columns: Array<Label_Update_Column>;
  where?: Maybe<Label_Bool_Exp>;
}

/** ordering options when selecting data from "label" */
export interface Label_Order_By {
  author?: Maybe<User_Order_By>;
  authorId?: Maybe<Order_By>;
  color?: Maybe<Color_Order_By>;
  color_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
}

/** primary key columns input for table: "label" */
export interface Label_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "label" */
export enum Label_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  ColorName = 'color_name',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** input type for updating data in table "label" */
export interface Label_Set_Input {
  color_name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
}

/** update columns of table "label" */
export enum Label_Update_Column {
  /** column name */
  ColorName = 'color_name',
  /** column name */
  Label = 'label'
}

/** mutation root */
export interface Mutation_Root {
   __typename?: 'mutation_root';
  /** insert data into the table: "comment" */
  addComment?: Maybe<Comment_Mutation_Response>;
  /** insert data into the table: "comment_reaction" */
  addCommentReaction?: Maybe<Comment_Reaction_Mutation_Response>;
  /** insert data into the table: "document" */
  addDocument?: Maybe<Document_Mutation_Response>;
  /** insert data into the table: "document_content" */
  addDocumentContent?: Maybe<Document_Content_Mutation_Response>;
  /** insert data into the table: "document_label" */
  addDocumentLabel?: Maybe<Document_Label_Mutation_Response>;
  /** insert data into the table: "document_reaction" */
  addDocumentReaction?: Maybe<Document_Reaction_Mutation_Response>;
  /** insert data into the table: "follow" */
  addFollow?: Maybe<Follow_Mutation_Response>;
  /** insert data into the table: "label" */
  addLabel?: Maybe<Label_Mutation_Response>;
  /** delete single row from the table: "comment" */
  delete_comment_by_pk?: Maybe<Comment>;
  /** delete single row from the table: "comment_reaction" */
  delete_comment_reaction_by_pk?: Maybe<Comment_Reaction>;
  /** delete single row from the table: "document" */
  delete_document_by_pk?: Maybe<Document>;
  /** delete single row from the table: "document_label" */
  delete_document_label_by_pk?: Maybe<Document_Label>;
  /** delete single row from the table: "document_reaction" */
  delete_document_reaction_by_pk?: Maybe<Document_Reaction>;
  /** delete single row from the table: "follow" */
  delete_follow_by_pk?: Maybe<Follow>;
  /** delete single row from the table: "label" */
  delete_label_by_pk?: Maybe<Label>;
  /** insert a single row into the table: "comment" */
  insert_comment_one?: Maybe<Comment>;
  /** insert a single row into the table: "comment_reaction" */
  insert_comment_reaction_one?: Maybe<Comment_Reaction>;
  /** insert a single row into the table: "document_content" */
  insert_document_content_one?: Maybe<Document_Content>;
  /** insert a single row into the table: "document_label" */
  insert_document_label_one?: Maybe<Document_Label>;
  /** insert a single row into the table: "document" */
  insert_document_one?: Maybe<Document>;
  /** insert a single row into the table: "document_reaction" */
  insert_document_reaction_one?: Maybe<Document_Reaction>;
  /** insert a single row into the table: "follow" */
  insert_follow_one?: Maybe<Follow>;
  /** insert a single row into the table: "label" */
  insert_label_one?: Maybe<Label>;
  /** delete data from the table: "comment" */
  removeComment?: Maybe<Comment_Mutation_Response>;
  /** delete data from the table: "comment_reaction" */
  removeCommentReaction?: Maybe<Comment_Reaction_Mutation_Response>;
  /** delete data from the table: "document" */
  removeDocument?: Maybe<Document_Mutation_Response>;
  /** delete data from the table: "document_label" */
  removeDocumentLabel?: Maybe<Document_Label_Mutation_Response>;
  /** delete data from the table: "document_reaction" */
  removeDocumentReaction?: Maybe<Document_Reaction_Mutation_Response>;
  /** delete data from the table: "follow" */
  removeFollow?: Maybe<Follow_Mutation_Response>;
  /** delete data from the table: "label" */
  removeLabel?: Maybe<Label_Mutation_Response>;
  /** update data of the table: "comment" */
  updateComment?: Maybe<Comment_Mutation_Response>;
  /** update data of the table: "document" */
  updateDocument?: Maybe<Document_Mutation_Response>;
  /** update data of the table: "document_content" */
  updateDocumentContent?: Maybe<Document_Content_Mutation_Response>;
  /** update data of the table: "label" */
  updateLabel?: Maybe<Label_Mutation_Response>;
  /** update single row of the table: "comment" */
  update_comment_by_pk?: Maybe<Comment>;
  /** update single row of the table: "document" */
  update_document_by_pk?: Maybe<Document>;
  /** update single row of the table: "document_content" */
  update_document_content_by_pk?: Maybe<Document_Content>;
  /** update single row of the table: "label" */
  update_label_by_pk?: Maybe<Label>;
}


/** mutation root */
export type Mutation_RootAddCommentArgs = {
  objects: Array<Comment_Insert_Input>;
  on_conflict?: Maybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddCommentReactionArgs = {
  objects: Array<Comment_Reaction_Insert_Input>;
};


/** mutation root */
export type Mutation_RootAddDocumentArgs = {
  objects: Array<Document_Insert_Input>;
  on_conflict?: Maybe<Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddDocumentContentArgs = {
  objects: Array<Document_Content_Insert_Input>;
  on_conflict?: Maybe<Document_Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddDocumentLabelArgs = {
  objects: Array<Document_Label_Insert_Input>;
};


/** mutation root */
export type Mutation_RootAddDocumentReactionArgs = {
  objects: Array<Document_Reaction_Insert_Input>;
};


/** mutation root */
export type Mutation_RootAddFollowArgs = {
  objects: Array<Follow_Insert_Input>;
};


/** mutation root */
export type Mutation_RootAddLabelArgs = {
  objects: Array<Label_Insert_Input>;
  on_conflict?: Maybe<Label_On_Conflict>;
};


/** mutation root */
export type Mutation_RootDelete_Comment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Comment_Reaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Document_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Document_Label_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Document_Reaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Follow_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Label_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Comment_OneArgs = {
  object: Comment_Insert_Input;
  on_conflict?: Maybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_Reaction_OneArgs = {
  object: Comment_Reaction_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Document_Content_OneArgs = {
  object: Document_Content_Insert_Input;
  on_conflict?: Maybe<Document_Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_Label_OneArgs = {
  object: Document_Label_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Document_OneArgs = {
  object: Document_Insert_Input;
  on_conflict?: Maybe<Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_Reaction_OneArgs = {
  object: Document_Reaction_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Follow_OneArgs = {
  object: Follow_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Label_OneArgs = {
  object: Label_Insert_Input;
  on_conflict?: Maybe<Label_On_Conflict>;
};


/** mutation root */
export type Mutation_RootRemoveCommentArgs = {
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootRemoveCommentReactionArgs = {
  where: Comment_Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootRemoveDocumentArgs = {
  where: Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootRemoveDocumentLabelArgs = {
  where: Document_Label_Bool_Exp;
};


/** mutation root */
export type Mutation_RootRemoveDocumentReactionArgs = {
  where: Document_Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootRemoveFollowArgs = {
  where: Follow_Bool_Exp;
};


/** mutation root */
export type Mutation_RootRemoveLabelArgs = {
  where: Label_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateCommentArgs = {
  _set?: Maybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateDocumentArgs = {
  _set?: Maybe<Document_Set_Input>;
  where: Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateDocumentContentArgs = {
  _set?: Maybe<Document_Content_Set_Input>;
  where: Document_Content_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateLabelArgs = {
  _set?: Maybe<Label_Set_Input>;
  where: Label_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_By_PkArgs = {
  _set?: Maybe<Comment_Set_Input>;
  pk_columns: Comment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Document_By_PkArgs = {
  _set?: Maybe<Document_Set_Input>;
  pk_columns: Document_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Document_Content_By_PkArgs = {
  _set?: Maybe<Document_Content_Set_Input>;
  pk_columns: Document_Content_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Label_By_PkArgs = {
  _set?: Maybe<Label_Set_Input>;
  pk_columns: Label_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
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

/** query root */
export interface Query_Root {
   __typename?: 'query_root';
  /** fetch data from the table: "color" */
  allColors: Array<Color>;
  /** fetch data from the table: "comment_reaction" */
  allCommentReactions: Array<Comment_Reaction>;
  /** fetch data from the table: "comment" */
  allComments: Array<Comment>;
  /** fetch data from the table: "document_content" */
  allDocumentContents: Array<Document_Content>;
  /** fetch data from the table: "document_label" */
  allDocumentLabels: Array<Document_Label>;
  /** fetch data from the table: "document_reaction" */
  allDocumentReactions: Array<Document_Reaction>;
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
  commentReaction?: Maybe<Comment_Reaction>;
  /** fetch data from the table: "comment_reactions_group" */
  comment_reactions_group: Array<Comment_Reactions_Group>;
  /** fetch data from the table: "document" using primary key columns */
  document?: Maybe<Document>;
  /** fetch data from the table: "document_content" using primary key columns */
  documentContent?: Maybe<Document_Content>;
  /** fetch data from the table: "document_label" using primary key columns */
  documentLabel?: Maybe<Document_Label>;
  /** fetch data from the table: "document_reaction" using primary key columns */
  documentReactino?: Maybe<Document_Reaction>;
  /** fetch data from the table: "document_reaction_group" */
  document_reaction_group: Array<Document_Reaction_Group>;
  /** fetch data from the table: "document_reaction_group_persisted" */
  document_reaction_group_persisted: Array<Document_Reaction_Group_Persisted>;
  /** fetch data from the table: "document_reaction_group_persisted" using primary key columns */
  document_reaction_group_persisted_by_pk?: Maybe<Document_Reaction_Group_Persisted>;
  /** fetch data from the table: "follow" using primary key columns */
  follow?: Maybe<Follow>;
  /** fetch data from the table: "label" using primary key columns */
  label?: Maybe<Label>;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction?: Maybe<Reaction>;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
}


/** query root */
export type Query_RootAllColorsArgs = {
  distinct_on?: Maybe<Array<Color_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Color_Order_By>>;
  where?: Maybe<Color_Bool_Exp>;
};


/** query root */
export type Query_RootAllCommentReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reaction_Order_By>>;
  where?: Maybe<Comment_Reaction_Bool_Exp>;
};


/** query root */
export type Query_RootAllCommentsArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};


/** query root */
export type Query_RootAllDocumentContentsArgs = {
  distinct_on?: Maybe<Array<Document_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Content_Order_By>>;
  where?: Maybe<Document_Content_Bool_Exp>;
};


/** query root */
export type Query_RootAllDocumentLabelsArgs = {
  distinct_on?: Maybe<Array<Document_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Label_Order_By>>;
  where?: Maybe<Document_Label_Bool_Exp>;
};


/** query root */
export type Query_RootAllDocumentReactionsArgs = {
  distinct_on?: Maybe<Array<Document_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Reaction_Order_By>>;
  where?: Maybe<Document_Reaction_Bool_Exp>;
};


/** query root */
export type Query_RootAllDocumentsArgs = {
  distinct_on?: Maybe<Array<Document_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Order_By>>;
  where?: Maybe<Document_Bool_Exp>;
};


/** query root */
export type Query_RootAllFollowsArgs = {
  distinct_on?: Maybe<Array<Follow_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Follow_Order_By>>;
  where?: Maybe<Follow_Bool_Exp>;
};


/** query root */
export type Query_RootAllLabelsArgs = {
  distinct_on?: Maybe<Array<Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Label_Order_By>>;
  where?: Maybe<Label_Bool_Exp>;
};


/** query root */
export type Query_RootAllReactionsArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


/** query root */
export type Query_RootAllUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootColorArgs = {
  name: Scalars['String'];
};


/** query root */
export type Query_RootCommentArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootCommentReactionArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootComment_Reactions_GroupArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Group_Order_By>>;
  where?: Maybe<Comment_Reactions_Group_Bool_Exp>;
};


/** query root */
export type Query_RootDocumentArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootDocumentContentArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootDocumentLabelArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootDocumentReactinoArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootDocument_Reaction_GroupArgs = {
  distinct_on?: Maybe<Array<Document_Reaction_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Reaction_Group_Order_By>>;
  where?: Maybe<Document_Reaction_Group_Bool_Exp>;
};


/** query root */
export type Query_RootDocument_Reaction_Group_PersistedArgs = {
  distinct_on?: Maybe<Array<Document_Reaction_Group_Persisted_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Reaction_Group_Persisted_Order_By>>;
  where?: Maybe<Document_Reaction_Group_Persisted_Bool_Exp>;
};


/** query root */
export type Query_RootDocument_Reaction_Group_Persisted_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootFollowArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootLabelArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootReactionArgs = {
  htmlCode: Scalars['String'];
};


/** query root */
export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "reaction" */
export interface Reaction {
   __typename?: 'reaction';
  htmlCode: Scalars['String'];
  title: Scalars['String'];
}

/** Boolean expression to filter rows from the table "reaction". All fields are combined with a logical 'AND'. */
export interface Reaction_Bool_Exp {
  _and?: Maybe<Array<Maybe<Reaction_Bool_Exp>>>;
  _not?: Maybe<Reaction_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Reaction_Bool_Exp>>>;
  htmlCode?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
}

/** ordering options when selecting data from "reaction" */
export interface Reaction_Order_By {
  htmlCode?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
}

/** primary key columns input for table: "reaction" */
export interface Reaction_Pk_Columns_Input {
  htmlCode: Scalars['String'];
}

/** select columns of table "reaction" */
export enum Reaction_Select_Column {
  /** column name */
  HtmlCode = 'htmlCode',
  /** column name */
  Title = 'title'
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface String_Comparison_Exp {
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

/** subscription root */
export interface Subscription_Root {
   __typename?: 'subscription_root';
  /** fetch data from the table: "color" */
  allColors: Array<Color>;
  /** fetch data from the table: "comment_reaction" */
  allCommentReactions: Array<Comment_Reaction>;
  /** fetch data from the table: "comment" */
  allComments: Array<Comment>;
  /** fetch data from the table: "document_content" */
  allDocumentContents: Array<Document_Content>;
  /** fetch data from the table: "document_label" */
  allDocumentLabels: Array<Document_Label>;
  /** fetch data from the table: "document_reaction" */
  allDocumentReactions: Array<Document_Reaction>;
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
  commentReaction?: Maybe<Comment_Reaction>;
  /** fetch data from the table: "comment_reactions_group" */
  comment_reactions_group: Array<Comment_Reactions_Group>;
  /** fetch data from the table: "document" using primary key columns */
  document?: Maybe<Document>;
  /** fetch data from the table: "document_content" using primary key columns */
  documentContent?: Maybe<Document_Content>;
  /** fetch data from the table: "document_label" using primary key columns */
  documentLabel?: Maybe<Document_Label>;
  /** fetch data from the table: "document_reaction" using primary key columns */
  documentReactino?: Maybe<Document_Reaction>;
  /** fetch data from the table: "document_reaction_group" */
  document_reaction_group: Array<Document_Reaction_Group>;
  /** fetch data from the table: "document_reaction_group_persisted" */
  document_reaction_group_persisted: Array<Document_Reaction_Group_Persisted>;
  /** fetch data from the table: "document_reaction_group_persisted" using primary key columns */
  document_reaction_group_persisted_by_pk?: Maybe<Document_Reaction_Group_Persisted>;
  /** fetch data from the table: "follow" using primary key columns */
  follow?: Maybe<Follow>;
  /** fetch data from the table: "label" using primary key columns */
  label?: Maybe<Label>;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction?: Maybe<Reaction>;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
}


/** subscription root */
export type Subscription_RootAllColorsArgs = {
  distinct_on?: Maybe<Array<Color_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Color_Order_By>>;
  where?: Maybe<Color_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAllCommentReactionsArgs = {
  distinct_on?: Maybe<Array<Comment_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reaction_Order_By>>;
  where?: Maybe<Comment_Reaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAllCommentsArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAllDocumentContentsArgs = {
  distinct_on?: Maybe<Array<Document_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Content_Order_By>>;
  where?: Maybe<Document_Content_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAllDocumentLabelsArgs = {
  distinct_on?: Maybe<Array<Document_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Label_Order_By>>;
  where?: Maybe<Document_Label_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAllDocumentReactionsArgs = {
  distinct_on?: Maybe<Array<Document_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Reaction_Order_By>>;
  where?: Maybe<Document_Reaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAllDocumentsArgs = {
  distinct_on?: Maybe<Array<Document_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Order_By>>;
  where?: Maybe<Document_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAllFollowsArgs = {
  distinct_on?: Maybe<Array<Follow_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Follow_Order_By>>;
  where?: Maybe<Follow_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAllLabelsArgs = {
  distinct_on?: Maybe<Array<Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Label_Order_By>>;
  where?: Maybe<Label_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAllReactionsArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAllUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootColorArgs = {
  name: Scalars['String'];
};


/** subscription root */
export type Subscription_RootCommentArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootCommentReactionArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootComment_Reactions_GroupArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Group_Order_By>>;
  where?: Maybe<Comment_Reactions_Group_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocumentArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootDocumentContentArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootDocumentLabelArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootDocumentReactinoArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootDocument_Reaction_GroupArgs = {
  distinct_on?: Maybe<Array<Document_Reaction_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Reaction_Group_Order_By>>;
  where?: Maybe<Document_Reaction_Group_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocument_Reaction_Group_PersistedArgs = {
  distinct_on?: Maybe<Array<Document_Reaction_Group_Persisted_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Reaction_Group_Persisted_Order_By>>;
  where?: Maybe<Document_Reaction_Group_Persisted_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocument_Reaction_Group_Persisted_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootFollowArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootLabelArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootReactionArgs = {
  htmlCode: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface Timestamptz_Comparison_Exp {
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

/** 
 * add author table
 * 
 * 
 * columns and relationships of \"user\"
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
  document_labels: Array<Document_Label>;
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
 * columns and relationships of \"user\"
 */
export type UserDocument_LabelsArgs = {
  distinct_on?: Maybe<Array<Document_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Label_Order_By>>;
  where?: Maybe<Document_Label_Bool_Exp>;
};


/** 
 * add author table
 * 
 * 
 * columns and relationships of \"user\"
 */
export type UserDocumentsArgs = {
  distinct_on?: Maybe<Array<Document_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Order_By>>;
  where?: Maybe<Document_Bool_Exp>;
};


/** 
 * add author table
 * 
 * 
 * columns and relationships of \"user\"
 */
export type UserFollowersArgs = {
  distinct_on?: Maybe<Array<Follow_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Follow_Order_By>>;
  where?: Maybe<Follow_Bool_Exp>;
};


/** 
 * add author table
 * 
 * 
 * columns and relationships of \"user\"
 */
export type UserFollowingsArgs = {
  distinct_on?: Maybe<Array<Follow_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Follow_Order_By>>;
  where?: Maybe<Follow_Bool_Exp>;
};


/** 
 * add author table
 * 
 * 
 * columns and relationships of \"user\"
 */
export type UserLabelsArgs = {
  distinct_on?: Maybe<Array<Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Label_Order_By>>;
  where?: Maybe<Label_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface User_Bool_Exp {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  authId?: Maybe<String_Comparison_Exp>;
  balanceCommentReaction?: Maybe<Bigint_Comparison_Exp>;
  balanceDocumentReaction?: Maybe<Bigint_Comparison_Exp>;
  countPrivateDocs?: Maybe<Int_Comparison_Exp>;
  countWrittenComments?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  document_labels?: Maybe<Document_Label_Bool_Exp>;
  documents?: Maybe<Document_Bool_Exp>;
  followers?: Maybe<Follow_Bool_Exp>;
  followings?: Maybe<Follow_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  imageUrl?: Maybe<String_Comparison_Exp>;
  labels?: Maybe<Label_Bool_Exp>;
  maxPrivateDocs?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
}

/** ordering options when selecting data from "user" */
export interface User_Order_By {
  authId?: Maybe<Order_By>;
  balanceCommentReaction?: Maybe<Order_By>;
  balanceDocumentReaction?: Maybe<Order_By>;
  countPrivateDocs?: Maybe<Order_By>;
  countWrittenComments?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  maxPrivateDocs?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
}

/** primary key columns input for table: "user" */
export interface User_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "user" */
export enum User_Select_Column {
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


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export interface Uuid_Comparison_Exp {
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

export type UFeedDocAuthorFragment = { __typename?: 'user', authId: string, imageUrl: Maybe<string>, name: string, followers: Array<{ __typename?: 'follow', id: any }> };

export type UFeedDocLabelFragment = { __typename?: 'document_label', label: { __typename?: 'label', label: string, color: { __typename?: 'color', color: string } } };

export type UFeedDocReactionGroupFragment = { __typename?: 'document_reaction_group_persisted', count: number, reactionId: string };

export type UFeedDocReactionFragment = { __typename?: 'document_reaction', reaction_id: string, id: any };

export type UFeedDocFragment = { __typename?: 'document', updatedAt: any, countComments: number, allowComments: boolean, isPublic: boolean, title: string, description: string, id: any, author: (
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

export type UFeedDocsQueryVariables = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  authorId: Scalars['String'];
};


export type UFeedDocsQuery = { __typename?: 'query_root', allDocuments: Array<(
    { __typename?: 'document' }
    & UFeedDocFragment
  )> };

export type UAddDocumentReactionMutationVariables = {
  documentReaction: Document_Reaction_Insert_Input;
};


export type UAddDocumentReactionMutation = { __typename?: 'mutation_root', addDocumentReaction: Maybe<{ __typename?: 'document_reaction_mutation_response', returning: Array<{ __typename?: 'document_reaction', reaction_id: string, documentId: any }> }> };

export type UAddCommentReactionMutationVariables = {
  commentReaction: Comment_Reaction_Insert_Input;
};


export type UAddCommentReactionMutation = { __typename?: 'mutation_root', addCommentReaction: Maybe<{ __typename?: 'comment_reaction_mutation_response', returning: Array<{ __typename?: 'comment_reaction', reaction_id: string, commentId: any }> }> };

export type URemoveDocumentReactionMutationVariables = {
  reactionId: Scalars['String'];
  documentId: Scalars['uuid'];
};


export type URemoveDocumentReactionMutation = { __typename?: 'mutation_root', removeDocumentReaction: Maybe<{ __typename?: 'document_reaction_mutation_response', affected_rows: number }> };

export type URemoveCommentReactionMutationVariables = {
  reactionId: Scalars['String'];
  commentId: Scalars['uuid'];
};


export type URemoveCommentReactionMutation = { __typename?: 'mutation_root', removeCommentReaction: Maybe<{ __typename?: 'comment_reaction_mutation_response', affected_rows: number }> };

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
  reactionId
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
  reaction_id
  id
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
  description
  id
  reactions(where: {authorId: {_eq: $authorId}}) {
    ...UFeedDocReaction
  }
}
    ${UFeedDocAuthorFragmentDoc}
${UFeedDocReactionGroupFragmentDoc}
${UFeedDocLabelFragmentDoc}
${UFeedDocReactionFragmentDoc}`;
export const UFeedDocsDocument = gql`
    query UFeedDocs($limit: Int!, $offset: Int!, $authorId: String!) {
  allDocuments(limit: $limit, offset: $offset, order_by: {id: asc}) {
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
export const UAddDocumentReactionDocument = gql`
    mutation UAddDocumentReaction($documentReaction: document_reaction_insert_input!) {
  addDocumentReaction(objects: [$documentReaction]) {
    returning {
      reaction_id
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
      reaction_id
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
  removeDocumentReaction(where: {documentId: {_eq: $documentId}, reaction_id: {_eq: $reactionId}}) {
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
  removeCommentReaction(where: {commentId: {_eq: $commentId}, reaction_id: {_eq: $reactionId}}) {
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