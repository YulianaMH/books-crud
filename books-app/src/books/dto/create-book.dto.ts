import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum StatusType {
  IN_STOCKE = 'In Stock',
  OUT_OF_STOCK = 'Out of Stock',
}

export class CreateBookDto {
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
