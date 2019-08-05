import { Document } from "mongoose";
import { Product } from "../../products/interface/product.interface";
import { User } from "../../users/interface/user.interface";

export interface Order extends Document {
    readonly User: User;
    readonly dateR: Date;
    readonly products: Product[];
    readonly shippingDate: Date;
    readonly purchaseC: boolean;
    readonly address: string;
    readonly cellPhone: string;
    readonly TotalToPay: number;
}