import Category from '../persistence/models/category';

const getCategoriesFromRepository = async () => {
  try {
    const categoryRepository = global.dataSource.getRepository(Category);
    const categories = await categoryRepository.find();
    return categories;
  } catch (error) {
    throw error;
  }
};

export default {
  getCategoriesFromRepository,
};
