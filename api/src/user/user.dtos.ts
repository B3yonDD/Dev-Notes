import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class RegisteUserDTO {

    @IsNotEmpty()
    @IsString()
    nickname: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string; 

}