import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class appEntity extends BaseEntity{
    @ObjectIdColumn()
    id:string;
    @Column()
    fecha: Date;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;
    @Column()
    precio: number;
    @Column()
    lugar: string[];
}