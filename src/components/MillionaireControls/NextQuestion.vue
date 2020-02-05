<template>
  <div>
    <button v-on:click="nextQuestion" class="btn start-btn">Next Question</button>
  </div>
</template>

<script>
import MatchService from "../../MatchService";

export default {
  name: "NextQuestion",
  components: {},
  methods: {
    async nextQuestion() {
      try {
        await MatchService.nextQuestion();
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
  background: rgb(0, 140, 255);
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1em;
  color: white;
  cursor: pointer;
  transition: 250ms;
}
button:hover {
  background: blue;
}
</style>
