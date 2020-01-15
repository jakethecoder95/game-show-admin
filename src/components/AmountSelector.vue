<template>
  <form v-on:submit="handleSubmit">
    <h2>Add a SCORE:</h2>
    <input
      type="number"
      placeholder="Select an amount"
      v-bind:value="amount"
      v-on:change="e => (amount = e.target.value)"
    />
    <button v-if="isWheelOfBlessings" type="submit">Submit</button>
    <div v-else>
      <span>
        <br />
        <button type="submit" class="force-submit-btn">Force Submit</button>
        <p
          class="text-danger"
        >WARNING: Only use "Force Submit" if a mistake was made and you have to submit a specific value.</p>
      </span>
      <AddLetter
        v-if="!isWheelOfBlessings"
        v-bind:amount="parseInt(amount)"
        v-bind:teamIndex="teamIndex"
        v-bind:recetAmt="recetAmt"
        v-bind:goBack="() => onSubmit(-1)"
      />
    </div>
  </form>
</template>

<script>
import MatchService from "../MatchService";
import AddLetter from "./WheelOfBlessings/AddLetter";

export default {
  name: "AmountSelector",
  components: {
    AddLetter
  },
  props: {
    team: Object,
    onSubmit: Function,
    teamIndex: Number,
    isWheelOfBlessings: Boolean
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
.force-submit-btn {
  background: red;
  font-size: 1em;
  padding: 5px;
  color: white;
}
</style>
