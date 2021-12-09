import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppRepository } from './app.repository';
import { CatalogoController } from './catalogo.controller';
import { CatalogoService } from './catalogo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AppRepository])
  ],
  controllers: [CatalogoController],
  providers: [CatalogoService]
})
export class CatalogoModule {}
