import { Schema } from "mongoose";

export const orderSchema = new Schema({
    id_user: {
        type: String,
        required: true
    },
    date_r: {
        type: Date,
        default: Date.now,
        required: true
    },
    shipping_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    purchase_c: {
        type: Boolean,
        required: true,
        default: false
    },
    address: {
        type: String,
        required: true
    },
    cell_phone: {
        type: String,
        required: true
    },
    Total_to_pay: {
        type: Number,
        required: true,
    }
})