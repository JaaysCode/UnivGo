import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Reservations } from './Reservations';

@Index('reservation_statuses_pkey', ['id'], { unique: true })
@Entity('reservation_statuses', { schema: 'public' })
export class ReservationStatuses {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('boolean', { name: 'status' })
  status: boolean;

  @ManyToOne(
    () => Reservations,
    (reservations) => reservations.reservationStatuses,
  )
  @JoinColumn([{ name: 'reservation_id', referencedColumnName: 'id' }])
  reservation: Reservations;
}
