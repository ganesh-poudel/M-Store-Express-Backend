import { OrderItem } from "../misc/types/Order";
import OrderItemModel, { OrderItemDocument } from "../model/OrderItemModel";
import OrderModel, { OrderDocument } from "../model/OrderModel";

const getAllOrders = async (userId: string): Promise<OrderDocument[]> => {
  return await OrderModel.find({
    user: userId
  }).populate([
    { path: 'user', select: { userName: 1, address: 1 }}, 
    { path: 'items' }
  ]);
}

const getOrderyById = async (orderId: string): Promise<OrderDocument | null> => {
  return await OrderModel.findById({
    orderId
  }).populate([
      { path: 'user', select: { userName: 1, address: 1 }}, 
      { path: 'items' }
    ]);
}

const createOrderItems = async (orderItem: OrderItemDocument): Promise<OrderItemDocument> => {
  return await orderItem.save();
}

const createOrder = async (order: OrderDocument): Promise<OrderDocument> => {
  return await order.save();
}
 
const updateOrder = async (orderId: string, updateInfo: Partial<OrderDocument>): Promise<OrderDocument | null> => {
  const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, updateInfo, {
    new: true
  });

  return updatedOrder;
}

const deleteOrderItemsbyOrderId = async (orderId: string) => {
  return await OrderItemModel.deleteMany({ orderId: orderId });
}

const deleteOrderById = async (orerId: string): Promise<OrderDocument | null> => {
  const deletedOrderItems = await deleteOrderItemsbyOrderId(orerId); 
  return await OrderModel.findByIdAndDelete(orerId);
}

export default { 
  getAllOrders, 
  getOrderyById,
  createOrder,
  createOrderItems,
  updateOrder,
  deleteOrderById
};  