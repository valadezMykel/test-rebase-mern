function Character(name, profession, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;

  this.printStats = function () {
    console.log("Name: " + this.name + "\nProfession: " + this.profession +
    "\nAge: " + this.age + "\nStrength: " +
	  this.strength + "\nHitPoints: " + this.hitpoints);
	  console.log("\n-------------\n");
  }
}

Character.prototype.isAlive = function () {
  if(this.hitpoints > 0) {
    console.log(this.name + " is alive!");
    console.log("\n------------\n");
    return true;
  }

  console.log(this.name + " is dead");
  return false;
};

Character.prototype.attack = function(opponent) {
  opponent.hitpoints = opponent.hitpoints - this.strength;
}

Character.prototype.levelup = function() {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
}

const john = new Character("john", "Cool Guy", 50, 18, 200);
const badguy = new Character("Bart", "Bad Guy", 43, 18, 300);

john.isAlive();
john.attack(badguy);

badguy.printStats();

john.levelup();
john.printStats();