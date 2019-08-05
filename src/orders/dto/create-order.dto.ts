import {IsInt, IsString, IsBoolean, IsPhoneNumber} from "class-validator";
import { Product } from "../../products/interface/product.interface";
import { User } from "../../users/interface/user.interface";
export class createOrderDto{
    readonly User: User;
    readonly dateR: Date;
    readonly products: Product[];
    readonly shippingDate: Date;
    @IsBoolean()
    readonly purchaseC: boolean;
    @IsString()
    readonly address: string;
    @IsPhoneNumber('CO')
    readonly cellPhone: string;
    TotalToPay: number;
}