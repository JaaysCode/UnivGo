import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class SignInDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  identification: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password: string;
}
