import { Injectable } from '@nestjs/common';

@Injectable()//Decorador
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
