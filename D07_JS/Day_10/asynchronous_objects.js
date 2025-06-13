console.log("Asynchronous and Objects");

//synchronous code

// console.log("Before");

// function fun(){
//     console.log("I am Fun");
// }
// fun();

// console.log("After");

//aynchronous code

// console.log("Before");

// function fun(){ //5sec
//     console.log("I am Fun");
// }

// setTimeout(fun , 2000); // run in somewhere

// console.log("After");
// console.log("next");

// console.log("Before");

// let flag = true;

// function fun() {
//   //5sec
//   console.log("loop break");
//   flag = false;
// }

// setTimeout(fun, 2000); // run in somewhere

// console.log("After");
// console.log("next");

// while (flag) {}

//callstack runs line by line
//Web Api  wait -> move to queue
// callback Queue wait to push in callStack
//Event loop -> can't push in stack until its clear

//quiz1
console.log("Before");
const fun2 = () => {
  console.log("Set timeout 1");
  let timeInFuture = Date.now() + 7000;

  while (Date.now() < timeInFuture) {}
  console.log("after while");
};
const fun1 = () => console.log("hello"); //1sec-> queue
setTimeout(fun1, 2000); // queue wait 5sec in queue
setTimeout(fun2, 1000); //  5sec-> queue

console.log("After");

//quiz2
// console.log("Start");

// setTimeout(() => {
//   console.log("First Timeout (1s)");

//   setTimeout(() => {
//     console.log("Inner Timeout (0.5s)");
//   }, 500);
// }, 1000);

// setTimeout(() => {
//   console.log("Second Timeout (0s)");
// }, 0);

// function runTask() {
//   console.log("Inside runTask");

//   setTimeout(() => {
//     console.log("Timeout inside runTask (300ms)");
//   }, 300);

//   function innerTask() {
//     console.log("Inside innerTask");
//   }

//   innerTask();
// }

// runTask();