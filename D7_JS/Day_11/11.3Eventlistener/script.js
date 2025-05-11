console.log("event");

let btn = document.querySelector("button");
console.log(btn);
// btn.onclick =
// function() {
//     alert("button was clicked");
// }

btn.addEventListener("click" , getAlert);

function getAlert() {
    alert("button was clicked");
}