const Rectangle = require("./rectangle");

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side
  }
}

module.exports = Square;