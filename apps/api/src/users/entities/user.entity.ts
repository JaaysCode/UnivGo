import { Reservations } from 'src/reservations-module/entities/reservation.entity';
import { Roles } from 'src/roles/entities/roles.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';



@Index('users_pkey', ['id'], { unique: true })
@Index('users_person_id_key', ['personId'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', length: 300 })
  name: string;

  @Column('character varying', { name: 'person_id', unique: true, length: 200 })
  personId: string;

  @Column('character varying', { name: 'password', length: 400 })
  password: string;

  @OneToMany(() => Reservations, (reservations) => reservations.user)
  reservations: Reservations[];

  @ManyToOne(() => Roles, (roles) => roles.users)
  @JoinColumn([{ name: 'role_id', referencedColumnName: 'id' }])
  role: Roles;
}
