import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Document } from "./document";
import { User } from "./user";
import { Reaction } from "./reaction";

@Index("document_reaction_document_id_index", ["documentId"], {})
@Index("document_reaction_pkey", ["id"], { unique: true })
@Entity("document_reaction", { schema: "public" })
export class DocumentReaction {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()"
  })
  id: string;

  @Column("uuid", { name: "document_id" })
  documentId: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "now()"
  })
  createdAt: Date;

  @ManyToOne(
    () => Document,
    document => document.documentReactions,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "document_id", referencedColumnName: "id" }])
  document: Document;

  @ManyToOne(
    () => User,
    user => user.documentReactions,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "author_id", referencedColumnName: "authId" }])
  author: User;

  @ManyToOne(
    () => Reaction,
    reaction => reaction.documentReactions,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "reaction_id", referencedColumnName: "htmlCode" }])
  reaction: Reaction;
}
