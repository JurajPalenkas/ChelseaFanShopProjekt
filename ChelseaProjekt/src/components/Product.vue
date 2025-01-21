<template>
  <div class="card product-card mb-3">
    <img :src="product.image" :alt="product.name" class="card-img-top product-image">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <p class="card-text"><small class="text-muted">Price: ${{ product.price }}</small></p>
      <button class="btn btn-primary" @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore';

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart(product) {
      const cartStore = useCartStore();
      cartStore.addItem({
        ...product,
        quantity: 1
      });
    }
  }
};
</script>

<style scoped>
.product-card {
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  height: 200px;
  object-fit: cover;
}
</style>