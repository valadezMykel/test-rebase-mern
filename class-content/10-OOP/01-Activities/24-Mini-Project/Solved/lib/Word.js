const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = word.split("").map(char => new Letter(char));
  }

  toString() {
    return this.letters.join(" ");
  }

  guessLetter(char) {
    let foundLetter = false;
    this.letters.forEach(letter => {
      if(letter.guess(char)) {
        foundLetter = true;
      }
    });

    console.log("\n" + this + "\n");

    return foundLetter;
  }

  guessedCorrectly() {
    return this.letters.every(letter => letter.visible);
  }

  getSolution() {
    return this.letters.map(letter => letter.getSolution()).join("");
  }
}

module.exports = Word;