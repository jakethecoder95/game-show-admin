<template>
  <div>
    <button v-on:click="nextTeam" class="btn start-btn">Next Team</button>
  </div>
</template>

<script>
import MatchService from "../../MatchService";

export default {
  name: "NextTeam",
  components: {},
  methods: {
    async nextTeam() {
      try {
        await MatchService.nextTeam();
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
  background: green;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1em;
  color: white;
  cursor: pointer;
  transition: 250ms;
}
button:hover {
  background: green2;
}
</style>
