import Product from '../persistence/models/product';
import { Like } from 'typeorm';

const getProductFromRepository = async (name?: string) => {
  try {
    const query = name
      ? {
          where: {
            name: Like(`%${name} #%`),
          },
        }
      : {};
    const productRepository = global.dataSource.getRepository(Product);
    const products = await productRepository.find(query);
    return products;
  } catch (error) {
    console.error('Error In Repository', error);
    throw error;
  }
};

export default {
  getProductFromRepository,
};
