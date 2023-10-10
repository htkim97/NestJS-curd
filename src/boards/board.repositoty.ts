import { CreateBoardDto } from './create-board.dto';
import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entitiy';
import { CustomRepository } from './typeorm-ex.decorator';
import { Injectable } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const {
      tel_one,
      user_name,
      email,
      address,
      tel_two,
      password,
      office_name
      
      // last_call_time,
      // regi_date,
     
    } = createBoardDto;

    const board = this.create({
      user_name,
      tel_one,
      office_name,
      address,
      tel_two,
      email,
      password,
      status: BoardStatus.PUBLIC,
      // last_call_time,
      // regi_date,
    
   
    });

    await this.save(board);

    return board;
  }
}
