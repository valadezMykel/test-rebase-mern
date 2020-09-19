// Step 1: references to the UI
var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

var tipResultEl = document.querySelector("#tip-amount");
var totalResultEl = document.querySelector("#new-total");

console.log(submitEl);

// Step 2: initialize state
var calculatedTip = 0;
var calculatedTotal = 0;

function handleTipSubmit(event) {
  event.preventDefault();
  console.log(event);
  var tipPercentage = parseFloat(tipEl.value) * 0.01;
  var total = parseFloat(totalEl.value);

  // update state
  calculatedTip = (total * tipPercentage).toFixed(2);
  calculatedTotal = (parseFloat(total) + parseFloat(calculatedTip)).toFixed(2);

  // Step 4: update UI
  tipResultEl.textContent = calculatedTip;
  totalResultEl.textContent = calculatedTotal;
}

// Step 3: listen for user submission
submitEl.addEventListener("click", handleTipSubmit);
