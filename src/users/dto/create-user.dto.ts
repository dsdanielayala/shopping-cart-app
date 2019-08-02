import {IsDate, IsString, IsBoolean, IsEmail, IsPhoneNumber} from "class-validator";
export class createUserDto{
    @IsString()
    readonly name: string;
    @IsEmail()
    readonly email: string;
    @IsString()
    readonly password: string;
    @IsBoolean()
    readonly active: boolean;
    @IsString()
    readonly address: string;
    @IsPhoneNumber('CO')
    readonly phone: string;
    @IsDate()
    readonly createdAt: Date;
}