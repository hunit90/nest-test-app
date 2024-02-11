import { Injectable } from '@nestjs/common';

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
    const index = this.boards.findIndex((board)=> board.id === id)
    return this.boards[index]
  }
}
