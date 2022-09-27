import { AppDataSource } from '../source';

export default async () => {
  try {
    const alreadyConnected = AppDataSource.isInitialized;
    if (alreadyConnected) return;
    else global.dataSource = await AppDataSource.initialize();
  } catch (error) {
    console.error('Error on DB Initialize', error);
  }
};
