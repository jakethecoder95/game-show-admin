<template>
  <div>
    <button v-on:click="shuffle" class="shuffle-btn" v-bind:disabled="disabled">Start Shuffle</button>
  </div>
</template>

<script>
import MatchService from "../../MatchService";

export default {
  name: "ShuffleBtn",
  props: {
    disabled: Boolean
  },
  methods: {
    async shuffle() {
      try {
        const result = await MatchService.start();
        // eslint-disable-next-line no-console
        console.log(result);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
button {
  color: white;
  background: green;
  border: none;
  border-radius: 5px;
  font-size: 1.5em;
  padding: 5px 10px;
  margin-bottom: 2rem;
}
button:disabled {
  background: darkgreen;
}
</style>