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
import { BoardsService } from './callList.service';
import { BoardStatus } from './callList-status.enum';
import { CreateBoardDto } from './create-board.dto';
import { pointDto } from '../point/dto/point.dto';
import { BoardStatusValidationPipe } from './pipes/callList-status-validation.pipe';
import { Board } from './callList.entity';
import { Point_b } from '../point/point.entitiy';


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
    @Query('status') status: string,
  ): Promise<Board[]> {
    return this.boardsService.getBoardByDateRange(startDate, endDate, status);
  }

  // 전체 가져오기
  // @Get('/date')
  // getAllBoard(): Promise<Board[]> {
  //   return this.boardsService.getAllBoards();
  // }

  @Get('/date')
  getAllBoard(@Query('status') status: string): Promise<Board[]> {
    if (status === 'active') {
      return this.boardsService.getActiveBoards();
    } else if (status === 'disabled') {
      return this.boardsService.getDisabledBoards();
    } else {
      return this.boardsService.getAllBoards();
    }
  }

 // 추가  
  @Post("/:office_name/:tel_one/:email/:address/:tel_two/:user_name/:password/:status")
  @UsePipes(ValidationPipe)
  createBoard(
    @Param() createBoardDto: CreateBoardDto
    ): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }
  

  // 해당 id 객체 삭제하기
  @Delete('/:idx')
  deleteBoard(@Param('idx') idx: number): Promise<void> {
    return this.boardsService.deleteBoard(idx);
  }
    

  // 회원관리 수정

  @Patch('/:idx')
  updateBoard(
    @Param('idx') idx: number, 
    @Query() createBoardDto: CreateBoardDto
  ) {
    return this.boardsService.updateBoard(idx, createBoardDto);
  }


  // // 포인트 수정

  // @Patch('/point/:idx')
  // updatePoint(
  //   @Param('idx') idx: number, 
  //   @Query() pointDto:  pointDto
  // ) {
  //   return this.boardsService.updatePoint(idx, pointDto);
  // }

  
  // // 전체 가져오기
  // @Get('/point')
  // getAllPoint(): Promise<Point_b[]> {
  //   return this.boardsService.getAllPoint();
  // }



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


function GetUser() {
  throw new Error('Function not implemented.');
}

