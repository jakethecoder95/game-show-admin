<template>
  <form class="update-team-name" v-on:submit="handleSubmit">
    <h2>New Game Name:</h2>
    <input
      type="text"
      placeholder="Choose a name"
      v-bind:value="name"
      v-on:change="e => (name = e.target.value)"
    />
    <button type="submit" v-bind:disabled="submitting">Submit</button>
  </form>
</template>

<script>
import MatchService from "../MatchService";

export default {
  name: "UpdateTeamName",
  props: {
    finishSelecting: Function
  },
  data: function() {
    return {
      name: "",
      submitting: false
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      this.submitting = true;
      try {
        const res = await MatchService.startNewGame(this.name);
        // eslint-disable-next-line no-console
        console.log(res);
        this.finishSelecting();
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
      this.submitting = false;
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
