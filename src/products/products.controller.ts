import { Controller, Get, Res, HttpStatus, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { async } from 'rxjs/internal/scheduler/async';
import { Response } from 'express';
import { createProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService : ProductsService){}

    @Get()
    async findAll(@Res() response: Response) {
        const producto = await this.productService.findAll();
        return response.status(HttpStatus.OK).json({ producto });
    }

    @Get('/:id')
    async findOne(@Param() params, @Res() response: Response){
        const id = params.id;
        const product = await this.productService.findOne(id);
        return response.status(HttpStatus.OK).json({product});
    }

    @Post()
    async Create(@Body() createProductDto: createProductDto, @Res() response: Response) {
        const createdProduct = await this.productService.create(createProductDto);
        return response.status(HttpStatus.CREATED).json({ createdProduct })
    }

    @Put('/:id')
    async update(@Param('id') id:string, @Body() createProductDto: createProductDto, @Res() response: Response){
        const updatedProduct = await this.productService.update(id,createProductDto);
        return response.status(HttpStatus.OK).json({updatedProduct});
    }
    
    @Delete('/:id')
    async delete(@Param('id') id:string, @Res() response: Response){
        const deleteProduct = await this.productService.delete(id);
        return response.status(HttpStatus.OK).json({deleteProduct});
    }
}
