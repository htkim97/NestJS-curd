import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { country } from './country.entitiy';
import {countryDto} from './dto/country.dto'
import { countryRepository } from './country.repository';


@Injectable()
export class countryService {


  constructor(
    @InjectRepository(country)
    private readonly countryRepository: countryRepository,
  ) {}
  



// 나라별 가격 수정///

async updateCountry(idx: number, countryDto: countryDto): Promise<country> {

  const country = await this.countryRepository.findOneBy({idx});

  if (!country) {
    throw new NotFoundException(`Entity with id ${idx} not found`);
  }


  if (countryDto.wired !== undefined) {
    country.wired = countryDto.wired;
  }
  if (countryDto.wireless !== undefined) {
    country.wireless = countryDto.wireless;
  }


  await this.countryRepository.save(country);

  return country;
}


// 나라별 가격 전체 불러오기

async getAllCountry(): Promise<country[]> {
  return this.countryRepository.find();
}


}
