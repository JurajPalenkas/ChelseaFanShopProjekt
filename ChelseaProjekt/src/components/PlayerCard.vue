<template>
  <div class="card player-card mb-3" @click="goToDetail">
    <img :src="player.image" :alt="player.name" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ player.name }}</h5>
      <p class="card-text">{{ player.position }}</p>
      <p class="card-text"><small class="text-white">Number: {{ player.number }}</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    player: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToDetail() {
      this.$router.push({ name: 'playerDetail', params: { id: this.player.id } });
    }
  }
};
</script>

<style scoped>
.player-card {
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  transition: transform 0.2s;
  background-color: #001489;
  color: white;
}

.player-card:hover {
  transform: scale(1.05);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  object-position: top;
}
</style>