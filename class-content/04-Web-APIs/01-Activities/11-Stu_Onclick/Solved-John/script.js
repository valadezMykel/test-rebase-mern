// Step 1: access the UI
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.getElementById("count");

// Step 2: initialize state
var counter = 0;

incrementEl.addEventListener("click", function () {
  // step 3: update state

  // step 4: update UI
  countEl.textContent = counter++;
});

decrementEl.addEventListener("click", function () {
  if (counter > 0) {
    // step 3: update state
    counter--;

    // step 4: update UI
    countEl.textContent = counter;
  }
});
