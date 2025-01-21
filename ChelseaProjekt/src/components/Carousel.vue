<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="/img/mandem.png" alt="First slide">
        <div class="overlay"></div>
        <div class="carousel-caption d-none d-md-block">
          <h1>Mandem Leaders</h1>
          <p>Noni Madueke and Trevoh Chalobah</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="/img/maresca.png" alt="Second slide">
        <div class="overlay"></div>
        <div class="carousel-caption d-none d-md-block">
          <h1>Gaffer</h1>
          <p>Enzo Maresca</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="/img/squad.png" alt="Third slide">
        <div class="overlay"></div>
        <div class="carousel-caption d-none d-md-block">
          <h1>Squad</h1>
          <p>The Blues</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {};
  }
};
</script>

<style scoped>
.carousel-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.carousel-caption {
  z-index: 2;
}
</style>