import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReservationStatuses } from './ReservationStatuses';
import { Spaces } from './Spaces';
import { Users } from './Users';

@Index('reservations_pkey', ['id'], { unique: true })
@Index('reservations_qr_code_data_key', ['qrCodeData'], { unique: true })
@Entity('reservations', { schema: 'public' })
export class Reservations {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('text', { name: 'qr_code_data', unique: true })
  qrCodeData: string;

  @OneToMany(
    () => ReservationStatuses,
    (reservationStatuses) => reservationStatuses.reservation,
  )
  reservationStatuses: ReservationStatuses[];

  @ManyToOne(() => Spaces, (spaces) => spaces.reservations)
  @JoinColumn([{ name: 'space_id', referencedColumnName: 'id' }])
  space: Spaces;

  @ManyToOne(() => Users, (users) => users.reservations)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;
}
