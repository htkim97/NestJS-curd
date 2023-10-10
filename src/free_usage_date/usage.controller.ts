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
  import { usageService } from './usage.service';
  import { usageDto } from './dto/usage.dto';
  import { Usage } from './usage.entitiy';
  
  
  @Controller('users')
  export class UsageController {
    constructor(private usageService: usageService) {}
  

  
    // 사용량 수정
  
    @Patch('/usage/:idx')
    updateUsage(
      @Param('idx') idx: number, 
      @Query() usageDto:  usageDto
    ) {
      return this.usageService.updateUsage(idx, usageDto);
    }
  
    
    // 전체 가져오기
    @Get('/usage')
    getAllUsage(): Promise<Usage[]> {
      return this.usageService.getAllUsage();
    }
  
  
  
  }
  
  
  function GetUser() {
    throw new Error('Function not implemented.');
  }
  
  