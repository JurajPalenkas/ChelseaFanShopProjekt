<template>
  <div>
    <h1>Shopping Cart</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
      </tbody>
    </table>
    <p v-if="cartItems.length === 0">Your cart is empty.</p>
    <div v-else class="total">
      <h3>Total: ${{ cartTotal }}</h3>
      <button class="btn btn-success mt-3" @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore';
import CartItem from '@/components/CartItem.vue';

export default {
  name: "Cart",
  components: {
    CartItem
  },
  computed: {
    cartItems() {
      const cartStore = useCartStore();
      return cartStore.items;
    },
    cartTotal() {
      const cartStore = useCartStore();
      return cartStore.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }
  },
  methods: {
    checkout() {
      const cartStore = useCartStore();
      cartStore.saveOrder();
      alert('Order has been saved and cart is cleared.');
    }
  }
};
</script>

<style scoped>
.table {
  margin-top: 20px;
}
.total {
  margin-top: 20px;
  text-align: right;
}
</style>