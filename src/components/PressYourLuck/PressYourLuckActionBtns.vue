<template>
  <div>
    <ActiveTeamToggler
      v-bind:teams="pressYourLuck.teams"
      v-bind:activeTeam="pressYourLuck.activeTeam"
    />
    <ShuffleBtn v-bind:disabled="pressYourLuck.shuffling" />
    <PassBtn v-bind:disabled="pressYourLuck.shuffling" />
  </div>
</template>

<script>
import ActiveTeamToggler from "./ActiveTeamToggler";
import ShuffleBtn from "./ShuffleBtn";
import PassBtn from "./PassBtn";

export default {
  name: "PressYourLuckActionBtns",
  components: {
    ActiveTeamToggler,
    PassBtn,
    ShuffleBtn
  },
  props: {
    pressYourLuck: Object
  }
};
</script>