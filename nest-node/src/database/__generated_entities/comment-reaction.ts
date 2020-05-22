import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Comment } from "./comment";
import { User } from "./user";
import { Reaction } from "./reaction";

@Index("comment_reaction_comment_id_index", ["commentId"], {})
@Index("comment_reaction_pkey", ["id"], { unique: true })
@Entity("comment_reaction", { schema: "public" })
export class CommentReaction {
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

  @Column("uuid", { name: "comment_id" })
  commentId: string;

  @ManyToOne(
    () => Comment,
    comment => comment.commentReactions,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "comment_id", referencedColumnName: "id" }])
  comment: Comment;

  @ManyToOne(
    () => User,
    user => user.commentReactions,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "author_id", referencedColumnName: "authId" }])
  author: User;

  @ManyToOne(
    () => Reaction,
    reaction => reaction.commentReactions,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "reaction_id", referencedColumnName: "htmlCode" }])
  reaction: Reaction;
}
