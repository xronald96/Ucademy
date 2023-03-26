import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @IsOptional()
  lastname: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(9)
  phone: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class GetUsersDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsOptional()
  page: number;
}
