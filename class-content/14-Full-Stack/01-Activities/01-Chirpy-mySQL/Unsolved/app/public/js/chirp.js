// When the page loads, grab and display all of our chirps

$.get("/api/all", function(data) {
  
  console.log(data);
  console.log(data.length);
  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].chirp + "</p>");
      row.append("<p>On " + new Date(data[i].time_created).toLocaleDateString() + "</p>");

      $("#chirp-area").prepend(row);

    }

  }

});

// When user chirps (clicks addBtn)
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newChirp = {
    author: $("#author").val().trim(),
    body: $("#chirp-box").val().trim(),
    created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
  };

  console.log(newChirp);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newChirp)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newChirp.author + " chirped: </p>");
      row.append("<p>" + newChirp.chirp + "</p>");
      row.append("<p>On " + new Date(newChirp.time_created).toLocaleDateString() + "</p>");

      $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");
});
