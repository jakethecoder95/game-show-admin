<template>
  <form v-on:submit="handleSubmit" class="add-letter-form">
    <h2>Guessed Letter</h2>
    <input
      type="text"
      placeholder="Letter"
      v-bind:value="letter"
      v-on:change="e => (letter = e.target.value)"
    />
    <br />
    <button type="submit" v-bind:disabled="submitting">Submit</button>
  </form>
</template>

<script>
import MatchService from "../../MatchService";

export default {
  name: "AddLetter",
  props: {
    amount: Number,
    teamIndex: Number,
    goBack: Function,
    recetAmt: Function
  },
  data: function() {
    return {
      letter: "",
      submitting: false
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      this.submitting = true;
      if (this.letter !== "" && this.amount > 0) {
        try {
          const letterSubmitRes = await MatchService.addLetter(this.letter);
          this.letter = "";

          if (letterSubmitRes.letterOccurrences > 0) {
            MatchService.updateScore(
              this.amount * letterSubmitRes.letterOccurrences,
              this.teamIndex
            );
            this.recetAmt();
          } else {
            this.goBack();
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      }
      this.submitting = false;
    }
  }
};
</script>

<style scoped>
.add-letter-form {
  margin-bottom: 40px;
}
input {
  margin-bottom: 10px;
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
