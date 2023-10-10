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
  import { countryService } from './country.service';
  import { countryDto } from './dto/country.dto';
  import { country } from './country.entitiy';
  
  
  @Controller('users')
  export class CountryController {
    constructor(private countryService: countryService) {}
  

  
    // 포인트 수정
  
    @Patch('/country/:idx')
    updatePoint(
      @Param('idx') idx: number, 
      @Query()  countryDto: countryDto 
    ) {
      return this.countryService.updateCountry(idx, countryDto);
    }
  
    
    // 전체 가져오기
    @Get('/country')
    getAllPoint(): Promise<country[]> {
      return this.countryService.getAllCountry();
    }
  
  
  
  }
  
  
  function GetUser() {
    throw new Error('Function not implemented.');
  }
  
  