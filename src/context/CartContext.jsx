import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const CART_STORAGE_KEY = 'aziza-cart';

function loadCart() {
  try {
    const savedCart = JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY) ?? '[]');
    return Array.isArray(savedCart)
      ? savedCart.filter((item) => item?.id && Number.isFinite(Number(item.quantity)) && Number(item.quantity) > 0)
      : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Keep the in-memory cart usable if browser storage is unavailable.
    }
  }, [items]);

  const addItem = (product, quantity = 1) => {
    const quantityToAdd = Math.max(1, Number(quantity) || 1);
    setItems((current) => {
      const found = current.find((item) => item.id === product.id);
      return found
        ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item)
        : [...current, { ...product, quantity: quantityToAdd }];
    });
  };
  const updateQuantity = (id, quantity) => {
    const nextQuantity = Number(quantity);
    setItems((current) => !Number.isFinite(nextQuantity) || nextQuantity < 1
      ? current.filter((item) => item.id !== id)
      : current.map((item) => item.id === id ? { ...item, quantity: nextQuantity } : item));
  };
  const clearCart = () => setItems([]);
  const totals = useMemo(() => ({
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0),
  }), [items]);

  return <CartContext.Provider value={{ items, addItem, updateQuantity, clearCart, ...totals }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error('useCart يجب أن يُستخدم داخل CartProvider');
  return cart;
}
