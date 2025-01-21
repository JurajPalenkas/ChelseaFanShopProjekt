<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4 col-lg-3 mb-4" v-for="player in players" :key="player.id">
          <PlayerCard :player="player" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerCard from '@/components/PlayerCard.vue';
import playersData from '@/players.json';

export default {
  name: "Players",
  components: {
    PlayerCard
  },
  data() {
    return {
      players: playersData
    };
  }
};
</script>

<style scoped>
</style>