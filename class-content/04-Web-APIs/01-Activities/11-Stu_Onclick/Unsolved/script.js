var dbtn = document.getElementById("decrement");
var upbtn = document.getElementById("increment");
var count = document.getElementById("count");

var counter = parseInt(count.textContent);

dbtn.addEventListener("click", function(){
    if(counter > 0){
        counter--;
        count.textContent = counter;

    }
})
upbtn.addEventListener("click", function(){
    counter++;
    count.textContent = counter;
})