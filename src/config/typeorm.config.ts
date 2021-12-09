import {TypeOrmModuleOptions} from '@nestjs/typeorm';
/**
 * File with the configuration to the database
 */
export const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'mongodb',
    //host: '127.0.0.1',
    host: '172.17.0.1',
    port: 27018,
    database: "sesion3",
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    useUnifiedTopology: true
}