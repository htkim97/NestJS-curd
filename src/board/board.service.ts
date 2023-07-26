import { Injectable } from '@nestjs/common';
import {Board} from './board.model';

@Injectable()
export class BoardService {
  // 다른 컴포넌트에서 boards 배열을 수정하는걸 차단하기 위해 private를 사용
  private boards:Board[] = [];

  getAllBoard():Board[] {
    return this.boards;
  }
}
