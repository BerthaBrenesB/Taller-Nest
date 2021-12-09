import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppRepository } from './catalogo/app.repository';

@Injectable()
export class AppService {
  constructor(
  ){}
  getHello(): string {
    return 'Hello World!';
  }
 
}
