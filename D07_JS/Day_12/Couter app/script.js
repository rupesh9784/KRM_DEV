
console.log("counter");
const countVal = document.getElementById("count");
const increBtn = document.getElementById("increment");
const decreBtn = document.getElementById("decrement");
const reset = document.getElementById("reset");

let count = 0;
increBtn.addEventListener("click", ()=>{
    count++;
    countVal.textContent = count;
})
decreBtn.addEventListener("click", ()=>{
    count--;
    countVal.textContent = count;
})
reset.addEventListener("click", ()=>{
    count=0;
    countVal.textContent = count;
})



