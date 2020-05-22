import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Document } from "./document";

@Index("document_content_document_id_key", ["documentId"], { unique: true })
@Index("document_content_pkey", ["id"], { unique: true })
@Entity("document_content", { schema: "public" })
export class DocumentContent {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()"
  })
  id: string;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "now()"
  })
  updatedAt: Date;

  @Column("uuid", { name: "document_id", unique: true })
  documentId: string;

  @Column("text", { name: "content" })
  content: string;

  @OneToOne(
    () => Document,
    document => document.documentContent,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "document_id", referencedColumnName: "id" }])
  document: Document;
}
