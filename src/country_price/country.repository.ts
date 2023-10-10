import { countryDto } from './dto/country.dto';
import { DataSource, Repository } from 'typeorm';
import { country } from './country.entitiy';
// import { CustomRepository } from './typeorm-ex.decorator';
import { Injectable } from '@nestjs/common';
// import { BoardStatus } from './board-status.enum';

@Injectable()
export class countryRepository extends Repository<country> {
  constructor(private dataSource: DataSource) {
    super(country, dataSource.createEntityManager());
  }

  async createBoard(countryDto: countryDto): Promise<country> {
    const {
      wired,
      wireless,
     
    } = countryDto;

    const country = this.create({
      wired,
      wireless,
    
   
    });

    await this.save( country);

    return  country;
  }
}
