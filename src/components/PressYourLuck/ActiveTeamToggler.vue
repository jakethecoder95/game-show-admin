<template>
  <div class="active-team-toggler">
    <div
      v-for="(team, i) in teams"
      v-bind:key="team._id"
      v-bind:class="`team ${activeTeam === i ? 'active' : ''}`"
      v-on:click="() => { 
        if (activeTeam !== i) onTeamClicked(i)
      }"
    >{{ team.name }}</div>
  </div>
</template>

<script>
import MatchService from "../../MatchService";

export default {
  name: "AmountSelector",
  props: {
    teams: Array,
    activeTeam: Number
  },
  methods: {
    async onTeamClicked(teamIndex) {
      try {
        const res = await MatchService.setActiveTeam(teamIndex);
        // eslint-disable-next-line no-console
        console.log(res);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.active-team-toggler {
  display: flex;
  justify-content: space-around;
  max-width: 400px;
  margin: 0 auto 2rem auto;
}
.team {
  color: white;
  padding: 15px;
  border: solid 2px white;
  border-radius: 10px;
}
.active {
  background-color: green;
}
</style>
