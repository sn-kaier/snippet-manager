import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Document } from "./document";
import { Reaction } from "./reaction";

@Index(
  "document_reaction_group_persisted_document_id_index",
  ["documentId"],
  {}
)
@Index(
  "document_reaction_group_persisted_document_id_reaction_id_key",
  ["documentId", "reactionId"],
  { unique: true }
)
@Index("document_reaction_group_persisted_pkey", ["id"], { unique: true })
@Entity("document_reaction_group_persisted", { schema: "public" })
export class DocumentReactionGroupPersisted {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("uuid", { name: "document_id", unique: true })
  documentId: string;

  @Column("text", { name: "reaction_id", unique: true })
  reactionId: string;

  @Column("integer", { name: "count", default: () => "1" })
  count: number;

  @ManyToOne(
    () => Document,
    document => document.documentReactionGroupPersisteds,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "document_id", referencedColumnName: "id" }])
  document: Document;

  @ManyToOne(
    () => Reaction,
    reaction => reaction.documentReactionGroupPersisteds,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "reaction_id", referencedColumnName: "htmlCode" }])
  reaction: Reaction;
}
