// Step 1: get reference to UI elements
var themeSwitcher = document.querySelector("#theme-switcher"); // the clickable UI element
var container = document.querySelector(".container"); // the UI element updated by the click
var mode = "dark";

// Step 2: listen for user interaction
themeSwitcher.addEventListener("click", function () {
  // Step 3: handle the user interaction

  // Step 4: update the UI
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  } else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});
