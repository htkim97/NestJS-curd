import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { BoardStatus } from './board-status.enum';

@Entity({ name: 'price_setting'})
export class Point_b extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  price: number;

  @Column()
  point: number;

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
