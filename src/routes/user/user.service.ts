import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entity/user.entity';
import { Repository } from 'typeorm';
import { Board } from '../../entity/board.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUser() {
    const qb = this.userRepository.createQueryBuilder()

    qb.addSelect((subQuery) => {
      return subQuery
        .select('count(id)')
        .from(Board, 'Board')
        .where('Board.userId = User.id')
    }, 'User_boardCount')

    return qb.getMany()
  }

  async createUser(data: CreateUserDto) {
    const {username, name, password} = data;

    const encryptPassword = await this.encryptPassword(password)

    return this.userRepository.save({
      username,
      name,
      password: encryptPassword,
    })
  }

  async encryptPassword(password: string) {
    const DEFAULT_SALT = 11;
    return hash(password, DEFAULT_SALT)
  }
}
