import { Controller, Get, Req, Res, HttpStatus, Post } from '@nestjs/common';
import { Request, Response} from 'express';

@Controller('users')
export class UsersController {
    @Get('/:id/:name')
    findAll(@Req() request: Request, @Res() response:Response): object{
        const id = request.params.id;
        const name = request.params.name;
        return response.status(HttpStatus.OK).json({id,name});
    }

    @Post()
    Create(@Req() request: Request, @Res() response: Response){
        const id = request.query.id;
        const name = request.query.name;
        return response.status(HttpStatus.CREATED).json({id,name});
    }
}
