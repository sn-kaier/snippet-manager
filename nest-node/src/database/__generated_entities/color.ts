import { Column, Entity, Index, OneToMany } from "typeorm";
import { Label } from "./label";

@Index("color_color_key", ["color"], { unique: true })
@Index("color_name_key", ["name"], { unique: true })
@Index("color_pkey", ["name"], { unique: true })
@Entity("color", { schema: "public" })
export class Color {
  @Column("text", { primary: true, name: "name" })
  name: string;

  @Column("text", { name: "color", unique: true })
  color: string;

  @OneToMany(
    () => Label,
    label => label.colorName
  )
  labels: Label[];
}
