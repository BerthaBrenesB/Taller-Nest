import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ArticuloDTO } from './dtos/catalogo.dto';

@ApiTags('request catalogo')
@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('hello/:id/:id2/:id3')
  getHelloparam(@Param() id:string,@Param('id2') id2:string): string {
    console.log(id)
    return this.appService.getHello();
  }
 

}
