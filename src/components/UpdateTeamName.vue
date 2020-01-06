<template>
  <form class="update-team-name" v-on:submit="handleSubmit">
    <h2>Change NAME:</h2>
    <input
      type="text"
      placeholder="Choose a name"
      v-bind:value="name"
      v-on:change="e => (name = e.target.value)"
    />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import MatchService from "../MatchService";

export default {
  name: "UpdateTeamName",
  props: {
    onSubmit: Function,
    team: Object,
    teamIndex: Number
  },
  data: function() {
    return {
      name: this.team.name
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      this.onSubmit(-1);
      try {
        const res = await MatchService.updateTeamName(
          this.name,
          this.teamIndex
        );
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
.update-team-name {
  margin-top: 5rem;
}
input {
  border: 2px solid #ffc90e;
  background: none;
  color: #ffc90e;
  padding: 10px;
  font-size: 2em;
  max-width: 90%;
}
button {
  margin: 10px;
  background: #ffc90e;
  border: none;
  padding: 10px;
  font-size: 2em;
  color: darkblue;
}
</style>
