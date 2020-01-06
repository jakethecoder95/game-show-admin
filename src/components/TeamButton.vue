<template>
  <button class="team-button" v-on:click="() => onSelect(teamIndex)">
    <div class="team-name">{{ team.name }}</div>
    <div class="team-score">Game: {{ team.gameScore }}</div>
    <div class="team-score">Total: {{ team.totalScore }}</div>
  </button>
</template>

<script>
export default {
  name: "TeamButton",
  props: {
    team: Object,
    onSelect: Function,
    teamIndex: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.team-button {
  border: 2px solid #ffc90e;
  background: none;
  color: #ffc90e;
  padding: 20px 10px;
  cursor: pointer;
  width: 90vw;
  min-width: 300px;
}

.team-button:hover {
  background-color: #ffcb0e7a;
}

.team-name {
  font-size: 4em;
}

.team-score {
  font-size: 1.5em;
}
</style>
