import { Document } from "mongoose";
import { Product } from "src/products/interface/product.interface";

export interface Order extends Document{
    readonly id_user: string;
    readonly date_r: Date;
    readonly shipping_date: Date;
    readonly purchase_c: boolean;
    readonly address: string;
    readonly cell_phone: string;
    readonly Total_to_pay: number;
}