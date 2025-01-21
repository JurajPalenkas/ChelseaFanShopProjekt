<template>
  <div>
    <h1 class="text-center my-4">Products</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-3 mb-4" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/Product.vue';
import productsData from '@/products.json';

export default {
  name: "Products",
  components: {
    ProductCard
  },
  data() {
    return {
      products: productsData
    };
  }
};
</script>

<style scoped>
</style>