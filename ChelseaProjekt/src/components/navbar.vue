<template>
  <nav class="navbar navbar-expand-lg p-3">
    <a class="navbar-brand" href="#">
      <img src="/img/logo.png" alt="Logo" style="height: 100px;">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
          <router-link class="nav-link fs-5 mx-3" to="/">Home <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fs-5 mx-3" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fs-5 mx-3" to="/players">Players</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fs-5 mx-3" to="/orders">Orders</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link fs-5 mx-3" to="/cart">
            <i class="fas fa-shopping-cart"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped></style>