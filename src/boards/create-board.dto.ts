import { IsNotEmpty,IsEmail, IsNumber, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
export class CreateBoardDto {
  @IsNotEmpty()
  @IsString()
  office_name: string;

  @IsNotEmpty()
  @IsString()
  tel_one: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  tel_two: string;

  @IsNotEmpty()
  @IsString()
  user_name: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  status: string;
  

  // @IsNotEmpty()
  // regi_date: string = new Date().toISOString();
  // last_call_time: string;
  // user_no: string;
  // recentlyLoginTime: string;
  // updated_at:string= new Date().toISOString();
}
