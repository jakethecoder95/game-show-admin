<template>
  <div>
    <div class="millionaire-controls">
      <div class="sigle-btns">
        <TimerBtn />
        <NextQuestion />
        <NextTeam />
      </div>
      <SubmitAnswer />
      <HelpOptionSelect />
    </div>
  </div>
</template>

<script>
import HelpOptionSelect from "./HelpOptionsSelect";
import NextQuestion from "./NextQuestion";
import NextTeam from "./NextTeam";
import SubmitAnswer from "./SubmitAnswer";
import TimerBtn from "./TimerBtn";

export default {
  name: "MillionaireControls",
  components: {
    HelpOptionSelect,
    NextQuestion,
    NextTeam,
    SubmitAnswer,
    TimerBtn
  }
};
</script>

<style scoped>
.millionaire-controls {
  margin-bottom: 2rem !important;
}
.sigle-btns {
  display: flex;
  justify-content: center;
}
</style>