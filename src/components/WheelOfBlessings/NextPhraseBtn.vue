<template>
  <button v-on:click="nextPhrase" class="standard-btn">Next Phrase</button>
</template>

<script>
import MatchService from "../../MatchService";
export default {
  name: "NextPhraseBtn",
  methods: {
    async nextPhrase() {
      try {
        await MatchService.nextPhrase();
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.standard-btn {
  color: white;
  background: none;
  border-color: white;
  font-size: 1.5em;
  margin-top: 40px;
  padding: 10px 20px;
  margin-right: 10px;
}
</style>