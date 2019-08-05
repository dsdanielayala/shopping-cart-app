import {IsDate, IsInt, IsString} from "class-validator";

export class createProductDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly description: string;
    @IsInt()
    readonly price: number;
    readonly active: boolean;
    @IsInt()
    readonly available: number;
    readonly createdAt: Date;
}