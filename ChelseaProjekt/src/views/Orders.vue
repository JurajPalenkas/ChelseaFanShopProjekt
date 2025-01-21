<template>
  <div class="container mt-4">
    <div v-if="orders.length === 0" class="alert alert-info">No orders found.</div>
    <div v-else>
      <div class="list-group">
        <div v-for="order in orders" :key="order.id" class="list-group-item">
          <h5 class="mb-1">Order ID: {{ order.id }}</h5>
          <p class="mb-1">Date: {{ order.date }}</p>
          <p class="mb-1">Total Items: {{ order.items.length }}</p>
          <p class="mb-1">Total Price: ${{ calculateTotal(order.items) }}</p>
          <ul class="list-group mt-2">
            <li v-for="item in order.items" :key="item.id" class="list-group-item">
              <strong>{{ item.name }}</strong> - ${{ item.price }} x {{ item.quantity }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",
  data() {
    return {
      orders: JSON.parse(localStorage.getItem('orders') || '[]')
    };
  },
  methods: {
    calculateTotal(items) {
      return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.list-group-item {
  margin-bottom: 10px;
}
</style>