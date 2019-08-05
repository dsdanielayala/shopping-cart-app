import { Injectable } from '@nestjs/common';
import { Order } from './interface/order.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { createOrderDto } from './dto/create-order.dto';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
    constructor(
        private readonly productsService: ProductsService,
        @InjectModel('Order') private readonly orderModel: Model<Order>
    ) { }

    async listOrders(id: string): Promise<Order[]> {
        return await this.orderModel.find({ idUser: id });
    }

    async oneOrders(id: string): Promise<Order> {
        return await this.orderModel.findById(id);
    }

    async createOrder(createOrderDto: createOrderDto): Promise<Order> {
        try {
            const order = new this.orderModel(createOrderDto);
            return await order.save();
        } catch (error) {
            console.log(error);
        }
    }
}
