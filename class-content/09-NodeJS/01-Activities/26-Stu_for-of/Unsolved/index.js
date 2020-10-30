const liEl = document.querySelectorAll("li")
console.log(liEl)

for (let li of liEl) {
    li.classList.add("red")
}