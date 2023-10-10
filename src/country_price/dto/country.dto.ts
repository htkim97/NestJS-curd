import { IsNotEmpty,IsEmail, IsNumber, IsString } from 'class-validator';
export class countryDto {
  @IsNotEmpty()
  @IsString()
  idx: number;

  @IsNotEmpty()
  @IsString()
  wired: number;

  @IsNotEmpty()
  @IsEmail()
  wireless: number;
  

 
}
