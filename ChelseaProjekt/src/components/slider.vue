<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="/img/fofana.png" alt="Player 1">
        <div class="carousel-caption d-none d-md-block">
          <h5>Rock Solid Defence</h5>
          <p>Player 1 is known for their exceptional defensive skills and ability to read the game.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="/img/cold2.png" alt="Player 2">
        <div class="carousel-caption d-none d-md-block">
          <h5>Maestro</h5>
          <p>Player 2 is a midfield maestro, orchestrating the play with precision and creativity.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="/img/vsetci.png" alt="Player 3">
        <div class="carousel-caption d-none d-md-block">
          <h5>Leaders</h5>
          <p>Player 3 leads the team with passion and determination, inspiring everyone on the field.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.carousel-item {
  height: 750px;
}

.carousel-item img {
  object-fit: cover;
  height: auto;
  width: 100%;
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .carousel-item {
    height: 500px;
  }

  .carousel-caption {
    font-size: 14px;
  }
}
</style>