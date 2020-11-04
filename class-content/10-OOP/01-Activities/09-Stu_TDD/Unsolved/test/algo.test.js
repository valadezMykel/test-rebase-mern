const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {

  });

  describe("isPalindrome", () => {
    it("Returns true when string is palendrome"), function(){
      let str = "racecar";
      let result = isPalindrome(string);
      let exResult = true;
      expect(result).toEqual(true);
    }
  });

  describe("capitalize", () => {
    it("returns the string input with all the first letters capitalized", () =>{
      let string = "hello world";
      let result = capitalize(string);
      let exResult = "Hello World"
      expect(result).toEqual("Hello World")
    })
  });
});
