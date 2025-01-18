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
      <ul class="navbar-nav">
        <li class="nav-item mx-4">
          <RouterLink class="nav-link" to="/" active-class="active">
            <i class="fas fa-home"></i> Home
          </RouterLink>
        </li>
        <li class="nav-item mx-4">
          <RouterLink class="nav-link" to="/products" active-class="active">
            <i class="fas fa-box-open"></i> Products
          </RouterLink>
        </li>
        <li class="nav-item mx-4">
          <RouterLink class="nav-link" to="/cart" active-class="active">
            <i class="fas fa-shopping-cart"></i> Cart
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar-nav {
  flex-direction: row;
}

.nav-item {
  margin-left: 20px;
  margin-right: 20px;
}
</style>