import express from 'express';

import {
  createNewProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../controllers/productsController';
import adminCheck from '../middlewares/adminCheck';
import { passportAuthenticate } from '../utils/AuthUtil';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createNewProduct);
//  passportAuthenticate(), adminCheck,

router.get('/:productId', getProductById);
router.put('/:productId', updateProduct); //  passportAuthenticate(), adminCheck,
router.delete('/:productId', deleteProductById); // passportAuthenticate(), adminCheck,

export default router;
