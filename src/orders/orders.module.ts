import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { orderSchema } from './schemas/order.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Order', schema: orderSchema}])],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
