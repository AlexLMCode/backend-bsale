import { Request, Response } from 'express';
import CustomResponse from '../common/response';

const getCategories = async (request: Request, response: Response) => {
  try {
  } catch (error) {
    response
      .status(500)
      .json(new CustomResponse(500, error.message, undefined, error));
  }
};

export default {
  getCategories,
};
