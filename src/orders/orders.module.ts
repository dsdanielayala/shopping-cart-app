import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { orderSchema } from './schemas/order.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Order', schema: orderSchema}]), ProductsModule ],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
