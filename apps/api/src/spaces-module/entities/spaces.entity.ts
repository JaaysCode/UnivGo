import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Reservations } from "./Reservations";
import { SpaceSchedules } from "./SpaceSchedules";
import { SpaceTypes } from "./SpaceTypes";

@Index("spaces_pkey", ["id"], { unique: true })
@Entity("spaces", { schema: "public" })
export class Spaces {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 200 })
  name: string;

  @Column("integer", { name: "capacity" })
  capacity: number;

  @OneToMany(() => Reservations, (reservations) => reservations.space)
  reservations: Reservations[];

  @OneToMany(() => SpaceSchedules, (spaceSchedules) => spaceSchedules.space)
  spaceSchedules: SpaceSchedules[];

  @ManyToOne(() => SpaceTypes, (spaceTypes) => spaceTypes.spaces)
  @JoinColumn([{ name: "space_type_id", referencedColumnName: "id" }])
  spaceType: SpaceTypes;
}
