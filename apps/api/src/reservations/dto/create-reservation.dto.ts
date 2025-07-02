import { Transform } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  identification: string;

  @IsInt()
  @Transform(({ value }) => parseInt(value as string, 10))
  spaceId: number;

  @IsDateString()
  reservationDate: string;

  @IsString()
  @IsNotEmpty()
  startTime: string;

  @IsString()
  @IsNotEmpty()
  endTime: string;

  @IsArray()
  @IsOptional()
  @ArrayMaxSize(40)
  @IsString({ each: true })
  guestsIdentifications?: string[];
}
