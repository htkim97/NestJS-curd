import { IsNotEmpty,IsEmail, IsNumber, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
export class usageDto {
  @IsNotEmpty()
  @IsString()
  idx: number;

  @IsNotEmpty()
  @IsString()
  free_date: number;

  @IsNotEmpty()
  @IsEmail()
  basic_usage: number;

 
}
