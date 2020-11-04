class Letter {
  constructor(char) {
    this.char = char;
    this.visible = !/[a-z1-9]/i.test(char);
  }

  toString() {
    if(this.visible === true) {
      return this.char;
    }

    return "_";
  }

  guess(charGuess) {
    if(charGuess.toLowerCase() === this.char.toLowerCase()) {
      this.visible = true;
      return true;
    }

    return false;
  }

  getSolution() {
    return this.char;
  }
}

module.exports = Letter;