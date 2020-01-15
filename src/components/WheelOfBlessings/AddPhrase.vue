<template>
  <form v-on:submit="handleSubmit" class="add-phrase-form">
    <input
      type="text"
      placeholder="Add a new Phrase"
      v-bind:value="phrase"
      v-on:change="e => (phrase = e.target.value)"
    />
    <input
      type="text"
      placeholder="and Catagory (required)"
      v-bind:value="catagory"
      v-on:change="e => (catagory = e.target.value)"
    />
    <button type="submit" v-bind:disabled="submitting">Submit</button>
  </form>
</template>

<script>
import MatchService from "../../MatchService";

export default {
  name: "AddPhrase",
  data: function() {
    return {
      phrase: "",
      catagory: "",
      submitting: false
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      this.submitting = true;
      if (this.phrase !== "" && this.catagory !== "") {
        try {
          const res = await MatchService.addPhrase(this.phrase, this.catagory);
          this.phrase = "";
          this.catagory = "";
          // eslint-disable-next-line no-console
          console.log(res);
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
.add-phrase-form {
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
