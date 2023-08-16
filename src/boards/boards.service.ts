import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repositoty';
import { Board } from './board.entitiy';
import { Between } from 'typeorm';




@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
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
  ): Promise<Board[]> {
    return this.boardRepository.find({
      where: {
        regi_date: Between(new Date(startDate), new Date(endDate)),
      },
    });
  }

  createBoard(
    createBoardDto: CreateBoardDto
    ): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }


  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    console.log(result);
  }


  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
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
  if (createBoardDto.last_call_time) {
    board.last_call_time = createBoardDto.last_call_time;
  }


  // 변경사항 저장
  await this.boardRepository.save(board);
  return board;
}




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
