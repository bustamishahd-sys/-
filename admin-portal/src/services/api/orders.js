import { mockOrders } from '../../data/mockOrders';

let orders = [...mockOrders];
const wait = (data) => new Promise((resolve) => setTimeout(() => resolve(data), 180));
export const getOrders = () => wait([...orders]);
export const getOrderById = (id) => wait(orders.find((order) => order.id === id));
export const updateOrderStatus = async (id, status) => {
  orders = orders.map((order) => order.id === id ? { ...order, status, history: [...order.history, { status, at: new Date().toLocaleString('ar'), note: 'تحديث تجريبي من لوحة الإدارة' }] } : order);
  return wait(orders.find((order) => order.id === id));
};
