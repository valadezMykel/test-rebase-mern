var imgsEL = document.querySelectorAll("img");
var imgArr = []

for(let i = 0; i < imgsEL.length; i++){
    imgsEL[i].setAttribute("src", "./images/image_"+(i+1)+".jpg");
}