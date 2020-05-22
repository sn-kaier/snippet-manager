import { Column, Entity, Index, OneToMany } from "typeorm";
import { CommentReaction } from "./comment-reaction";
import { DocumentReaction } from "./document-reaction";
import { DocumentReactionGroupPersisted } from "./document-reaction-group-persisted";

@Index("reaction_html_code_key", ["htmlCode"], { unique: true })
@Index("reaction_pkey", ["htmlCode"], { unique: true })
@Entity("reaction", { schema: "public" })
export class Reaction {
  @Column("text", { name: "title" })
  title: string;

  @Column("text", { primary: true, name: "html_code" })
  htmlCode: string;

  @Column("integer", { name: "balance", default: () => "0" })
  balance: number;

  @OneToMany(
    () => CommentReaction,
    commentReaction => commentReaction.reaction
  )
  commentReactions: CommentReaction[];

  @OneToMany(
    () => DocumentReaction,
    documentReaction => documentReaction.reaction
  )
  documentReactions: DocumentReaction[];

  @OneToMany(
    () => DocumentReactionGroupPersisted,
    documentReactionGroupPersisted => documentReactionGroupPersisted.reaction
  )
  documentReactionGroupPersisteds: DocumentReactionGroupPersisted[];
}
