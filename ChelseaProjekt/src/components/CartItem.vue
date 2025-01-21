<template>
  <tr>
    <td>{{ item.name }}</td>
    <td>${{ item.price }}</td>
    <td>{{ item.quantity }}</td>
    <td>${{ item.price * item.quantity }}</td>
    <td>
      <button class="btn btn-danger btn-sm" @click="removeItem(item.id)">Remove</button>
    </td>
  </tr>
</template>

<script>
import { useCartStore } from '@/stores/cartStore';

export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeItem(itemId) {
      const cartStore = useCartStore();
      cartStore.removeItem(itemId);
    }
  }
};
</script>