import { Document } from "mongoose";

export interface Product extends Document {
    readonly name: string;
    readonly description: string;
    readonly prince: number;
    readonly active: boolean;
    readonly available: number;
    readonly createdAt: Date;
}