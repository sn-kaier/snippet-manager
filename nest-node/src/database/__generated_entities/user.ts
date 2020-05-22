import { Column, Entity, Index, OneToMany } from "typeorm";
import { Comment } from "./comment";
import { CommentReaction } from "./comment-reaction";
import { Document } from "./document";
import { DocumentLabel } from "./document-label";
import { DocumentReaction } from "./document-reaction";
import { Follow } from "./follow";
import { Label } from "./label";

@Index("user_auth_id_key", ["authId"], { unique: true })
@Index("user_pkey", ["id"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()"
  })
  id: string;

  @Column("text", { name: "auth_id", unique: true })
  authId: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "now()"
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "now()"
  })
  updatedAt: Date;

  @Column("text", { name: "image_url", nullable: true })
  imageUrl: string | null;

  @Column("integer", { name: "max_private_docs", default: () => "50" })
  maxPrivateDocs: number;

  @Column("integer", { name: "count_private_docs", default: () => "0" })
  countPrivateDocs: number;

  @Column("integer", { name: "count_written_comments", default: () => "0" })
  countWrittenComments: number;

  @Column("bigint", { name: "balance_document_reaction", default: () => "0" })
  balanceDocumentReaction: string;

  @Column("bigint", { name: "balance_comment_reaction", default: () => "0" })
  balanceCommentReaction: string;

  @OneToMany(
    () => Comment,
    comment => comment.author
  )
  comments: Comment[];

  @OneToMany(
    () => CommentReaction,
    commentReaction => commentReaction.author
  )
  commentReactions: CommentReaction[];

  @OneToMany(
    () => Document,
    document => document.author
  )
  documents: Document[];

  @OneToMany(
    () => DocumentLabel,
    documentLabel => documentLabel.author
  )
  documentLabels: DocumentLabel[];

  @OneToMany(
    () => DocumentReaction,
    documentReaction => documentReaction.author
  )
  documentReactions: DocumentReaction[];

  @OneToMany(
    () => Follow,
    follow => follow.author
  )
  follows: Follow[];

  @OneToMany(
    () => Follow,
    follow => follow.following
  )
  follows2: Follow[];

  @OneToMany(
    () => Label,
    label => label.author
  )
  labels: Label[];
}
