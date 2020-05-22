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

/** columns and relationships of "color" */
export type Color = {
   __typename?: 'color';
  color: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "color" */
export type ColorAggregate = {
   __typename?: 'color_aggregate';
  aggregate?: Maybe<ColorAggregateFields>;
  nodes: Array<Color>;
};

/** aggregate fields of "color" */
export type ColorAggregateFields = {
   __typename?: 'color_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ColorMaxFields>;
  min?: Maybe<ColorMinFields>;
};


/** aggregate fields of "color" */
export type ColorAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ColorSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "color" */
export type ColorAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<ColorMaxOrderBy>;
  min?: Maybe<ColorMinOrderBy>;
};

/** input type for inserting array relation for remote table "color" */
export type ColorArrRelInsertInput = {
  data: Array<ColorInsertInput>;
  on_conflict?: Maybe<ColorOnConflict>;
};

/** Boolean expression to filter rows from the table "color". All fields are combined with a logical 'AND'. */
export type ColorBoolExp = {
  _and?: Maybe<Array<Maybe<ColorBoolExp>>>;
  _not?: Maybe<ColorBoolExp>;
  _or?: Maybe<Array<Maybe<ColorBoolExp>>>;
  color?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "color" */
export enum ColorConstraint {
  /** unique or primary key constraint */
  ColorColorKey = 'color_color_key',
  /** unique or primary key constraint */
  ColorNameKey = 'color_name_key',
  /** unique or primary key constraint */
  ColorPkey = 'color_pkey'
}

/** input type for inserting data into table "color" */
export type ColorInsertInput = {
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ColorMaxFields = {
   __typename?: 'color_max_fields';
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "color" */
export type ColorMaxOrderBy = {
  color?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ColorMinFields = {
   __typename?: 'color_min_fields';
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "color" */
export type ColorMinOrderBy = {
  color?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "color" */
export type ColorMutationResponse = {
   __typename?: 'color_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Color>;
};

/** input type for inserting object relation for remote table "color" */
export type ColorObjRelInsertInput = {
  data: ColorInsertInput;
  on_conflict?: Maybe<ColorOnConflict>;
};

/** on conflict condition type for table "color" */
export type ColorOnConflict = {
  constraint: ColorConstraint;
  update_columns: Array<ColorUpdateColumn>;
  where?: Maybe<ColorBoolExp>;
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

/** select columns of table "color" */
export enum ColorSelectColumn {
  /** column name */
  Color = 'color',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "color" */
export type ColorSetInput = {
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "color" */
export enum ColorUpdateColumn {
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
  reactions: Array<CommentReaction>;
  /** An array relationship */
  reactionsGroup: Array<CommentReactionsGroup>;
  /** An aggregated array relationship */
  reactionsGroup_aggregate: CommentReactionsGroupAggregate;
  /** An aggregated array relationship */
  reactions_aggregate: CommentReactionAggregate;
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


/** columns and relationships of "comment" */
export type CommentReactionsGroupAggregateArgs = {
  distinct_on?: Maybe<Array<CommentReactionsGroupSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentReactionsGroupOrderBy>>;
  where?: Maybe<CommentReactionsGroupBoolExp>;
};


/** columns and relationships of "comment" */
export type CommentReactionsAggregateArgs = {
  distinct_on?: Maybe<Array<CommentReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentReactionOrderBy>>;
  where?: Maybe<CommentReactionBoolExp>;
};

/** aggregated selection of "comment" */
export type CommentAggregate = {
   __typename?: 'comment_aggregate';
  aggregate?: Maybe<CommentAggregateFields>;
  nodes: Array<Comment>;
};

/** aggregate fields of "comment" */
export type CommentAggregateFields = {
   __typename?: 'comment_aggregate_fields';
  avg?: Maybe<CommentAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CommentMaxFields>;
  min?: Maybe<CommentMinFields>;
  stddev?: Maybe<CommentStddevFields>;
  stddev_pop?: Maybe<CommentStddevPopFields>;
  stddev_samp?: Maybe<CommentStddevSampFields>;
  sum?: Maybe<CommentSumFields>;
  var_pop?: Maybe<CommentVarPopFields>;
  var_samp?: Maybe<CommentVarSampFields>;
  variance?: Maybe<CommentVarianceFields>;
};


/** aggregate fields of "comment" */
export type CommentAggregateFieldsCountArgs = {
  columns?: Maybe<Array<CommentSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comment" */
export type CommentAggregateOrderBy = {
  avg?: Maybe<CommentAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<CommentMaxOrderBy>;
  min?: Maybe<CommentMinOrderBy>;
  stddev?: Maybe<CommentStddevOrderBy>;
  stddev_pop?: Maybe<CommentStddevPopOrderBy>;
  stddev_samp?: Maybe<CommentStddevSampOrderBy>;
  sum?: Maybe<CommentSumOrderBy>;
  var_pop?: Maybe<CommentVarPopOrderBy>;
  var_samp?: Maybe<CommentVarSampOrderBy>;
  variance?: Maybe<CommentVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "comment" */
export type CommentArrRelInsertInput = {
  data: Array<CommentInsertInput>;
  on_conflict?: Maybe<CommentOnConflict>;
};

/** aggregate avg on columns */
export type CommentAvgFields = {
   __typename?: 'comment_avg_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comment" */
export type CommentAvgOrderBy = {
  reactionBalance?: Maybe<OrderBy>;
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

/** unique or primary key constraints on table "comment" */
export enum CommentConstraint {
  /** unique or primary key constraint */
  CommentPkey = 'comment_pkey'
}

/** input type for incrementing integer column in table "comment" */
export type CommentIncInput = {
  reactionBalance?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "comment" */
export type CommentInsertInput = {
  author?: Maybe<UserObjRelInsertInput>;
  authorId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  document?: Maybe<DocumentObjRelInsertInput>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reactionBalance?: Maybe<Scalars['Int']>;
  reactions?: Maybe<CommentReactionArrRelInsertInput>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type CommentMaxFields = {
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
export type CommentMaxOrderBy = {
  authorId?: Maybe<OrderBy>;
  comment?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type CommentMinFields = {
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
export type CommentMinOrderBy = {
  authorId?: Maybe<OrderBy>;
  comment?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "comment" */
export type CommentMutationResponse = {
   __typename?: 'comment_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Comment>;
};

/** input type for inserting object relation for remote table "comment" */
export type CommentObjRelInsertInput = {
  data: CommentInsertInput;
  on_conflict?: Maybe<CommentOnConflict>;
};

/** on conflict condition type for table "comment" */
export type CommentOnConflict = {
  constraint: CommentConstraint;
  update_columns: Array<CommentUpdateColumn>;
  where?: Maybe<CommentBoolExp>;
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
  reactionsGroup_aggregate?: Maybe<CommentReactionsGroupAggregateOrderBy>;
  reactions_aggregate?: Maybe<CommentReactionAggregateOrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "comment" */
export type CommentPkColumnsInput = {
  id: Scalars['uuid'];
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
  reactionId: Scalars['String'];
};

/** aggregated selection of "comment_reaction" */
export type CommentReactionAggregate = {
   __typename?: 'comment_reaction_aggregate';
  aggregate?: Maybe<CommentReactionAggregateFields>;
  nodes: Array<CommentReaction>;
};

/** aggregate fields of "comment_reaction" */
export type CommentReactionAggregateFields = {
   __typename?: 'comment_reaction_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CommentReactionMaxFields>;
  min?: Maybe<CommentReactionMinFields>;
};


/** aggregate fields of "comment_reaction" */
export type CommentReactionAggregateFieldsCountArgs = {
  columns?: Maybe<Array<CommentReactionSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comment_reaction" */
export type CommentReactionAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<CommentReactionMaxOrderBy>;
  min?: Maybe<CommentReactionMinOrderBy>;
};

/** input type for inserting array relation for remote table "comment_reaction" */
export type CommentReactionArrRelInsertInput = {
  data: Array<CommentReactionInsertInput>;
  on_conflict?: Maybe<CommentReactionOnConflict>;
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
  reactionId?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "comment_reaction" */
export enum CommentReactionConstraint {
  /** unique or primary key constraint */
  CommentReactionPkey = 'comment_reaction_pkey'
}

/** input type for inserting data into table "comment_reaction" */
export type CommentReactionInsertInput = {
  author?: Maybe<UserObjRelInsertInput>;
  authorId?: Maybe<Scalars['String']>;
  comment?: Maybe<CommentObjRelInsertInput>;
  commentId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  reaction?: Maybe<ReactionObjRelInsertInput>;
  reactionId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CommentReactionMaxFields = {
   __typename?: 'comment_reaction_max_fields';
  authorId?: Maybe<Scalars['String']>;
  commentId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "comment_reaction" */
export type CommentReactionMaxOrderBy = {
  authorId?: Maybe<OrderBy>;
  commentId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type CommentReactionMinFields = {
   __typename?: 'comment_reaction_min_fields';
  authorId?: Maybe<Scalars['String']>;
  commentId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "comment_reaction" */
export type CommentReactionMinOrderBy = {
  authorId?: Maybe<OrderBy>;
  commentId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "comment_reaction" */
export type CommentReactionMutationResponse = {
   __typename?: 'comment_reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<CommentReaction>;
};

/** input type for inserting object relation for remote table "comment_reaction" */
export type CommentReactionObjRelInsertInput = {
  data: CommentReactionInsertInput;
  on_conflict?: Maybe<CommentReactionOnConflict>;
};

/** on conflict condition type for table "comment_reaction" */
export type CommentReactionOnConflict = {
  constraint: CommentReactionConstraint;
  update_columns: Array<CommentReactionUpdateColumn>;
  where?: Maybe<CommentReactionBoolExp>;
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
  reactionId?: Maybe<OrderBy>;
};

/** primary key columns input for table: "comment_reaction" */
export type CommentReactionPkColumnsInput = {
  id: Scalars['uuid'];
};

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

/** input type for updating data in table "comment_reaction" */
export type CommentReactionSetInput = {
  authorId?: Maybe<Scalars['String']>;
  commentId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['String']>;
};

/** update columns of table "comment_reaction" */
export enum CommentReactionUpdateColumn {
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

/** columns and relationships of "comment_reactions_group" */
export type CommentReactionsGroup = {
   __typename?: 'comment_reactions_group';
  commentid?: Maybe<Scalars['uuid']>;
  count?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
};

/** aggregated selection of "comment_reactions_group" */
export type CommentReactionsGroupAggregate = {
   __typename?: 'comment_reactions_group_aggregate';
  aggregate?: Maybe<CommentReactionsGroupAggregateFields>;
  nodes: Array<CommentReactionsGroup>;
};

/** aggregate fields of "comment_reactions_group" */
export type CommentReactionsGroupAggregateFields = {
   __typename?: 'comment_reactions_group_aggregate_fields';
  avg?: Maybe<CommentReactionsGroupAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CommentReactionsGroupMaxFields>;
  min?: Maybe<CommentReactionsGroupMinFields>;
  stddev?: Maybe<CommentReactionsGroupStddevFields>;
  stddev_pop?: Maybe<CommentReactionsGroupStddevPopFields>;
  stddev_samp?: Maybe<CommentReactionsGroupStddevSampFields>;
  sum?: Maybe<CommentReactionsGroupSumFields>;
  var_pop?: Maybe<CommentReactionsGroupVarPopFields>;
  var_samp?: Maybe<CommentReactionsGroupVarSampFields>;
  variance?: Maybe<CommentReactionsGroupVarianceFields>;
};


/** aggregate fields of "comment_reactions_group" */
export type CommentReactionsGroupAggregateFieldsCountArgs = {
  columns?: Maybe<Array<CommentReactionsGroupSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comment_reactions_group" */
export type CommentReactionsGroupAggregateOrderBy = {
  avg?: Maybe<CommentReactionsGroupAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<CommentReactionsGroupMaxOrderBy>;
  min?: Maybe<CommentReactionsGroupMinOrderBy>;
  stddev?: Maybe<CommentReactionsGroupStddevOrderBy>;
  stddev_pop?: Maybe<CommentReactionsGroupStddevPopOrderBy>;
  stddev_samp?: Maybe<CommentReactionsGroupStddevSampOrderBy>;
  sum?: Maybe<CommentReactionsGroupSumOrderBy>;
  var_pop?: Maybe<CommentReactionsGroupVarPopOrderBy>;
  var_samp?: Maybe<CommentReactionsGroupVarSampOrderBy>;
  variance?: Maybe<CommentReactionsGroupVarianceOrderBy>;
};

/** aggregate avg on columns */
export type CommentReactionsGroupAvgFields = {
   __typename?: 'comment_reactions_group_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comment_reactions_group" */
export type CommentReactionsGroupAvgOrderBy = {
  count?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "comment_reactions_group". All fields are combined with a logical 'AND'. */
export type CommentReactionsGroupBoolExp = {
  _and?: Maybe<Array<Maybe<CommentReactionsGroupBoolExp>>>;
  _not?: Maybe<CommentReactionsGroupBoolExp>;
  _or?: Maybe<Array<Maybe<CommentReactionsGroupBoolExp>>>;
  commentid?: Maybe<UuidComparisonExp>;
  count?: Maybe<BigintComparisonExp>;
  reactionid?: Maybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type CommentReactionsGroupMaxFields = {
   __typename?: 'comment_reactions_group_max_fields';
  commentid?: Maybe<Scalars['uuid']>;
  count?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "comment_reactions_group" */
export type CommentReactionsGroupMaxOrderBy = {
  commentid?: Maybe<OrderBy>;
  count?: Maybe<OrderBy>;
  reactionid?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type CommentReactionsGroupMinFields = {
   __typename?: 'comment_reactions_group_min_fields';
  commentid?: Maybe<Scalars['uuid']>;
  count?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "comment_reactions_group" */
export type CommentReactionsGroupMinOrderBy = {
  commentid?: Maybe<OrderBy>;
  count?: Maybe<OrderBy>;
  reactionid?: Maybe<OrderBy>;
};

/** ordering options when selecting data from "comment_reactions_group" */
export type CommentReactionsGroupOrderBy = {
  commentid?: Maybe<OrderBy>;
  count?: Maybe<OrderBy>;
  reactionid?: Maybe<OrderBy>;
};

/** select columns of table "comment_reactions_group" */
export enum CommentReactionsGroupSelectColumn {
  /** column name */
  Commentid = 'commentid',
  /** column name */
  Count = 'count',
  /** column name */
  Reactionid = 'reactionid'
}

/** aggregate stddev on columns */
export type CommentReactionsGroupStddevFields = {
   __typename?: 'comment_reactions_group_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comment_reactions_group" */
export type CommentReactionsGroupStddevOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type CommentReactionsGroupStddevPopFields = {
   __typename?: 'comment_reactions_group_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comment_reactions_group" */
export type CommentReactionsGroupStddevPopOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type CommentReactionsGroupStddevSampFields = {
   __typename?: 'comment_reactions_group_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comment_reactions_group" */
export type CommentReactionsGroupStddevSampOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type CommentReactionsGroupSumFields = {
   __typename?: 'comment_reactions_group_sum_fields';
  count?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "comment_reactions_group" */
export type CommentReactionsGroupSumOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type CommentReactionsGroupVarPopFields = {
   __typename?: 'comment_reactions_group_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comment_reactions_group" */
export type CommentReactionsGroupVarPopOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type CommentReactionsGroupVarSampFields = {
   __typename?: 'comment_reactions_group_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comment_reactions_group" */
export type CommentReactionsGroupVarSampOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type CommentReactionsGroupVarianceFields = {
   __typename?: 'comment_reactions_group_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comment_reactions_group" */
export type CommentReactionsGroupVarianceOrderBy = {
  count?: Maybe<OrderBy>;
};

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

/** input type for updating data in table "comment" */
export type CommentSetInput = {
  authorId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reactionBalance?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type CommentStddevFields = {
   __typename?: 'comment_stddev_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comment" */
export type CommentStddevOrderBy = {
  reactionBalance?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type CommentStddevPopFields = {
   __typename?: 'comment_stddev_pop_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comment" */
export type CommentStddevPopOrderBy = {
  reactionBalance?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type CommentStddevSampFields = {
   __typename?: 'comment_stddev_samp_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comment" */
export type CommentStddevSampOrderBy = {
  reactionBalance?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type CommentSumFields = {
   __typename?: 'comment_sum_fields';
  reactionBalance?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "comment" */
export type CommentSumOrderBy = {
  reactionBalance?: Maybe<OrderBy>;
};

/** update columns of table "comment" */
export enum CommentUpdateColumn {
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
export type CommentVarPopFields = {
   __typename?: 'comment_var_pop_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comment" */
export type CommentVarPopOrderBy = {
  reactionBalance?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type CommentVarSampFields = {
   __typename?: 'comment_var_samp_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comment" */
export type CommentVarSampOrderBy = {
  reactionBalance?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type CommentVarianceFields = {
   __typename?: 'comment_variance_fields';
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comment" */
export type CommentVarianceOrderBy = {
  reactionBalance?: Maybe<OrderBy>;
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
  comments_aggregate: CommentAggregate;
  /** An object relationship */
  content?: Maybe<DocumentContent>;
  countComments: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  isPublic: Scalars['Boolean'];
  /** An array relationship */
  labels: Array<DocumentLabel>;
  /** An aggregated array relationship */
  labels_aggregate: DocumentLabelAggregate;
  reactionBalance: Scalars['Int'];
  /** An array relationship */
  reactions: Array<DocumentReaction>;
  /** An array relationship */
  reactionsGroup: Array<DocumentReactionGroupPersisted>;
  /** An aggregated array relationship */
  reactionsGroup_aggregate: DocumentReactionGroupPersistedAggregate;
  /** An aggregated array relationship */
  reactions_aggregate: DocumentReactionAggregate;
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
export type DocumentCommentsAggregateArgs = {
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
export type DocumentLabelsAggregateArgs = {
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


/** columns and relationships of "document" */
export type DocumentReactionsGroupAggregateArgs = {
  distinct_on?: Maybe<Array<DocumentReactionGroupPersistedSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentReactionGroupPersistedOrderBy>>;
  where?: Maybe<DocumentReactionGroupPersistedBoolExp>;
};


/** columns and relationships of "document" */
export type DocumentReactionsAggregateArgs = {
  distinct_on?: Maybe<Array<DocumentReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentReactionOrderBy>>;
  where?: Maybe<DocumentReactionBoolExp>;
};

/** aggregated selection of "document" */
export type DocumentAggregate = {
   __typename?: 'document_aggregate';
  aggregate?: Maybe<DocumentAggregateFields>;
  nodes: Array<Document>;
};

/** aggregate fields of "document" */
export type DocumentAggregateFields = {
   __typename?: 'document_aggregate_fields';
  avg?: Maybe<DocumentAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<DocumentMaxFields>;
  min?: Maybe<DocumentMinFields>;
  stddev?: Maybe<DocumentStddevFields>;
  stddev_pop?: Maybe<DocumentStddevPopFields>;
  stddev_samp?: Maybe<DocumentStddevSampFields>;
  sum?: Maybe<DocumentSumFields>;
  var_pop?: Maybe<DocumentVarPopFields>;
  var_samp?: Maybe<DocumentVarSampFields>;
  variance?: Maybe<DocumentVarianceFields>;
};


/** aggregate fields of "document" */
export type DocumentAggregateFieldsCountArgs = {
  columns?: Maybe<Array<DocumentSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document" */
export type DocumentAggregateOrderBy = {
  avg?: Maybe<DocumentAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<DocumentMaxOrderBy>;
  min?: Maybe<DocumentMinOrderBy>;
  stddev?: Maybe<DocumentStddevOrderBy>;
  stddev_pop?: Maybe<DocumentStddevPopOrderBy>;
  stddev_samp?: Maybe<DocumentStddevSampOrderBy>;
  sum?: Maybe<DocumentSumOrderBy>;
  var_pop?: Maybe<DocumentVarPopOrderBy>;
  var_samp?: Maybe<DocumentVarSampOrderBy>;
  variance?: Maybe<DocumentVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "document" */
export type DocumentArrRelInsertInput = {
  data: Array<DocumentInsertInput>;
  on_conflict?: Maybe<DocumentOnConflict>;
};

/** aggregate avg on columns */
export type DocumentAvgFields = {
   __typename?: 'document_avg_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "document" */
export type DocumentAvgOrderBy = {
  countComments?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
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
  content?: Maybe<DocumentContentBoolExp>;
  countComments?: Maybe<IntComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  isPublic?: Maybe<BooleanComparisonExp>;
  labels?: Maybe<DocumentLabelBoolExp>;
  reactionBalance?: Maybe<IntComparisonExp>;
  reactions?: Maybe<DocumentReactionBoolExp>;
  reactionsGroup?: Maybe<DocumentReactionGroupPersistedBoolExp>;
  title?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "document" */
export enum DocumentConstraint {
  /** unique or primary key constraint */
  DocumentPkey = 'document_pkey'
}

/** columns and relationships of "document_content" */
export type DocumentContent = {
   __typename?: 'document_content';
  content: Scalars['String'];
  /** An object relationship */
  document: Document;
  documentId: Scalars['uuid'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "document_content" */
export type DocumentContentAggregate = {
   __typename?: 'document_content_aggregate';
  aggregate?: Maybe<DocumentContentAggregateFields>;
  nodes: Array<DocumentContent>;
};

/** aggregate fields of "document_content" */
export type DocumentContentAggregateFields = {
   __typename?: 'document_content_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<DocumentContentMaxFields>;
  min?: Maybe<DocumentContentMinFields>;
};


/** aggregate fields of "document_content" */
export type DocumentContentAggregateFieldsCountArgs = {
  columns?: Maybe<Array<DocumentContentSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_content" */
export type DocumentContentAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<DocumentContentMaxOrderBy>;
  min?: Maybe<DocumentContentMinOrderBy>;
};

/** input type for inserting array relation for remote table "document_content" */
export type DocumentContentArrRelInsertInput = {
  data: Array<DocumentContentInsertInput>;
  on_conflict?: Maybe<DocumentContentOnConflict>;
};

/** Boolean expression to filter rows from the table "document_content". All fields are combined with a logical 'AND'. */
export type DocumentContentBoolExp = {
  _and?: Maybe<Array<Maybe<DocumentContentBoolExp>>>;
  _not?: Maybe<DocumentContentBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentContentBoolExp>>>;
  content?: Maybe<StringComparisonExp>;
  document?: Maybe<DocumentBoolExp>;
  documentId?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "document_content" */
export enum DocumentContentConstraint {
  /** unique or primary key constraint */
  DocumentContentDocumentIdKey = 'document_content_document_id_key',
  /** unique or primary key constraint */
  DocumentContentPkey = 'document_content_pkey'
}

/** input type for inserting data into table "document_content" */
export type DocumentContentInsertInput = {
  content?: Maybe<Scalars['String']>;
  document?: Maybe<DocumentObjRelInsertInput>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type DocumentContentMaxFields = {
   __typename?: 'document_content_max_fields';
  content?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "document_content" */
export type DocumentContentMaxOrderBy = {
  content?: Maybe<OrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type DocumentContentMinFields = {
   __typename?: 'document_content_min_fields';
  content?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "document_content" */
export type DocumentContentMinOrderBy = {
  content?: Maybe<OrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "document_content" */
export type DocumentContentMutationResponse = {
   __typename?: 'document_content_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<DocumentContent>;
};

/** input type for inserting object relation for remote table "document_content" */
export type DocumentContentObjRelInsertInput = {
  data: DocumentContentInsertInput;
  on_conflict?: Maybe<DocumentContentOnConflict>;
};

/** on conflict condition type for table "document_content" */
export type DocumentContentOnConflict = {
  constraint: DocumentContentConstraint;
  update_columns: Array<DocumentContentUpdateColumn>;
  where?: Maybe<DocumentContentBoolExp>;
};

/** ordering options when selecting data from "document_content" */
export type DocumentContentOrderBy = {
  content?: Maybe<OrderBy>;
  document?: Maybe<DocumentOrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "document_content" */
export type DocumentContentPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "document_content" */
export enum DocumentContentSelectColumn {
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
export type DocumentContentSetInput = {
  content?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "document_content" */
export enum DocumentContentUpdateColumn {
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
export type DocumentIncInput = {
  countComments?: Maybe<Scalars['Int']>;
  reactionBalance?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "document" */
export type DocumentInsertInput = {
  allowComments?: Maybe<Scalars['Boolean']>;
  author?: Maybe<UserObjRelInsertInput>;
  authorId?: Maybe<Scalars['String']>;
  comments?: Maybe<CommentArrRelInsertInput>;
  content?: Maybe<DocumentContentObjRelInsertInput>;
  countComments?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  labels?: Maybe<DocumentLabelArrRelInsertInput>;
  reactionBalance?: Maybe<Scalars['Int']>;
  reactions?: Maybe<DocumentReactionArrRelInsertInput>;
  reactionsGroup?: Maybe<DocumentReactionGroupPersistedArrRelInsertInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "document_label" */
export type DocumentLabel = {
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
export type DocumentLabelAggregate = {
   __typename?: 'document_label_aggregate';
  aggregate?: Maybe<DocumentLabelAggregateFields>;
  nodes: Array<DocumentLabel>;
};

/** aggregate fields of "document_label" */
export type DocumentLabelAggregateFields = {
   __typename?: 'document_label_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<DocumentLabelMaxFields>;
  min?: Maybe<DocumentLabelMinFields>;
};


/** aggregate fields of "document_label" */
export type DocumentLabelAggregateFieldsCountArgs = {
  columns?: Maybe<Array<DocumentLabelSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_label" */
export type DocumentLabelAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<DocumentLabelMaxOrderBy>;
  min?: Maybe<DocumentLabelMinOrderBy>;
};

/** input type for inserting array relation for remote table "document_label" */
export type DocumentLabelArrRelInsertInput = {
  data: Array<DocumentLabelInsertInput>;
  on_conflict?: Maybe<DocumentLabelOnConflict>;
};

/** Boolean expression to filter rows from the table "document_label". All fields are combined with a logical 'AND'. */
export type DocumentLabelBoolExp = {
  _and?: Maybe<Array<Maybe<DocumentLabelBoolExp>>>;
  _not?: Maybe<DocumentLabelBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentLabelBoolExp>>>;
  author?: Maybe<UserBoolExp>;
  authorId?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  document?: Maybe<DocumentBoolExp>;
  documentId?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  label?: Maybe<LabelBoolExp>;
  labelId?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "document_label" */
export enum DocumentLabelConstraint {
  /** unique or primary key constraint */
  DocumentLabelPkey = 'document_label_pkey'
}

/** input type for inserting data into table "document_label" */
export type DocumentLabelInsertInput = {
  author?: Maybe<UserObjRelInsertInput>;
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  document?: Maybe<DocumentObjRelInsertInput>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<LabelObjRelInsertInput>;
  labelId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type DocumentLabelMaxFields = {
   __typename?: 'document_label_max_fields';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  labelId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "document_label" */
export type DocumentLabelMaxOrderBy = {
  authorId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  labelId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type DocumentLabelMinFields = {
   __typename?: 'document_label_min_fields';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  labelId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "document_label" */
export type DocumentLabelMinOrderBy = {
  authorId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  labelId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "document_label" */
export type DocumentLabelMutationResponse = {
   __typename?: 'document_label_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<DocumentLabel>;
};

/** input type for inserting object relation for remote table "document_label" */
export type DocumentLabelObjRelInsertInput = {
  data: DocumentLabelInsertInput;
  on_conflict?: Maybe<DocumentLabelOnConflict>;
};

/** on conflict condition type for table "document_label" */
export type DocumentLabelOnConflict = {
  constraint: DocumentLabelConstraint;
  update_columns: Array<DocumentLabelUpdateColumn>;
  where?: Maybe<DocumentLabelBoolExp>;
};

/** ordering options when selecting data from "document_label" */
export type DocumentLabelOrderBy = {
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  document?: Maybe<DocumentOrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  label?: Maybe<LabelOrderBy>;
  labelId?: Maybe<OrderBy>;
};

/** primary key columns input for table: "document_label" */
export type DocumentLabelPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "document_label" */
export enum DocumentLabelSelectColumn {
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
export type DocumentLabelSetInput = {
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  labelId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "document_label" */
export enum DocumentLabelUpdateColumn {
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
export type DocumentMaxFields = {
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
export type DocumentMaxOrderBy = {
  authorId?: Maybe<OrderBy>;
  countComments?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type DocumentMinFields = {
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
export type DocumentMinOrderBy = {
  authorId?: Maybe<OrderBy>;
  countComments?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "document" */
export type DocumentMutationResponse = {
   __typename?: 'document_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Document>;
};

/** input type for inserting object relation for remote table "document" */
export type DocumentObjRelInsertInput = {
  data: DocumentInsertInput;
  on_conflict?: Maybe<DocumentOnConflict>;
};

/** on conflict condition type for table "document" */
export type DocumentOnConflict = {
  constraint: DocumentConstraint;
  update_columns: Array<DocumentUpdateColumn>;
  where?: Maybe<DocumentBoolExp>;
};

/** ordering options when selecting data from "document" */
export type DocumentOrderBy = {
  allowComments?: Maybe<OrderBy>;
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  comments_aggregate?: Maybe<CommentAggregateOrderBy>;
  content?: Maybe<DocumentContentOrderBy>;
  countComments?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isPublic?: Maybe<OrderBy>;
  labels_aggregate?: Maybe<DocumentLabelAggregateOrderBy>;
  reactionBalance?: Maybe<OrderBy>;
  reactionsGroup_aggregate?: Maybe<DocumentReactionGroupPersistedAggregateOrderBy>;
  reactions_aggregate?: Maybe<DocumentReactionAggregateOrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "document" */
export type DocumentPkColumnsInput = {
  id: Scalars['uuid'];
};

/** columns and relationships of "document_reaction" */
export type DocumentReaction = {
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
};

/** aggregated selection of "document_reaction" */
export type DocumentReactionAggregate = {
   __typename?: 'document_reaction_aggregate';
  aggregate?: Maybe<DocumentReactionAggregateFields>;
  nodes: Array<DocumentReaction>;
};

/** aggregate fields of "document_reaction" */
export type DocumentReactionAggregateFields = {
   __typename?: 'document_reaction_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<DocumentReactionMaxFields>;
  min?: Maybe<DocumentReactionMinFields>;
};


/** aggregate fields of "document_reaction" */
export type DocumentReactionAggregateFieldsCountArgs = {
  columns?: Maybe<Array<DocumentReactionSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_reaction" */
export type DocumentReactionAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<DocumentReactionMaxOrderBy>;
  min?: Maybe<DocumentReactionMinOrderBy>;
};

/** input type for inserting array relation for remote table "document_reaction" */
export type DocumentReactionArrRelInsertInput = {
  data: Array<DocumentReactionInsertInput>;
  on_conflict?: Maybe<DocumentReactionOnConflict>;
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
  id?: Maybe<UuidComparisonExp>;
  reaction?: Maybe<ReactionBoolExp>;
  reactionId?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "document_reaction" */
export enum DocumentReactionConstraint {
  /** unique or primary key constraint */
  DocumentReactionPkey = 'document_reaction_pkey'
}

/** columns and relationships of "document_reaction_group" */
export type DocumentReactionGroup = {
   __typename?: 'document_reaction_group';
  count?: Maybe<Scalars['bigint']>;
  document_id?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "document_reaction_group" */
export type DocumentReactionGroupAggregate = {
   __typename?: 'document_reaction_group_aggregate';
  aggregate?: Maybe<DocumentReactionGroupAggregateFields>;
  nodes: Array<DocumentReactionGroup>;
};

/** aggregate fields of "document_reaction_group" */
export type DocumentReactionGroupAggregateFields = {
   __typename?: 'document_reaction_group_aggregate_fields';
  avg?: Maybe<DocumentReactionGroupAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<DocumentReactionGroupMaxFields>;
  min?: Maybe<DocumentReactionGroupMinFields>;
  stddev?: Maybe<DocumentReactionGroupStddevFields>;
  stddev_pop?: Maybe<DocumentReactionGroupStddevPopFields>;
  stddev_samp?: Maybe<DocumentReactionGroupStddevSampFields>;
  sum?: Maybe<DocumentReactionGroupSumFields>;
  var_pop?: Maybe<DocumentReactionGroupVarPopFields>;
  var_samp?: Maybe<DocumentReactionGroupVarSampFields>;
  variance?: Maybe<DocumentReactionGroupVarianceFields>;
};


/** aggregate fields of "document_reaction_group" */
export type DocumentReactionGroupAggregateFieldsCountArgs = {
  columns?: Maybe<Array<DocumentReactionGroupSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_reaction_group" */
export type DocumentReactionGroupAggregateOrderBy = {
  avg?: Maybe<DocumentReactionGroupAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<DocumentReactionGroupMaxOrderBy>;
  min?: Maybe<DocumentReactionGroupMinOrderBy>;
  stddev?: Maybe<DocumentReactionGroupStddevOrderBy>;
  stddev_pop?: Maybe<DocumentReactionGroupStddevPopOrderBy>;
  stddev_samp?: Maybe<DocumentReactionGroupStddevSampOrderBy>;
  sum?: Maybe<DocumentReactionGroupSumOrderBy>;
  var_pop?: Maybe<DocumentReactionGroupVarPopOrderBy>;
  var_samp?: Maybe<DocumentReactionGroupVarSampOrderBy>;
  variance?: Maybe<DocumentReactionGroupVarianceOrderBy>;
};

/** aggregate avg on columns */
export type DocumentReactionGroupAvgFields = {
   __typename?: 'document_reaction_group_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "document_reaction_group" */
export type DocumentReactionGroupAvgOrderBy = {
  count?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "document_reaction_group". All fields are combined with a logical 'AND'. */
export type DocumentReactionGroupBoolExp = {
  _and?: Maybe<Array<Maybe<DocumentReactionGroupBoolExp>>>;
  _not?: Maybe<DocumentReactionGroupBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentReactionGroupBoolExp>>>;
  count?: Maybe<BigintComparisonExp>;
  document_id?: Maybe<UuidComparisonExp>;
  reaction_id?: Maybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type DocumentReactionGroupMaxFields = {
   __typename?: 'document_reaction_group_max_fields';
  count?: Maybe<Scalars['bigint']>;
  document_id?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "document_reaction_group" */
export type DocumentReactionGroupMaxOrderBy = {
  count?: Maybe<OrderBy>;
  document_id?: Maybe<OrderBy>;
  reaction_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type DocumentReactionGroupMinFields = {
   __typename?: 'document_reaction_group_min_fields';
  count?: Maybe<Scalars['bigint']>;
  document_id?: Maybe<Scalars['uuid']>;
  reaction_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "document_reaction_group" */
export type DocumentReactionGroupMinOrderBy = {
  count?: Maybe<OrderBy>;
  document_id?: Maybe<OrderBy>;
  reaction_id?: Maybe<OrderBy>;
};

/** ordering options when selecting data from "document_reaction_group" */
export type DocumentReactionGroupOrderBy = {
  count?: Maybe<OrderBy>;
  document_id?: Maybe<OrderBy>;
  reaction_id?: Maybe<OrderBy>;
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
  documentId: Scalars['uuid'];
  id: Scalars['bigint'];
  reactionid: Scalars['String'];
};

/** aggregated selection of "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedAggregate = {
   __typename?: 'document_reaction_group_persisted_aggregate';
  aggregate?: Maybe<DocumentReactionGroupPersistedAggregateFields>;
  nodes: Array<DocumentReactionGroupPersisted>;
};

/** aggregate fields of "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedAggregateFields = {
   __typename?: 'document_reaction_group_persisted_aggregate_fields';
  avg?: Maybe<DocumentReactionGroupPersistedAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<DocumentReactionGroupPersistedMaxFields>;
  min?: Maybe<DocumentReactionGroupPersistedMinFields>;
  stddev?: Maybe<DocumentReactionGroupPersistedStddevFields>;
  stddev_pop?: Maybe<DocumentReactionGroupPersistedStddevPopFields>;
  stddev_samp?: Maybe<DocumentReactionGroupPersistedStddevSampFields>;
  sum?: Maybe<DocumentReactionGroupPersistedSumFields>;
  var_pop?: Maybe<DocumentReactionGroupPersistedVarPopFields>;
  var_samp?: Maybe<DocumentReactionGroupPersistedVarSampFields>;
  variance?: Maybe<DocumentReactionGroupPersistedVarianceFields>;
};


/** aggregate fields of "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedAggregateFieldsCountArgs = {
  columns?: Maybe<Array<DocumentReactionGroupPersistedSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedAggregateOrderBy = {
  avg?: Maybe<DocumentReactionGroupPersistedAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<DocumentReactionGroupPersistedMaxOrderBy>;
  min?: Maybe<DocumentReactionGroupPersistedMinOrderBy>;
  stddev?: Maybe<DocumentReactionGroupPersistedStddevOrderBy>;
  stddev_pop?: Maybe<DocumentReactionGroupPersistedStddevPopOrderBy>;
  stddev_samp?: Maybe<DocumentReactionGroupPersistedStddevSampOrderBy>;
  sum?: Maybe<DocumentReactionGroupPersistedSumOrderBy>;
  var_pop?: Maybe<DocumentReactionGroupPersistedVarPopOrderBy>;
  var_samp?: Maybe<DocumentReactionGroupPersistedVarSampOrderBy>;
  variance?: Maybe<DocumentReactionGroupPersistedVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedArrRelInsertInput = {
  data: Array<DocumentReactionGroupPersistedInsertInput>;
  on_conflict?: Maybe<DocumentReactionGroupPersistedOnConflict>;
};

/** aggregate avg on columns */
export type DocumentReactionGroupPersistedAvgFields = {
   __typename?: 'document_reaction_group_persisted_avg_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedAvgOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/**
 * Boolean expression to filter rows from the table
 * "document_reaction_group_persisted". All fields are combined with a logical 'AND'.
 */
export type DocumentReactionGroupPersistedBoolExp = {
  _and?: Maybe<Array<Maybe<DocumentReactionGroupPersistedBoolExp>>>;
  _not?: Maybe<DocumentReactionGroupPersistedBoolExp>;
  _or?: Maybe<Array<Maybe<DocumentReactionGroupPersistedBoolExp>>>;
  count?: Maybe<IntComparisonExp>;
  documentId?: Maybe<UuidComparisonExp>;
  id?: Maybe<BigintComparisonExp>;
  reactionid?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "document_reaction_group_persisted" */
export enum DocumentReactionGroupPersistedConstraint {
  /** unique or primary key constraint */
  DocumentReactionGroupPersistedDocumentIdReactionIdKey = 'document_reaction_group_persisted_document_id_reaction_id_key',
  /** unique or primary key constraint */
  DocumentReactionGroupPersistedPkey = 'document_reaction_group_persisted_pkey'
}

/** input type for incrementing integer column in table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedIncInput = {
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedInsertInput = {
  count?: Maybe<Scalars['Int']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DocumentReactionGroupPersistedMaxFields = {
   __typename?: 'document_reaction_group_persisted_max_fields';
  count?: Maybe<Scalars['Int']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedMaxOrderBy = {
  count?: Maybe<OrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionid?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type DocumentReactionGroupPersistedMinFields = {
   __typename?: 'document_reaction_group_persisted_min_fields';
  count?: Maybe<Scalars['Int']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedMinOrderBy = {
  count?: Maybe<OrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionid?: Maybe<OrderBy>;
};

/** response of any mutation on the table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedMutationResponse = {
   __typename?: 'document_reaction_group_persisted_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<DocumentReactionGroupPersisted>;
};

/** input type for inserting object relation for remote table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedObjRelInsertInput = {
  data: DocumentReactionGroupPersistedInsertInput;
  on_conflict?: Maybe<DocumentReactionGroupPersistedOnConflict>;
};

/** on conflict condition type for table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedOnConflict = {
  constraint: DocumentReactionGroupPersistedConstraint;
  update_columns: Array<DocumentReactionGroupPersistedUpdateColumn>;
  where?: Maybe<DocumentReactionGroupPersistedBoolExp>;
};

/** ordering options when selecting data from "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedOrderBy = {
  count?: Maybe<OrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionid?: Maybe<OrderBy>;
};

/** primary key columns input for table: "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedPkColumnsInput = {
  id: Scalars['bigint'];
};

/** select columns of table "document_reaction_group_persisted" */
export enum DocumentReactionGroupPersistedSelectColumn {
  /** column name */
  Count = 'count',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  Reactionid = 'reactionid'
}

/** input type for updating data in table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedSetInput = {
  count?: Maybe<Scalars['Int']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['bigint']>;
  reactionid?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type DocumentReactionGroupPersistedStddevFields = {
   __typename?: 'document_reaction_group_persisted_stddev_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedStddevOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type DocumentReactionGroupPersistedStddevPopFields = {
   __typename?: 'document_reaction_group_persisted_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedStddevPopOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type DocumentReactionGroupPersistedStddevSampFields = {
   __typename?: 'document_reaction_group_persisted_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedStddevSampOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type DocumentReactionGroupPersistedSumFields = {
   __typename?: 'document_reaction_group_persisted_sum_fields';
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedSumOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** update columns of table "document_reaction_group_persisted" */
export enum DocumentReactionGroupPersistedUpdateColumn {
  /** column name */
  Count = 'count',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  Reactionid = 'reactionid'
}

/** aggregate var_pop on columns */
export type DocumentReactionGroupPersistedVarPopFields = {
   __typename?: 'document_reaction_group_persisted_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedVarPopOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type DocumentReactionGroupPersistedVarSampFields = {
   __typename?: 'document_reaction_group_persisted_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedVarSampOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type DocumentReactionGroupPersistedVarianceFields = {
   __typename?: 'document_reaction_group_persisted_variance_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "document_reaction_group_persisted" */
export type DocumentReactionGroupPersistedVarianceOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** select columns of table "document_reaction_group" */
export enum DocumentReactionGroupSelectColumn {
  /** column name */
  Count = 'count',
  /** column name */
  DocumentId = 'document_id',
  /** column name */
  ReactionId = 'reaction_id'
}

/** aggregate stddev on columns */
export type DocumentReactionGroupStddevFields = {
   __typename?: 'document_reaction_group_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "document_reaction_group" */
export type DocumentReactionGroupStddevOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type DocumentReactionGroupStddevPopFields = {
   __typename?: 'document_reaction_group_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "document_reaction_group" */
export type DocumentReactionGroupStddevPopOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type DocumentReactionGroupStddevSampFields = {
   __typename?: 'document_reaction_group_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "document_reaction_group" */
export type DocumentReactionGroupStddevSampOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type DocumentReactionGroupSumFields = {
   __typename?: 'document_reaction_group_sum_fields';
  count?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "document_reaction_group" */
export type DocumentReactionGroupSumOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type DocumentReactionGroupVarPopFields = {
   __typename?: 'document_reaction_group_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "document_reaction_group" */
export type DocumentReactionGroupVarPopOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type DocumentReactionGroupVarSampFields = {
   __typename?: 'document_reaction_group_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "document_reaction_group" */
export type DocumentReactionGroupVarSampOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type DocumentReactionGroupVarianceFields = {
   __typename?: 'document_reaction_group_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "document_reaction_group" */
export type DocumentReactionGroupVarianceOrderBy = {
  count?: Maybe<OrderBy>;
};

/** input type for inserting data into table "document_reaction" */
export type DocumentReactionInsertInput = {
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  document?: Maybe<DocumentObjRelInsertInput>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reaction?: Maybe<ReactionObjRelInsertInput>;
  reactionId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DocumentReactionMaxFields = {
   __typename?: 'document_reaction_max_fields';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "document_reaction" */
export type DocumentReactionMaxOrderBy = {
  authorId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type DocumentReactionMinFields = {
   __typename?: 'document_reaction_min_fields';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "document_reaction" */
export type DocumentReactionMinOrderBy = {
  authorId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reactionId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "document_reaction" */
export type DocumentReactionMutationResponse = {
   __typename?: 'document_reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<DocumentReaction>;
};

/** input type for inserting object relation for remote table "document_reaction" */
export type DocumentReactionObjRelInsertInput = {
  data: DocumentReactionInsertInput;
  on_conflict?: Maybe<DocumentReactionOnConflict>;
};

/** on conflict condition type for table "document_reaction" */
export type DocumentReactionOnConflict = {
  constraint: DocumentReactionConstraint;
  update_columns: Array<DocumentReactionUpdateColumn>;
  where?: Maybe<DocumentReactionBoolExp>;
};

/** ordering options when selecting data from "document_reaction" */
export type DocumentReactionOrderBy = {
  authorId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  document?: Maybe<DocumentOrderBy>;
  documentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reaction?: Maybe<ReactionOrderBy>;
  reactionId?: Maybe<OrderBy>;
};

/** primary key columns input for table: "document_reaction" */
export type DocumentReactionPkColumnsInput = {
  id: Scalars['uuid'];
};

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

/** input type for updating data in table "document_reaction" */
export type DocumentReactionSetInput = {
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  documentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reactionId?: Maybe<Scalars['String']>;
};

/** update columns of table "document_reaction" */
export enum DocumentReactionUpdateColumn {
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
export type DocumentSetInput = {
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
export type DocumentStddevFields = {
   __typename?: 'document_stddev_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "document" */
export type DocumentStddevOrderBy = {
  countComments?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type DocumentStddevPopFields = {
   __typename?: 'document_stddev_pop_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "document" */
export type DocumentStddevPopOrderBy = {
  countComments?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type DocumentStddevSampFields = {
   __typename?: 'document_stddev_samp_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "document" */
export type DocumentStddevSampOrderBy = {
  countComments?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type DocumentSumFields = {
   __typename?: 'document_sum_fields';
  countComments?: Maybe<Scalars['Int']>;
  reactionBalance?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "document" */
export type DocumentSumOrderBy = {
  countComments?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
};

/** update columns of table "document" */
export enum DocumentUpdateColumn {
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
export type DocumentVarPopFields = {
   __typename?: 'document_var_pop_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "document" */
export type DocumentVarPopOrderBy = {
  countComments?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type DocumentVarSampFields = {
   __typename?: 'document_var_samp_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "document" */
export type DocumentVarSampOrderBy = {
  countComments?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type DocumentVarianceFields = {
   __typename?: 'document_variance_fields';
  countComments?: Maybe<Scalars['Float']>;
  reactionBalance?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "document" */
export type DocumentVarianceOrderBy = {
  countComments?: Maybe<OrderBy>;
  reactionBalance?: Maybe<OrderBy>;
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
export type FollowAggregate = {
   __typename?: 'follow_aggregate';
  aggregate?: Maybe<FollowAggregateFields>;
  nodes: Array<Follow>;
};

/** aggregate fields of "follow" */
export type FollowAggregateFields = {
   __typename?: 'follow_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<FollowMaxFields>;
  min?: Maybe<FollowMinFields>;
};


/** aggregate fields of "follow" */
export type FollowAggregateFieldsCountArgs = {
  columns?: Maybe<Array<FollowSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "follow" */
export type FollowAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<FollowMaxOrderBy>;
  min?: Maybe<FollowMinOrderBy>;
};

/** input type for inserting array relation for remote table "follow" */
export type FollowArrRelInsertInput = {
  data: Array<FollowInsertInput>;
  on_conflict?: Maybe<FollowOnConflict>;
};

/** Boolean expression to filter rows from the table "follow". All fields are combined with a logical 'AND'. */
export type FollowBoolExp = {
  _and?: Maybe<Array<Maybe<FollowBoolExp>>>;
  _not?: Maybe<FollowBoolExp>;
  _or?: Maybe<Array<Maybe<FollowBoolExp>>>;
  author?: Maybe<UserBoolExp>;
  authorId?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  following?: Maybe<UserBoolExp>;
  followingId?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "follow" */
export enum FollowConstraint {
  /** unique or primary key constraint */
  FollowPkey = 'follow_pkey'
}

/** input type for inserting data into table "follow" */
export type FollowInsertInput = {
  author?: Maybe<UserObjRelInsertInput>;
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  following?: Maybe<UserObjRelInsertInput>;
  followingId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FollowMaxFields = {
   __typename?: 'follow_max_fields';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  followingId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "follow" */
export type FollowMaxOrderBy = {
  authorId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  followingId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type FollowMinFields = {
   __typename?: 'follow_min_fields';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  followingId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "follow" */
export type FollowMinOrderBy = {
  authorId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  followingId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "follow" */
export type FollowMutationResponse = {
   __typename?: 'follow_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Follow>;
};

/** input type for inserting object relation for remote table "follow" */
export type FollowObjRelInsertInput = {
  data: FollowInsertInput;
  on_conflict?: Maybe<FollowOnConflict>;
};

/** on conflict condition type for table "follow" */
export type FollowOnConflict = {
  constraint: FollowConstraint;
  update_columns: Array<FollowUpdateColumn>;
  where?: Maybe<FollowBoolExp>;
};

/** ordering options when selecting data from "follow" */
export type FollowOrderBy = {
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  following?: Maybe<UserOrderBy>;
  followingId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** primary key columns input for table: "follow" */
export type FollowPkColumnsInput = {
  id: Scalars['uuid'];
};

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

/** input type for updating data in table "follow" */
export type FollowSetInput = {
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  followingId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "follow" */
export enum FollowUpdateColumn {
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
  document_labels: Array<DocumentLabel>;
  /** An aggregated array relationship */
  document_labels_aggregate: DocumentLabelAggregate;
  id: Scalars['uuid'];
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


/** columns and relationships of "label" */
export type LabelDocumentLabelsAggregateArgs = {
  distinct_on?: Maybe<Array<DocumentLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentLabelOrderBy>>;
  where?: Maybe<DocumentLabelBoolExp>;
};

/** aggregated selection of "label" */
export type LabelAggregate = {
   __typename?: 'label_aggregate';
  aggregate?: Maybe<LabelAggregateFields>;
  nodes: Array<Label>;
};

/** aggregate fields of "label" */
export type LabelAggregateFields = {
   __typename?: 'label_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<LabelMaxFields>;
  min?: Maybe<LabelMinFields>;
};


/** aggregate fields of "label" */
export type LabelAggregateFieldsCountArgs = {
  columns?: Maybe<Array<LabelSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "label" */
export type LabelAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<LabelMaxOrderBy>;
  min?: Maybe<LabelMinOrderBy>;
};

/** input type for inserting array relation for remote table "label" */
export type LabelArrRelInsertInput = {
  data: Array<LabelInsertInput>;
  on_conflict?: Maybe<LabelOnConflict>;
};

/** Boolean expression to filter rows from the table "label". All fields are combined with a logical 'AND'. */
export type LabelBoolExp = {
  _and?: Maybe<Array<Maybe<LabelBoolExp>>>;
  _not?: Maybe<LabelBoolExp>;
  _or?: Maybe<Array<Maybe<LabelBoolExp>>>;
  author?: Maybe<UserBoolExp>;
  authorId?: Maybe<StringComparisonExp>;
  color?: Maybe<ColorBoolExp>;
  color_name?: Maybe<StringComparisonExp>;
  document_labels?: Maybe<DocumentLabelBoolExp>;
  id?: Maybe<UuidComparisonExp>;
  label?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "label" */
export enum LabelConstraint {
  /** unique or primary key constraint */
  LabelPkey = 'label_pkey'
}

/** input type for inserting data into table "label" */
export type LabelInsertInput = {
  author?: Maybe<UserObjRelInsertInput>;
  authorId?: Maybe<Scalars['String']>;
  color?: Maybe<ColorObjRelInsertInput>;
  color_name?: Maybe<Scalars['String']>;
  document_labels?: Maybe<DocumentLabelArrRelInsertInput>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type LabelMaxFields = {
   __typename?: 'label_max_fields';
  authorId?: Maybe<Scalars['String']>;
  color_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "label" */
export type LabelMaxOrderBy = {
  authorId?: Maybe<OrderBy>;
  color_name?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  label?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type LabelMinFields = {
   __typename?: 'label_min_fields';
  authorId?: Maybe<Scalars['String']>;
  color_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "label" */
export type LabelMinOrderBy = {
  authorId?: Maybe<OrderBy>;
  color_name?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  label?: Maybe<OrderBy>;
};

/** response of any mutation on the table "label" */
export type LabelMutationResponse = {
   __typename?: 'label_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Label>;
};

/** input type for inserting object relation for remote table "label" */
export type LabelObjRelInsertInput = {
  data: LabelInsertInput;
  on_conflict?: Maybe<LabelOnConflict>;
};

/** on conflict condition type for table "label" */
export type LabelOnConflict = {
  constraint: LabelConstraint;
  update_columns: Array<LabelUpdateColumn>;
  where?: Maybe<LabelBoolExp>;
};

/** ordering options when selecting data from "label" */
export type LabelOrderBy = {
  author?: Maybe<UserOrderBy>;
  authorId?: Maybe<OrderBy>;
  color?: Maybe<ColorOrderBy>;
  color_name?: Maybe<OrderBy>;
  document_labels_aggregate?: Maybe<DocumentLabelAggregateOrderBy>;
  id?: Maybe<OrderBy>;
  label?: Maybe<OrderBy>;
};

/** primary key columns input for table: "label" */
export type LabelPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "label" */
export enum LabelSelectColumn {
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
export type LabelSetInput = {
  authorId?: Maybe<Scalars['String']>;
  color_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
};

/** update columns of table "label" */
export enum LabelUpdateColumn {
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
export type MutationRoot = {
   __typename?: 'mutation_root';
  /** insert data into the table: "color" */
  addColor?: Maybe<ColorMutationResponse>;
  /** insert data into the table: "comment" */
  addComment?: Maybe<CommentMutationResponse>;
  /** insert data into the table: "comment_reaction" */
  addCommentReaction?: Maybe<CommentReactionMutationResponse>;
  /** insert data into the table: "document" */
  addDocument?: Maybe<DocumentMutationResponse>;
  /** insert data into the table: "document_content" */
  addDocumentContent?: Maybe<DocumentContentMutationResponse>;
  /** insert data into the table: "document_label" */
  addDocumentLabel?: Maybe<DocumentLabelMutationResponse>;
  /** insert data into the table: "document_reaction" */
  addDocumentReaction?: Maybe<DocumentReactionMutationResponse>;
  /** insert data into the table: "follow" */
  addFollow?: Maybe<FollowMutationResponse>;
  /** insert data into the table: "label" */
  addLabel?: Maybe<LabelMutationResponse>;
  /** insert data into the table: "reaction" */
  addReaction?: Maybe<ReactionMutationResponse>;
  /** insert data into the table: "user" */
  addUser?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "color" */
  delete_color_by_pk?: Maybe<Color>;
  /** delete single row from the table: "comment" */
  delete_comment_by_pk?: Maybe<Comment>;
  /** delete single row from the table: "comment_reaction" */
  delete_comment_reaction_by_pk?: Maybe<CommentReaction>;
  /** delete single row from the table: "document" */
  delete_document_by_pk?: Maybe<Document>;
  /** delete single row from the table: "document_content" */
  delete_document_content_by_pk?: Maybe<DocumentContent>;
  /** delete single row from the table: "document_label" */
  delete_document_label_by_pk?: Maybe<DocumentLabel>;
  /** delete single row from the table: "document_reaction" */
  delete_document_reaction_by_pk?: Maybe<DocumentReaction>;
  /** delete data from the table: "document_reaction_group_persisted" */
  delete_document_reaction_group_persisted?: Maybe<DocumentReactionGroupPersistedMutationResponse>;
  /** delete single row from the table: "document_reaction_group_persisted" */
  delete_document_reaction_group_persisted_by_pk?: Maybe<DocumentReactionGroupPersisted>;
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
  insert_comment_reaction_one?: Maybe<CommentReaction>;
  /** insert a single row into the table: "document_content" */
  insert_document_content_one?: Maybe<DocumentContent>;
  /** insert a single row into the table: "document_label" */
  insert_document_label_one?: Maybe<DocumentLabel>;
  /** insert a single row into the table: "document" */
  insert_document_one?: Maybe<Document>;
  /** insert data into the table: "document_reaction_group_persisted" */
  insert_document_reaction_group_persisted?: Maybe<DocumentReactionGroupPersistedMutationResponse>;
  /** insert a single row into the table: "document_reaction_group_persisted" */
  insert_document_reaction_group_persisted_one?: Maybe<DocumentReactionGroupPersisted>;
  /** insert a single row into the table: "document_reaction" */
  insert_document_reaction_one?: Maybe<DocumentReaction>;
  /** insert a single row into the table: "follow" */
  insert_follow_one?: Maybe<Follow>;
  /** insert a single row into the table: "label" */
  insert_label_one?: Maybe<Label>;
  /** insert a single row into the table: "reaction" */
  insert_reaction_one?: Maybe<Reaction>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** delete data from the table: "color" */
  removeColor?: Maybe<ColorMutationResponse>;
  /** delete data from the table: "comment" */
  removeComment?: Maybe<CommentMutationResponse>;
  /** delete data from the table: "comment_reaction" */
  removeCommentReaction?: Maybe<CommentReactionMutationResponse>;
  /** delete data from the table: "document" */
  removeDocument?: Maybe<DocumentMutationResponse>;
  /** delete data from the table: "document_content" */
  removeDocumentContent?: Maybe<DocumentContentMutationResponse>;
  /** delete data from the table: "document_label" */
  removeDocumentLabel?: Maybe<DocumentLabelMutationResponse>;
  /** delete data from the table: "document_reaction" */
  removeDocumentReaction?: Maybe<DocumentReactionMutationResponse>;
  /** delete data from the table: "follow" */
  removeFollow?: Maybe<FollowMutationResponse>;
  /** delete data from the table: "label" */
  removeLabel?: Maybe<LabelMutationResponse>;
  /** delete data from the table: "reaction" */
  removeReaction?: Maybe<ReactionMutationResponse>;
  /** delete data from the table: "user" */
  removeUser?: Maybe<UserMutationResponse>;
  /** update data of the table: "color" */
  updateColor?: Maybe<ColorMutationResponse>;
  /** update data of the table: "comment" */
  updateComment?: Maybe<CommentMutationResponse>;
  /** update data of the table: "comment_reaction" */
  updateCommentReaction?: Maybe<CommentReactionMutationResponse>;
  /** update data of the table: "document" */
  updateDocument?: Maybe<DocumentMutationResponse>;
  /** update data of the table: "document_content" */
  updateDocumentContent?: Maybe<DocumentContentMutationResponse>;
  /** update data of the table: "document_label" */
  updateDocumentLabel?: Maybe<DocumentLabelMutationResponse>;
  /** update data of the table: "document_reaction" */
  updateDocumentReaction?: Maybe<DocumentReactionMutationResponse>;
  /** update data of the table: "follow" */
  updateFollow?: Maybe<FollowMutationResponse>;
  /** update data of the table: "label" */
  updateLabel?: Maybe<LabelMutationResponse>;
  /** update data of the table: "reaction" */
  updateReaction?: Maybe<ReactionMutationResponse>;
  /** update data of the table: "user" */
  updateUser?: Maybe<UserMutationResponse>;
  /** update single row of the table: "color" */
  update_color_by_pk?: Maybe<Color>;
  /** update single row of the table: "comment" */
  update_comment_by_pk?: Maybe<Comment>;
  /** update single row of the table: "comment_reaction" */
  update_comment_reaction_by_pk?: Maybe<CommentReaction>;
  /** update single row of the table: "document" */
  update_document_by_pk?: Maybe<Document>;
  /** update single row of the table: "document_content" */
  update_document_content_by_pk?: Maybe<DocumentContent>;
  /** update single row of the table: "document_label" */
  update_document_label_by_pk?: Maybe<DocumentLabel>;
  /** update single row of the table: "document_reaction" */
  update_document_reaction_by_pk?: Maybe<DocumentReaction>;
  /** update data of the table: "document_reaction_group_persisted" */
  update_document_reaction_group_persisted?: Maybe<DocumentReactionGroupPersistedMutationResponse>;
  /** update single row of the table: "document_reaction_group_persisted" */
  update_document_reaction_group_persisted_by_pk?: Maybe<DocumentReactionGroupPersisted>;
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
export type MutationRootAddColorArgs = {
  objects: Array<ColorInsertInput>;
  on_conflict?: Maybe<ColorOnConflict>;
};


/** mutation root */
export type MutationRootAddCommentArgs = {
  objects: Array<CommentInsertInput>;
  on_conflict?: Maybe<CommentOnConflict>;
};


/** mutation root */
export type MutationRootAddCommentReactionArgs = {
  objects: Array<CommentReactionInsertInput>;
  on_conflict?: Maybe<CommentReactionOnConflict>;
};


/** mutation root */
export type MutationRootAddDocumentArgs = {
  objects: Array<DocumentInsertInput>;
  on_conflict?: Maybe<DocumentOnConflict>;
};


/** mutation root */
export type MutationRootAddDocumentContentArgs = {
  objects: Array<DocumentContentInsertInput>;
  on_conflict?: Maybe<DocumentContentOnConflict>;
};


/** mutation root */
export type MutationRootAddDocumentLabelArgs = {
  objects: Array<DocumentLabelInsertInput>;
  on_conflict?: Maybe<DocumentLabelOnConflict>;
};


/** mutation root */
export type MutationRootAddDocumentReactionArgs = {
  objects: Array<DocumentReactionInsertInput>;
  on_conflict?: Maybe<DocumentReactionOnConflict>;
};


/** mutation root */
export type MutationRootAddFollowArgs = {
  objects: Array<FollowInsertInput>;
  on_conflict?: Maybe<FollowOnConflict>;
};


/** mutation root */
export type MutationRootAddLabelArgs = {
  objects: Array<LabelInsertInput>;
  on_conflict?: Maybe<LabelOnConflict>;
};


/** mutation root */
export type MutationRootAddReactionArgs = {
  objects: Array<ReactionInsertInput>;
  on_conflict?: Maybe<ReactionOnConflict>;
};


/** mutation root */
export type MutationRootAddUserArgs = {
  objects: Array<UserInsertInput>;
  on_conflict?: Maybe<UserOnConflict>;
};


/** mutation root */
export type MutationRootDeleteColorByPkArgs = {
  name: Scalars['String'];
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
export type MutationRootDeleteDocumentContentByPkArgs = {
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
export type MutationRootDeleteDocumentReactionGroupPersistedArgs = {
  where: DocumentReactionGroupPersistedBoolExp;
};


/** mutation root */
export type MutationRootDeleteDocumentReactionGroupPersistedByPkArgs = {
  id: Scalars['bigint'];
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
export type MutationRootDeleteReactionByPkArgs = {
  htmlCode: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteUserByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootInsertColorOneArgs = {
  object: ColorInsertInput;
  on_conflict?: Maybe<ColorOnConflict>;
};


/** mutation root */
export type MutationRootInsertCommentOneArgs = {
  object: CommentInsertInput;
  on_conflict?: Maybe<CommentOnConflict>;
};


/** mutation root */
export type MutationRootInsertCommentReactionOneArgs = {
  object: CommentReactionInsertInput;
  on_conflict?: Maybe<CommentReactionOnConflict>;
};


/** mutation root */
export type MutationRootInsertDocumentContentOneArgs = {
  object: DocumentContentInsertInput;
  on_conflict?: Maybe<DocumentContentOnConflict>;
};


/** mutation root */
export type MutationRootInsertDocumentLabelOneArgs = {
  object: DocumentLabelInsertInput;
  on_conflict?: Maybe<DocumentLabelOnConflict>;
};


/** mutation root */
export type MutationRootInsertDocumentOneArgs = {
  object: DocumentInsertInput;
  on_conflict?: Maybe<DocumentOnConflict>;
};


/** mutation root */
export type MutationRootInsertDocumentReactionGroupPersistedArgs = {
  objects: Array<DocumentReactionGroupPersistedInsertInput>;
  on_conflict?: Maybe<DocumentReactionGroupPersistedOnConflict>;
};


/** mutation root */
export type MutationRootInsertDocumentReactionGroupPersistedOneArgs = {
  object: DocumentReactionGroupPersistedInsertInput;
  on_conflict?: Maybe<DocumentReactionGroupPersistedOnConflict>;
};


/** mutation root */
export type MutationRootInsertDocumentReactionOneArgs = {
  object: DocumentReactionInsertInput;
  on_conflict?: Maybe<DocumentReactionOnConflict>;
};


/** mutation root */
export type MutationRootInsertFollowOneArgs = {
  object: FollowInsertInput;
  on_conflict?: Maybe<FollowOnConflict>;
};


/** mutation root */
export type MutationRootInsertLabelOneArgs = {
  object: LabelInsertInput;
  on_conflict?: Maybe<LabelOnConflict>;
};


/** mutation root */
export type MutationRootInsertReactionOneArgs = {
  object: ReactionInsertInput;
  on_conflict?: Maybe<ReactionOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserOneArgs = {
  object: UserInsertInput;
  on_conflict?: Maybe<UserOnConflict>;
};


/** mutation root */
export type MutationRootRemoveColorArgs = {
  where: ColorBoolExp;
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
export type MutationRootRemoveDocumentContentArgs = {
  where: DocumentContentBoolExp;
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
export type MutationRootRemoveReactionArgs = {
  where: ReactionBoolExp;
};


/** mutation root */
export type MutationRootRemoveUserArgs = {
  where: UserBoolExp;
};


/** mutation root */
export type MutationRootUpdateColorArgs = {
  _set?: Maybe<ColorSetInput>;
  where: ColorBoolExp;
};


/** mutation root */
export type MutationRootUpdateCommentArgs = {
  _inc?: Maybe<CommentIncInput>;
  _set?: Maybe<CommentSetInput>;
  where: CommentBoolExp;
};


/** mutation root */
export type MutationRootUpdateCommentReactionArgs = {
  _set?: Maybe<CommentReactionSetInput>;
  where: CommentReactionBoolExp;
};


/** mutation root */
export type MutationRootUpdateDocumentArgs = {
  _inc?: Maybe<DocumentIncInput>;
  _set?: Maybe<DocumentSetInput>;
  where: DocumentBoolExp;
};


/** mutation root */
export type MutationRootUpdateDocumentContentArgs = {
  _set?: Maybe<DocumentContentSetInput>;
  where: DocumentContentBoolExp;
};


/** mutation root */
export type MutationRootUpdateDocumentLabelArgs = {
  _set?: Maybe<DocumentLabelSetInput>;
  where: DocumentLabelBoolExp;
};


/** mutation root */
export type MutationRootUpdateDocumentReactionArgs = {
  _set?: Maybe<DocumentReactionSetInput>;
  where: DocumentReactionBoolExp;
};


/** mutation root */
export type MutationRootUpdateFollowArgs = {
  _set?: Maybe<FollowSetInput>;
  where: FollowBoolExp;
};


/** mutation root */
export type MutationRootUpdateLabelArgs = {
  _set?: Maybe<LabelSetInput>;
  where: LabelBoolExp;
};


/** mutation root */
export type MutationRootUpdateReactionArgs = {
  _inc?: Maybe<ReactionIncInput>;
  _set?: Maybe<ReactionSetInput>;
  where: ReactionBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserArgs = {
  _inc?: Maybe<UserIncInput>;
  _set?: Maybe<UserSetInput>;
  where: UserBoolExp;
};


/** mutation root */
export type MutationRootUpdateColorByPkArgs = {
  _set?: Maybe<ColorSetInput>;
  pk_columns: ColorPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateCommentByPkArgs = {
  _inc?: Maybe<CommentIncInput>;
  _set?: Maybe<CommentSetInput>;
  pk_columns: CommentPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateCommentReactionByPkArgs = {
  _set?: Maybe<CommentReactionSetInput>;
  pk_columns: CommentReactionPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateDocumentByPkArgs = {
  _inc?: Maybe<DocumentIncInput>;
  _set?: Maybe<DocumentSetInput>;
  pk_columns: DocumentPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateDocumentContentByPkArgs = {
  _set?: Maybe<DocumentContentSetInput>;
  pk_columns: DocumentContentPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateDocumentLabelByPkArgs = {
  _set?: Maybe<DocumentLabelSetInput>;
  pk_columns: DocumentLabelPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateDocumentReactionByPkArgs = {
  _set?: Maybe<DocumentReactionSetInput>;
  pk_columns: DocumentReactionPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateDocumentReactionGroupPersistedArgs = {
  _inc?: Maybe<DocumentReactionGroupPersistedIncInput>;
  _set?: Maybe<DocumentReactionGroupPersistedSetInput>;
  where: DocumentReactionGroupPersistedBoolExp;
};


/** mutation root */
export type MutationRootUpdateDocumentReactionGroupPersistedByPkArgs = {
  _inc?: Maybe<DocumentReactionGroupPersistedIncInput>;
  _set?: Maybe<DocumentReactionGroupPersistedSetInput>;
  pk_columns: DocumentReactionGroupPersistedPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateFollowByPkArgs = {
  _set?: Maybe<FollowSetInput>;
  pk_columns: FollowPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateLabelByPkArgs = {
  _set?: Maybe<LabelSetInput>;
  pk_columns: LabelPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateReactionByPkArgs = {
  _inc?: Maybe<ReactionIncInput>;
  _set?: Maybe<ReactionSetInput>;
  pk_columns: ReactionPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserByPkArgs = {
  _inc?: Maybe<UserIncInput>;
  _set?: Maybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
};

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

/** query root */
export type QueryRoot = {
   __typename?: 'query_root';
  /** fetch data from the table: "color" */
  allColors: Array<Color>;
  /** fetch data from the table: "comment_reaction" */
  allCommentReactions: Array<CommentReaction>;
  /** fetch data from the table: "comment" */
  allComments: Array<Comment>;
  /** fetch data from the table: "document_content" */
  allDocumentContents: Array<DocumentContent>;
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
  /** fetch aggregated fields from the table: "color" */
  color_aggregate: ColorAggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment?: Maybe<Comment>;
  /** fetch data from the table: "comment_reaction" using primary key columns */
  commentReaction?: Maybe<CommentReaction>;
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: CommentAggregate;
  /** fetch aggregated fields from the table: "comment_reaction" */
  comment_reaction_aggregate: CommentReactionAggregate;
  /** fetch data from the table: "comment_reactions_group" */
  comment_reactions_group: Array<CommentReactionsGroup>;
  /** fetch aggregated fields from the table: "comment_reactions_group" */
  comment_reactions_group_aggregate: CommentReactionsGroupAggregate;
  /** fetch data from the table: "document" using primary key columns */
  document?: Maybe<Document>;
  /** fetch data from the table: "document_content" using primary key columns */
  documentContent?: Maybe<DocumentContent>;
  /** fetch data from the table: "document_label" using primary key columns */
  documentLabel?: Maybe<DocumentLabel>;
  /** fetch data from the table: "document_reaction" using primary key columns */
  documentReactino?: Maybe<DocumentReaction>;
  /** fetch aggregated fields from the table: "document" */
  document_aggregate: DocumentAggregate;
  /** fetch aggregated fields from the table: "document_content" */
  document_content_aggregate: DocumentContentAggregate;
  /** fetch aggregated fields from the table: "document_label" */
  document_label_aggregate: DocumentLabelAggregate;
  /** fetch aggregated fields from the table: "document_reaction" */
  document_reaction_aggregate: DocumentReactionAggregate;
  /** fetch data from the table: "document_reaction_group" */
  document_reaction_group: Array<DocumentReactionGroup>;
  /** fetch aggregated fields from the table: "document_reaction_group" */
  document_reaction_group_aggregate: DocumentReactionGroupAggregate;
  /** fetch data from the table: "document_reaction_group_persisted" */
  document_reaction_group_persisted: Array<DocumentReactionGroupPersisted>;
  /** fetch aggregated fields from the table: "document_reaction_group_persisted" */
  document_reaction_group_persisted_aggregate: DocumentReactionGroupPersistedAggregate;
  /** fetch data from the table: "document_reaction_group_persisted" using primary key columns */
  document_reaction_group_persisted_by_pk?: Maybe<DocumentReactionGroupPersisted>;
  /** fetch data from the table: "follow" using primary key columns */
  follow?: Maybe<Follow>;
  /** fetch aggregated fields from the table: "follow" */
  follow_aggregate: FollowAggregate;
  /** fetch data from the table: "label" using primary key columns */
  label?: Maybe<Label>;
  /** fetch aggregated fields from the table: "label" */
  label_aggregate: LabelAggregate;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction?: Maybe<Reaction>;
  /** fetch aggregated fields from the table: "reaction" */
  reaction_aggregate: ReactionAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
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
export type QueryRootAllDocumentContentsArgs = {
  distinct_on?: Maybe<Array<DocumentContentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentContentOrderBy>>;
  where?: Maybe<DocumentContentBoolExp>;
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
export type QueryRootColorAggregateArgs = {
  distinct_on?: Maybe<Array<ColorSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ColorOrderBy>>;
  where?: Maybe<ColorBoolExp>;
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
export type QueryRootCommentAggregateArgs = {
  distinct_on?: Maybe<Array<CommentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentOrderBy>>;
  where?: Maybe<CommentBoolExp>;
};


/** query root */
export type QueryRootCommentReactionAggregateArgs = {
  distinct_on?: Maybe<Array<CommentReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentReactionOrderBy>>;
  where?: Maybe<CommentReactionBoolExp>;
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
export type QueryRootCommentReactionsGroupAggregateArgs = {
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
export type QueryRootDocumentContentArgs = {
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
export type QueryRootDocumentAggregateArgs = {
  distinct_on?: Maybe<Array<DocumentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentOrderBy>>;
  where?: Maybe<DocumentBoolExp>;
};


/** query root */
export type QueryRootDocumentContentAggregateArgs = {
  distinct_on?: Maybe<Array<DocumentContentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentContentOrderBy>>;
  where?: Maybe<DocumentContentBoolExp>;
};


/** query root */
export type QueryRootDocumentLabelAggregateArgs = {
  distinct_on?: Maybe<Array<DocumentLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentLabelOrderBy>>;
  where?: Maybe<DocumentLabelBoolExp>;
};


/** query root */
export type QueryRootDocumentReactionAggregateArgs = {
  distinct_on?: Maybe<Array<DocumentReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentReactionOrderBy>>;
  where?: Maybe<DocumentReactionBoolExp>;
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
export type QueryRootDocumentReactionGroupAggregateArgs = {
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
export type QueryRootDocumentReactionGroupPersistedAggregateArgs = {
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
export type QueryRootFollowAggregateArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
};


/** query root */
export type QueryRootLabelArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootLabelAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};


/** query root */
export type QueryRootReactionArgs = {
  htmlCode: Scalars['String'];
};


/** query root */
export type QueryRootReactionAggregateArgs = {
  distinct_on?: Maybe<Array<ReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ReactionOrderBy>>;
  where?: Maybe<ReactionBoolExp>;
};


/** query root */
export type QueryRootUserArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type QueryRootUserAggregateArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
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
export type ReactionAggregate = {
   __typename?: 'reaction_aggregate';
  aggregate?: Maybe<ReactionAggregateFields>;
  nodes: Array<Reaction>;
};

/** aggregate fields of "reaction" */
export type ReactionAggregateFields = {
   __typename?: 'reaction_aggregate_fields';
  avg?: Maybe<ReactionAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ReactionMaxFields>;
  min?: Maybe<ReactionMinFields>;
  stddev?: Maybe<ReactionStddevFields>;
  stddev_pop?: Maybe<ReactionStddevPopFields>;
  stddev_samp?: Maybe<ReactionStddevSampFields>;
  sum?: Maybe<ReactionSumFields>;
  var_pop?: Maybe<ReactionVarPopFields>;
  var_samp?: Maybe<ReactionVarSampFields>;
  variance?: Maybe<ReactionVarianceFields>;
};


/** aggregate fields of "reaction" */
export type ReactionAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ReactionSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reaction" */
export type ReactionAggregateOrderBy = {
  avg?: Maybe<ReactionAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ReactionMaxOrderBy>;
  min?: Maybe<ReactionMinOrderBy>;
  stddev?: Maybe<ReactionStddevOrderBy>;
  stddev_pop?: Maybe<ReactionStddevPopOrderBy>;
  stddev_samp?: Maybe<ReactionStddevSampOrderBy>;
  sum?: Maybe<ReactionSumOrderBy>;
  var_pop?: Maybe<ReactionVarPopOrderBy>;
  var_samp?: Maybe<ReactionVarSampOrderBy>;
  variance?: Maybe<ReactionVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "reaction" */
export type ReactionArrRelInsertInput = {
  data: Array<ReactionInsertInput>;
  on_conflict?: Maybe<ReactionOnConflict>;
};

/** aggregate avg on columns */
export type ReactionAvgFields = {
   __typename?: 'reaction_avg_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "reaction" */
export type ReactionAvgOrderBy = {
  balance?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "reaction". All fields are combined with a logical 'AND'. */
export type ReactionBoolExp = {
  _and?: Maybe<Array<Maybe<ReactionBoolExp>>>;
  _not?: Maybe<ReactionBoolExp>;
  _or?: Maybe<Array<Maybe<ReactionBoolExp>>>;
  balance?: Maybe<IntComparisonExp>;
  htmlCode?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "reaction" */
export enum ReactionConstraint {
  /** unique or primary key constraint */
  ReactionHtmlCodeKey = 'reaction_html_code_key',
  /** unique or primary key constraint */
  ReactionPkey = 'reaction_pkey'
}

/** input type for incrementing integer column in table "reaction" */
export type ReactionIncInput = {
  balance?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "reaction" */
export type ReactionInsertInput = {
  balance?: Maybe<Scalars['Int']>;
  htmlCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ReactionMaxFields = {
   __typename?: 'reaction_max_fields';
  balance?: Maybe<Scalars['Int']>;
  htmlCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "reaction" */
export type ReactionMaxOrderBy = {
  balance?: Maybe<OrderBy>;
  htmlCode?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ReactionMinFields = {
   __typename?: 'reaction_min_fields';
  balance?: Maybe<Scalars['Int']>;
  htmlCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "reaction" */
export type ReactionMinOrderBy = {
  balance?: Maybe<OrderBy>;
  htmlCode?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

/** response of any mutation on the table "reaction" */
export type ReactionMutationResponse = {
   __typename?: 'reaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Reaction>;
};

/** input type for inserting object relation for remote table "reaction" */
export type ReactionObjRelInsertInput = {
  data: ReactionInsertInput;
  on_conflict?: Maybe<ReactionOnConflict>;
};

/** on conflict condition type for table "reaction" */
export type ReactionOnConflict = {
  constraint: ReactionConstraint;
  update_columns: Array<ReactionUpdateColumn>;
  where?: Maybe<ReactionBoolExp>;
};

/** ordering options when selecting data from "reaction" */
export type ReactionOrderBy = {
  balance?: Maybe<OrderBy>;
  htmlCode?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

/** primary key columns input for table: "reaction" */
export type ReactionPkColumnsInput = {
  htmlCode: Scalars['String'];
};

/** select columns of table "reaction" */
export enum ReactionSelectColumn {
  /** column name */
  Balance = 'balance',
  /** column name */
  HtmlCode = 'htmlCode',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "reaction" */
export type ReactionSetInput = {
  balance?: Maybe<Scalars['Int']>;
  htmlCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ReactionStddevFields = {
   __typename?: 'reaction_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "reaction" */
export type ReactionStddevOrderBy = {
  balance?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ReactionStddevPopFields = {
   __typename?: 'reaction_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "reaction" */
export type ReactionStddevPopOrderBy = {
  balance?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ReactionStddevSampFields = {
   __typename?: 'reaction_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "reaction" */
export type ReactionStddevSampOrderBy = {
  balance?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ReactionSumFields = {
   __typename?: 'reaction_sum_fields';
  balance?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "reaction" */
export type ReactionSumOrderBy = {
  balance?: Maybe<OrderBy>;
};

/** update columns of table "reaction" */
export enum ReactionUpdateColumn {
  /** column name */
  Balance = 'balance',
  /** column name */
  HtmlCode = 'htmlCode',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type ReactionVarPopFields = {
   __typename?: 'reaction_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "reaction" */
export type ReactionVarPopOrderBy = {
  balance?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ReactionVarSampFields = {
   __typename?: 'reaction_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "reaction" */
export type ReactionVarSampOrderBy = {
  balance?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ReactionVarianceFields = {
   __typename?: 'reaction_variance_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "reaction" */
export type ReactionVarianceOrderBy = {
  balance?: Maybe<OrderBy>;
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

/** subscription root */
export type SubscriptionRoot = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "color" */
  allColors: Array<Color>;
  /** fetch data from the table: "comment_reaction" */
  allCommentReactions: Array<CommentReaction>;
  /** fetch data from the table: "comment" */
  allComments: Array<Comment>;
  /** fetch data from the table: "document_content" */
  allDocumentContents: Array<DocumentContent>;
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
  /** fetch aggregated fields from the table: "color" */
  color_aggregate: ColorAggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment?: Maybe<Comment>;
  /** fetch data from the table: "comment_reaction" using primary key columns */
  commentReaction?: Maybe<CommentReaction>;
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: CommentAggregate;
  /** fetch aggregated fields from the table: "comment_reaction" */
  comment_reaction_aggregate: CommentReactionAggregate;
  /** fetch data from the table: "comment_reactions_group" */
  comment_reactions_group: Array<CommentReactionsGroup>;
  /** fetch aggregated fields from the table: "comment_reactions_group" */
  comment_reactions_group_aggregate: CommentReactionsGroupAggregate;
  /** fetch data from the table: "document" using primary key columns */
  document?: Maybe<Document>;
  /** fetch data from the table: "document_content" using primary key columns */
  documentContent?: Maybe<DocumentContent>;
  /** fetch data from the table: "document_label" using primary key columns */
  documentLabel?: Maybe<DocumentLabel>;
  /** fetch data from the table: "document_reaction" using primary key columns */
  documentReactino?: Maybe<DocumentReaction>;
  /** fetch aggregated fields from the table: "document" */
  document_aggregate: DocumentAggregate;
  /** fetch aggregated fields from the table: "document_content" */
  document_content_aggregate: DocumentContentAggregate;
  /** fetch aggregated fields from the table: "document_label" */
  document_label_aggregate: DocumentLabelAggregate;
  /** fetch aggregated fields from the table: "document_reaction" */
  document_reaction_aggregate: DocumentReactionAggregate;
  /** fetch data from the table: "document_reaction_group" */
  document_reaction_group: Array<DocumentReactionGroup>;
  /** fetch aggregated fields from the table: "document_reaction_group" */
  document_reaction_group_aggregate: DocumentReactionGroupAggregate;
  /** fetch data from the table: "document_reaction_group_persisted" */
  document_reaction_group_persisted: Array<DocumentReactionGroupPersisted>;
  /** fetch aggregated fields from the table: "document_reaction_group_persisted" */
  document_reaction_group_persisted_aggregate: DocumentReactionGroupPersistedAggregate;
  /** fetch data from the table: "document_reaction_group_persisted" using primary key columns */
  document_reaction_group_persisted_by_pk?: Maybe<DocumentReactionGroupPersisted>;
  /** fetch data from the table: "follow" using primary key columns */
  follow?: Maybe<Follow>;
  /** fetch aggregated fields from the table: "follow" */
  follow_aggregate: FollowAggregate;
  /** fetch data from the table: "label" using primary key columns */
  label?: Maybe<Label>;
  /** fetch aggregated fields from the table: "label" */
  label_aggregate: LabelAggregate;
  /** fetch data from the table: "reaction" using primary key columns */
  reaction?: Maybe<Reaction>;
  /** fetch aggregated fields from the table: "reaction" */
  reaction_aggregate: ReactionAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
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
export type SubscriptionRootAllDocumentContentsArgs = {
  distinct_on?: Maybe<Array<DocumentContentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentContentOrderBy>>;
  where?: Maybe<DocumentContentBoolExp>;
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
export type SubscriptionRootColorAggregateArgs = {
  distinct_on?: Maybe<Array<ColorSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ColorOrderBy>>;
  where?: Maybe<ColorBoolExp>;
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
export type SubscriptionRootCommentAggregateArgs = {
  distinct_on?: Maybe<Array<CommentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentOrderBy>>;
  where?: Maybe<CommentBoolExp>;
};


/** subscription root */
export type SubscriptionRootCommentReactionAggregateArgs = {
  distinct_on?: Maybe<Array<CommentReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentReactionOrderBy>>;
  where?: Maybe<CommentReactionBoolExp>;
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
export type SubscriptionRootCommentReactionsGroupAggregateArgs = {
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
export type SubscriptionRootDocumentContentArgs = {
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
export type SubscriptionRootDocumentAggregateArgs = {
  distinct_on?: Maybe<Array<DocumentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentOrderBy>>;
  where?: Maybe<DocumentBoolExp>;
};


/** subscription root */
export type SubscriptionRootDocumentContentAggregateArgs = {
  distinct_on?: Maybe<Array<DocumentContentSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentContentOrderBy>>;
  where?: Maybe<DocumentContentBoolExp>;
};


/** subscription root */
export type SubscriptionRootDocumentLabelAggregateArgs = {
  distinct_on?: Maybe<Array<DocumentLabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentLabelOrderBy>>;
  where?: Maybe<DocumentLabelBoolExp>;
};


/** subscription root */
export type SubscriptionRootDocumentReactionAggregateArgs = {
  distinct_on?: Maybe<Array<DocumentReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<DocumentReactionOrderBy>>;
  where?: Maybe<DocumentReactionBoolExp>;
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
export type SubscriptionRootDocumentReactionGroupAggregateArgs = {
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
export type SubscriptionRootDocumentReactionGroupPersistedAggregateArgs = {
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
export type SubscriptionRootFollowAggregateArgs = {
  distinct_on?: Maybe<Array<FollowSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowOrderBy>>;
  where?: Maybe<FollowBoolExp>;
};


/** subscription root */
export type SubscriptionRootLabelArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootLabelAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};


/** subscription root */
export type SubscriptionRootReactionArgs = {
  htmlCode: Scalars['String'];
};


/** subscription root */
export type SubscriptionRootReactionAggregateArgs = {
  distinct_on?: Maybe<Array<ReactionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ReactionOrderBy>>;
  where?: Maybe<ReactionBoolExp>;
};


/** subscription root */
export type SubscriptionRootUserArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootUserAggregateArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
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
  document_labels: Array<DocumentLabel>;
  /** An aggregated array relationship */
  document_labels_aggregate: DocumentLabelAggregate;
  /** An array relationship */
  documents: Array<Document>;
  /** An aggregated array relationship */
  documents_aggregate: DocumentAggregate;
  /** An array relationship */
  followers: Array<Follow>;
  /** An aggregated array relationship */
  followers_aggregate: FollowAggregate;
  /** An array relationship */
  followings: Array<Follow>;
  /** An aggregated array relationship */
  followings_aggregate: FollowAggregate;
  id: Scalars['uuid'];
  imageUrl?: Maybe<Scalars['String']>;
  /** An array relationship */
  labels: Array<Label>;
  /** An aggregated array relationship */
  labels_aggregate: LabelAggregate;
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
export type UserDocumentLabelsAggregateArgs = {
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
export type UserDocumentsAggregateArgs = {
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
export type UserFollowersAggregateArgs = {
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
export type UserFollowingsAggregateArgs = {
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


/**
 * add author table
 * 
 * 
 * columns and relationships of "user"
 */
export type UserLabelsAggregateArgs = {
  distinct_on?: Maybe<Array<LabelSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LabelOrderBy>>;
  where?: Maybe<LabelBoolExp>;
};

/** aggregated selection of "user" */
export type UserAggregate = {
   __typename?: 'user_aggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
   __typename?: 'user_aggregate_fields';
  avg?: Maybe<UserAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
  stddev?: Maybe<UserStddevFields>;
  stddev_pop?: Maybe<UserStddevPopFields>;
  stddev_samp?: Maybe<UserStddevSampFields>;
  sum?: Maybe<UserSumFields>;
  var_pop?: Maybe<UserVarPopFields>;
  var_samp?: Maybe<UserVarSampFields>;
  variance?: Maybe<UserVarianceFields>;
};


/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UserSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type UserAggregateOrderBy = {
  avg?: Maybe<UserAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<UserMaxOrderBy>;
  min?: Maybe<UserMinOrderBy>;
  stddev?: Maybe<UserStddevOrderBy>;
  stddev_pop?: Maybe<UserStddevPopOrderBy>;
  stddev_samp?: Maybe<UserStddevSampOrderBy>;
  sum?: Maybe<UserSumOrderBy>;
  var_pop?: Maybe<UserVarPopOrderBy>;
  var_samp?: Maybe<UserVarSampOrderBy>;
  variance?: Maybe<UserVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "user" */
export type UserArrRelInsertInput = {
  data: Array<UserInsertInput>;
  on_conflict?: Maybe<UserOnConflict>;
};

/** aggregate avg on columns */
export type UserAvgFields = {
   __typename?: 'user_avg_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type UserAvgOrderBy = {
  balanceCommentReaction?: Maybe<OrderBy>;
  balanceDocumentReaction?: Maybe<OrderBy>;
  countPrivateDocs?: Maybe<OrderBy>;
  countWrittenComments?: Maybe<OrderBy>;
  maxPrivateDocs?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
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
  updatedAt?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint */
  UserAuthIdKey = 'user_auth_id_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing integer column in table "user" */
export type UserIncInput = {
  balanceCommentReaction?: Maybe<Scalars['bigint']>;
  balanceDocumentReaction?: Maybe<Scalars['bigint']>;
  countPrivateDocs?: Maybe<Scalars['Int']>;
  countWrittenComments?: Maybe<Scalars['Int']>;
  maxPrivateDocs?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  authId?: Maybe<Scalars['String']>;
  balanceCommentReaction?: Maybe<Scalars['bigint']>;
  balanceDocumentReaction?: Maybe<Scalars['bigint']>;
  countPrivateDocs?: Maybe<Scalars['Int']>;
  countWrittenComments?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  document_labels?: Maybe<DocumentLabelArrRelInsertInput>;
  documents?: Maybe<DocumentArrRelInsertInput>;
  followers?: Maybe<FollowArrRelInsertInput>;
  followings?: Maybe<FollowArrRelInsertInput>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  labels?: Maybe<LabelArrRelInsertInput>;
  maxPrivateDocs?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UserMaxFields = {
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
export type UserMaxOrderBy = {
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
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type UserMinFields = {
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
export type UserMinOrderBy = {
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
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
   __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  on_conflict?: Maybe<UserOnConflict>;
};

/** on conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  update_columns: Array<UserUpdateColumn>;
  where?: Maybe<UserBoolExp>;
};

/** ordering options when selecting data from "user" */
export type UserOrderBy = {
  authId?: Maybe<OrderBy>;
  balanceCommentReaction?: Maybe<OrderBy>;
  balanceDocumentReaction?: Maybe<OrderBy>;
  countPrivateDocs?: Maybe<OrderBy>;
  countWrittenComments?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  document_labels_aggregate?: Maybe<DocumentLabelAggregateOrderBy>;
  documents_aggregate?: Maybe<DocumentAggregateOrderBy>;
  followers_aggregate?: Maybe<FollowAggregateOrderBy>;
  followings_aggregate?: Maybe<FollowAggregateOrderBy>;
  id?: Maybe<OrderBy>;
  imageUrl?: Maybe<OrderBy>;
  labels_aggregate?: Maybe<LabelAggregateOrderBy>;
  maxPrivateDocs?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "user" */
export type UserPkColumnsInput = {
  id: Scalars['uuid'];
};

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
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user" */
export type UserSetInput = {
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
export type UserStddevFields = {
   __typename?: 'user_stddev_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type UserStddevOrderBy = {
  balanceCommentReaction?: Maybe<OrderBy>;
  balanceDocumentReaction?: Maybe<OrderBy>;
  countPrivateDocs?: Maybe<OrderBy>;
  countWrittenComments?: Maybe<OrderBy>;
  maxPrivateDocs?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type UserStddevPopFields = {
   __typename?: 'user_stddev_pop_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type UserStddevPopOrderBy = {
  balanceCommentReaction?: Maybe<OrderBy>;
  balanceDocumentReaction?: Maybe<OrderBy>;
  countPrivateDocs?: Maybe<OrderBy>;
  countWrittenComments?: Maybe<OrderBy>;
  maxPrivateDocs?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type UserStddevSampFields = {
   __typename?: 'user_stddev_samp_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type UserStddevSampOrderBy = {
  balanceCommentReaction?: Maybe<OrderBy>;
  balanceDocumentReaction?: Maybe<OrderBy>;
  countPrivateDocs?: Maybe<OrderBy>;
  countWrittenComments?: Maybe<OrderBy>;
  maxPrivateDocs?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type UserSumFields = {
   __typename?: 'user_sum_fields';
  balanceCommentReaction?: Maybe<Scalars['bigint']>;
  balanceDocumentReaction?: Maybe<Scalars['bigint']>;
  countPrivateDocs?: Maybe<Scalars['Int']>;
  countWrittenComments?: Maybe<Scalars['Int']>;
  maxPrivateDocs?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type UserSumOrderBy = {
  balanceCommentReaction?: Maybe<OrderBy>;
  balanceDocumentReaction?: Maybe<OrderBy>;
  countPrivateDocs?: Maybe<OrderBy>;
  countWrittenComments?: Maybe<OrderBy>;
  maxPrivateDocs?: Maybe<OrderBy>;
};

/** update columns of table "user" */
export enum UserUpdateColumn {
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
export type UserVarPopFields = {
   __typename?: 'user_var_pop_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type UserVarPopOrderBy = {
  balanceCommentReaction?: Maybe<OrderBy>;
  balanceDocumentReaction?: Maybe<OrderBy>;
  countPrivateDocs?: Maybe<OrderBy>;
  countWrittenComments?: Maybe<OrderBy>;
  maxPrivateDocs?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type UserVarSampFields = {
   __typename?: 'user_var_samp_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type UserVarSampOrderBy = {
  balanceCommentReaction?: Maybe<OrderBy>;
  balanceDocumentReaction?: Maybe<OrderBy>;
  countPrivateDocs?: Maybe<OrderBy>;
  countWrittenComments?: Maybe<OrderBy>;
  maxPrivateDocs?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type UserVarianceFields = {
   __typename?: 'user_variance_fields';
  balanceCommentReaction?: Maybe<Scalars['Float']>;
  balanceDocumentReaction?: Maybe<Scalars['Float']>;
  countPrivateDocs?: Maybe<Scalars['Float']>;
  countWrittenComments?: Maybe<Scalars['Float']>;
  maxPrivateDocs?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type UserVarianceOrderBy = {
  balanceCommentReaction?: Maybe<OrderBy>;
  balanceDocumentReaction?: Maybe<OrderBy>;
  countPrivateDocs?: Maybe<OrderBy>;
  countWrittenComments?: Maybe<OrderBy>;
  maxPrivateDocs?: Maybe<OrderBy>;
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
