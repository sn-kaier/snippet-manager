import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne
} from "typeorm";
import { Comment } from "./comment";
import { User } from "./user";
import { DocumentContent } from "./document-content";
import { DocumentLabel } from "./document-label";
import { DocumentReaction } from "./document-reaction";
import { DocumentReactionGroupPersisted } from "./document-reaction-group-persisted";

@Index("document_pkey", ["id"], { unique: true })
@Entity("document", { schema: "public" })
export class Document {
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

  @Column("text", { name: "title" })
  title: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("boolean", { name: "is_public", default: () => "true" })
  isPublic: boolean;

  @Column("boolean", { name: "allow_comments", default: () => "true" })
  allowComments: boolean;

  @Column("integer", { name: "reaction_balance", default: () => "0" })
  reactionBalance: number;

  @Column("integer", { name: "count_comments", default: () => "0" })
  countComments: number;

  @OneToMany(
    () => Comment,
    comment => comment.document
  )
  comments: Comment[];

  @ManyToOne(
    () => User,
    user => user.documents,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "author_id", referencedColumnName: "authId" }])
  author: User;

  @OneToOne(
    () => DocumentContent,
    documentContent => documentContent.document
  )
  documentContent: DocumentContent;

  @OneToMany(
    () => DocumentLabel,
    documentLabel => documentLabel.document
  )
  documentLabels: DocumentLabel[];

  @OneToMany(
    () => DocumentReaction,
    documentReaction => documentReaction.document
  )
  documentReactions: DocumentReaction[];

  @OneToMany(
    () => DocumentReactionGroupPersisted,
    documentReactionGroupPersisted => documentReactionGroupPersisted.document
  )
  documentReactionGroupPersisteds: DocumentReactionGroupPersisted[];
}
