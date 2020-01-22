<template>
  <div>
    <h1>{{ match.games[match.gamesPlayed] }}</h1>

    <ul v-if="selected === -1 && !selectingNewGame">
      <AddPhrase v-if="match.games[match.gamesPlayed] === 'WHEEL OF BLESSINGS'" />
      <PressYourLuckActionBtns
        v-if="match.games[match.gamesPlayed] === 'Press Your Luck'"
        v-bind:pressYourLuck="match.pressYourLuck"
      />
      <li v-for="(team, index) in match.teams" v-bind:key="team._id">
        <TeamButton v-bind:team="team" v-bind:teamIndex="index" v-bind:onSelect="onSelect" />
      </li>
      <NextPhraseBtn v-if="match.games[match.gamesPlayed] === 'WHEEL OF BLESSINGS'" />
      <button class="standard-btn" v-on:click="() => onSelectingNewGameChange(true)">New Game</button>
    </ul>

    <div v-if="selected >= 0 && !selectingNewGame">
      <h2>Editing: {{ match.teams[selected].name }}</h2>
      <AmountSelector
        v-bind:team="match.teams[selected]"
        v-bind:onSubmit="onSelect"
        v-bind:teamIndex="selected"
        v-bind:isWheelOfBlessings="match.games[match.gamesPlayed] !== 'WHEEL OF BLESSINGS'"
      />
      <EditSpins
        v-if="match.games[match.gamesPlayed] === 'Press Your Luck'"
        v-bind:onSubmit="onSelect"
        v-bind:teamIndex="selected"
      />
      <UpdateTeamName
        v-if="match.games[match.gamesPlayed] !== 'WHEEL OF BLESSINGS'"
        v-bind:team="match.teams[selected]"
        v-bind:onSubmit="onSelect"
        v-bind:teamIndex="selected"
      />
      <button class="standard-btn" v-on:click="selected = -1">Back</button>
    </div>

    <div v-if="selectingNewGame">
      <NewGameSelectPage v-bind:finishSelecting="() => onSelectingNewGameChange(false)" />
    </div>

    <div v-if="match.games[match.gamesPlayed] === 'WHEEL OF BLESSINGS'">
      <h3>
        Letters Guessed:
        <span
          v-for="(letter, i) in match.wheelOfBlessings.guessedLetters"
          v-bind:key="i"
        >{{ letter }}:{{ getLetterOccurrences(letter) }},&nbsp;</span>
      </h3>
      <h3>Current Prase: {{match.wheelOfBlessings.phrases[match.wheelOfBlessings.phrasesPlayed].phrase}}</h3>
    </div>
  </div>
</template>

<script>
import openSocket from "socket.io-client";

import AddPhrase from "./WheelOfBlessings/AddPhrase";
import AmountSelector from "./AmountSelector";
import EditSpins from "./PressYourLuck/EditSpins";
import MatchService from "../MatchService";
import NewGameSelectPage from "./NewGameSelectPage";
import NextPhraseBtn from "./WheelOfBlessings/NextPhraseBtn";
import PressYourLuckActionBtns from "./PressYourLuck/PressYourLuckActionBtns";
import TeamButton from "./TeamButton";
import UpdateTeamName from "./UpdateTeamName";

export default {
  name: "Main",
  components: {
    AddPhrase,
    AmountSelector,
    EditSpins,
    PressYourLuckActionBtns,
    NewGameSelectPage,
    NextPhraseBtn,
    TeamButton,
    UpdateTeamName
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
    },
    getLetterOccurrences(letter) {
      const phraseArr = this.match.wheelOfBlessings.phrases[
        this.match.wheelOfBlessings.phrasesPlayed
      ].phrase.split("");
      return phraseArr.reduce(
        (cnt, l) => cnt + (l.toLowerCase() === letter.toLowerCase()),
        0
      );
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
      socket.on("wheelOfBlessings", data => {
        const { action } = data;
        if (action === "addPhrase") {
          const { newPhrase } = data;
          this.match.wheelOfBlessings.phrases.push(newPhrase);
        }
        if (action === "addLetter") {
          const { newLetter } = data;
          this.match.wheelOfBlessings.guessedLetters.push(newLetter);
        }
        if (action === "nextPhrase") {
          this.match.wheelOfBlessings.guessedLetters = [];
          this.match.wheelOfBlessings.phrasesPlayed++;
        }
      });
      socket.on("pressYourLuck", data => {
        const { action } = data;
        if (action === "start") {
          const { spins } = data;
          this.match.pressYourLuck.teams[
            this.match.pressYourLuck.activeTeam
          ].spins = spins;
          this.match.pressYourLuck.shuffling = true;
        }
        if (action === "stop") {
          this.match.pressYourLuck.shuffling = false;
        }
        if (action === "generalUpdate") {
          const { pressYourLuck } = data;
          this.match.pressYourLuck = pressYourLuck;
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
.standard-btn {
  color: white;
  background: none;
  border-color: white;
  font-size: 1.5em;
  margin-top: 40px;
  padding: 10px 20px;
}
</style>
