class Character {
  // method which prints all of the stats for a character
  constructor(name, strength, hitpoints) {
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }

  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if(this.hitpoints > 0) {
      console.log(`${this.name} is alive!`);
      return true;
    }

    console.log(`${this.name} is dead!`);
    return false;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(`${opponent.name} was attacked for ${this.strength} damage!`);
    // Then, change the opponent's hitPoints to reflect this
    opponent.hitpoints -= this.strength;
  }
}

// Create two unique characters using the "character" class

const john = new Character("John", 18, 300);
const badguy = new Character("Bad Guy", 16, 400);

john.printStats();
badguy.printStats();

let johnTurn = true;

const turnInterval = setInterval(() => {
  if(!john.isAlive() || !badguy.isAlive()) {
    clearInterval(turnInterval);
    console.log("Game over!");
  } else if (johnTurn) {
    john.attack(badguy);
    badguy.printStats()
  } else {
    badguy.attack(john);
    john.printStats();
  }

  johnTurn = !johnTurn;
}, 2000)

// Create an interval that alternates attacks every 2000 milliseconds
