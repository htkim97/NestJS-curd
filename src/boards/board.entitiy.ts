import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board-status.enum';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  num: string;

  @Column()
  date: string;
  @Column()
  point: string;
  @Column()
  usage: string;
  @Column()
  email: string;
  @Column()
  address: string;
  @Column()
  emer_num: string;

  @Column()
  name: string;

  @Column()
  pwd:string;

  @Column()
  status: BoardStatus;
}
