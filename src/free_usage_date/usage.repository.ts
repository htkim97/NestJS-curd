import { usageDto } from './dto/usage.dto';
import { DataSource, Repository } from 'typeorm';
import { Usage } from './usage.entitiy';
// import { CustomRepository } from './typeorm-ex.decorator';
import { Injectable } from '@nestjs/common';
// import { BoardStatus } from './board-status.enum';

@Injectable()
export class usageRepository extends Repository<Usage> {
  constructor(private dataSource: DataSource) {
    super(Usage, dataSource.createEntityManager());
  }

  async createBoard(usageDto: usageDto): Promise<Usage> {
    const {
      free_date,
      basic_usage,
   

     
    } = usageDto;

    const usage = this.create({
      free_date,
      basic_usage,
    
    
   
    });

    await this.save(usage);

    return usage;
  }
}
