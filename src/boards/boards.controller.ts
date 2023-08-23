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
  ParseIntPipe
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entitiy';


@Controller('users')
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
  @Post('/:num/:office/:point/:usage/:email/:address/:emer_num/:name/:pwd')
  @UsePipes(ValidationPipe)
  createBoard(
    @Param() CreateBoardDto: CreateBoardDto
    ): Promise<Board> {
    return this.boardsService.createBoard(CreateBoardDto);
  }


  // 해당 id 객체 삭제하기
  @Delete('/:id')
  deleteBoard(@Param('id') id: number): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }
  
  // @Post('/:id')
  // async updateBoard(
  //   @Param('id') id: number,
  //   @Body() createBoardDto: CreateBoardDto,
  // ) {
  //   return this.boardsService.updateBoard(id, createBoardDto);
  // }


  @Patch('/:id')
  updateBoard(
    @Param('id') id: number, 
    @Query() createBoardDto: CreateBoardDto
  ) {
    return this.boardsService.updateBoard(id, createBoardDto);
  }





  /* 
    
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
