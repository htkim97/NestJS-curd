import { Module } from '@nestjs/common';
import { PointController } from './point.controller';
import { pointService } from './point.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pointRepository } from './point.repository';
import { Point_b } from '../point/point.entitiy'; // Point_b 엔터티를 가져옴

@Module({
  imports: [TypeOrmModule.forFeature([Point_b])],
  controllers: [PointController],
  providers: [pointService, pointRepository]
})


export class PointModule {}
