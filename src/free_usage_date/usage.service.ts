import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Between } from 'typeorm';
import { FindManyOptions } from 'typeorm';
import { Usage } from './usage.entity';
import {usageDto} from './dto/usage.dto'
import { usageRepository } from './usage.repository';


@Injectable()
export class usageService {


  constructor(
    @InjectRepository(Usage)
    private readonly usageRepository: usageRepository,
  ) {}
  



// 포인트,가격 수정///

async updateUsage(idx: number, usageDto: usageDto): Promise<Usage> {

  const usage = await this.usageRepository.findOneBy({idx});

  if (!usage) {
    throw new NotFoundException(`Entity with id ${idx} not found`);
  }
  if (usageDto.free_date !== undefined) {
    usage.free_date = usageDto.free_date;
  }
  if (usageDto.basic_usage !== undefined) {
    usage.basic_usage = usageDto.basic_usage;
  }


  await this.usageRepository.save(usage);

  return usage;
}


// 포인트,가격 전체 불러오기

async getAllUsage(): Promise<Usage[]> {
  return this.usageRepository.find();
}


}
