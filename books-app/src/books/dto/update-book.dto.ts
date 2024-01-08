import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto, StatusType } from './create-book.dto';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  editorial: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(StatusType)
  status: string;
}
