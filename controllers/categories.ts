import { Request, Response } from 'express';
import CustomResponse from '../common/response';
import categoriesService from '../services/categories';

const getCategories = async (request: Request, response: Response) => {
  try {
    const data = await categoriesService.getCategoriesFromRepository();
    response.json(new CustomResponse(200, 'Success', data, undefined));
  } catch (error) {
    response
      .status(500)
      .json(new CustomResponse(500, error.message, undefined, error));
  }
};

export default {
  getCategories,
};
