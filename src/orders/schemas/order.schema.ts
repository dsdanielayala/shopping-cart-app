import { Schema } from "mongoose";

export const orderSchema = new Schema({
    idUser: {
        type: String,
        required: true
    },
    dateR: {
        type: Date,
        default: Date.now,
    },
    products:{
        type: Array,
        required: true
    },
    shippingDate: {
        type: Date,
        default: Date.now
    },
    purchaseC: {
        type: Boolean,
        required: true,
        default: false
    },
    address: {
        type: String,
        required: true
    },
    cellPhone: {
        type: String,
        required: true
    },
    TotalToPay: {
        type: Number,
        required: true,
    }
})