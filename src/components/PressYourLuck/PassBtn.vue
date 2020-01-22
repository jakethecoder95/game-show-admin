<template>
  <div>
    <button v-on:click="pass" class="shuffle-btn" v-bind:disabled="disabled">Pass</button>
  </div>
</template>

<script>
import MatchService from "../../MatchService";

export default {
  name: "PassBtn",
  props: {
    disabled: Boolean
  },
  methods: {
    async pass() {
      try {
        const result = await MatchService.pass();
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
  background: red;
  border: none;
  border-radius: 5px;
  font-size: 1.5em;
  padding: 5px 10px;
  margin-bottom: 2rem;
}
</style>