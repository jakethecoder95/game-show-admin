<template>
  <div>
    <div class="answer-buttons">
      <button v-on:click="() => submitAnswer(0)" class="answer-btn">A</button>
      <button v-on:click="() => submitAnswer(1)" class="answer-btn">B</button>
      <button v-on:click="() => submitAnswer(2)" class="answer-btn">C</button>
      <button v-on:click="() => submitAnswer(3)" class="answer-btn">D</button>
    </div>
  </div>
</template>

<script>
import MatchService from "../../MatchService";

export default {
  name: "SubmitAnswer",
  components: {},
  methods: {
    async submitAnswer(answer) {
      try {
        await MatchService.submitAnswer(answer);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.answer-buttons {
  display: flex;
  justify-content: center;
}
button {
  margin: 10px;
  background: #00a700;
  border: none;
  border-radius: 50%;
  padding: 10px;
  width: 36.5px;
  height: 36.5px;
  font-size: 1em;
  color: white;
  cursor: pointer;
  transition: 250ms;
}
button:hover {
  background: #008b00;
}
</style>
