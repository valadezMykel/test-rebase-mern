////////////////////////////////////////////////////
// Constructor Function
// 
// The constructor function has instance variables:
// each instance has its own copy of the variables
// which are created at the time of instantiation.
////////////////////////////////////////////////////
/**
 * Movie
 * @param {string} title 
 * @param {string} releaseYear 
 */
function Movie(title, releaseYear) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.getTitle = function() {
        return title;
    }

    // count is a variable on the prototype. It is shared
    // by every instance. This variable counts how many
    // Movie objects have been created. When accessing
    // variables on the prototype while in the constructor,
    // you need to use this.__proto__.myVar.
    this.__proto__.count++;
}

////////////////////////////////////////////////////
// Prototype
//
// Variables (both methods and properties) attached 
// directly to the prototype are shared by every 
// instance.
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// No arrow functions on the prototype
////////////////////////////////////////////////////
// You must use 'function' when assigning to prototype. 
// Otherwise, 'this' will be the global object,
// window in the browser, undefined in node.
Movie.prototype.logInfo = function() {
    console.log(`${this.title} was released in ${this.releaseYear}`);
};

// This variable is shared by every instance. A variable
// that is available to all instances is called a static variable
Movie.prototype.count = 0

// When accessing count on the prototype in a prototype function,
// either this.__proto__.count or this.count will work
Movie.prototype.showCount = function() {
    console.log(`Count is ${this.__proto__.count}`);
};

const theShining = new Movie("The Shining", 1980)
console.log(theShining);

const starWars = new Movie("Star Wars", 1977)
console.log(starWars);

starWars.showCount();

// The prototype can be changed at runtime, affecting all instances of
// a constructor. 
Movie.prototype.johnInfo = function() {
    console.log(`${this.title} was released in ${this.releaseYear}`);
};

console.log(starWars);
console.log(theShining);

// Changes to an instance only change that instance
starWars.director = "Lucas";

// The prototype for each instance is the same exact object
// This === evaluates to true
console.log(theShining.__proto__ === starWars.__proto__);

// You can check to see whether a property belongs to the instance
// or prototype by using the .hasOwnProperty method which is available
// to all Objects of all types
console.log(theShining.hasOwnProperty('title'));
console.log(theShining.hasOwnProperty('logInfo'));

// The prototype is also an object so it can also use .hasOwnProperty
console.log(Movie.prototype.hasOwnProperty('logInfo'));