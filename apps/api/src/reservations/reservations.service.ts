import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
import { SpacesService } from '../spaces/spaces.service';
import { UsersService } from '../users/users.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import * as crypto from 'crypto';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
    private readonly userService: UsersService,
    private readonly spaceService: SpacesService,
  ) {}

  async create(createReservationDto: CreateReservationDto) {
    const user = await this.userService.findOneByIdentification(
      createReservationDto.identification,
    );

    if (!user) {
      throw new BadRequestException(
        `User with identification ${createReservationDto.identification} does not exist.`,
      );
    }

    const space = await this.spaceService.findOne(createReservationDto.spaceId);

    if (!space) {
      throw new BadRequestException(
        `Space with ID ${createReservationDto.spaceId} does not exist.`,
      );
    }
    const totalAttendees =
      1 + (createReservationDto.guestsIdentifications?.length || 0);

    if (totalAttendees > space.capacity) {
      throw new BadRequestException(
        `The space "${space.name}" has not enough capacity for ${totalAttendees} attendees.`,
      );
    }

    const { identification, spaceId, reservationDate, startTime, endTime } =
      createReservationDto;

    const rawData = `${identification}-${spaceId}-${reservationDate}-${startTime}-${endTime}`;

    const qrCodeData = crypto
      .createHash('sha256')
      .update(rawData)
      .digest('hex')
      .slice(0, 16);

    const reservation = this.reservationRepository.create({
      userId: user.id,
      spaceId: createReservationDto.spaceId,
      reservationDate: createReservationDto.reservationDate,
      startTime: createReservationDto.startTime,
      endTime: createReservationDto.endTime,
      qrCodeData,
    });

    await this.reservationRepository.save(reservation);
    return reservation;
  }

  async findOne(id: number): Promise<Reservation | null> {
    return await this.reservationRepository.findOne({
      where: { id },
      relations: ['user', 'space', 'guests'],
    });
  }

  async update(
    id: number,
    updateReservationDto: UpdateReservationDto,
  ): Promise<Reservation> {
    await this.reservationRepository.update(id, updateReservationDto);
    const updatedReservation = await this.findOne(id);
    if (!updatedReservation) {
      throw new BadRequestException(`Reservation with ID ${id} not found`);
    }
    return updatedReservation;
  }

  async remove(id: number): Promise<void> {
    await this.reservationRepository.delete(id);
  }

  generateQRCode() {
    return 'QR_CODE_DATA';
  }
}
