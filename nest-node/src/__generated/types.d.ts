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

/** aggregated selection of "color" */
export type Color_Aggregate = {
   __typename?: 'color_aggregate';
  aggregate?: Maybe<Color_Aggregate_Fields>;
  nodes: Array<Color>;
};

/** aggregate fields of "color" */
export type Color_Aggregate_Fields = {
   __typename?: 'color_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Color_Max_Fields>;
  min?: Maybe<Color_Min_Fields>;
};


/** aggregate fields of "color" */
export type Color_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Color_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "color" */
export type Color_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Color_Max_Order_By>;
  min?: Maybe<Color_Min_Order_By>;
};

/** input type for inserting array relation for remote table "color" */
export type Color_Arr_Rel_Insert_Input = {
  data: Array<Color_Insert_Input>;
  on_conflict?: Maybe<Color_On_Conflict>;
};

/** Boolean expression to filter rows from the table "color". All fields are combined with a logical 'AND'. */
export type Color_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Color_Bool_Exp>>>;
  _not?: Maybe<Color_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Color_Bool_Exp>>>;
  color?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "color" */
export enum Color_Constraint {
  /** unique or primary key constraint */
  ColorColorKey = 'color_color_key',
  /** unique or primary key constraint */
  ColorNameKey = 'color_name_key',
  /** unique or primary key constraint */
  ColorPkey = 'color_pkey'
}

/** input type for inserting data into table "color" */
export type Color_Insert_Input = {
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Color_Max_Fields = {
   __typename?: 'color_max_fields';
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "color" */
export type Color_Max_Order_By = {
  color?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Color_Min_Fields = {
   __typename?: 'color_min_fields';
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "color" */
export type Color_Min_Order_By = {
  color?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "color" */
export type Color_Mutation_Response = {
   __typename?: 'color_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Color>;
};

/** input type for inserting object relation for remote table "color" */
export type Color_Obj_Rel_Insert_Input = {
  data: Color_Insert_Input;
  on_conflict?: Maybe<Color_On_Conflict>;
};

/** on conflict condition type for table "color" */
export type Color_On_Conflict = {
  constraint: Color_Constraint;
  update_columns: Array<Color_Update_Column>;
  where?: Maybe<Color_Bool_Exp>;
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

/** input type for updating data in table "color" */
export type Color_Set_Input = {
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "color" */
export enum Color_Update_Column {
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
  /** An aggregated array relationship */
  reactionsGroup_aggregate: Comment_Reactions_Group_Aggregate;
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


/** columns and relationships of "comment" */
export type CommentReactionsGroup_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reactions_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reactions_Group_Order_By>>;
  where?: Maybe<Comment_Reactions_Group_Bool_Exp>;
};

/** aggregated selection of "comment" */
export type Comment_Aggregate = {
   __typename?: 'comment_aggregate';
  aggregate?: Maybe<Comment_Aggregate_Fields>;
  nodes: Array<Comment>;
};

/** aggregate fields of "comment" */
export type Comment_Aggregate_Fields = {
   __typename?: 'comment_aggregate_fields';
  avg?: Maybe<Comment_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Comment_Max_Fields>;
  min?: Maybe<Comment_Min_Fields>;
  stddev?: Maybe<Comment_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Sum_Fields>;
  var_pop?: Maybe<Comment_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Var_Samp_Fields>;
  variance?: Maybe<Comment_Variance_Fields>;
};


/** aggregate fields of "comment" */
export type Comment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comment" */
export type Comment_Aggregate_Order_By = {
  avg?: Maybe<Comment_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Comment_Max_Order_By>;
  min?: Maybe<Comment_Min_Order_By>;
  stddev?: Maybe<Comment_Stddev_Order_By>;
  stddev_pop?: Maybe<Comment_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Comment_Stddev_Samp_Order_By>;
  sum?: Maybe<Comment_Sum_Order_By>;
  var_pop?: Maybe<Comment_Var_Pop_Order_By>;
  var_samp?: Maybe<Comment_Var_Samp_Order_By>;
  variance?: Maybe<Comment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comment" */
export type Comment_Arr_Rel_Insert_Input = {
  data: Array<Comment_Insert_Input>;
  on_conflict?: Maybe<Comment_On_Conflict>;
};

/** aggregate avg on columns */
export type Comment_Avg_Fields = {
   __typename?: 'comment_avg_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comment" */
export type Comment_Avg_Order_By = {
  reactionBalance?: Maybe<Order_By>;
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

/** unique or primary key constraints on table "comment" */
export enum Comment_Constraint {
  /** unique or primary key constraint */
  CommentPkey = 'comment_pkey'
}

/** input type for incrementing integer column in table "comment" */
export type Comment_Inc_Input = {
  reactionBalance?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "comment" */
export type Comment_Insert_Input = {
  author?: Maybe<User_Obj_Rel_Insert_Input>;
  authorId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  document?: Maybe<Document_Obj_Rel_Insert_Input>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reactionBalance?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Comment_Max_Fields = {
   __typename?: 'comment_max_fields';
  authorId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reactionBalance?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "comment" */
export type Comment_Max_Order_By = {
  authorId?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Min_Fields = {
   __typename?: 'comment_min_fields';
  authorId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reactionBalance?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "comment" */
export type Comment_Min_Order_By = {
  authorId?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "comment" */
export type Comment_Mutation_Response = {
   __typename?: 'comment_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comment>;
};

/** input type for inserting object relation for remote table "comment" */
export type Comment_Obj_Rel_Insert_Input = {
  data: Comment_Insert_Input;
  on_conflict?: Maybe<Comment_On_Conflict>;
};

/** on conflict condition type for table "comment" */
export type Comment_On_Conflict = {
  constraint: Comment_Constraint;
  update_columns: Array<Comment_Update_Column>;
  where?: Maybe<Comment_Bool_Exp>;
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
  reactionsGroup_aggregate?: Maybe<Comment_Reactions_Group_Aggregate_Order_By>;
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
  reaction_id: Scalars['String'];
};

/** aggregated selection of "comment_reaction" */
export type Comment_Reaction_Aggregate = {
   __typename?: 'comment_reaction_aggregate';
  aggregate?: Maybe<Comment_Reaction_Aggregate_Fields>;
  nodes: Array<Comment_Reaction>;
};

/** aggregate fields of "comment_reaction" */
export type Comment_Reaction_Aggregate_Fields = {
   __typename?: 'comment_reaction_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Comment_Reaction_Max_Fields>;
  min?: Maybe<Comment_Reaction_Min_Fields>;
};


/** aggregate fields of "comment_reaction" */
export type Comment_Reaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comment_Reaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comment_reaction" */
export type Comment_Reaction_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Comment_Reaction_Max_Order_By>;
  min?: Maybe<Comment_Reaction_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comment_reaction" */
export type Comment_Reaction_Arr_Rel_Insert_Input = {
  data: Array<Comment_Reaction_Insert_Input>;
  on_conflict?: Maybe<Comment_Reaction_On_Conflict>;
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
  reaction_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "comment_reaction" */
export enum Comment_Reaction_Constraint {
  /** unique or primary key constraint */
  CommentReactionPkey = 'comment_reaction_pkey'
}

/** input type for inserting data into table "comment_reaction" */
export type Comment_Reaction_Insert_Input = {
  author?: Maybe<User_Obj_Rel_Insert_Input>;
  authorId?: Maybe<Scalars['String']>;
  comment?: Maybe<Comment_Obj_Rel_Insert_Input>;
  commentId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  reaction?: Maybe<Reaction_Obj_Rel_Insert_Input>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Comment_Reaction_Max_Fields = {
   __typename?: 'comment_reaction_max_fields';
  authorId?: Maybe<Scalars['String']>;
  commentId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "comment_reaction" */
export type Comment_Reaction_Max_Order_By = {
  authorId?: Maybe<Order_By>;
  commentId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reaction_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Reaction_Min_Fields = {
   __typename?: 'comment_reaction_min_fields';
  authorId?: Maybe<Scalars['String']>;
  commentId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "comment_reaction" */
export type Comment_Reaction_Min_Order_By = {
  authorId?: Maybe<Order_By>;
  commentId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reaction_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "comment_reaction" */
export type Comment_Reaction_Mutation_Response = {
   __typename?: 'comment_reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comment_Reaction>;
};

/** input type for inserting object relation for remote table "comment_reaction" */
export type Comment_Reaction_Obj_Rel_Insert_Input = {
  data: Comment_Reaction_Insert_Input;
  on_conflict?: Maybe<Comment_Reaction_On_Conflict>;
};

/** on conflict condition type for table "comment_reaction" */
export type Comment_Reaction_On_Conflict = {
  constraint: Comment_Reaction_Constraint;
  update_columns: Array<Comment_Reaction_Update_Column>;
  where?: Maybe<Comment_Reaction_Bool_Exp>;
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
  reaction_id?: Maybe<Order_By>;
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
  Id = 'id',
  /** column name */
  ReactionId = 'reaction_id'
}

/** input type for updating data in table "comment_reaction" */
export type Comment_Reaction_Set_Input = {
  authorId?: Maybe<Scalars['String']>;
  commentId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** update columns of table "comment_reaction" */
export enum Comment_Reaction_Update_Column {
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
export type Comment_Reactions_Group = {
   __typename?: 'comment_reactions_group';
  commentid?: Maybe<Scalars['uuid']>;
  count?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
};

/** aggregated selection of "comment_reactions_group" */
export type Comment_Reactions_Group_Aggregate = {
   __typename?: 'comment_reactions_group_aggregate';
  aggregate?: Maybe<Comment_Reactions_Group_Aggregate_Fields>;
  nodes: Array<Comment_Reactions_Group>;
};

/** aggregate fields of "comment_reactions_group" */
export type Comment_Reactions_Group_Aggregate_Fields = {
   __typename?: 'comment_reactions_group_aggregate_fields';
  avg?: Maybe<Comment_Reactions_Group_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Comment_Reactions_Group_Max_Fields>;
  min?: Maybe<Comment_Reactions_Group_Min_Fields>;
  stddev?: Maybe<Comment_Reactions_Group_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Reactions_Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Reactions_Group_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Reactions_Group_Sum_Fields>;
  var_pop?: Maybe<Comment_Reactions_Group_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Reactions_Group_Var_Samp_Fields>;
  variance?: Maybe<Comment_Reactions_Group_Variance_Fields>;
};


/** aggregate fields of "comment_reactions_group" */
export type Comment_Reactions_Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comment_Reactions_Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comment_reactions_group" */
export type Comment_Reactions_Group_Aggregate_Order_By = {
  avg?: Maybe<Comment_Reactions_Group_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Comment_Reactions_Group_Max_Order_By>;
  min?: Maybe<Comment_Reactions_Group_Min_Order_By>;
  stddev?: Maybe<Comment_Reactions_Group_Stddev_Order_By>;
  stddev_pop?: Maybe<Comment_Reactions_Group_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Comment_Reactions_Group_Stddev_Samp_Order_By>;
  sum?: Maybe<Comment_Reactions_Group_Sum_Order_By>;
  var_pop?: Maybe<Comment_Reactions_Group_Var_Pop_Order_By>;
  var_samp?: Maybe<Comment_Reactions_Group_Var_Samp_Order_By>;
  variance?: Maybe<Comment_Reactions_Group_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Comment_Reactions_Group_Avg_Fields = {
   __typename?: 'comment_reactions_group_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comment_reactions_group" */
export type Comment_Reactions_Group_Avg_Order_By = {
  count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comment_reactions_group". All fields are combined with a logical 'AND'. */
export type Comment_Reactions_Group_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comment_Reactions_Group_Bool_Exp>>>;
  _not?: Maybe<Comment_Reactions_Group_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comment_Reactions_Group_Bool_Exp>>>;
  commentid?: Maybe<Uuid_Comparison_Exp>;
  count?: Maybe<Bigint_Comparison_Exp>;
  reactionid?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Comment_Reactions_Group_Max_Fields = {
   __typename?: 'comment_reactions_group_max_fields';
  commentid?: Maybe<Scalars['uuid']>;
  count?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "comment_reactions_group" */
export type Comment_Reactions_Group_Max_Order_By = {
  commentid?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  reactionid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Reactions_Group_Min_Fields = {
   __typename?: 'comment_reactions_group_min_fields';
  commentid?: Maybe<Scalars['uuid']>;
  count?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "comment_reactions_group" */
export type Comment_Reactions_Group_Min_Order_By = {
  commentid?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  reactionid?: Maybe<Order_By>;
};

/** ordering options when selecting data from "comment_reactions_group" */
export type Comment_Reactions_Group_Order_By = {
  commentid?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  reactionid?: Maybe<Order_By>;
};

/** select columns of table "comment_reactions_group" */
export enum Comment_Reactions_Group_Select_Column {
  /** column name */
  Commentid = 'commentid',
  /** column name */
  Count = 'count',
  /** column name */
  Reactionid = 'reactionid'
}

/** aggregate stddev on columns */
export type Comment_Reactions_Group_Stddev_Fields = {
   __typename?: 'comment_reactions_group_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comment_reactions_group" */
export type Comment_Reactions_Group_Stddev_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comment_Reactions_Group_Stddev_Pop_Fields = {
   __typename?: 'comment_reactions_group_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comment_reactions_group" */
export type Comment_Reactions_Group_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comment_Reactions_Group_Stddev_Samp_Fields = {
   __typename?: 'comment_reactions_group_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comment_reactions_group" */
export type Comment_Reactions_Group_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Comment_Reactions_Group_Sum_Fields = {
   __typename?: 'comment_reactions_group_sum_fields';
  count?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "comment_reactions_group" */
export type Comment_Reactions_Group_Sum_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Comment_Reactions_Group_Var_Pop_Fields = {
   __typename?: 'comment_reactions_group_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comment_reactions_group" */
export type Comment_Reactions_Group_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comment_Reactions_Group_Var_Samp_Fields = {
   __typename?: 'comment_reactions_group_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comment_reactions_group" */
export type Comment_Reactions_Group_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Comment_Reactions_Group_Variance_Fields = {
   __typename?: 'comment_reactions_group_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comment_reactions_group" */
export type Comment_Reactions_Group_Variance_Order_By = {
  count?: Maybe<Order_By>;
};

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
export type Comment_Set_Input = {
  authorId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reactionBalance?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Comment_Stddev_Fields = {
   __typename?: 'comment_stddev_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comment" */
export type Comment_Stddev_Order_By = {
  reactionBalance?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comment_Stddev_Pop_Fields = {
   __typename?: 'comment_stddev_pop_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comment" */
export type Comment_Stddev_Pop_Order_By = {
  reactionBalance?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comment_Stddev_Samp_Fields = {
   __typename?: 'comment_stddev_samp_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comment" */
export type Comment_Stddev_Samp_Order_By = {
  reactionBalance?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Comment_Sum_Fields = {
   __typename?: 'comment_sum_fields';
  reactionBalance?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "comment" */
export type Comment_Sum_Order_By = {
  reactionBalance?: Maybe<Order_By>;
};

/** update columns of table "comment" */
export enum Comment_Update_Column {
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

/** aggregate var_pop on columns */
export type Comment_Var_Pop_Fields = {
   __typename?: 'comment_var_pop_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comment" */
export type Comment_Var_Pop_Order_By = {
  reactionBalance?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comment_Var_Samp_Fields = {
   __typename?: 'comment_var_samp_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comment" */
export type Comment_Var_Samp_Order_By = {
  reactionBalance?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Comment_Variance_Fields = {
   __typename?: 'comment_variance_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comment" */
export type Comment_Variance_Order_By = {
  reactionBalance?: Maybe<Order_By>;
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
  /** An aggregated array relationship */
  comments_aggregate: Comment_Aggregate;
  /** An object relationship */
  content?: Maybe<Document_Content>;
  countComments: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  isPublic: Scalars['Boolean'];
  /** An array relationship */
  labels: Array<Document_Label>;
  /** An aggregated array relationship */
  labels_aggregate: Document_Label_Aggregate;
  reactionBalance: Scalars['Int'];
  /** An array relationship */
  reactions: Array<Document_Reaction>;
  /** An array relationship */
  reactionsGroup: Array<Document_Reaction_Group_Persisted>;
  /** An aggregated array relationship */
  reactionsGroup_aggregate: Document_Reaction_Group_Persisted_Aggregate;
  /** An aggregated array relationship */
  reactions_aggregate: Document_Reaction_Aggregate;
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
export type DocumentComments_AggregateArgs = {
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
export type DocumentLabels_AggregateArgs = {
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


/** columns and relationships of "document" */
export type DocumentReactionsGroup_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Reaction_Group_Persisted_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Reaction_Group_Persisted_Order_By>>;
  where?: Maybe<Document_Reaction_Group_Persisted_Bool_Exp>;
};


/** columns and relationships of "document" */
export type DocumentReactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Reaction_Order_By>>;
  where?: Maybe<Document_Reaction_Bool_Exp>;
};

/** aggregated selection of "document" */
export type Document_Aggregate = {
   __typename?: 'document_aggregate';
  aggregate?: Maybe<Document_Aggregate_Fields>;
  nodes: Array<Document>;
};

/** aggregate fields of "document" */
export type Document_Aggregate_Fields = {
   __typename?: 'document_aggregate_fields';
  avg?: Maybe<Document_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Document_Max_Fields>;
  min?: Maybe<Document_Min_Fields>;
  stddev?: Maybe<Document_Stddev_Fields>;
  stddev_pop?: Maybe<Document_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Document_Stddev_Samp_Fields>;
  sum?: Maybe<Document_Sum_Fields>;
  var_pop?: Maybe<Document_Var_Pop_Fields>;
  var_samp?: Maybe<Document_Var_Samp_Fields>;
  variance?: Maybe<Document_Variance_Fields>;
};


/** aggregate fields of "document" */
export type Document_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Document_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document" */
export type Document_Aggregate_Order_By = {
  avg?: Maybe<Document_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Document_Max_Order_By>;
  min?: Maybe<Document_Min_Order_By>;
  stddev?: Maybe<Document_Stddev_Order_By>;
  stddev_pop?: Maybe<Document_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Document_Stddev_Samp_Order_By>;
  sum?: Maybe<Document_Sum_Order_By>;
  var_pop?: Maybe<Document_Var_Pop_Order_By>;
  var_samp?: Maybe<Document_Var_Samp_Order_By>;
  variance?: Maybe<Document_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "document" */
export type Document_Arr_Rel_Insert_Input = {
  data: Array<Document_Insert_Input>;
  on_conflict?: Maybe<Document_On_Conflict>;
};

/** aggregate avg on columns */
export type Document_Avg_Fields = {
   __typename?: 'document_avg_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "document" */
export type Document_Avg_Order_By = {
  countComments?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
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

/** unique or primary key constraints on table "document" */
export enum Document_Constraint {
  /** unique or primary key constraint */
  DocumentPkey = 'document_pkey'
}

/** columns and relationships of "document_content" */
export type Document_Content = {
   __typename?: 'document_content';
  content: Scalars['String'];
  /** An object relationship */
  document: Document;
  documentId: Scalars['uuid'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "document_content" */
export type Document_Content_Aggregate = {
   __typename?: 'document_content_aggregate';
  aggregate?: Maybe<Document_Content_Aggregate_Fields>;
  nodes: Array<Document_Content>;
};

/** aggregate fields of "document_content" */
export type Document_Content_Aggregate_Fields = {
   __typename?: 'document_content_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Document_Content_Max_Fields>;
  min?: Maybe<Document_Content_Min_Fields>;
};


/** aggregate fields of "document_content" */
export type Document_Content_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Document_Content_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_content" */
export type Document_Content_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Document_Content_Max_Order_By>;
  min?: Maybe<Document_Content_Min_Order_By>;
};

/** input type for inserting array relation for remote table "document_content" */
export type Document_Content_Arr_Rel_Insert_Input = {
  data: Array<Document_Content_Insert_Input>;
  on_conflict?: Maybe<Document_Content_On_Conflict>;
};

/** Boolean expression to filter rows from the table "document_content". All fields are combined with a logical 'AND'. */
export type Document_Content_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Document_Content_Bool_Exp>>>;
  _not?: Maybe<Document_Content_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Content_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  document?: Maybe<Document_Bool_Exp>;
  documentId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "document_content" */
export enum Document_Content_Constraint {
  /** unique or primary key constraint */
  DocumentContentDocumentIdKey = 'document_content_document_id_key',
  /** unique or primary key constraint */
  DocumentContentPkey = 'document_content_pkey'
}

/** input type for inserting data into table "document_content" */
export type Document_Content_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  document?: Maybe<Document_Obj_Rel_Insert_Input>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Document_Content_Max_Fields = {
   __typename?: 'document_content_max_fields';
  content?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "document_content" */
export type Document_Content_Max_Order_By = {
  content?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Document_Content_Min_Fields = {
   __typename?: 'document_content_min_fields';
  content?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "document_content" */
export type Document_Content_Min_Order_By = {
  content?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "document_content" */
export type Document_Content_Mutation_Response = {
   __typename?: 'document_content_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document_Content>;
};

/** input type for inserting object relation for remote table "document_content" */
export type Document_Content_Obj_Rel_Insert_Input = {
  data: Document_Content_Insert_Input;
  on_conflict?: Maybe<Document_Content_On_Conflict>;
};

/** on conflict condition type for table "document_content" */
export type Document_Content_On_Conflict = {
  constraint: Document_Content_Constraint;
  update_columns: Array<Document_Content_Update_Column>;
  where?: Maybe<Document_Content_Bool_Exp>;
};

/** ordering options when selecting data from "document_content" */
export type Document_Content_Order_By = {
  content?: Maybe<Order_By>;
  document?: Maybe<Document_Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
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
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "document_content" */
export type Document_Content_Set_Input = {
  content?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "document_content" */
export enum Document_Content_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for incrementing integer column in table "document" */
export type Document_Inc_Input = {
  countComments?: Maybe<Scalars['Int']>;
  reactionBalance?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "document" */
export type Document_Insert_Input = {
  allowComments?: Maybe<Scalars['Boolean']>;
  author?: Maybe<User_Obj_Rel_Insert_Input>;
  authorId?: Maybe<Scalars['String']>;
  comments?: Maybe<Comment_Arr_Rel_Insert_Input>;
  content?: Maybe<Document_Content_Obj_Rel_Insert_Input>;
  countComments?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  labels?: Maybe<Document_Label_Arr_Rel_Insert_Input>;
  reactionBalance?: Maybe<Scalars['Int']>;
  reactions?: Maybe<Document_Reaction_Arr_Rel_Insert_Input>;
  reactionsGroup?: Maybe<Document_Reaction_Group_Persisted_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "document_label" */
export type Document_Label = {
   __typename?: 'document_label';
  /** An object relationship */
  author: User;
  authorId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  document: Document;
  documentId: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  label: Label;
  labelId: Scalars['uuid'];
};

/** aggregated selection of "document_label" */
export type Document_Label_Aggregate = {
   __typename?: 'document_label_aggregate';
  aggregate?: Maybe<Document_Label_Aggregate_Fields>;
  nodes: Array<Document_Label>;
};

/** aggregate fields of "document_label" */
export type Document_Label_Aggregate_Fields = {
   __typename?: 'document_label_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Document_Label_Max_Fields>;
  min?: Maybe<Document_Label_Min_Fields>;
};


/** aggregate fields of "document_label" */
export type Document_Label_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Document_Label_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_label" */
export type Document_Label_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Document_Label_Max_Order_By>;
  min?: Maybe<Document_Label_Min_Order_By>;
};

/** input type for inserting array relation for remote table "document_label" */
export type Document_Label_Arr_Rel_Insert_Input = {
  data: Array<Document_Label_Insert_Input>;
  on_conflict?: Maybe<Document_Label_On_Conflict>;
};

/** Boolean expression to filter rows from the table "document_label". All fields are combined with a logical 'AND'. */
export type Document_Label_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Document_Label_Bool_Exp>>>;
  _not?: Maybe<Document_Label_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Label_Bool_Exp>>>;
  author?: Maybe<User_Bool_Exp>;
  authorId?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  document?: Maybe<Document_Bool_Exp>;
  documentId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  label?: Maybe<Label_Bool_Exp>;
  labelId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "document_label" */
export enum Document_Label_Constraint {
  /** unique or primary key constraint */
  DocumentLabelPkey = 'document_label_pkey'
}

/** input type for inserting data into table "document_label" */
export type Document_Label_Insert_Input = {
  author?: Maybe<User_Obj_Rel_Insert_Input>;
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  document?: Maybe<Document_Obj_Rel_Insert_Input>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Label_Obj_Rel_Insert_Input>;
  labelId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Document_Label_Max_Fields = {
   __typename?: 'document_label_max_fields';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  labelId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "document_label" */
export type Document_Label_Max_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  labelId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Document_Label_Min_Fields = {
   __typename?: 'document_label_min_fields';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  labelId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "document_label" */
export type Document_Label_Min_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  labelId?: Maybe<Order_By>;
};

/** response of any mutation on the table "document_label" */
export type Document_Label_Mutation_Response = {
   __typename?: 'document_label_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document_Label>;
};

/** input type for inserting object relation for remote table "document_label" */
export type Document_Label_Obj_Rel_Insert_Input = {
  data: Document_Label_Insert_Input;
  on_conflict?: Maybe<Document_Label_On_Conflict>;
};

/** on conflict condition type for table "document_label" */
export type Document_Label_On_Conflict = {
  constraint: Document_Label_Constraint;
  update_columns: Array<Document_Label_Update_Column>;
  where?: Maybe<Document_Label_Bool_Exp>;
};

/** ordering options when selecting data from "document_label" */
export type Document_Label_Order_By = {
  author?: Maybe<User_Order_By>;
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  document?: Maybe<Document_Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
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
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  LabelId = 'labelId'
}

/** input type for updating data in table "document_label" */
export type Document_Label_Set_Input = {
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  labelId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "document_label" */
export enum Document_Label_Update_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  LabelId = 'labelId'
}

/** aggregate max on columns */
export type Document_Max_Fields = {
   __typename?: 'document_max_fields';
  authorId?: Maybe<Scalars['String']>;
  countComments?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  reactionBalance?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "document" */
export type Document_Max_Order_By = {
  authorId?: Maybe<Order_By>;
  countComments?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Document_Min_Fields = {
   __typename?: 'document_min_fields';
  authorId?: Maybe<Scalars['String']>;
  countComments?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  reactionBalance?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "document" */
export type Document_Min_Order_By = {
  authorId?: Maybe<Order_By>;
  countComments?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "document" */
export type Document_Mutation_Response = {
   __typename?: 'document_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document>;
};

/** input type for inserting object relation for remote table "document" */
export type Document_Obj_Rel_Insert_Input = {
  data: Document_Insert_Input;
  on_conflict?: Maybe<Document_On_Conflict>;
};

/** on conflict condition type for table "document" */
export type Document_On_Conflict = {
  constraint: Document_Constraint;
  update_columns: Array<Document_Update_Column>;
  where?: Maybe<Document_Bool_Exp>;
};

/** ordering options when selecting data from "document" */
export type Document_Order_By = {
  allowComments?: Maybe<Order_By>;
  author?: Maybe<User_Order_By>;
  authorId?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Comment_Aggregate_Order_By>;
  content?: Maybe<Document_Content_Order_By>;
  countComments?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isPublic?: Maybe<Order_By>;
  labels_aggregate?: Maybe<Document_Label_Aggregate_Order_By>;
  reactionBalance?: Maybe<Order_By>;
  reactionsGroup_aggregate?: Maybe<Document_Reaction_Group_Persisted_Aggregate_Order_By>;
  reactions_aggregate?: Maybe<Document_Reaction_Aggregate_Order_By>;
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
  id: Scalars['uuid'];
  /** An object relationship */
  reaction: Reaction;
  reaction_id: Scalars['String'];
};

/** aggregated selection of "document_reaction" */
export type Document_Reaction_Aggregate = {
   __typename?: 'document_reaction_aggregate';
  aggregate?: Maybe<Document_Reaction_Aggregate_Fields>;
  nodes: Array<Document_Reaction>;
};

/** aggregate fields of "document_reaction" */
export type Document_Reaction_Aggregate_Fields = {
   __typename?: 'document_reaction_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Document_Reaction_Max_Fields>;
  min?: Maybe<Document_Reaction_Min_Fields>;
};


/** aggregate fields of "document_reaction" */
export type Document_Reaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Document_Reaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_reaction" */
export type Document_Reaction_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Document_Reaction_Max_Order_By>;
  min?: Maybe<Document_Reaction_Min_Order_By>;
};

/** input type for inserting array relation for remote table "document_reaction" */
export type Document_Reaction_Arr_Rel_Insert_Input = {
  data: Array<Document_Reaction_Insert_Input>;
  on_conflict?: Maybe<Document_Reaction_On_Conflict>;
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
  id?: Maybe<Uuid_Comparison_Exp>;
  reaction?: Maybe<Reaction_Bool_Exp>;
  reaction_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "document_reaction" */
export enum Document_Reaction_Constraint {
  /** unique or primary key constraint */
  DocumentReactionPkey = 'document_reaction_pkey'
}

/** columns and relationships of "document_reaction_group" */
export type Document_Reaction_Group = {
   __typename?: 'document_reaction_group';
  count?: Maybe<Scalars['bigint']>;
  document_id?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "document_reaction_group" */
export type Document_Reaction_Group_Aggregate = {
   __typename?: 'document_reaction_group_aggregate';
  aggregate?: Maybe<Document_Reaction_Group_Aggregate_Fields>;
  nodes: Array<Document_Reaction_Group>;
};

/** aggregate fields of "document_reaction_group" */
export type Document_Reaction_Group_Aggregate_Fields = {
   __typename?: 'document_reaction_group_aggregate_fields';
  avg?: Maybe<Document_Reaction_Group_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Document_Reaction_Group_Max_Fields>;
  min?: Maybe<Document_Reaction_Group_Min_Fields>;
  stddev?: Maybe<Document_Reaction_Group_Stddev_Fields>;
  stddev_pop?: Maybe<Document_Reaction_Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Document_Reaction_Group_Stddev_Samp_Fields>;
  sum?: Maybe<Document_Reaction_Group_Sum_Fields>;
  var_pop?: Maybe<Document_Reaction_Group_Var_Pop_Fields>;
  var_samp?: Maybe<Document_Reaction_Group_Var_Samp_Fields>;
  variance?: Maybe<Document_Reaction_Group_Variance_Fields>;
};


/** aggregate fields of "document_reaction_group" */
export type Document_Reaction_Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Document_Reaction_Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_reaction_group" */
export type Document_Reaction_Group_Aggregate_Order_By = {
  avg?: Maybe<Document_Reaction_Group_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Document_Reaction_Group_Max_Order_By>;
  min?: Maybe<Document_Reaction_Group_Min_Order_By>;
  stddev?: Maybe<Document_Reaction_Group_Stddev_Order_By>;
  stddev_pop?: Maybe<Document_Reaction_Group_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Document_Reaction_Group_Stddev_Samp_Order_By>;
  sum?: Maybe<Document_Reaction_Group_Sum_Order_By>;
  var_pop?: Maybe<Document_Reaction_Group_Var_Pop_Order_By>;
  var_samp?: Maybe<Document_Reaction_Group_Var_Samp_Order_By>;
  variance?: Maybe<Document_Reaction_Group_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Document_Reaction_Group_Avg_Fields = {
   __typename?: 'document_reaction_group_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "document_reaction_group" */
export type Document_Reaction_Group_Avg_Order_By = {
  count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "document_reaction_group". All fields are combined with a logical 'AND'. */
export type Document_Reaction_Group_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Document_Reaction_Group_Bool_Exp>>>;
  _not?: Maybe<Document_Reaction_Group_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Document_Reaction_Group_Bool_Exp>>>;
  count?: Maybe<Bigint_Comparison_Exp>;
  document_id?: Maybe<Uuid_Comparison_Exp>;
  reaction_id?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Document_Reaction_Group_Max_Fields = {
   __typename?: 'document_reaction_group_max_fields';
  count?: Maybe<Scalars['bigint']>;
  document_id?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "document_reaction_group" */
export type Document_Reaction_Group_Max_Order_By = {
  count?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  reaction_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Document_Reaction_Group_Min_Fields = {
   __typename?: 'document_reaction_group_min_fields';
  count?: Maybe<Scalars['bigint']>;
  document_id?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "document_reaction_group" */
export type Document_Reaction_Group_Min_Order_By = {
  count?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  reaction_id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "document_reaction_group" */
export type Document_Reaction_Group_Order_By = {
  count?: Maybe<Order_By>;
  document_id?: Maybe<Order_By>;
  reaction_id?: Maybe<Order_By>;
};

/**
 * persisted version of the document_reaction_group
 * 
 * 
 * columns and relationships of "document_reaction_group_persisted"
 */
export type Document_Reaction_Group_Persisted = {
   __typename?: 'document_reaction_group_persisted';
  count: Scalars['Int'];
  documentId: Scalars['uuid'];
  id: Scalars['bigint'];
  reactionId: Scalars['String'];
};

/** aggregated selection of "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Aggregate = {
   __typename?: 'document_reaction_group_persisted_aggregate';
  aggregate?: Maybe<Document_Reaction_Group_Persisted_Aggregate_Fields>;
  nodes: Array<Document_Reaction_Group_Persisted>;
};

/** aggregate fields of "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Aggregate_Fields = {
   __typename?: 'document_reaction_group_persisted_aggregate_fields';
  avg?: Maybe<Document_Reaction_Group_Persisted_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Document_Reaction_Group_Persisted_Max_Fields>;
  min?: Maybe<Document_Reaction_Group_Persisted_Min_Fields>;
  stddev?: Maybe<Document_Reaction_Group_Persisted_Stddev_Fields>;
  stddev_pop?: Maybe<Document_Reaction_Group_Persisted_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Document_Reaction_Group_Persisted_Stddev_Samp_Fields>;
  sum?: Maybe<Document_Reaction_Group_Persisted_Sum_Fields>;
  var_pop?: Maybe<Document_Reaction_Group_Persisted_Var_Pop_Fields>;
  var_samp?: Maybe<Document_Reaction_Group_Persisted_Var_Samp_Fields>;
  variance?: Maybe<Document_Reaction_Group_Persisted_Variance_Fields>;
};


/** aggregate fields of "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Document_Reaction_Group_Persisted_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Aggregate_Order_By = {
  avg?: Maybe<Document_Reaction_Group_Persisted_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Document_Reaction_Group_Persisted_Max_Order_By>;
  min?: Maybe<Document_Reaction_Group_Persisted_Min_Order_By>;
  stddev?: Maybe<Document_Reaction_Group_Persisted_Stddev_Order_By>;
  stddev_pop?: Maybe<Document_Reaction_Group_Persisted_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Document_Reaction_Group_Persisted_Stddev_Samp_Order_By>;
  sum?: Maybe<Document_Reaction_Group_Persisted_Sum_Order_By>;
  var_pop?: Maybe<Document_Reaction_Group_Persisted_Var_Pop_Order_By>;
  var_samp?: Maybe<Document_Reaction_Group_Persisted_Var_Samp_Order_By>;
  variance?: Maybe<Document_Reaction_Group_Persisted_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Arr_Rel_Insert_Input = {
  data: Array<Document_Reaction_Group_Persisted_Insert_Input>;
  on_conflict?: Maybe<Document_Reaction_Group_Persisted_On_Conflict>;
};

/** aggregate avg on columns */
export type Document_Reaction_Group_Persisted_Avg_Fields = {
   __typename?: 'document_reaction_group_persisted_avg_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Avg_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
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
  documentId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  reactionId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "document_reaction_group_persisted" */
export enum Document_Reaction_Group_Persisted_Constraint {
  /** unique or primary key constraint */
  DocumentReactionGroupPersistedDocumentIdReactionIdKey = 'document_reaction_group_persisted_document_id_reaction_id_key',
  /** unique or primary key constraint */
  DocumentReactionGroupPersistedPkey = 'document_reaction_group_persisted_pkey'
}

/** input type for incrementing integer column in table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Inc_Input = {
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Insert_Input = {
  count?: Maybe<Scalars['Int']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['bigint']>;
  reactionId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Document_Reaction_Group_Persisted_Max_Fields = {
   __typename?: 'document_reaction_group_persisted_max_fields';
  count?: Maybe<Scalars['Int']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['bigint']>;
  reactionId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Max_Order_By = {
  count?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reactionId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Document_Reaction_Group_Persisted_Min_Fields = {
   __typename?: 'document_reaction_group_persisted_min_fields';
  count?: Maybe<Scalars['Int']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['bigint']>;
  reactionId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Min_Order_By = {
  count?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reactionId?: Maybe<Order_By>;
};

/** response of any mutation on the table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Mutation_Response = {
   __typename?: 'document_reaction_group_persisted_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document_Reaction_Group_Persisted>;
};

/** input type for inserting object relation for remote table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Obj_Rel_Insert_Input = {
  data: Document_Reaction_Group_Persisted_Insert_Input;
  on_conflict?: Maybe<Document_Reaction_Group_Persisted_On_Conflict>;
};

/** on conflict condition type for table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_On_Conflict = {
  constraint: Document_Reaction_Group_Persisted_Constraint;
  update_columns: Array<Document_Reaction_Group_Persisted_Update_Column>;
  where?: Maybe<Document_Reaction_Group_Persisted_Bool_Exp>;
};

/** ordering options when selecting data from "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Order_By = {
  count?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
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
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  ReactionId = 'reactionId'
}

/** input type for updating data in table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Set_Input = {
  count?: Maybe<Scalars['Int']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['bigint']>;
  reactionId?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Document_Reaction_Group_Persisted_Stddev_Fields = {
   __typename?: 'document_reaction_group_persisted_stddev_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Stddev_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Document_Reaction_Group_Persisted_Stddev_Pop_Fields = {
   __typename?: 'document_reaction_group_persisted_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Document_Reaction_Group_Persisted_Stddev_Samp_Fields = {
   __typename?: 'document_reaction_group_persisted_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Document_Reaction_Group_Persisted_Sum_Fields = {
   __typename?: 'document_reaction_group_persisted_sum_fields';
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Sum_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "document_reaction_group_persisted" */
export enum Document_Reaction_Group_Persisted_Update_Column {
  /** column name */
  Count = 'count',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  ReactionId = 'reactionId'
}

/** aggregate var_pop on columns */
export type Document_Reaction_Group_Persisted_Var_Pop_Fields = {
   __typename?: 'document_reaction_group_persisted_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Document_Reaction_Group_Persisted_Var_Samp_Fields = {
   __typename?: 'document_reaction_group_persisted_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Document_Reaction_Group_Persisted_Variance_Fields = {
   __typename?: 'document_reaction_group_persisted_variance_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "document_reaction_group_persisted" */
export type Document_Reaction_Group_Persisted_Variance_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** select columns of table "document_reaction_group" */
export enum Document_Reaction_Group_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  DocumentId = 'document_id',
  /** column name */
  ReactionId = 'reaction_id'
}

/** aggregate stddev on columns */
export type Document_Reaction_Group_Stddev_Fields = {
   __typename?: 'document_reaction_group_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "document_reaction_group" */
export type Document_Reaction_Group_Stddev_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Document_Reaction_Group_Stddev_Pop_Fields = {
   __typename?: 'document_reaction_group_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "document_reaction_group" */
export type Document_Reaction_Group_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Document_Reaction_Group_Stddev_Samp_Fields = {
   __typename?: 'document_reaction_group_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "document_reaction_group" */
export type Document_Reaction_Group_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Document_Reaction_Group_Sum_Fields = {
   __typename?: 'document_reaction_group_sum_fields';
  count?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "document_reaction_group" */
export type Document_Reaction_Group_Sum_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Document_Reaction_Group_Var_Pop_Fields = {
   __typename?: 'document_reaction_group_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "document_reaction_group" */
export type Document_Reaction_Group_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Document_Reaction_Group_Var_Samp_Fields = {
   __typename?: 'document_reaction_group_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "document_reaction_group" */
export type Document_Reaction_Group_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Document_Reaction_Group_Variance_Fields = {
   __typename?: 'document_reaction_group_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "document_reaction_group" */
export type Document_Reaction_Group_Variance_Order_By = {
  count?: Maybe<Order_By>;
};

/** input type for inserting data into table "document_reaction" */
export type Document_Reaction_Insert_Input = {
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  document?: Maybe<Document_Obj_Rel_Insert_Input>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reaction?: Maybe<Reaction_Obj_Rel_Insert_Input>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Document_Reaction_Max_Fields = {
   __typename?: 'document_reaction_max_fields';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "document_reaction" */
export type Document_Reaction_Max_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reaction_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Document_Reaction_Min_Fields = {
   __typename?: 'document_reaction_min_fields';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "document_reaction" */
export type Document_Reaction_Min_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reaction_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "document_reaction" */
export type Document_Reaction_Mutation_Response = {
   __typename?: 'document_reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document_Reaction>;
};

/** input type for inserting object relation for remote table "document_reaction" */
export type Document_Reaction_Obj_Rel_Insert_Input = {
  data: Document_Reaction_Insert_Input;
  on_conflict?: Maybe<Document_Reaction_On_Conflict>;
};

/** on conflict condition type for table "document_reaction" */
export type Document_Reaction_On_Conflict = {
  constraint: Document_Reaction_Constraint;
  update_columns: Array<Document_Reaction_Update_Column>;
  where?: Maybe<Document_Reaction_Bool_Exp>;
};

/** ordering options when selecting data from "document_reaction" */
export type Document_Reaction_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  document?: Maybe<Document_Order_By>;
  documentId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
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
  Id = 'id',
  /** column name */
  ReactionId = 'reaction_id'
}

/** input type for updating data in table "document_reaction" */
export type Document_Reaction_Set_Input = {
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** update columns of table "document_reaction" */
export enum Document_Reaction_Update_Column {
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
export type Document_Set_Input = {
  allowComments?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['String']>;
  countComments?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  reactionBalance?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Document_Stddev_Fields = {
   __typename?: 'document_stddev_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "document" */
export type Document_Stddev_Order_By = {
  countComments?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Document_Stddev_Pop_Fields = {
   __typename?: 'document_stddev_pop_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "document" */
export type Document_Stddev_Pop_Order_By = {
  countComments?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Document_Stddev_Samp_Fields = {
   __typename?: 'document_stddev_samp_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "document" */
export type Document_Stddev_Samp_Order_By = {
  countComments?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Document_Sum_Fields = {
   __typename?: 'document_sum_fields';
  countComments?: Maybe<Scalars['Int']>;
  reactionBalance?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "document" */
export type Document_Sum_Order_By = {
  countComments?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
};

/** update columns of table "document" */
export enum Document_Update_Column {
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

/** aggregate var_pop on columns */
export type Document_Var_Pop_Fields = {
   __typename?: 'document_var_pop_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "document" */
export type Document_Var_Pop_Order_By = {
  countComments?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Document_Var_Samp_Fields = {
   __typename?: 'document_var_samp_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "document" */
export type Document_Var_Samp_Order_By = {
  countComments?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Document_Variance_Fields = {
   __typename?: 'document_variance_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "document" */
export type Document_Variance_Order_By = {
  countComments?: Maybe<Order_By>;
  reactionBalance?: Maybe<Order_By>;
};

/** columns and relationships of "follow" */
export type Follow = {
   __typename?: 'follow';
  /** An object relationship */
  author: User;
  authorId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  following: User;
  followingId: Scalars['String'];
  id: Scalars['uuid'];
};

/** aggregated selection of "follow" */
export type Follow_Aggregate = {
   __typename?: 'follow_aggregate';
  aggregate?: Maybe<Follow_Aggregate_Fields>;
  nodes: Array<Follow>;
};

/** aggregate fields of "follow" */
export type Follow_Aggregate_Fields = {
   __typename?: 'follow_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Follow_Max_Fields>;
  min?: Maybe<Follow_Min_Fields>;
};


/** aggregate fields of "follow" */
export type Follow_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Follow_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "follow" */
export type Follow_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Follow_Max_Order_By>;
  min?: Maybe<Follow_Min_Order_By>;
};

/** input type for inserting array relation for remote table "follow" */
export type Follow_Arr_Rel_Insert_Input = {
  data: Array<Follow_Insert_Input>;
  on_conflict?: Maybe<Follow_On_Conflict>;
};

/** Boolean expression to filter rows from the table "follow". All fields are combined with a logical 'AND'. */
export type Follow_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Follow_Bool_Exp>>>;
  _not?: Maybe<Follow_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Follow_Bool_Exp>>>;
  author?: Maybe<User_Bool_Exp>;
  authorId?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  following?: Maybe<User_Bool_Exp>;
  followingId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "follow" */
export enum Follow_Constraint {
  /** unique or primary key constraint */
  FollowPkey = 'follow_pkey'
}

/** input type for inserting data into table "follow" */
export type Follow_Insert_Input = {
  author?: Maybe<User_Obj_Rel_Insert_Input>;
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  following?: Maybe<User_Obj_Rel_Insert_Input>;
  followingId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Follow_Max_Fields = {
   __typename?: 'follow_max_fields';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  followingId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "follow" */
export type Follow_Max_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  followingId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Follow_Min_Fields = {
   __typename?: 'follow_min_fields';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  followingId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "follow" */
export type Follow_Min_Order_By = {
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  followingId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "follow" */
export type Follow_Mutation_Response = {
   __typename?: 'follow_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Follow>;
};

/** input type for inserting object relation for remote table "follow" */
export type Follow_Obj_Rel_Insert_Input = {
  data: Follow_Insert_Input;
  on_conflict?: Maybe<Follow_On_Conflict>;
};

/** on conflict condition type for table "follow" */
export type Follow_On_Conflict = {
  constraint: Follow_Constraint;
  update_columns: Array<Follow_Update_Column>;
  where?: Maybe<Follow_Bool_Exp>;
};

/** ordering options when selecting data from "follow" */
export type Follow_Order_By = {
  author?: Maybe<User_Order_By>;
  authorId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  following?: Maybe<User_Order_By>;
  followingId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "follow" */
export type Follow_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

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

/** input type for updating data in table "follow" */
export type Follow_Set_Input = {
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  followingId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "follow" */
export enum Follow_Update_Column {
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
  authorId: Scalars['String'];
  /** An object relationship */
  color: Color;
  color_name: Scalars['String'];
  /** An array relationship */
  document_labels: Array<Document_Label>;
  /** An aggregated array relationship */
  document_labels_aggregate: Document_Label_Aggregate;
  id: Scalars['uuid'];
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


/** columns and relationships of "label" */
export type LabelDocument_Labels_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Label_Order_By>>;
  where?: Maybe<Document_Label_Bool_Exp>;
};

/** aggregated selection of "label" */
export type Label_Aggregate = {
   __typename?: 'label_aggregate';
  aggregate?: Maybe<Label_Aggregate_Fields>;
  nodes: Array<Label>;
};

/** aggregate fields of "label" */
export type Label_Aggregate_Fields = {
   __typename?: 'label_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Label_Max_Fields>;
  min?: Maybe<Label_Min_Fields>;
};


/** aggregate fields of "label" */
export type Label_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Label_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "label" */
export type Label_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Label_Max_Order_By>;
  min?: Maybe<Label_Min_Order_By>;
};

/** input type for inserting array relation for remote table "label" */
export type Label_Arr_Rel_Insert_Input = {
  data: Array<Label_Insert_Input>;
  on_conflict?: Maybe<Label_On_Conflict>;
};

/** Boolean expression to filter rows from the table "label". All fields are combined with a logical 'AND'. */
export type Label_Bool_Exp = {
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
};

/** unique or primary key constraints on table "label" */
export enum Label_Constraint {
  /** unique or primary key constraint */
  LabelPkey = 'label_pkey'
}

/** input type for inserting data into table "label" */
export type Label_Insert_Input = {
  author?: Maybe<User_Obj_Rel_Insert_Input>;
  authorId?: Maybe<Scalars['String']>;
  color?: Maybe<Color_Obj_Rel_Insert_Input>;
  color_name?: Maybe<Scalars['String']>;
  document_labels?: Maybe<Document_Label_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Label_Max_Fields = {
   __typename?: 'label_max_fields';
  authorId?: Maybe<Scalars['String']>;
  color_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "label" */
export type Label_Max_Order_By = {
  authorId?: Maybe<Order_By>;
  color_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Label_Min_Fields = {
   __typename?: 'label_min_fields';
  authorId?: Maybe<Scalars['String']>;
  color_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "label" */
export type Label_Min_Order_By = {
  authorId?: Maybe<Order_By>;
  color_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
};

/** response of any mutation on the table "label" */
export type Label_Mutation_Response = {
   __typename?: 'label_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Label>;
};

/** input type for inserting object relation for remote table "label" */
export type Label_Obj_Rel_Insert_Input = {
  data: Label_Insert_Input;
  on_conflict?: Maybe<Label_On_Conflict>;
};

/** on conflict condition type for table "label" */
export type Label_On_Conflict = {
  constraint: Label_Constraint;
  update_columns: Array<Label_Update_Column>;
  where?: Maybe<Label_Bool_Exp>;
};

/** ordering options when selecting data from "label" */
export type Label_Order_By = {
  author?: Maybe<User_Order_By>;
  authorId?: Maybe<Order_By>;
  color?: Maybe<Color_Order_By>;
  color_name?: Maybe<Order_By>;
  document_labels_aggregate?: Maybe<Document_Label_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
};

/** primary key columns input for table: "label" */
export type Label_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

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
export type Label_Set_Input = {
  authorId?: Maybe<Scalars['String']>;
  color_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
};

/** update columns of table "label" */
export enum Label_Update_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  ColorName = 'color_name',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** insert data into the table: "color" */
  addColor?: Maybe<Color_Mutation_Response>;
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
  /** insert data into the table: "reaction" */
  addReaction?: Maybe<Reaction_Mutation_Response>;
  /** insert data into the table: "user" */
  addUser?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "color" */
  delete_color_by_pk?: Maybe<Color>;
  /** delete single row from the table: "comment" */
  delete_comment_by_pk?: Maybe<Comment>;
  /** delete single row from the table: "comment_reaction" */
  delete_comment_reaction_by_pk?: Maybe<Comment_Reaction>;
  /** delete single row from the table: "document" */
  delete_document_by_pk?: Maybe<Document>;
  /** delete single row from the table: "document_content" */
  delete_document_content_by_pk?: Maybe<Document_Content>;
  /** delete single row from the table: "document_label" */
  delete_document_label_by_pk?: Maybe<Document_Label>;
  /** delete single row from the table: "document_reaction" */
  delete_document_reaction_by_pk?: Maybe<Document_Reaction>;
  /** delete data from the table: "document_reaction_group_persisted" */
  delete_document_reaction_group_persisted?: Maybe<Document_Reaction_Group_Persisted_Mutation_Response>;
  /** delete single row from the table: "document_reaction_group_persisted" */
  delete_document_reaction_group_persisted_by_pk?: Maybe<Document_Reaction_Group_Persisted>;
  /** delete single row from the table: "follow" */
  delete_follow_by_pk?: Maybe<Follow>;
  /** delete single row from the table: "label" */
  delete_label_by_pk?: Maybe<Label>;
  /** delete single row from the table: "reaction" */
  delete_reaction_by_pk?: Maybe<Reaction>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert a single row into the table: "color" */
  insert_color_one?: Maybe<Color>;
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
  /** insert data into the table: "document_reaction_group_persisted" */
  insert_document_reaction_group_persisted?: Maybe<Document_Reaction_Group_Persisted_Mutation_Response>;
  /** insert a single row into the table: "document_reaction_group_persisted" */
  insert_document_reaction_group_persisted_one?: Maybe<Document_Reaction_Group_Persisted>;
  /** insert a single row into the table: "document_reaction" */
  insert_document_reaction_one?: Maybe<Document_Reaction>;
  /** insert a single row into the table: "follow" */
  insert_follow_one?: Maybe<Follow>;
  /** insert a single row into the table: "label" */
  insert_label_one?: Maybe<Label>;
  /** insert a single row into the table: "reaction" */
  insert_reaction_one?: Maybe<Reaction>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** delete data from the table: "color" */
  removeColor?: Maybe<Color_Mutation_Response>;
  /** delete data from the table: "comment" */
  removeComment?: Maybe<Comment_Mutation_Response>;
  /** delete data from the table: "comment_reaction" */
  removeCommentReaction?: Maybe<Comment_Reaction_Mutation_Response>;
  /** delete data from the table: "document" */
  removeDocument?: Maybe<Document_Mutation_Response>;
  /** delete data from the table: "document_content" */
  removeDocumentContent?: Maybe<Document_Content_Mutation_Response>;
  /** delete data from the table: "document_label" */
  removeDocumentLabel?: Maybe<Document_Label_Mutation_Response>;
  /** delete data from the table: "document_reaction" */
  removeDocumentReaction?: Maybe<Document_Reaction_Mutation_Response>;
  /** delete data from the table: "follow" */
  removeFollow?: Maybe<Follow_Mutation_Response>;
  /** delete data from the table: "label" */
  removeLabel?: Maybe<Label_Mutation_Response>;
  /** delete data from the table: "reaction" */
  removeReaction?: Maybe<Reaction_Mutation_Response>;
  /** delete data from the table: "user" */
  removeUser?: Maybe<User_Mutation_Response>;
  /** update data of the table: "color" */
  updateColor?: Maybe<Color_Mutation_Response>;
  /** update data of the table: "comment" */
  updateComment?: Maybe<Comment_Mutation_Response>;
  /** update data of the table: "comment_reaction" */
  updateCommentReaction?: Maybe<Comment_Reaction_Mutation_Response>;
  /** update data of the table: "document" */
  updateDocument?: Maybe<Document_Mutation_Response>;
  /** update data of the table: "document_content" */
  updateDocumentContent?: Maybe<Document_Content_Mutation_Response>;
  /** update data of the table: "document_label" */
  updateDocumentLabel?: Maybe<Document_Label_Mutation_Response>;
  /** update data of the table: "document_reaction" */
  updateDocumentReaction?: Maybe<Document_Reaction_Mutation_Response>;
  /** update data of the table: "follow" */
  updateFollow?: Maybe<Follow_Mutation_Response>;
  /** update data of the table: "label" */
  updateLabel?: Maybe<Label_Mutation_Response>;
  /** update data of the table: "reaction" */
  updateReaction?: Maybe<Reaction_Mutation_Response>;
  /** update data of the table: "user" */
  updateUser?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "color" */
  update_color_by_pk?: Maybe<Color>;
  /** update single row of the table: "comment" */
  update_comment_by_pk?: Maybe<Comment>;
  /** update single row of the table: "comment_reaction" */
  update_comment_reaction_by_pk?: Maybe<Comment_Reaction>;
  /** update single row of the table: "document" */
  update_document_by_pk?: Maybe<Document>;
  /** update single row of the table: "document_content" */
  update_document_content_by_pk?: Maybe<Document_Content>;
  /** update single row of the table: "document_label" */
  update_document_label_by_pk?: Maybe<Document_Label>;
  /** update single row of the table: "document_reaction" */
  update_document_reaction_by_pk?: Maybe<Document_Reaction>;
  /** update data of the table: "document_reaction_group_persisted" */
  update_document_reaction_group_persisted?: Maybe<Document_Reaction_Group_Persisted_Mutation_Response>;
  /** update single row of the table: "document_reaction_group_persisted" */
  update_document_reaction_group_persisted_by_pk?: Maybe<Document_Reaction_Group_Persisted>;
  /** update single row of the table: "follow" */
  update_follow_by_pk?: Maybe<Follow>;
  /** update single row of the table: "label" */
  update_label_by_pk?: Maybe<Label>;
  /** update single row of the table: "reaction" */
  update_reaction_by_pk?: Maybe<Reaction>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootAddColorArgs = {
  objects: Array<Color_Insert_Input>;
  on_conflict?: Maybe<Color_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddCommentArgs = {
  objects: Array<Comment_Insert_Input>;
  on_conflict?: Maybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddCommentReactionArgs = {
  objects: Array<Comment_Reaction_Insert_Input>;
  on_conflict?: Maybe<Comment_Reaction_On_Conflict>;
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
  on_conflict?: Maybe<Document_Label_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddDocumentReactionArgs = {
  objects: Array<Document_Reaction_Insert_Input>;
  on_conflict?: Maybe<Document_Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddFollowArgs = {
  objects: Array<Follow_Insert_Input>;
  on_conflict?: Maybe<Follow_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddLabelArgs = {
  objects: Array<Label_Insert_Input>;
  on_conflict?: Maybe<Label_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddReactionArgs = {
  objects: Array<Reaction_Insert_Input>;
  on_conflict?: Maybe<Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootAddUserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootDelete_Color_By_PkArgs = {
  name: Scalars['String'];
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
export type Mutation_RootDelete_Document_Content_By_PkArgs = {
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
export type Mutation_RootDelete_Document_Reaction_Group_PersistedArgs = {
  where: Document_Reaction_Group_Persisted_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Document_Reaction_Group_Persisted_By_PkArgs = {
  id: Scalars['bigint'];
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
export type Mutation_RootDelete_Reaction_By_PkArgs = {
  htmlCode: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Color_OneArgs = {
  object: Color_Insert_Input;
  on_conflict?: Maybe<Color_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_OneArgs = {
  object: Comment_Insert_Input;
  on_conflict?: Maybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_Reaction_OneArgs = {
  object: Comment_Reaction_Insert_Input;
  on_conflict?: Maybe<Comment_Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_Content_OneArgs = {
  object: Document_Content_Insert_Input;
  on_conflict?: Maybe<Document_Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_Label_OneArgs = {
  object: Document_Label_Insert_Input;
  on_conflict?: Maybe<Document_Label_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_OneArgs = {
  object: Document_Insert_Input;
  on_conflict?: Maybe<Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_Reaction_Group_PersistedArgs = {
  objects: Array<Document_Reaction_Group_Persisted_Insert_Input>;
  on_conflict?: Maybe<Document_Reaction_Group_Persisted_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_Reaction_Group_Persisted_OneArgs = {
  object: Document_Reaction_Group_Persisted_Insert_Input;
  on_conflict?: Maybe<Document_Reaction_Group_Persisted_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Document_Reaction_OneArgs = {
  object: Document_Reaction_Insert_Input;
  on_conflict?: Maybe<Document_Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Follow_OneArgs = {
  object: Follow_Insert_Input;
  on_conflict?: Maybe<Follow_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Label_OneArgs = {
  object: Label_Insert_Input;
  on_conflict?: Maybe<Label_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reaction_OneArgs = {
  object: Reaction_Insert_Input;
  on_conflict?: Maybe<Reaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootRemoveColorArgs = {
  where: Color_Bool_Exp;
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
export type Mutation_RootRemoveDocumentContentArgs = {
  where: Document_Content_Bool_Exp;
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
export type Mutation_RootRemoveReactionArgs = {
  where: Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootRemoveUserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateColorArgs = {
  _set?: Maybe<Color_Set_Input>;
  where: Color_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateCommentArgs = {
  _inc?: Maybe<Comment_Inc_Input>;
  _set?: Maybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateCommentReactionArgs = {
  _set?: Maybe<Comment_Reaction_Set_Input>;
  where: Comment_Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateDocumentArgs = {
  _inc?: Maybe<Document_Inc_Input>;
  _set?: Maybe<Document_Set_Input>;
  where: Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateDocumentContentArgs = {
  _set?: Maybe<Document_Content_Set_Input>;
  where: Document_Content_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateDocumentLabelArgs = {
  _set?: Maybe<Document_Label_Set_Input>;
  where: Document_Label_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateDocumentReactionArgs = {
  _set?: Maybe<Document_Reaction_Set_Input>;
  where: Document_Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFollowArgs = {
  _set?: Maybe<Follow_Set_Input>;
  where: Follow_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateLabelArgs = {
  _set?: Maybe<Label_Set_Input>;
  where: Label_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateReactionArgs = {
  _inc?: Maybe<Reaction_Inc_Input>;
  _set?: Maybe<Reaction_Set_Input>;
  where: Reaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Color_By_PkArgs = {
  _set?: Maybe<Color_Set_Input>;
  pk_columns: Color_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_By_PkArgs = {
  _inc?: Maybe<Comment_Inc_Input>;
  _set?: Maybe<Comment_Set_Input>;
  pk_columns: Comment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_Reaction_By_PkArgs = {
  _set?: Maybe<Comment_Reaction_Set_Input>;
  pk_columns: Comment_Reaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Document_By_PkArgs = {
  _inc?: Maybe<Document_Inc_Input>;
  _set?: Maybe<Document_Set_Input>;
  pk_columns: Document_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Document_Content_By_PkArgs = {
  _set?: Maybe<Document_Content_Set_Input>;
  pk_columns: Document_Content_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Document_Label_By_PkArgs = {
  _set?: Maybe<Document_Label_Set_Input>;
  pk_columns: Document_Label_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Document_Reaction_By_PkArgs = {
  _set?: Maybe<Document_Reaction_Set_Input>;
  pk_columns: Document_Reaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Document_Reaction_Group_PersistedArgs = {
  _inc?: Maybe<Document_Reaction_Group_Persisted_Inc_Input>;
  _set?: Maybe<Document_Reaction_Group_Persisted_Set_Input>;
  where: Document_Reaction_Group_Persisted_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Document_Reaction_Group_Persisted_By_PkArgs = {
  _inc?: Maybe<Document_Reaction_Group_Persisted_Inc_Input>;
  _set?: Maybe<Document_Reaction_Group_Persisted_Set_Input>;
  pk_columns: Document_Reaction_Group_Persisted_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Follow_By_PkArgs = {
  _set?: Maybe<Follow_Set_Input>;
  pk_columns: Follow_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Label_By_PkArgs = {
  _set?: Maybe<Label_Set_Input>;
  pk_columns: Label_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reaction_By_PkArgs = {
  _inc?: Maybe<Reaction_Inc_Input>;
  _set?: Maybe<Reaction_Set_Input>;
  pk_columns: Reaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
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
  /** fetch aggregated fields from the table: "color" */
  color_aggregate: Color_Aggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment?: Maybe<Comment>;
  /** fetch data from the table: "comment_reaction" using primary key columns */
  commentReaction?: Maybe<Comment_Reaction>;
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate;
  /** fetch aggregated fields from the table: "comment_reaction" */
  comment_reaction_aggregate: Comment_Reaction_Aggregate;
  /** fetch data from the table: "comment_reactions_group" */
  comment_reactions_group: Array<Comment_Reactions_Group>;
  /** fetch aggregated fields from the table: "comment_reactions_group" */
  comment_reactions_group_aggregate: Comment_Reactions_Group_Aggregate;
  /** fetch data from the table: "document" using primary key columns */
  document?: Maybe<Document>;
  /** fetch data from the table: "document_content" using primary key columns */
  documentContent?: Maybe<Document_Content>;
  /** fetch data from the table: "document_label" using primary key columns */
  documentLabel?: Maybe<Document_Label>;
  /** fetch data from the table: "document_reaction" using primary key columns */
  documentReactino?: Maybe<Document_Reaction>;
  /** fetch aggregated fields from the table: "document" */
  document_aggregate: Document_Aggregate;
  /** fetch aggregated fields from the table: "document_content" */
  document_content_aggregate: Document_Content_Aggregate;
  /** fetch aggregated fields from the table: "document_label" */
  document_label_aggregate: Document_Label_Aggregate;
  /** fetch aggregated fields from the table: "document_reaction" */
  document_reaction_aggregate: Document_Reaction_Aggregate;
  /** fetch data from the table: "document_reaction_group" */
  document_reaction_group: Array<Document_Reaction_Group>;
  /** fetch aggregated fields from the table: "document_reaction_group" */
  document_reaction_group_aggregate: Document_Reaction_Group_Aggregate;
  /** fetch data from the table: "document_reaction_group_persisted" */
  document_reaction_group_persisted: Array<Document_Reaction_Group_Persisted>;
  /** fetch aggregated fields from the table: "document_reaction_group_persisted" */
  document_reaction_group_persisted_aggregate: Document_Reaction_Group_Persisted_Aggregate;
  /** fetch data from the table: "document_reaction_group_persisted" using primary key columns */
  document_reaction_group_persisted_by_pk?: Maybe<Document_Reaction_Group_Persisted>;
  /** fetch data from the table: "follow" using primary key columns */
  follow?: Maybe<Follow>;
  /** fetch aggregated fields from the table: "follow" */
  follow_aggregate: Follow_Aggregate;
  /** fetch data from the table: "label" using primary key columns */
  label?: Maybe<Label>;
  /** fetch aggregated fields from the table: "label" */
  label_aggregate: Label_Aggregate;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction?: Maybe<Reaction>;
  /** fetch aggregated fields from the table: "reaction" */
  reaction_aggregate: Reaction_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
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
export type Query_RootColor_AggregateArgs = {
  distinct_on?: Maybe<Array<Color_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Color_Order_By>>;
  where?: Maybe<Color_Bool_Exp>;
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
export type Query_RootComment_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};


/** query root */
export type Query_RootComment_Reaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reaction_Order_By>>;
  where?: Maybe<Comment_Reaction_Bool_Exp>;
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
export type Query_RootComment_Reactions_Group_AggregateArgs = {
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
export type Query_RootDocument_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Order_By>>;
  where?: Maybe<Document_Bool_Exp>;
};


/** query root */
export type Query_RootDocument_Content_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Content_Order_By>>;
  where?: Maybe<Document_Content_Bool_Exp>;
};


/** query root */
export type Query_RootDocument_Label_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Label_Order_By>>;
  where?: Maybe<Document_Label_Bool_Exp>;
};


/** query root */
export type Query_RootDocument_Reaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Reaction_Order_By>>;
  where?: Maybe<Document_Reaction_Bool_Exp>;
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
export type Query_RootDocument_Reaction_Group_AggregateArgs = {
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
export type Query_RootDocument_Reaction_Group_Persisted_AggregateArgs = {
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
export type Query_RootFollow_AggregateArgs = {
  distinct_on?: Maybe<Array<Follow_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Follow_Order_By>>;
  where?: Maybe<Follow_Bool_Exp>;
};


/** query root */
export type Query_RootLabelArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootLabel_AggregateArgs = {
  distinct_on?: Maybe<Array<Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Label_Order_By>>;
  where?: Maybe<Label_Bool_Exp>;
};


/** query root */
export type Query_RootReactionArgs = {
  htmlCode: Scalars['String'];
};


/** query root */
export type Query_RootReaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


/** query root */
export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** columns and relationships of "reaction" */
export type Reaction = {
   __typename?: 'reaction';
  /** Indicator of this is a positive or negative reaction. Range: -100 to 100 */
  balance: Scalars['Int'];
  htmlCode: Scalars['String'];
  title: Scalars['String'];
};

/** aggregated selection of "reaction" */
export type Reaction_Aggregate = {
   __typename?: 'reaction_aggregate';
  aggregate?: Maybe<Reaction_Aggregate_Fields>;
  nodes: Array<Reaction>;
};

/** aggregate fields of "reaction" */
export type Reaction_Aggregate_Fields = {
   __typename?: 'reaction_aggregate_fields';
  avg?: Maybe<Reaction_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Reaction_Max_Fields>;
  min?: Maybe<Reaction_Min_Fields>;
  stddev?: Maybe<Reaction_Stddev_Fields>;
  stddev_pop?: Maybe<Reaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reaction_Stddev_Samp_Fields>;
  sum?: Maybe<Reaction_Sum_Fields>;
  var_pop?: Maybe<Reaction_Var_Pop_Fields>;
  var_samp?: Maybe<Reaction_Var_Samp_Fields>;
  variance?: Maybe<Reaction_Variance_Fields>;
};


/** aggregate fields of "reaction" */
export type Reaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Reaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reaction" */
export type Reaction_Aggregate_Order_By = {
  avg?: Maybe<Reaction_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Reaction_Max_Order_By>;
  min?: Maybe<Reaction_Min_Order_By>;
  stddev?: Maybe<Reaction_Stddev_Order_By>;
  stddev_pop?: Maybe<Reaction_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Reaction_Stddev_Samp_Order_By>;
  sum?: Maybe<Reaction_Sum_Order_By>;
  var_pop?: Maybe<Reaction_Var_Pop_Order_By>;
  var_samp?: Maybe<Reaction_Var_Samp_Order_By>;
  variance?: Maybe<Reaction_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "reaction" */
export type Reaction_Arr_Rel_Insert_Input = {
  data: Array<Reaction_Insert_Input>;
  on_conflict?: Maybe<Reaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Reaction_Avg_Fields = {
   __typename?: 'reaction_avg_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "reaction" */
export type Reaction_Avg_Order_By = {
  balance?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reaction". All fields are combined with a logical 'AND'. */
export type Reaction_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Reaction_Bool_Exp>>>;
  _not?: Maybe<Reaction_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Reaction_Bool_Exp>>>;
  balance?: Maybe<Int_Comparison_Exp>;
  htmlCode?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "reaction" */
export enum Reaction_Constraint {
  /** unique or primary key constraint */
  ReactionHtmlCodeKey = 'reaction_html_code_key',
  /** unique or primary key constraint */
  ReactionPkey = 'reaction_pkey'
}

/** input type for incrementing integer column in table "reaction" */
export type Reaction_Inc_Input = {
  balance?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "reaction" */
export type Reaction_Insert_Input = {
  balance?: Maybe<Scalars['Int']>;
  htmlCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Reaction_Max_Fields = {
   __typename?: 'reaction_max_fields';
  balance?: Maybe<Scalars['Int']>;
  htmlCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "reaction" */
export type Reaction_Max_Order_By = {
  balance?: Maybe<Order_By>;
  htmlCode?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Reaction_Min_Fields = {
   __typename?: 'reaction_min_fields';
  balance?: Maybe<Scalars['Int']>;
  htmlCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "reaction" */
export type Reaction_Min_Order_By = {
  balance?: Maybe<Order_By>;
  htmlCode?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "reaction" */
export type Reaction_Mutation_Response = {
   __typename?: 'reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Reaction>;
};

/** input type for inserting object relation for remote table "reaction" */
export type Reaction_Obj_Rel_Insert_Input = {
  data: Reaction_Insert_Input;
  on_conflict?: Maybe<Reaction_On_Conflict>;
};

/** on conflict condition type for table "reaction" */
export type Reaction_On_Conflict = {
  constraint: Reaction_Constraint;
  update_columns: Array<Reaction_Update_Column>;
  where?: Maybe<Reaction_Bool_Exp>;
};

/** ordering options when selecting data from "reaction" */
export type Reaction_Order_By = {
  balance?: Maybe<Order_By>;
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
  Balance = 'balance',
  /** column name */
  HtmlCode = 'htmlCode',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "reaction" */
export type Reaction_Set_Input = {
  balance?: Maybe<Scalars['Int']>;
  htmlCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Reaction_Stddev_Fields = {
   __typename?: 'reaction_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "reaction" */
export type Reaction_Stddev_Order_By = {
  balance?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reaction_Stddev_Pop_Fields = {
   __typename?: 'reaction_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "reaction" */
export type Reaction_Stddev_Pop_Order_By = {
  balance?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reaction_Stddev_Samp_Fields = {
   __typename?: 'reaction_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "reaction" */
export type Reaction_Stddev_Samp_Order_By = {
  balance?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Reaction_Sum_Fields = {
   __typename?: 'reaction_sum_fields';
  balance?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "reaction" */
export type Reaction_Sum_Order_By = {
  balance?: Maybe<Order_By>;
};

/** update columns of table "reaction" */
export enum Reaction_Update_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  HtmlCode = 'htmlCode',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Reaction_Var_Pop_Fields = {
   __typename?: 'reaction_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "reaction" */
export type Reaction_Var_Pop_Order_By = {
  balance?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reaction_Var_Samp_Fields = {
   __typename?: 'reaction_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "reaction" */
export type Reaction_Var_Samp_Order_By = {
  balance?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Reaction_Variance_Fields = {
   __typename?: 'reaction_variance_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "reaction" */
export type Reaction_Variance_Order_By = {
  balance?: Maybe<Order_By>;
};

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
  /** fetch aggregated fields from the table: "color" */
  color_aggregate: Color_Aggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment?: Maybe<Comment>;
  /** fetch data from the table: "comment_reaction" using primary key columns */
  commentReaction?: Maybe<Comment_Reaction>;
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate;
  /** fetch aggregated fields from the table: "comment_reaction" */
  comment_reaction_aggregate: Comment_Reaction_Aggregate;
  /** fetch data from the table: "comment_reactions_group" */
  comment_reactions_group: Array<Comment_Reactions_Group>;
  /** fetch aggregated fields from the table: "comment_reactions_group" */
  comment_reactions_group_aggregate: Comment_Reactions_Group_Aggregate;
  /** fetch data from the table: "document" using primary key columns */
  document?: Maybe<Document>;
  /** fetch data from the table: "document_content" using primary key columns */
  documentContent?: Maybe<Document_Content>;
  /** fetch data from the table: "document_label" using primary key columns */
  documentLabel?: Maybe<Document_Label>;
  /** fetch data from the table: "document_reaction" using primary key columns */
  documentReactino?: Maybe<Document_Reaction>;
  /** fetch aggregated fields from the table: "document" */
  document_aggregate: Document_Aggregate;
  /** fetch aggregated fields from the table: "document_content" */
  document_content_aggregate: Document_Content_Aggregate;
  /** fetch aggregated fields from the table: "document_label" */
  document_label_aggregate: Document_Label_Aggregate;
  /** fetch aggregated fields from the table: "document_reaction" */
  document_reaction_aggregate: Document_Reaction_Aggregate;
  /** fetch data from the table: "document_reaction_group" */
  document_reaction_group: Array<Document_Reaction_Group>;
  /** fetch aggregated fields from the table: "document_reaction_group" */
  document_reaction_group_aggregate: Document_Reaction_Group_Aggregate;
  /** fetch data from the table: "document_reaction_group_persisted" */
  document_reaction_group_persisted: Array<Document_Reaction_Group_Persisted>;
  /** fetch aggregated fields from the table: "document_reaction_group_persisted" */
  document_reaction_group_persisted_aggregate: Document_Reaction_Group_Persisted_Aggregate;
  /** fetch data from the table: "document_reaction_group_persisted" using primary key columns */
  document_reaction_group_persisted_by_pk?: Maybe<Document_Reaction_Group_Persisted>;
  /** fetch data from the table: "follow" using primary key columns */
  follow?: Maybe<Follow>;
  /** fetch aggregated fields from the table: "follow" */
  follow_aggregate: Follow_Aggregate;
  /** fetch data from the table: "label" using primary key columns */
  label?: Maybe<Label>;
  /** fetch aggregated fields from the table: "label" */
  label_aggregate: Label_Aggregate;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction?: Maybe<Reaction>;
  /** fetch aggregated fields from the table: "reaction" */
  reaction_aggregate: Reaction_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
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
export type Subscription_RootColor_AggregateArgs = {
  distinct_on?: Maybe<Array<Color_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Color_Order_By>>;
  where?: Maybe<Color_Bool_Exp>;
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
export type Subscription_RootComment_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComment_Reaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comment_Reaction_Order_By>>;
  where?: Maybe<Comment_Reaction_Bool_Exp>;
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
export type Subscription_RootComment_Reactions_Group_AggregateArgs = {
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
export type Subscription_RootDocument_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Order_By>>;
  where?: Maybe<Document_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocument_Content_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Content_Order_By>>;
  where?: Maybe<Document_Content_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocument_Label_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Label_Order_By>>;
  where?: Maybe<Document_Label_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDocument_Reaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Document_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Document_Reaction_Order_By>>;
  where?: Maybe<Document_Reaction_Bool_Exp>;
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
export type Subscription_RootDocument_Reaction_Group_AggregateArgs = {
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
export type Subscription_RootDocument_Reaction_Group_Persisted_AggregateArgs = {
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
export type Subscription_RootFollow_AggregateArgs = {
  distinct_on?: Maybe<Array<Follow_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Follow_Order_By>>;
  where?: Maybe<Follow_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLabelArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootLabel_AggregateArgs = {
  distinct_on?: Maybe<Array<Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Label_Order_By>>;
  where?: Maybe<Label_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReactionArgs = {
  htmlCode: Scalars['String'];
};


/** subscription root */
export type Subscription_RootReaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
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
 * columns and relationships of "user"
 */
export type User = {
   __typename?: 'user';
  authId: Scalars['String'];
  balanceCommentReaction: Scalars['bigint'];
  balanceDocumentReaction: Scalars['bigint'];
  countPrivateDocs: Scalars['Int'];
  countWrittenComments: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  document_labels: Array<Document_Label>;
  /** An aggregated array relationship */
  document_labels_aggregate: Document_Label_Aggregate;
  /** An array relationship */
  documents: Array<Document>;
  /** An aggregated array relationship */
  documents_aggregate: Document_Aggregate;
  /** An array relationship */
  followers: Array<Follow>;
  /** An aggregated array relationship */
  followers_aggregate: Follow_Aggregate;
  /** An array relationship */
  followings: Array<Follow>;
  /** An aggregated array relationship */
  followings_aggregate: Follow_Aggregate;
  id: Scalars['uuid'];
  imageUrl?: Maybe<Scalars['String']>;
  /** An array relationship */
  labels: Array<Label>;
  /** An aggregated array relationship */
  labels_aggregate: Label_Aggregate;
  maxPrivateDocs: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/**
 * add author table
 * 
 * 
 * columns and relationships of "user"
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
 * columns and relationships of "user"
 */
export type UserDocument_Labels_AggregateArgs = {
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
 * columns and relationships of "user"
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
 * columns and relationships of "user"
 */
export type UserDocuments_AggregateArgs = {
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
 * columns and relationships of "user"
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
 * columns and relationships of "user"
 */
export type UserFollowers_AggregateArgs = {
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
 * columns and relationships of "user"
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
 * columns and relationships of "user"
 */
export type UserFollowings_AggregateArgs = {
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
 * columns and relationships of "user"
 */
export type UserLabelsArgs = {
  distinct_on?: Maybe<Array<Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Label_Order_By>>;
  where?: Maybe<Label_Bool_Exp>;
};


/**
 * add author table
 * 
 * 
 * columns and relationships of "user"
 */
export type UserLabels_AggregateArgs = {
  distinct_on?: Maybe<Array<Label_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Label_Order_By>>;
  where?: Maybe<Label_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
   __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
   __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
   __typename?: 'user_avg_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  balanceCommentReaction?: Maybe<Order_By>;
  balanceDocumentReaction?: Maybe<Order_By>;
  countPrivateDocs?: Maybe<Order_By>;
  countWrittenComments?: Maybe<Order_By>;
  maxPrivateDocs?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
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
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserAuthIdKey = 'user_auth_id_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing integer column in table "user" */
export type User_Inc_Input = {
  balanceCommentReaction?: Maybe<Scalars['bigint']>;
  balanceDocumentReaction?: Maybe<Scalars['bigint']>;
  countPrivateDocs?: Maybe<Scalars['Int']>;
  countWrittenComments?: Maybe<Scalars['Int']>;
  maxPrivateDocs?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  authId?: Maybe<Scalars['String']>;
  balanceCommentReaction?: Maybe<Scalars['bigint']>;
  balanceDocumentReaction?: Maybe<Scalars['bigint']>;
  countPrivateDocs?: Maybe<Scalars['Int']>;
  countWrittenComments?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  document_labels?: Maybe<Document_Label_Arr_Rel_Insert_Input>;
  documents?: Maybe<Document_Arr_Rel_Insert_Input>;
  followers?: Maybe<Follow_Arr_Rel_Insert_Input>;
  followings?: Maybe<Follow_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  labels?: Maybe<Label_Arr_Rel_Insert_Input>;
  maxPrivateDocs?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
   __typename?: 'user_max_fields';
  authId?: Maybe<Scalars['String']>;
  balanceCommentReaction?: Maybe<Scalars['bigint']>;
  balanceDocumentReaction?: Maybe<Scalars['bigint']>;
  countPrivateDocs?: Maybe<Scalars['Int']>;
  countWrittenComments?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  maxPrivateDocs?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
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
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
   __typename?: 'user_min_fields';
  authId?: Maybe<Scalars['String']>;
  balanceCommentReaction?: Maybe<Scalars['bigint']>;
  balanceDocumentReaction?: Maybe<Scalars['bigint']>;
  countPrivateDocs?: Maybe<Scalars['Int']>;
  countWrittenComments?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  maxPrivateDocs?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
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
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
   __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  authId?: Maybe<Order_By>;
  balanceCommentReaction?: Maybe<Order_By>;
  balanceDocumentReaction?: Maybe<Order_By>;
  countPrivateDocs?: Maybe<Order_By>;
  countWrittenComments?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  document_labels_aggregate?: Maybe<Document_Label_Aggregate_Order_By>;
  documents_aggregate?: Maybe<Document_Aggregate_Order_By>;
  followers_aggregate?: Maybe<Follow_Aggregate_Order_By>;
  followings_aggregate?: Maybe<Follow_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  labels_aggregate?: Maybe<Label_Aggregate_Order_By>;
  maxPrivateDocs?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

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
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  authId?: Maybe<Scalars['String']>;
  balanceCommentReaction?: Maybe<Scalars['bigint']>;
  balanceDocumentReaction?: Maybe<Scalars['bigint']>;
  countPrivateDocs?: Maybe<Scalars['Int']>;
  countWrittenComments?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  maxPrivateDocs?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
   __typename?: 'user_stddev_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  balanceCommentReaction?: Maybe<Order_By>;
  balanceDocumentReaction?: Maybe<Order_By>;
  countPrivateDocs?: Maybe<Order_By>;
  countWrittenComments?: Maybe<Order_By>;
  maxPrivateDocs?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
   __typename?: 'user_stddev_pop_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  balanceCommentReaction?: Maybe<Order_By>;
  balanceDocumentReaction?: Maybe<Order_By>;
  countPrivateDocs?: Maybe<Order_By>;
  countWrittenComments?: Maybe<Order_By>;
  maxPrivateDocs?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
   __typename?: 'user_stddev_samp_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  balanceCommentReaction?: Maybe<Order_By>;
  balanceDocumentReaction?: Maybe<Order_By>;
  countPrivateDocs?: Maybe<Order_By>;
  countWrittenComments?: Maybe<Order_By>;
  maxPrivateDocs?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
   __typename?: 'user_sum_fields';
  balanceCommentReaction?: Maybe<Scalars['bigint']>;
  balanceDocumentReaction?: Maybe<Scalars['bigint']>;
  countPrivateDocs?: Maybe<Scalars['Int']>;
  countWrittenComments?: Maybe<Scalars['Int']>;
  maxPrivateDocs?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  balanceCommentReaction?: Maybe<Order_By>;
  balanceDocumentReaction?: Maybe<Order_By>;
  countPrivateDocs?: Maybe<Order_By>;
  countWrittenComments?: Maybe<Order_By>;
  maxPrivateDocs?: Maybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
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
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
   __typename?: 'user_var_pop_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  balanceCommentReaction?: Maybe<Order_By>;
  balanceDocumentReaction?: Maybe<Order_By>;
  countPrivateDocs?: Maybe<Order_By>;
  countWrittenComments?: Maybe<Order_By>;
  maxPrivateDocs?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
   __typename?: 'user_var_samp_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  balanceCommentReaction?: Maybe<Order_By>;
  balanceDocumentReaction?: Maybe<Order_By>;
  countPrivateDocs?: Maybe<Order_By>;
  countWrittenComments?: Maybe<Order_By>;
  maxPrivateDocs?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
   __typename?: 'user_variance_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  balanceCommentReaction?: Maybe<Order_By>;
  balanceDocumentReaction?: Maybe<Order_By>;
  countPrivateDocs?: Maybe<Order_By>;
  countWrittenComments?: Maybe<Order_By>;
  maxPrivateDocs?: Maybe<Order_By>;
};


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
