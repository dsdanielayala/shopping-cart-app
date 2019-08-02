import { Document } from "mongoose";
import { Product } from "src/products/interface/product.interface";

interface ProductOrder {
    product: Product;
    quantity: number;
}

export interface Order extends Document{
    readonly idUser: string;
    readonly dateR: Date;
    readonly products: {
        _id: string;
        quantity: number;
      }[];
    readonly shippingDate: Date;
    readonly purchaseC: boolean;
    readonly address: string;
    readonly cellPhone: string;
    readonly TotalToPay: number;
}