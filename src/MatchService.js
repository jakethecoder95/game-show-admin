import axios from "axios";

const url = "https://game-show.herokuapp.com/match/";
// const url = "http://localhost:8000/match/";

class MatchService {
  static getMatch() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static updateScore(amount, teamIndex) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(url + "update-score", {
          amount,
          teamIndex
        });
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static updateTeamName(name, teamIndex) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(url + "update-team-name", {
          name,
          teamIndex
        });
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static startNewGame(newGameName) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(url + "new-game", {
          name: newGameName
        });
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default MatchService;
