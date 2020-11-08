const Game = require("./lib/Game");
const words = [
  "John",
  "is",
  "cool"
];

const game = new Game(words);

game.play();