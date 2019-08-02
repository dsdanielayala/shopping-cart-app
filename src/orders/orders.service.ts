import { Injectable } from '@nestjs/common';
import { Order } from './interface/order.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrdersService {
    constructor(@InjectModel('Order')  private readonly  orderModel: Model<Order>){}

    listOrders(id: string): Promise<Order[]>{
        this.orderModel.findById(id);
        return 
    }

}
