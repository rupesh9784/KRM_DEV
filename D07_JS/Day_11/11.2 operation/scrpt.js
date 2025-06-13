console.log("DOM Operation");

//select element id single element
// let bx1 = document.getElementById("mainHeading");
// console.log(bx1);
// bx1.textContent = "DOM operation"
// bx1.style.color = "pink";

// //select class
// let classText = document.getElementsByClassName("text");
// console.log(classText);


// for(let i = 0; i<classText.length; i++){

//     classText[i].style.color = "red";
//     classText[i].style.backgroundColor = "lightgreen";
// }

//select through element
// let allPtag = document.getElementsByTagName("p");
// console.log(allPtag);

// for(let i = 0; i<allPtag.length; i++){
//     allPtag[i].style.fontStyle = "italic";
// }


//querySelector -> first matching element
let idSel = document.querySelector("#mainHeading").innerText;
console.log(idSel);

// let firstlst = document.querySelector(".task-item");
// firstlst.textContent = "Update task";

// console.log(firstlst);

let allTask = document.querySelectorAll("ul li");
// alllst.textContent = "Update task";

console.log(allTask);
allTask[1].innerText = "Update task";

// break till 10:15

//add element
let ParNode = document.getElementById("todoList");
let node = document.createElement("li");
node.textContent = "new Task added";
node.className = "task-item";
ParNode.appendChild(node);


let btnDel = document.querySelector("#btn1");
btnDel.remove();



