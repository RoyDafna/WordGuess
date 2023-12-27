import { computed, makeObservable, observable } from "mobx";

export class GameState {
  wordBank = [
    "flourish",
    "magnify",
    "spectrum",
    "resemble",
    "sustain",
    "cathedral",
    "mystery",
    "furious",
    "harmony",
    "sculpture",
  ];

  players = [];
  word = "";
  revealedWord = "";
  letterBank = [];

  constructor() {
    makeObservable(this, {
      players: observable,
      word: observable,
      letterBank: observable,
      revealedWord: observable,
      addPlayer: action,
      deletePlayer: action,
      generateWord: action,
      guessLetter: action
    });
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

  generateWord() {
    this.word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    this.revealedWord = "*" * this.word.length;
  }

  guessLetter(playerIndex, letter) {
    this.letterBank.splice(this.letterBank.indexOf(letter), 1);
    if (letter in word) {
      let newRevealedWord = "";
      for (let i = 0; i < this.word.length; i++) {
        if (letter == this.word.charAt(i)) {
          this.players.at(playerIndex).points++;
          newRevealedWord += letter;
        } else {
          newRevealedWord += this.word.charAt(i);
        }
      }

      this.revealedWord = newRevealedWord;
    }
  }
}
