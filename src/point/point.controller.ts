import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Patch,
    UsePipes,
    ValidationPipe,
    Query,
    ParseIntPipe,
  } from '@nestjs/common';
  import { pointService } from './point.service';
  import { pointDto } from './dto/point.dto';
  import { Point_b } from './point.entitiy';
  
  
  @Controller('users')
  export class PointController {
    constructor(private pointService: pointService) {}
  

  
    // 포인트 수정
  
    @Patch('/point/:idx')
    updatePoint(
      @Param('idx') idx: number, 
      @Query() pointDto:  pointDto
    ) {
      return this.pointService.updatePoint(idx, pointDto);
    }
  
    
    // 전체 가져오기
    @Get('/point')
    getAllPoint(): Promise<Point_b[]> {
      return this.pointService.getAllPoint();
    }
  
  
  
  }
  
  
  function GetUser() {
    throw new Error('Function not implemented.');
  }
  
  