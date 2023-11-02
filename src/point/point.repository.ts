import { pointDto } from './dto/point.dto';
import { DataSource, Repository } from 'typeorm';
import { Point_b } from './point.entitiy';
// import { CustomRepository } from './typeorm-ex.decorator';
import { Injectable } from '@nestjs/common';
// import { BoardStatus } from './board-status.enum';

@Injectable()
export class pointRepository extends Repository<Point_b> {
  constructor(private dataSource: DataSource) {
    super(Point_b, dataSource.createEntityManager());
  }

  async modify_point(pointDto: pointDto): Promise<Point_b> {
    const {
      price,
      point,
   

     
    } = pointDto;

    const point_b = this.create({
      price,
      point,
    
    
   
    });

    await this.save(point_b);

    return point_b;
  }
}
