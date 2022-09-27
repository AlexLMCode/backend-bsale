import 'reflect-metadata';
import { DataSource } from 'typeorm';
import config from '../../config';
import models from '../models';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: config.DB_HOST,
  port: 3306,
  username: config.DB_USER,
  password: config.DB_PASS,
  database: config.DB_NAME,
  synchronize: false,
  entities: models,
});
