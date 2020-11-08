function Shape (area, perimeter){
    this.area = area;
    this.perimeter = perimeter;
}

Shape.prototype.printInfo = function () {
  for (const key in this) {
    console.log(`${key}: ${this[key]}`);
  }
}

export default Shape;
