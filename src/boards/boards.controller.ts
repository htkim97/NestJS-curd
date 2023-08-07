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
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entitiy';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // 전체 중 id로 객체 가져오기
  // @Get('/:id')
  // getBoardById(@Param('id') id: number): Promise<Board> {
  //   return this.boardsService.getBoardById(id);
  // }

  // 날짜 사이의 게시물 검색
  @Get('/date/:startDate/:endDate')
  getBoardByDateRange(
    @Param('startDate') startDate: string,
    @Param('endDate') endDate: string,
  ): Promise<Board[]> {
    return this.boardsService.getBoardByDateRange(startDate, endDate);
  }

  //전체 가져오기
  @Get('/date')
  getAllBoard(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }
  // 등록하기
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(CreateBoardDto);
  }
  // 해당 id 객체 삭제하기
  @Delete('/:id')
  deleteBoard(@Param('id') id: number): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }
  // 업데이트
  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: number,
    @Body('status') status: BoardStatus,
  ): Promise<Board> {
    return this.boardsService.updateBoardStatus(id, status);
  }
  /*     @Get('/')
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }
    
    @Post()
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() createBoardDto: CreateBoardDto
        ): Board{
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board{
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ){
        return this.boardsService.updateBoardStatus(id, status);
    } */
}
