import { Module } from '@nestjs/common';
import { BoardsController } from './callList.controller';
import { BoardsService } from './callList.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './callList.repositoty';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository])],
  controllers: [BoardsController],
  providers: [BoardsService, BoardRepository]
})


export class BoardsModule {}
