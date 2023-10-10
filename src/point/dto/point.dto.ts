import { IsNotEmpty,IsEmail, IsNumber, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
export class pointDto {
  @IsNotEmpty()
  @IsString()
  idx: number;

  @IsNotEmpty()
  @IsString()
  price: number;

  @IsNotEmpty()
  @IsEmail()
  point: number;

 
}
