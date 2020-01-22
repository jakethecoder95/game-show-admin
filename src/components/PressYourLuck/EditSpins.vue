<template>
  <form v-on:submit="handleSubmit">
    <h2>Add Spins:</h2>
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
import MatchService from "../../MatchService";

export default {
  name: "AmountSelector",
  props: {
    onSubmit: Function,
    teamIndex: Number
  },
  data: function() {
    return {
      amount: 0
    };
  },
  methods: {
    recetAmt() {
      this.amount = 0;
    },
    async handleSubmit(e) {
      e.preventDefault();
      this.onSubmit(-1);
      try {
        const res = await MatchService.addSpins(this.amount, this.teamIndex);
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
.force-submit-btn {
  background: red;
  font-size: 1em;
  padding: 5px;
  color: white;
}
</style>
