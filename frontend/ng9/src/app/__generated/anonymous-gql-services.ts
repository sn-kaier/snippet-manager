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
export type Bigint_Comparison_Exp = {
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

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
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

/** columns and relationships of "color" */
export type Color = {
   __typename?: 'color';
  color: Scalars['String'];
  name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "color". All fields are combined with a logical 'AND'. */
export type Color_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Color_Bool_Exp>>>;
  _not?: Maybe<Color_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Color_Bool_Exp>>>;
  color?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "color" */
export type Color_Order_By = {
  color?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "color" */
export type Color_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "color" */
export enum Color_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Name = 'name'
}

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
  reactionsGroup: Array<Comment_Reactions_Group>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "comment" */
export type CommentReactionsGroupArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Group_Order_By>>;
  where?: Maybe<Comment_Reactions_Group_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "comment". All fields are combined with a logical 'AND'. */
export type Comment_Bool_Exp = {
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
};

/** ordering options when selecting data from "comment" */
export type Comment_Order_By = {
  author?: Maybe<User_Order_By>;
  authorId?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  document?: Maybe<Document_Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "comment" */
export type Comment_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "comment_reaction" */
export type Comment_Reaction = {
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

/** Boolean expression to filter rows from the table "comment_reaction". All fields are combined with a logical 'AND'. */
export type Comment_Reaction_Bool_Exp = {
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
};

/** ordering options when selecting data from "comment_reaction" */
export type Comment_Reaction_Order_By = {
  author?: Maybe<User_Order_By>;
  authorId?: Maybe<Order_By>;
  comment?: Maybe<Comment_Order_By>;
  commentId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reaction?: Maybe<Reaction_Order_By>;
};

/** primary key columns input for table: "comment_reaction" */
export type Comment_Reaction_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "comment_reaction" */
export enum Comment_Reaction_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CommentId = 'commentId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id'
}

/** columns and relationships of "comment_reactions_group" */
export type Comment_Reactions_Group = {
   __typename?: 'comment_reactions_group';
  count?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "comment_reactions_group". All fields are combined with a logical 'AND'. */
export type Comment_Reactions_Group_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comment_Reactions_Group_Bool_Exp>>>;
  _not?: Maybe<Comment_Reactions_Group_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comment_Reactions_Group_Bool_Exp>>>;
  count?: Maybe<Bigint_Comparison_Exp>;
  reactionid?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "comment_reactions_group" */
export type Comment_Reactions_Group_Order_By = {
  count?: Maybe<Order_By>;
  reactionid?: Maybe<Order_By>;
};

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

/** columns and relationships of "document" */
export type Document = {
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
};


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

/** Boolean expression to filter rows from the table "document". All fields are combined with a logical 'AND'. */
export type Document_Bool_Exp = {
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
};

/** columns and relationships of "document_content" */
export type Document_Content = {
   __typename?: 'document_content';
  content: Scalars['String'];
  /** An object relationship */
  document: Document;
  updatedAt: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "document_content". All fields are combined with a logical 'AND'. */
export type Document_Content_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Document_Content_Bool_Exp>>>;
  _not?: Maybe<Document_Content_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Content_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  document?: Maybe<Document_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** ordering options when selecting data from "document_content" */
export type Document_Content_Order_By = {
  content?: Maybe<Order_By>;
  document?: Maybe<Document_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "document_content" */
export type Document_Content_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "document_content" */
export enum Document_Content_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "document_label" */
export type Document_Label = {
   __typename?: 'document_label';
  /** An object relationship */
  author: User;
  /** An object relationship */
  document: Document;
  /** An object relationship */
  label: Label;
  labelId: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "document_label". All fields are combined with a logical 'AND'. */
export type Document_Label_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Document_Label_Bool_Exp>>>;
  _not?: Maybe<Document_Label_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Label_Bool_Exp>>>;
  author?: Maybe<User_Bool_Exp>;
  document?: Maybe<Document_Bool_Exp>;
  label?: Maybe<Label_Bool_Exp>;
  labelId?: Maybe<Uuid_Comparison_Exp>;
};

/** ordering options when selecting data from "document_label" */
export type Document_Label_Order_By = {
  author?: Maybe<User_Order_By>;
  document?: Maybe<Document_Order_By>;
  label?: Maybe<Label_Order_By>;
  labelId?: Maybe<Order_By>;
};

/** primary key columns input for table: "document_label" */
export type Document_Label_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "document_label" */
export enum Document_Label_Select_Column {
  /** column name */
  LabelId = 'labelId'
}

/** ordering options when selecting data from "document" */
export type Document_Order_By = {
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
};

/** primary key columns input for table: "document" */
export type Document_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "document_reaction" */
export type Document_Reaction = {
   __typename?: 'document_reaction';
  authorId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  document: Document;
  documentId: Scalars['uuid'];
  /** An object relationship */
  reaction: Reaction;
  reaction_id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "document_reaction". All fields are combined with a logical 'AND'. */
export type Document_Reaction_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Document_Reaction_Bool_Exp>>>;
  _not?: Maybe<Document_Reaction_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Reaction_Bool_Exp>>>;
  authorId?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  document?: Maybe<Document_Bool_Exp>;
  documentId?: Maybe<Uuid_Comparison_Exp>;
  reaction?: Maybe<Reaction_Bool_Exp>;
  reaction_id?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "document_reaction_group" */
export type Document_Reaction_Group = {
   __typename?: 'document_reaction_group';
  count?: Maybe<Scalars['bigint']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "document_reaction_group". All fields are combined with a logical 'AND'. */
export type Document_Reaction_Group_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Document_Reaction_Group_Bool_Exp>>>;
  _not?: Maybe<Document_Reaction_Group_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Reaction_Group_Bool_Exp>>>;
  count?: Maybe<Bigint_Comparison_Exp>;
  reaction_id?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "document_reaction_group" */
export type Document_Reaction_Group_Order_By = {
  count?: Maybe<Order_By>;
  reaction_id?: Maybe<Order_By>;
};

/** 
 * persisted version of the document_reaction_group
 * 
 * 
 * columns and relationships of \"document_reaction_group_persisted\"
 */
export type Document_Reaction_Group_Persisted = {
   __typename?: 'document_reaction_group_persisted';
  count: Scalars['Int'];
  reactionId: Scalars['String'];
};

/** 
 * Boolean expression to filter rows from the table
 * "document_reaction_group_persisted". All fields are combined with a logical 'AND'.
 */
export type Document_Reaction_Group_Persisted_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Document_Reaction_Group_Persisted_Bool_Exp>>>;
  _not?: Maybe<Document_Reaction_Group_Persisted_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Reaction_Group_Persisted_Bool_Exp>>>;
  count?: Maybe<Int_Comparison_Exp>;
  reactionId?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Order_By = {
  count?: Maybe<Order_By>;
  reactionId?: Maybe<Order_By>;
};

/** primary key columns input for table: "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

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

/** ordering options when selecting data from "document_reaction" */
export type Document_Reaction_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  document?: Maybe<Document_Order_By>;
  documentId?: Maybe<Order_By>;
  reaction?: Maybe<Reaction_Order_By>;
  reaction_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "document_reaction" */
export type Document_Reaction_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "document_reaction" */
export enum Document_Reaction_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DocumentId = 'documentId',
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

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
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

/** columns and relationships of "label" */
export type Label = {
   __typename?: 'label';
  /** An object relationship */
  author: User;
  /** An object relationship */
  color: Color;
  color_name: Scalars['String'];
  /** An array relationship */
  document_labels: Array<Document_Label>;
  label: Scalars['String'];
};


/** columns and relationships of "label" */
export type LabelDocument_LabelsArgs = {
  distinct_on?: Maybe<Array<Document_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Label_Order_By>>;
  where?: Maybe<Document_Label_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "label". All fields are combined with a logical 'AND'. */
export type Label_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Label_Bool_Exp>>>;
  _not?: Maybe<Label_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Label_Bool_Exp>>>;
  author?: Maybe<User_Bool_Exp>;
  color?: Maybe<Color_Bool_Exp>;
  color_name?: Maybe<String_Comparison_Exp>;
  document_labels?: Maybe<Document_Label_Bool_Exp>;
  label?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "label" */
export type Label_Order_By = {
  author?: Maybe<User_Order_By>;
  color?: Maybe<Color_Order_By>;
  color_name?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
};

/** primary key columns input for table: "label" */
export type Label_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "label" */
export enum Label_Select_Column {
  /** column name */
  ColorName = 'color_name',
  /** column name */
  Label = 'label'
}

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
export type Query_Root = {
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
  /** fetch data from the table: "label" using primary key columns */
  label?: Maybe<Label>;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction?: Maybe<Reaction>;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
};


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
export type Reaction = {
   __typename?: 'reaction';
  htmlCode: Scalars['String'];
  title: Scalars['String'];
};

/** Boolean expression to filter rows from the table "reaction". All fields are combined with a logical 'AND'. */
export type Reaction_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Reaction_Bool_Exp>>>;
  _not?: Maybe<Reaction_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Reaction_Bool_Exp>>>;
  htmlCode?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "reaction" */
export type Reaction_Order_By = {
  htmlCode?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "reaction" */
export type Reaction_Pk_Columns_Input = {
  htmlCode: Scalars['String'];
};

/** select columns of table "reaction" */
export enum Reaction_Select_Column {
  /** column name */
  HtmlCode = 'htmlCode',
  /** column name */
  Title = 'title'
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
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

/** subscription root */
export type Subscription_Root = {
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
  /** fetch data from the table: "label" using primary key columns */
  label?: Maybe<Label>;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction?: Maybe<Reaction>;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
};


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
export type Timestamptz_Comparison_Exp = {
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

/** 
 * add author table
 * 
 * 
 * columns and relationships of \"user\"
 */
export type User = {
   __typename?: 'user';
  balanceDocumentReaction: Scalars['bigint'];
  countWrittenComments: Scalars['Int'];
  /** An array relationship */
  document_labels: Array<Document_Label>;
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
export type UserLabelsArgs = {
  distinct_on?: Maybe<Array<Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Label_Order_By>>;
  where?: Maybe<Label_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  balanceDocumentReaction?: Maybe<Bigint_Comparison_Exp>;
  countWrittenComments?: Maybe<Int_Comparison_Exp>;
  document_labels?: Maybe<Document_Label_Bool_Exp>;
  documents?: Maybe<Document_Bool_Exp>;
  imageUrl?: Maybe<String_Comparison_Exp>;
  labels?: Maybe<Label_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  balanceDocumentReaction?: Maybe<Order_By>;
  countWrittenComments?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  BalanceDocumentReaction = 'balanceDocumentReaction',
  /** column name */
  CountWrittenComments = 'countWrittenComments',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  Name = 'name'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
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

export type AFeedDocAuthorFragment = { __typename?: 'user', imageUrl: Maybe<string>, name: string };

export type AFeedDocLabelFragment = { __typename?: 'document_label', label: { __typename?: 'label', label: string, color: { __typename?: 'color', color: string } } };

export type AFeedDocFragment = { __typename?: 'document', updatedAt: any, countComments: number, allowComments: boolean, isPublic: boolean, title: string, description: string, id: any, author: (
    { __typename?: 'user' }
    & AFeedDocAuthorFragment
  ), reactionsGroup: Array<{ __typename?: 'document_reaction_group_persisted', count: number, reactionId: string }>, labels: Array<(
    { __typename?: 'document_label' }
    & AFeedDocLabelFragment
  )> };

export type AFeedDocsQueryVariables = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type AFeedDocsQuery = { __typename?: 'query_root', allDocuments: Array<(
    { __typename?: 'document' }
    & AFeedDocFragment
  )> };

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
    reactionId
  }
  countComments
  allowComments
  isPublic
  labels(limit: 10) {
    ...AFeedDocLabel
  }
  title
  description
  id
}
    ${AFeedDocAuthorFragmentDoc}
${AFeedDocLabelFragmentDoc}`;
export const AFeedDocsDocument = gql`
    query AFeedDocs($limit: Int!, $offset: Int!) {
  allDocuments(limit: $limit, offset: $offset) {
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