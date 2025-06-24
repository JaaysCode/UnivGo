import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Spaces } from "./Spaces";

@Index("space_schedules_pkey", ["id"], { unique: true })
@Entity("space_schedules", { schema: "public" })
export class SpaceSchedules {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "day_week", length: 40 })
  dayWeek: string;

  @Column("time without time zone", { name: "start_time" })
  startTime: string;

  @Column("time without time zone", { name: "end_time" })
  endTime: string;

  @ManyToOne(() => Spaces, (spaces) => spaces.spaceSchedules)
  @JoinColumn([{ name: "space_id", referencedColumnName: "id" }])
  space: Spaces;
}