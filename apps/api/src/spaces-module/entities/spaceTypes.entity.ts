import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Spaces } from "./Spaces";

@Index("space_types_pkey", ["id"], { unique: true })
@Entity("space_types", { schema: "public" })
export class SpaceTypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 200 })
  name: string;

  @OneToMany(() => Spaces, (spaces) => spaces.spaceType)
  spaces: Spaces[];
}