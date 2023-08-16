import { TypeOrmModuleOptions } from "@nestjs/typeorm";


// export const typeORMConfig : TypeOrmModuleOptions = {
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: '7753159jK@#',
//     database: 'board-app',
//     entities: [__dirname + '/../**/*.entitiy.{js,ts}'],
//     synchronize: true
  
// }



export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'cc.intelloid.click',
    port: 3306,
    username: 'intelloid',
    password: 'itld2010',
    database: 'bizphone_dev',
    entities: [__dirname + '/../**/*.entitiy.{js,ts}'],
    synchronize: false,
    migrationsTableName: "migrations",
    migrations:['src/database/migrations/*{.ts,.js}'],
  
     
  
}