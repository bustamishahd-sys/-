export const statusMeta = {
  pending: { label: 'بانتظار التأكيد', tone: 'amber' },
  confirmed: { label: 'مؤكد', tone: 'blue' },
  preparing: { label: 'قيد التجهيز', tone: 'violet' },
  out_for_delivery: { label: 'خرج للتوصيل', tone: 'green' },
  delivered: { label: 'تم التسليم', tone: 'green' },
  cancelled: { label: 'ملغي', tone: 'red' },
};

export const mockOrders = [
  { id: 'DEMO-1048', customer: 'عميل تجريبي 1', phone: '0590 000 101', location: 'منطقة تجريبية أ', date: '2026-09-20 10:30', total: 185, status: 'pending', items: [{ name: 'منتج تجريبي', quantity: 2, price: 75 }], deliveryFee: 12, history: [{ status: 'pending', at: '2026-09-20 10:30', note: 'تم إنشاء الطلب التجريبي' }] },
  { id: 'DEMO-1047', customer: 'عميل تجريبي 2', phone: '0590 000 102', location: 'منطقة تجريبية ب', date: '2026-09-20 09:10', total: 142, status: 'preparing', items: [{ name: 'منتج تجريبي', quantity: 1, price: 130 }], deliveryFee: 12, history: [{ status: 'confirmed', at: '2026-09-20 09:15', note: 'تأكيد تجريبي' }] },
  { id: 'DEMO-1046', customer: 'عميل تجريبي 3', phone: '0590 000 103', location: 'منطقة تجريبية ج', date: '2026-09-19 16:45', total: 94.5, status: 'out_for_delivery', items: [{ name: 'منتج تجريبي', quantity: 1, price: 82.5 }], deliveryFee: 12, history: [{ status: 'out_for_delivery', at: '2026-09-19 17:00', note: 'في طريقه للتوصيل' }] },
  { id: 'DEMO-1045', customer: 'عميل تجريبي 4', phone: '0590 000 104', location: 'منطقة تجريبية د', date: '2026-09-19 14:20', total: 210, status: 'delivered', items: [{ name: 'منتج تجريبي', quantity: 3, price: 66 }], deliveryFee: 12, history: [{ status: 'delivered', at: '2026-09-19 15:20', note: 'تم التسليم' }] },
];
