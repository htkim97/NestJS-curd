import { CreateBoardDto } from './create-board.dto';
import { DataSource, Repository } from "typeorm";
import { Board } from "./board.entitiy";
import { CustomRepository } from "./typeorm-ex.decorator";
import { Injectable } from "@nestjs/common";
import { BoardStatus } from './board-status.enum';


@Injectable()
export class BoardRepository extends Repository<Board> {

    constructor(private dataSource: DataSource) {
        super(Board, dataSource.createEntityManager());
    }

    async createBoard(createBoardDto: CreateBoardDto): Promise<Board>{

        const {num,name,point,date,usage,email,address,emer_num,pwd} = createBoardDto;

        const board = this.create({
            name,
            num,
            date,
            usage,
            address,
            emer_num,
            email,
            point,
            pwd,
            status: BoardStatus.PUBLIC
        })

        await this.save(board);

        return board;
    }
}