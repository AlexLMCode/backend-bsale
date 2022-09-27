import Product from '../persistence/models/product';

const getProductFromRepository = async () => {
  try {
    const productRepository = global.dataSource.getRepository(Product);
    const products = await productRepository.find();
    return products;
  } catch (error) {
    console.error('Error In Repository', error);
    throw error;
  }
};

export default {
  getProductFromRepository,
};
