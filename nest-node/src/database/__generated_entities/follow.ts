import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./user";

@Index("follow_pkey", ["id"], { unique: true })
@Entity("follow", { schema: "public" })
export class Follow {
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

  @ManyToOne(
    () => User,
    user => user.follows,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "author_id", referencedColumnName: "authId" }])
  author: User;

  @ManyToOne(
    () => User,
    user => user.follows2,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "following_id", referencedColumnName: "authId" }])
  following: User;
}
