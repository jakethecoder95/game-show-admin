<template>
  <div>
    <button v-on:click="toggleTimer" class="btn start-btn">Toggle Timer</button>
  </div>
</template>

<script>
import MatchService from "../../MatchService";

export default {
  name: "TimerBtn",
  components: {},
  methods: {
    async toggleTimer() {
      try {
        await MatchService.toggleMillionaireTimer();
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
  margin: 10px;
  background: red;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1em;
  color: white;
  cursor: pointer;
  transition: 250ms;
}
button:hover {
  background: rgb(187, 0, 0);
}
</style>
