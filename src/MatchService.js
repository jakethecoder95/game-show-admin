import axios from "axios";

const url = /localhost/.test(location.href)
  ? "http://localhost:8000/"
  : "https://game-show.herokuapp.com/";

const matchURL = url + "match/";
const blessingsURL = url + "blessings/";
const pressYourLuckURL = url + "press-your-luck/";
const millionaireURL = url + "millionaire/";

class MatchService {
  static getMatch() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(matchURL);
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
        const res = await axios.post(matchURL + "update-score", {
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
        const res = await axios.post(matchURL + "update-team-name", {
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
        const res = await axios.post(matchURL + "new-game", {
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

  static submitAnswer(answer) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(millionaireURL + "submit-answer", {
          answer
        });
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static nextQuestion() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(millionaireURL + "next-question");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static nextTeam() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(millionaireURL + "next-team");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static toggleMillionaireTimer() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(millionaireURL + "toggle-timer");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  static helpOptionSelect(option) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(millionaireURL + "help-option-select", {
          option
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
