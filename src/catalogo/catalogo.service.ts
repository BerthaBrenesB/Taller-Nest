import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticuloDTO } from 'src/dtos/catalogo.dto';
import { AppRepository } from './app.repository';

@Injectable()
export class CatalogoService {
    constructor(
        @InjectRepository(AppRepository)
        private repository: AppRepository
    ) { }
    async obtenerTodo() {
        console.log('ask get')
        let response = this.repository.find({});
        return await response;
    }
    obtenerUnArticulo(id: string) {
        return { id: id };
    }

    async agregarUnArticulo(data: ArticuloDTO) {
        const news = await this.repository.createArticulo(data);
        console.log(news);
        return 'agregado';

    }
    editarUnArticulo(id: string, data: object) {
        return 'editado'
    }
    eliminarArticulo(id: string) {
        return 'eliminado';
    }
}
