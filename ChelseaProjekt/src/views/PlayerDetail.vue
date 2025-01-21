<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4">
        <img :src="player.image" :alt="player.name" class="img-fluid mb-3 rounded">
      </div>
      <div class="col-md-8">
        <h1>{{ player.name }}</h1>
        <p><strong>Position:</strong> {{ player.position }}</p>
        <p><strong>Number:</strong> {{ player.number }}</p>
        <p><strong>Bio:</strong> {{ player.bio }}</p>
        <h3>Stats</h3>
        <ul class="list-group">
          <li class="list-group-item"><strong>Shots:</strong> {{ player.stats.shots }}</li>
          <li class="list-group-item"><strong>Assists:</strong> {{ player.stats.assists }}</li>
          <li class="list-group-item"><strong>Goals:</strong> {{ player.stats.goals }}</li>
          <li v-if="player.stats.saves !== undefined" class="list-group-item"><strong>Saves:</strong> {{ player.stats.saves }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import playersData from '@/players.json';

export default {
  name: "PlayerDetail",
  data() {
    return {
      player: {}
    };
  },
  created() {
    const playerId = this.$route.params.id;
    this.player = playersData.find(player => player.id === parseInt(playerId));
  }
};
</script>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>