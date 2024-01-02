import { computed, makeObservable, observable, action, autorun } from "mobx";

export class GameState {
  wordBank = [
    "FLOURISH",
    "MAGNIFY",
    "SPECRTUM",
    "RESEMBLE",
    "SUSTAIN",
    "CATHEDRAL",
    "MYSTERY",
    "FURIOUS",
    "HARMONY",
    "SCULPTURE",
  ];

  players = [];
  word = "";
  revealedWord = "";
  letterBank = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  gameStarted = false;
  gameOver = false;

  constructor() {
    makeObservable(this, {
      players: observable,
      word: observable,
      letterBank: observable,
      revealedWord: observable,
      gameStarted: observable,
      gameOver: observable,
      addPlayer: action,
      deletePlayer: action,
      generateWord: action,
      guessLetter: action,
      startGame: action,
      report: computed,
      getLetterBank: computed,
      getWinner: computed,
    });
    autorun(() => console.log(this.report));
  }

  get getWinner() {
    if (this.players.length > 0) {
      let winnerIndex = 0;

      for (let i = 1; i < this.players.length; i++) {
        if (this.players.at(i).points > this.players.at(winnerIndex).points) {
          winnerIndex = i;
        }
      }

      return this.players.at(winnerIndex).name;
    } else {
      return "";
    }
  }

  get getLetterBank() {
    let letterStr = "";
    for (let i = 0; i < this.letterBank.length; i++) {
      letterStr += this.letterBank.at(i);
      if (i < this.letterBank.length - 1) {
        letterStr += ", ";
      }
    }
    return letterStr;
  }

  get report() {
    return JSON.stringify(this.players);
  }

  addPlayer(name, picturePath) {
    this.players.push({
      name: name,
      picturePath: picturePath,
      points: 0,
    });
  }

  deletePlayer(index) {
    this.players.splice(index, 1);
  }

  generateWord = () => {
    this.word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    this.revealedWord = "*".repeat(this.word.length);
  };

  startGame = () => {
    this.word = "";
    this.revealedWord = "";
    this.letterBank = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    this.gameOver = false;

    this.players.forEach((player) => {
      player.points = 0;
    });

    this.generateWord();
    this.gameStarted = true;
  };

  guessLetter(playerIndex, letter) {
    this.letterBank.splice(this.letterBank.indexOf(letter), 1);

    if (this.word.includes(letter)) {
      let newRevealedWord = "";
      for (let i = 0; i < this.word.length; i++) {
        if (letter == this.word.charAt(i)) {
          this.players.at(playerIndex).points++;
          newRevealedWord += letter;
        } else {
          newRevealedWord += this.revealedWord.charAt(i);
        }
      }

      this.revealedWord = newRevealedWord;
    }

    if (!this.revealedWord.includes("*")) {
      this.gameOver = true;
    }
  }
}
