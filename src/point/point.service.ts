import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Between } from 'typeorm';
import { FindManyOptions } from 'typeorm';
import { Point_b } from '../point/point.entitiy';
import {pointDto} from '../point/dto/point.dto'
import { pointRepository } from '../point/point.repository';


@Injectable()
export class pointService {


  constructor(
    @InjectRepository(Point_b)
    private readonly pointRepository: pointRepository,
  ) {}
  



// 포인트,가격 수정///

async updatePoint(idx: number, pointDto: pointDto): Promise<Point_b> {

  const point_b = await this.pointRepository.findOneBy({idx});

  if (!point_b) {
    throw new NotFoundException(`Entity with id ${idx} not found`);
  }


  if (pointDto.price !== undefined) {
    point_b.price = pointDto.price;
  }
  if (pointDto.point !== undefined) {
    point_b.point = pointDto.point;
  }


  await this.pointRepository.save(point_b);

  return point_b;
}


// 포인트,가격 전체 불러오기

async getAllPoint(): Promise<Point_b[]> {
  return this.pointRepository.find();
}


}
