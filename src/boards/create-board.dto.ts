import { IsNotEmpty, IsString  } from "class-validator";

export class CreateBoardDto {
    @IsString()
    name: string;
    @IsNotEmpty()
    num: string;
    @IsNotEmpty()
    point: string;
    @IsNotEmpty()
    usage: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    address: string;
    @IsNotEmpty()
    emer_num: string;
    @IsNotEmpty()
    date: string;
    @IsNotEmpty()
    pwd: string;


}