import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { countryService } from './country.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { countryRepository } from './country.repository';
import { country } from './country.entity'

@Module({
  imports: [TypeOrmModule.forFeature([country])],
  controllers: [CountryController],
  providers: [countryService, countryRepository]
})


export class CountryModule {}
