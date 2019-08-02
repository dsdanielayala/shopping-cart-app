import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly  userModel: Model<User>){}

    async create(createUserDto: createUserDto): Promise<User>{
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async findAll(): Promise<User[]>{
        return await this.userModel.find({ active: true });
    }

    async findOne(id:string): Promise<User>{
        return await this.userModel.findById(id);
    }

    async update(id:string,createUserDto: createUserDto): Promise<User>{
        const updateUser =  await this.userModel.findById(id);
        return await updateUser.update(createUserDto);
    }

    async delete(id:string): Promise<User>{
        const deleteUser =  await this.userModel.findById(id);
        return await deleteUser.remove();
    }
}
