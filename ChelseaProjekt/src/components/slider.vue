<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="/img/fofana.png" alt="Player 1">
          <div class="carousel-caption d-none d-md-block">
            <h5>Player 1</h5>
            <p>Description of player 1</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/vlajka.png" alt="Player 2">
          <div class="carousel-caption d-none d-md-block">
            <h5>Player 2</h5>
            <p>Description of player 2</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/img/vsetci.png" alt="Player 3">
          <div class="carousel-caption d-none d-md-block">
            <h5>Player 3</h5>
            <p>Description of player 3</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .carousel-item {
    height: 500px;
  }
  
  .carousel-item img {
    object-fit: cover;
    height: 100%;
  }
  </style>