import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { Board } from '../entity/board.entity';

@Injectable()
export class BoardService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Board)
    private boardRepository: Repository<Board>
  ) {
  }

  private boards = [
    {
      id: 1,
      name: 'Inez Dooley',
      content: 'Content 1',
    },
    {
      id: 2,
      name: 'Mrs. Bob Brown',
      content: 'Content 2',
    },
    {
      id: 3,
      name: 'Sheilea White',
      content: 'Content 3',
    },
    {
      id: 4,
      name: 'Mindy Ruecker',
      content: 'Content 4',
    },
    {
      id: 5,
      name: 'Nelson Schowalter',
      content: 'Content 5',
    },
  ];

  async findAll() {
    return this.boardRepository.find();
  }

  async find(id: number) {
    const board = await this.boardRepository.findOne({
      where: {
        id
      },
      relations: {
        user: true
      }
    })

    if(!board) throw new HttpException('NotFound', HttpStatus.NOT_FOUND )

    return board
  }

  async create(data: CreateBoardDto) {
    return this.boardRepository.save(data)
  }

  getNextId() {
    return this.boards.sort((a, b) => b.id - a.id)[0].id + 1;
  }

  update(id: number, data: UpdateBoardDto) {
    const index = this.getBoardId(id);
    if (index > -1) {
      this.boards[index] = {
        ...this.boards[index],
        ...data,
      };
      return this.boards[index];
    }
    return null;
  }

  getBoardId(id: number) {
    return this.boards.findIndex((board) => board.id === id);
  }

  delete(id: number) {
    const index = this.getBoardId(id);
    if (index > -1) {
      const deleteBoard = this.boards[index];
      this.boards.splice(index, 1);

      return deleteBoard;
    }
    return null;
  }
}
