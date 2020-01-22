import axios from "axios";

const url = "https://game-show.herokuapp.com/match/";
const blessingsURL = "https://game-show.herokuapp.com/blessings/";
const pressYourLuckURL = "https://game-show.herokuapp.com/press-your-luck/";

// const url = "http://localhost:8000/match/";
// const blessingsURL = "http://localhost:8000/blessings/";
// const pressYourLuckURL = "http://localhost:8000/press-your-luck/";

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

  static addPhrase(newPhrase, catagory) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(blessingsURL + "add-phrase", {
          newPhrase,
          catagory
        });
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static addLetter(newLetter) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(blessingsURL + "add-letter", {
          newLetter
        });
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static nextPhrase() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(blessingsURL + "next-phrase");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static start() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(pressYourLuckURL + "start");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static addSpins(amount, teamIndex) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(pressYourLuckURL + "add-spins", {
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

  static pass() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(pressYourLuckURL + "pass");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static setActiveTeam(teamIndex) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(pressYourLuckURL + "set-active-team", {
          teamIndex
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
