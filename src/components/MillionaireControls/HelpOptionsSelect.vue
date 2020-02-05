<template>
  <div>
    <div class="help-options">
      <div class="option" v-on:click="() => onOptionSelected(0)">
        <i class="fa fa-hourglass-half"></i>
      </div>
      <div class="option fifty-fifty" v-on:click="() => onOptionSelected(1)">50/50</div>
      <div class="option" v-on:click="() => onOptionSelected(2)">
        <i class="fa fa-forward"></i>
      </div>
      <div class="option" v-on:click="() => onOptionSelected(3)">
        <i class="fa fa-question"></i>
      </div>
    </div>
  </div>
</template>

<script>
import MatchService from "../../MatchService";

export default {
  name: "HelpOptionsSelect",
  components: {},
  methods: {
    async onOptionSelected(option) {
      try {
        await MatchService.helpOptionSelect(option);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.help-options {
  display: flex;
  justify-content: center;
}
.option {
  font-size: 3em;
  margin: 10px 20px;
  color: gold;
  border: solid 3px gold;
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
}
.fifty-fifty {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  border-radius: 50%;
  padding: 10px;
}
.fa-question {
  width: 40px;
}
</style>
