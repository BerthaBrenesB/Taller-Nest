import { ArticuloDTO } from "src/dtos/catalogo.dto";
import { EntityRepository, MongoRepository } from "typeorm";
import { appEntity } from "./app.entity";

@EntityRepository(appEntity)
export class AppRepository extends MongoRepository<appEntity>{
    async createArticulo(data: ArticuloDTO){
        const {descripcion, fecha,lugar,nombre,precio} = data;
        const articulo = new appEntity();
        articulo.descripcion = descripcion;
        articulo.fecha = fecha;
        articulo.precio = precio;
        articulo.lugar = lugar;
        articulo.nombre = nombre;
        return await articulo.save();
    }
}