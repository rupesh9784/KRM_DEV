console.log("Hello");

let btn = document.querySelector(".btn");
let box = document.querySelector(".box");
console.log(btn);

// btn.onclick = function(){
//    alert("btn was press"); 
// }

let colorArr = ["red" , "blue" , "green" , "black" , "orange" , "cyan" , "yellow"];

let i = 0;
const changeColor = function(){
    // alert("btn was press"); 
    if(i == colorArr.length) i = 0;
    box.style.backgroundColor = colorArr[i];
    i++;
}

btn.addEventListener("click" , changeColor);