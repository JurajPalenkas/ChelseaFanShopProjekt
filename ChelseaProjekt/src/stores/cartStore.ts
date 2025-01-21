import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
    orders: JSON.parse(localStorage.getItem('orders') || '[]'),
  }),
  actions: {
    addItem(item) {
      const existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.items.push(item);
      }
      this.saveToLocalStorage();
    },
    removeItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    },
    loadFromLocalStorage() {
      this.items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    },
    saveOrder() {
      const order = {
        id: Date.now(),
        items: [...this.items],
        date: new Date().toISOString()
      };
      this.orders.push(order);
      localStorage.setItem('orders', JSON.stringify(this.orders));
      this.clearCart();
    },
    clearCart() {
      this.items = [];
      this.saveToLocalStorage();
    }
  },
});