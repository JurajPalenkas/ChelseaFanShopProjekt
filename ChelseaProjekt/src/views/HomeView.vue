<template>
  <main>
    <Carousel />
    <h2 class="text-center my-4">Aktuálna Tabuľka English Premier League</h2>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>Pozícia</th>
          <th>Tím</th>
          <th>Zápasy</th>
          <th>Výhry</th>
          <th>Remízy</th>
          <th>Prehry</th>
          <th>Skóre</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          :class="{
            'table-primary': index >= 0 && index < 4, 
            'table-warning': index === 4, 
            'table-success': index === 5, 
            'table-danger': index >= 17
          }" 
          v-for="(team, index) in teams" 
          :key="team.name"
        >
          <td>{{ index + 1 }}.</td>
          <td>{{ team.name }}</td>
          <td>{{ team.matches }}</td>
          <td>{{ team.wins }}</td>
          <td>{{ team.draws }}</td>
          <td>{{ team.losses }}</td>
          <td>{{ team.score }}</td>
          <td>{{ team.points }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'

const teams = [
  { name: 'Liverpool', matches: 21, wins: 15, draws: 5, losses: 1, score: '50:20', points: 50 },
  { name: 'Arsenal', matches: 22, wins: 12, draws: 8, losses: 2, score: '43:21', points: 44 },
  { name: 'Nottingham Forest', matches: 22, wins: 12, draws: 8, losses: 2, score: '30:20', points: 44 },
  { name: 'Chelsea', matches: 22, wins: 11, draws: 7, losses: 4, score: '41:26', points: 40 },
  { name: 'Manchester City', matches: 22, wins: 11, draws: 5, losses: 6, score: '38:29', points: 38 },
  { name: 'Newcastle United', matches: 22, wins: 11, draws: 5, losses: 6, score: '38:26', points: 38 },
  { name: 'Bournemouth', matches: 22, wins: 10, draws: 7, losses: 5, score: '36:26', points: 37 },
  { name: 'Aston Villa', matches: 22, wins: 10, draws: 6, losses: 6, score: '33:34', points: 36 },
  { name: 'Brighton & Hove Albion', matches: 22, wins: 9, draws: 7, losses: 6, score: '32:29', points: 34 },
  { name: 'Fulham', matches: 22, wins: 8, draws: 9, losses: 5, score: '34:30', points: 33 },
  { name: 'Brentford', matches: 22, wins: 8, draws: 4, losses: 10, score: '40:39', points: 28 },
  { name: 'Crystal Palace', matches: 22, wins: 6, draws: 9, losses: 7, score: '25:28', points: 27 },
  { name: 'Manchester United', matches: 22, wins: 7, draws: 5, losses: 10, score: '26:29', points: 26 },
  { name: 'West Ham United', matches: 22, wins: 7, draws: 5, losses: 10, score: '27:43', points: 26 },
  { name: 'Tottenham Hotspur', matches: 22, wins: 7, draws: 3, losses: 12, score: '43:32', points: 24 },
  { name: 'Everton', matches: 21, wins: 5, draws: 5, losses: 11, score: '15:26', points: 20 },
  { name: 'Wolverhampton Wanderers', matches: 22, wins: 4, draws: 4, losses: 14, score: '31:48', points: 16 },
  { name: 'Ipswich Town', matches: 22, wins: 3, draws: 7, losses: 12, score: '20:37', points: 16 },
  { name: 'Leicester City', matches: 22, wins: 3, draws: 5, losses: 14, score: '23:48', points: 14 },
  { name: 'Southampton', matches: 22, wins: 1, draws: 3, losses: 18, score: '13:47', points: 6 }
];
</script>