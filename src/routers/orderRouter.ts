import express from 'express';

import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } from '../controllers/ordersController';
import { passportAuthenticate } from '../utils/AuthUtil';

const router = express.Router();

// router.get('/', passportAuthenticate(), getAllOrders);
router.get('/', passportAuthenticate(), getAllOrders);
router.get('/:orderId', passportAuthenticate(), getOrderById);

router.post('/:userId', passportAuthenticate(), createOrder);
router.put('/:orderId', passportAuthenticate(), updateOrder);
router.delete('/:orderId', passportAuthenticate(), deleteOrder);

export default router;
