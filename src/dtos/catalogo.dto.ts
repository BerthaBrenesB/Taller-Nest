import { IsNotEmpty, IsOptional, IsEnum, ValidateNested, IsString, IsNumber } from 'class-validator';

export class ArticuloDTO{
    @IsNotEmpty()
    fecha: Date;
    @IsString()
    @IsNotEmpty()
    nombre: string;
    @IsString()
    @IsNotEmpty()
    descripcion: string;
    @IsNumber()
    @IsNotEmpty()
    precio: number;
    @IsOptional()
    lugar: string[];
}