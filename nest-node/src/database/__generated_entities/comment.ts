import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { Document } from "./document";
import { User } from "./user";
import { CommentReaction } from "./comment-reaction";

@Index("comment_document_id_index", ["documentId"], {})
@Index("comment_pkey", ["id"], { unique: true })
@Entity("comment", { schema: "public" })
export class Comment {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()"
  })
  id: string;

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

  @Column("text", { name: "comment" })
  comment: string;

  @Column("uuid", { name: "document_id" })
  documentId: string;

  @Column("integer", { name: "reaction_balance", default: () => "0" })
  reactionBalance: number;

  @ManyToOne(
    () => Document,
    document => document.comments,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "document_id", referencedColumnName: "id" }])
  document: Document;

  @ManyToOne(
    () => User,
    user => user.comments,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "author_id", referencedColumnName: "authId" }])
  author: User;

  @OneToMany(
    () => CommentReaction,
    commentReaction => commentReaction.comment
  )
  commentReactions: CommentReaction[];
}
