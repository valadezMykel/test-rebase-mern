var poem =
  "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

var words = poem.split(" ");

var countdownEl = document.querySelector("#countdown");
var poemWordEl = document.getElementById("poemWord");

var time = prompt("What time in milliseconds?");

function prepareRead() {
  // Create the countdown timer.

  var timeLeft = 5;

  var timeInterval = setInterval(function () {
    countdownEl.textContent = timeLeft + " seconds left!";
    timeLeft--;

    if (timeLeft === -1) {
      clearInterval(timeInterval);
      speedRead();
    }
  }, 1000);
}

function speedRead() {
  var i = 0;
  // Print words to the screen one at a time.
  console.log("Start speed read");
  var poemInterval = setInterval(function () {
    if (i < words.length) {
      poemWordEl.textContent = words[i];
      i++;
      console.log(i);
    } else {
      clearInterval(poemInterval);
    }
  }, parseInt(time));
}

prepareRead();
