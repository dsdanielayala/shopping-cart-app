import {IsDate, IsInt, IsString, IsBoolean, IsPhoneNumber} from "class-validator";
import { Product } from "src/products/interface/product.interface";
export class createOrderDto{
    @IsString()
    readonly idUser: string;
    readonly dateR: Date;
    readonly products: Product[];
    readonly shippingDate: Date;
    @IsBoolean()
    readonly purchaseC: boolean;
    @IsString()
    readonly address: string;
    @IsPhoneNumber('CO')
    readonly cellPhone: string;
    @IsInt()
    readonly TotalToPay: number;
}