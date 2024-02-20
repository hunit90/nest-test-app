import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @ApiProperty({description: 'user_id'})
  @Column()
  userId: number;

  @Column()
  @ApiProperty({description: '내용'})
  contents: string;

  @ApiProperty({description: '생성일'})
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({description: '수정일'})
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({description: '유저정보'})
  @ManyToOne(() => User)
  @JoinColumn({name: 'userId'})
  user: User;
}