import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  private boards = [
    {
      id: 1,
      name: 'Inez Dooley',
      content: 'Content 1'
    },
    {
      id: 2,
      name: 'Mrs. Bob Brown',
      content: 'Content 2'
    },
    {
      id: 3,
      name: 'Sheilea White',
      content: 'Content 3'
    },
    {
      id: 4,
      name: 'Mindy Ruecker',
      content: 'Content 4'
    },
    {
      id: 5,
      name: 'Nelson Schowalter',
      content: 'Content 5'
    },
  ]

  findAll() {
    return this.boards
  }

  find(id: number) {
    const index = this.getBoardId(id)
    return this.boards[index]
  }

  create(data: CreateBoardDto) {
    const newBoard = { id: this.getNextId(), ...data }
    this.boards.push(newBoard)
    return newBoard
  }

  getNextId() {
    return this.boards.sort((a,b) => (b.id - a.id))[0].id + 1
  }

  update(id: number, data: UpdateBoardDto) {
    const index = this.getBoardId(id)
    if (index > -1) {
      this.boards[index] = {
        ...this.boards[index],
        ...data
      }
      return this.boards[index]
    }
    return null
  }

  getBoardId(id: number) {
    return this.boards.findIndex((board) => board.id === id)
  }

  delete(id: number) {
    const index = this.getBoardId(id)
    if (index > -1) {
      const deleteBoard = this.boards[index]
      this.boards.splice(index,1)

      return deleteBoard
    }
    return null
  }
}
