import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { DocumentLabel } from "./document-label";
import { User } from "./user";
import { Color } from "./color";

@Index("label_pkey", ["id"], { unique: true })
@Entity("label", { schema: "public" })
export class Label {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()"
  })
  id: string;

  @Column("text", { name: "label" })
  label: string;

  @OneToMany(
    () => DocumentLabel,
    documentLabel => documentLabel.label
  )
  documentLabels: DocumentLabel[];

  @ManyToOne(
    () => User,
    user => user.labels,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "author_id", referencedColumnName: "authId" }])
  author: User;

  @ManyToOne(
    () => Color,
    color => color.labels,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "color_name", referencedColumnName: "name" }])
  colorName: Color;
}
