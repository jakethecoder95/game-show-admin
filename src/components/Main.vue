<template>
  <div>
    <h1>{{ match.games[match.gamesPlayed] }}</h1>

    <ul v-if="selected === -1 && !selectingNewGame">
      <li v-for="(team, index) in match.teams" v-bind:key="team._id">
        <TeamButton v-bind:team="team" v-bind:teamIndex="index" v-bind:onSelect="onSelect" />
      </li>
      <button class="back-btn" v-on:click="() => onSelectingNewGameChange(true)">New Game</button>
    </ul>

    <div v-if="selected >= 0 && !selectingNewGame">
      <h2>Editing: {{ match.teams[selected].name }}</h2>
      <AmountSelector
        v-bind:team="match.teams[selected]"
        v-bind:onSubmit="onSelect"
        v-bind:teamIndex="selected"
      />
      <UpdateTeamName
        v-bind:team="match.teams[selected]"
        v-bind:onSubmit="onSelect"
        v-bind:teamIndex="selected"
      />
      <button class="back-btn" v-on:click="selected = -1">Back</button>
    </div>

    <div v-if="selectingNewGame">
      <NewGameSelectPage v-bind:finishSelecting="() => onSelectingNewGameChange(false)" />
    </div>
  </div>
</template>

<script>
import openSocket from "socket.io-client";

import AmountSelector from "./AmountSelector";
import MatchService from "../MatchService";
import NewGameSelectPage from "./NewGameSelectPage";
import TeamButton from "./TeamButton";
import UpdateTeamName from "./UpdateTeamName";

export default {
  name: "HelloWorld",
  components: {
    AmountSelector,
    TeamButton,
    UpdateTeamName,
    NewGameSelectPage
  },
  data: function() {
    return {
      match: {},
      selected: -1,
      selectingNewGame: false,
      error: ""
    };
  },
  methods: {
    onSelect(teamIndex) {
      this.selected = teamIndex;
    },
    onSelectingNewGameChange(bool) {
      this.selectingNewGame = bool;
    }
  },
  async created() {
    try {
      this.match = await MatchService.getMatch();
      const socket = openSocket("https://game-show.herokuapp.com");
      // const socket = openSocket("http://localhost:8000");
      socket.on("match", data => {
        const { action, teamIndex } = data;
        if (action === "updateTeamScore") {
          const { gameScore, totalScore } = data.team;
          this.match.teams[teamIndex].gameScore = gameScore;
          this.match.teams[teamIndex].totalScore = totalScore;
        }
        if (action === "updateTeamName") {
          const { name } = data.team;
          this.match.teams[teamIndex].name = name;
        }
        if (action === "newGame") {
          const { updatedMatch } = data;
          this.match = { ...updatedMatch };
        }
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 4em;
}
h2 {
  font-size: 2.5em;
}
ul {
  padding: 0;
}
li {
  list-style: none;
  margin-bottom: 20px;
}
.back-btn {
  color: white;
  background: none;
  border-color: white;
  font-size: 1.5em;
  margin-top: 40px;
  padding: 10px 20px;
}
</style>
