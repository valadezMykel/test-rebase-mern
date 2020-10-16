var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

for(let i = 0; i < todos.length; i++)
{
    let tempEl = document.createElement("li");
    todoList.appendChild(tempEl);
    tempEl.textContent = todos[i];
    
}