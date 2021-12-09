import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiNotFoundResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ArticuloDTO } from 'src/dtos/catalogo.dto';
import { CatalogoService } from './catalogo.service';

@ApiTags('request catalogo')
@Controller('catalogo')
export class CatalogoController {
    constructor(private catalogoService:CatalogoService){}


    @Get()
    @ApiOperation({ summary: 'Devuelve solamente el nombre y el id del postulante' })
    @ApiResponse({ status: 200, type: Object })
    async obtenerArticulos(){
      return await this.catalogoService.obtenerTodo();
    }

    @Get('/:id')
    @ApiQuery({ name: 'Postulant', type: Object })
    @ApiParam({ name: 'postulantId' })
    @ApiNotFoundResponse({ description: 'No se encuentra el postulante' })
    obtenerOne(@Param('id') id:string){
      return this.catalogoService.obtenerUnArticulo(id)
    }
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ required: true, type: ArticuloDTO })
    agregar(@Body() req: ArticuloDTO){
      return this.catalogoService.agregarUnArticulo(req);
    }
  
    @Patch('/:id')
    @UsePipes(ValidationPipe)
    editar(@Param('id') id: string,@Req() req: any){
      return this.catalogoService.editarUnArticulo(id,{});
    }
  
    @Delete('/:id')
    eliminar(@Param('id') id:string){
      return this.catalogoService.eliminarArticulo(id);
    }
}
