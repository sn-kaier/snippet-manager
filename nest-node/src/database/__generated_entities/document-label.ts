import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Document } from "./document";
import { Label } from "./label";
import { User } from "./user";

@Index("document_label_document_id_index", ["documentId"], {})
@Index("document_label_pkey", ["id"], { unique: true })
@Entity("document_label", { schema: "public" })
export class DocumentLabel {
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
    document => document.documentLabels,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "document_id", referencedColumnName: "id" }])
  document: Document;

  @ManyToOne(
    () => Label,
    label => label.documentLabels,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "label_id", referencedColumnName: "id" }])
  label: Label;

  @ManyToOne(
    () => User,
    user => user.documentLabels,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "author_id", referencedColumnName: "authId" }])
  author: User;
}
