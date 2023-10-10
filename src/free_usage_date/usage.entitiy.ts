import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { BoardStatus } from './board-status.enum';

@Entity({ name: 'freeUsage_date'})
export class Usage extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  free_date: number;

  @Column()
  basic_usage: number;

  // @Column()
  // android: string;

  // @Column()
  // ios: string;

  // @Column()
  // ord: string;

  // @Column()
  // inOrOut: string;

  // @Column()
  // country: string;

  // @Column()
  // duration: string;

  
  // @Column()
  // point: string;
  // @Column()
  // usage: string;
}
