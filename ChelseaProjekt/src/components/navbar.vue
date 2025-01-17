<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <RouterLink class="navbar-brand" to="/">
      <img src="../../public/img/logo1.png" alt="Chelsea FC Logo" class="d-inline-block align-top" width="30" height="30" />
      Chelsea FC Fan Shop
    </RouterLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/" active-class="active">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/products" active-class="active">Products</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/cart" active-class="active">Cart</RouterLink>
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

<style lang="scss" scoped></style>