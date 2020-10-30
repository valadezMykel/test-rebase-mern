function Movie(title, releaseYear) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.getTitle = function() {
        return title;
    }
}

// You must use 'function' when assigning to prototype. 
// Otherwise, 'this' will be the global object,
// window in the browser, undefined in node.
Movie.prototype.logInfo = function() {
    console.log(`${this.title} was released in ${this.releaseYear}`);
};

const theShining = new Movie("The Shining", 1980)
console.log(theShining);

const starWars = new Movie("Star Wars", 1977)
console.log(starWars);

console.log(theShining.__proto__)
console.log(starWars.__proto__)

console.log(theShining.__proto__ === starWars.__proto__);

// theShining.logInfo();

// console.log(theShining.hasOwnProperty('title'));
// console.log(theShining.hasOwnProperty('logInfo'));
// console.log(Movie.prototype.hasOwnProperty('logInfo'));
//