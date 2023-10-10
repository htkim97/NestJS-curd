import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PointModule } from './point/point.module';
import { CountryModule } from './country_price/country.module';
import {UsageModule} from './free_usage_date/usage.module'


@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    UsageModule,
    BoardsModule,
    PointModule,
    CountryModule,
    AuthModule],
})
export class AppModule {}
