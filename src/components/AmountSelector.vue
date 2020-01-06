<template>
  <form v-on:submit="handleSubmit">
    <h2>Add a SCORE:</h2>
    <input
      type="number"
      placeholder="Select an amount"
      v-bind:value="amount"
      v-on:change="e => (amount = e.target.value)"
    />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import MatchService from "../MatchService";

export default {
  name: "AmountSelector",
  props: {
    team: Object,
    onSubmit: Number,
    teamIndex: Number
  },
  data: function() {
    return {
      amount: 0
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      this.onSubmit(-1);
      try {
        const res = await MatchService.updateScore(this.amount, this.teamIndex);
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
