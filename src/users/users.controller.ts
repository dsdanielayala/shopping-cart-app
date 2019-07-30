import { Controller, Get, Req, Res, HttpStatus, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { identifier } from '@babel/types';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }//inyectando
    
    @Get()
    async findAll(@Res() response: Response) {
        const usuario = await this.usersService.findAll();
        return response.status(HttpStatus.OK).json({ usuario });
    }

    @Get('/:id')
    async findOne(@Param() params, @Res() response: Response){
        const id = params.id;
        const user = await this.usersService.findOne(id);
        return response.status(HttpStatus.OK).json({user});
    }

    @Post()
    async Create(@Body() createUserDto: createUserDto, @Res() response: Response) {
        const createdUser = await this.usersService.create(createUserDto);
        return response.status(HttpStatus.CREATED).json({ createdUser })
    }

    @Put('/:id')
    async update(@Param('id') id:string, @Body() createUserDto: createUserDto, @Res() response: Response){
        const updatedUser = await this.usersService.update(id,createUserDto);
        return response.status(HttpStatus.OK).json({updatedUser});
    }
    
    @Delete('/:id')
    async delete(@Param('id') id:string, @Res() response: Response){
        const deleteUser = await this.usersService.delete(id);
        return response.status(HttpStatus.OK).json({deleteUser});
    }
}
