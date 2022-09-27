import Product from '../persistence/models/product';
import { Like } from 'typeorm';

const getProductFromRepository = async (name?: string, categoryId?: number) => {
  console.log('namememme', name);
  try {
    const query =
      name || categoryId
        ? {
            name: name ? Like(`%${name}%`) : undefined,
            category: categoryId ? categoryId : undefined,
          }
        : {};
    console.log('q', query);
    const productRepository = global.dataSource.getRepository(Product);
    const products = await productRepository.findBy(query);
    return products;
  } catch (error) {
    console.error('Error In Repository', error);
    throw error;
  }
};

export default {
  getProductFromRepository,
};