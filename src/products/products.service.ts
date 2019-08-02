import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './interface/product.interface';
import { InjectModel } from '@nestjs/mongoose';
import { createProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

  async create(createProductDto: createProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return await createdProduct.save();
  }

  async findAll(): Promise<Product[]>{
    return await this.productModel.find({ active: true });
}

async findOne(id:string): Promise<Product>{
    return await this.productModel.findById(id);
}

async update(id:string,createProductDto: createProductDto): Promise<Product>{
    const updateProduct =  await this.findOne(id);
    return await updateProduct.update(createProductDto);
}

async delete(id:string): Promise<Product>{
    const deleteProduct =  await this.productModel.findById(id);
    return await deleteProduct.remove();
}
}
