const btn = document.getElementsByClassName("btn") [0] ;
const text = document.getElementsByClassName("text") [0];
const colors =["Red", "Green", "Blue", "Yellow", "Purple"];

function clicked() {
   text.innerText = [colors];
}

btn.addEventListener("click",clicked);