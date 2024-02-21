import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../../entity/user.entity';

export default class UserSeeder implements Seeder {
  async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
    const repository = dataSource.getRepository(User);

    await repository.insert([
      {
        username: 'kihun lee',
        name: 'lee kihun',
        password: 'test1234',
      }
    ])
  }
}