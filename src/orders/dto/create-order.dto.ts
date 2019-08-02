import {IsDate, IsInt, IsString, IsBoolean, IsPhoneNumber} from "class-validator";
export class createOrderDto{
    @IsString()
    readonly id_user: string;
    @IsDate()
    readonly date_r: Date;
    @IsDate()
    readonly shipping_date: Date;
    @IsBoolean()
    readonly purchase_c: boolean;
    @IsString()
    readonly address: string;
    @IsPhoneNumber('CO')
    readonly cell_phone: string;
    @IsInt()
    readonly Total_to_pay: number;
}