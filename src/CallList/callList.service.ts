import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './callList-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './create-board.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './callList.repositoty';
import { Board } from './callList.entity';
import { Between } from 'typeorm';
import { FindManyOptions } from 'typeorm';
import { Point_b } from '../point/point.entitiy';
import {pointDto} from '../point/dto/point.dto'
import { pointRepository } from '../point/point.repository';


@Injectable()
export class BoardsService {


  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
    // @InjectRepository(Point_b)
    // private readonly pointRepository: pointRepository,
  ) {}
  

  async getBoardById(idx: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({ idx });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${idx}`);
    }

    return found;
  }

  async getBoardByDateRange(
    startDate: string,
    endDate: string,
    status: string, // status 추가
  ): Promise<Board[]> {
    const dateRange = {
      regi_date: Between(new Date(startDate), new Date(endDate)),
    };

    if (status === 'active') {
      dateRange['status'] = 'active';
    } else if (status === 'disabled') {
      dateRange['status'] = 'disabled';
    }

    return this.boardRepository.find({
      where: dateRange,
    });
  }

  // createBoard(
  //   createBoardDto: CreateBoardDto
  //   ): Promise<Board> {
  //   return this.boardRepository.createBoard(createBoardDto);
  // }

  // async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
  //   return this.boardRepository.createBoard(createBoardDto);
  // }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const board = new Board();
    board.office_name = createBoardDto.office_name;
    board.tel_one = createBoardDto.tel_one;
    board.email = createBoardDto.email;
    board.address = createBoardDto.address;
    board.tel_two = createBoardDto.tel_two;
    board.user_name = createBoardDto.user_name;
    board.password = createBoardDto.password;
    board.status = createBoardDto.status;

    return this.boardRepository.save(board);
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    console.log(result);
  }


  // async getAllBoards(): Promise<Board[]> {
  //   return this.boardRepository.find();
  // }

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }
  
  async getActiveBoards(): Promise<Board[]> {
    const options: FindManyOptions<Board> = {
      where: {
        status: 'active',
      },
    };
    return this.boardRepository.find(options);
  }
  
  async getDisabledBoards(): Promise<Board[]> {
    const options: FindManyOptions<Board> = {
      where: {
        status: 'disabled',
      },
    };
    return this.boardRepository.find(options);
  }

async updateBoard(idx: number, createBoardDto: CreateBoardDto): Promise<Board> {
  const board = await this.boardRepository.findOneBy({idx}); // findOneBy 대신 findOne 사용

  if (!board) {
    throw new NotFoundException(`Board with id ${idx} not found`);
  }

  if (createBoardDto.user_name) {
    board.user_name = createBoardDto.user_name;
  }
  if (createBoardDto.tel_one) {
    board.tel_one = createBoardDto.tel_one;
  }
  // if (createBoardDto.point) {
  //   board.point = createBoardDto.point;
  // }
  // if (createBoardDto.usage) {
  //   board.usage = createBoardDto.usage;
  // }
  if (createBoardDto.email) {
    board.email = createBoardDto.email;
  }
  if (createBoardDto.address) {
    board.address = createBoardDto.address;
  }
  if (createBoardDto.tel_two) {
    board.tel_two = createBoardDto.tel_two;
  }
  if (createBoardDto.office_name) {
    board.office_name = createBoardDto.office_name;
  }
  if (createBoardDto.password) {
    board.password = createBoardDto.password;
  }
 

  // 변경사항 저장
  await this.boardRepository.save(board);
  return board;
}




// 포인트,가격 수정///

// async updatePoint(idx: number, pointDto: pointDto): Promise<Point_b> {

//   const point_b = await this.pointRepository.findOneBy({idx});

//   if (!point_b) {
//     throw new NotFoundException(`Entity with id ${idx} not found`);
//   }


//   if (pointDto.price !== undefined) {
//     point_b.price = pointDto.price;
//   }
//   if (pointDto.point !== undefined) {
//     point_b.point = pointDto.point;
//   }


//   await this.pointRepository.save(point_b);

//   return point_b;
// }


// 포인트,가격 전체 불러오기

// async getAllPoint(): Promise<Point_b[]> {
//   return this.pointRepository.find();
// }



  /* 
    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto) {
        const { title, description } = createBoardDto;
        const board: Board = {
            id: uuid(),
            title: title,
            description: description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board)
        return board;
    }

    getBoardById(id : string): Board {
        return this.boards.find((board) => board.id === id);
    }

    deleteBoard(id: string): void {
        const found = this.getBoardById(id);
        this.boards = this.boards.filter((board) => board.id !== found.id)
    }

    updateBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);

        board.status = status;

        return board;
    } */
}
