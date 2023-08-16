import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board-status.enum';

@Entity({ name: 'users'})
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;
  @Column()
  tel_one: string;
  @Column({ type: 'date' })
  regi_date: Date;
  @Column()
  // point: string;
  // @Column()
  office_name: string;
  @Column()
  // usage: string;
  // @Column()
  email: string;
  @Column()
  address: string;
  @Column()
  tel_two: string;
  @Column()
  user_name: string;
  @Column()
  password: string;
  @Column()
  last_call_time: string;
  @Column()
  created_at: string;
  // @Column()
  // update_at: string;
  @Column()
  user_no: string;
  @Column()
  status: BoardStatus;
}
