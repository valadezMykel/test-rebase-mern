import Shape from "./shape.js";

function Rectangle(sideA, sideB) {
  const area = sideA * sideB;
  const perimeter = sideA * 2 + sideB * 2;
  this.sideA = sideA;
  this.sideB = sideB;

  Shape.call(this, area, perimeter)
}

Rectangle.prototype = Object.create(Shape.prototype);

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();

console.log(rectangle);