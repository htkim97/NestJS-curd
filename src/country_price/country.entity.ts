import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { BoardStatus } from './board-status.enum';

@Entity({ name: 'call_forwarding_setting'})
export class country extends BaseEntity {
  @PrimaryGeneratedColumn()
 idx: number;

  @Column()
  wired: number;

  @Column()
  wireless: number;

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
