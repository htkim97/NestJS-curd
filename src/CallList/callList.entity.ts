import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './callList-status.enum';

@Entity({ name: 'users'})
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  user_name: string;

  @Column()
  user_no: string;

  @Column()
  password: string;

  @Column()
  office_name: string;

  @Column()
  tel_one: string;

  @Column()
  tel_two: string;

  @Column()
  email: string;

  @Column({ type: 'date' })
  regi_date: Date;

  @Column()
  last_call_time: string;

  @Column()
  status: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column()
  address: string;
  
  // @Column()
  // point: string;
  // @Column()
  // usage: string;
}
