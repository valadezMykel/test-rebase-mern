const Word = require("./Word");
const inquirer = require("inquirer");

class Game {
  constructor(words) {
    this.guessesLeft = 10;
    this.words = words;
    this.currentWord = null;
  }

  play() {
    this.guessesLeft = 10;
    this.reset();
  }

  reset() {
    const randWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.currentWord = new Word(randWord);
    console.log("\n" + this.currentWord + "\n");
    this.makeGuess();
  }

  makeGuess() {
    this.askForLetter().then(() => {
      if(this.guessesLeft < 1) {
        console.log(`No guesses left! The word was ${this.currentWord.getSolution()}`)
      } else if(this.currentWord.guessedCorrectly()) {
        console.log("You won!")
        this.play();
      } else {
        this.makeGuess();
      }
    });
  }

  askForLetter() {
    return inquirer.prompt([
      {
        type: "input",
        name: "choice",
        message: "Guess a letter",
        validate: val => /[a-z1-9]/gi.test(val)
      }
    ]).then( val => {
      const didGuessCorrectly = this.currentWord.guessLetter(val.choice);

      if(didGuessCorrectly) {
        console.log("\n Correct! \n");
      } else {
        this.guessesLeft--;
        console.log("\n Incorrect! \n")
        console.log(this.guessesLeft + " guesses remaining!")
      }
    })
  }
}

module.exports = Game;