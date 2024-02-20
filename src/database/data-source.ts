import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config({ path: '.env.local' });

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'board',
  password: 'test1234',
  database: 'postgres',
  entities: ['src/**/*.entity.{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
