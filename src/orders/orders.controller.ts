import { Controller, Get, Res, HttpStatus, Body, Post, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Response, response } from 'express';
import { createOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService : OrdersService){}

    @Get()
    async listOrders(@Res() response: Response){
        const ListOrder = await this.ordersService.listOrders("5d4096e700db1021ecdfbd15");
        return response.status(HttpStatus.OK).json({ListOrder});
    }

    @Get('/:id')
    async findOrders(@Param('id') id:string,@Res() response : Response){
        const oneOrder = await this.ordersService.oneOrders(id);
        return response.status(HttpStatus.OK).json({ oneOrder })
    }

    @Post()
    async insertOrders(@Body() createOrdertDto : createOrderDto, @Res() response : Response){
        const createdOrder = await this.ordersService.createOrder(createOrdertDto);
        return response.status(HttpStatus.CREATED).json({ createdOrder });
    }
}