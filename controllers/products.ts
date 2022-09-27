import { Request, Response } from 'express';
import CustomResponse from '../common/response';
import productService from '../services/products';

const getProducts = async (request: Request, res: Response) => {
  try {
    const { productName } = request.query;
    const data = await productService.getProductFromRepository();
    return res.json(new CustomResponse(200, 'Success', data, undefined));
  } catch (error) {
    return res
      .status(500)
      .json(new CustomResponse(500, error.message, undefined, error));
  }
};

export default {
  getProducts,
};
