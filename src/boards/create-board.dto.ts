import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBoardDto {
  @IsNumber()
  idx: number;
  @IsNotEmpty()
  user_name: string;
  @IsNotEmpty()
  tel_one: string;
  @IsNotEmpty()
  created_at: string;
  @IsNotEmpty()
  update_at: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  tel_two: string;
  @IsNotEmpty()
  office_name: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  regi_date: string;
  @IsNotEmpty()
  last_call_time: string;
  @IsNotEmpty()
  user_no: string;
  @IsNotEmpty()
  recentlyLoginTime: string;
  

}
