//q1.1
// let a = 10;
// let a = 20;
// console.log(a); // error

//q1.2
// var a = 10;
// var a = 20;
// console.log(a); //20

//q2.1
// function test() {
//     let x = 100;
//     console.log(x); //100
// }
// test();
// console.log(x+10); //error

//q2.2
// function test() {
//     var x = 100;
//     console.log(x); //100 
// }
// test();
// console.log(x+10); //error

//q3.1
// if (true) {
//     let ss = "active";
//     console.log(ss); //active
// }
// console.log(ss); //error

//q3.2
// if (true) {
//     var ss = "active";
//     console.log(ss); //active
// }
// console.log(ss); //error

// q4.1
// for (let i = 0; i < 3; i++) {
//     console.log("Inside loop:", i); // 0 1 2
// }
// console.log("Outside loop:", i); //error


// q4.2
//  for (var i = 0; i < 3; i++) {
//     console.log("Inside loop:", i);
// }
// console.log("Outside loop:", i);

// q5.1
// let value = 10;
// function display() {
//     let value = 20;
//     console.log(value);
// }

// display();
// console.log(value);

// q5.2
// var value = 10; // global context

// function display() {
//     var value = 20;  // display context
//     console.log(value);
// }

// display();
// console.log(value);


// q6.1
// let count = 10; //gec

// function update() {
//     function modify() {
//         count = 20; //accessible update count 10 ->20
//     }

//     console.log("Before modify:", count); //10
//     modify();
//     console.log("After modify:", count);  //20
// }

// update();

// q6.2
// var count = 10;

// function update() {
//     function modify() {
//         count = 20;
//     }

//     console.log("Before modify:", count); //10
//     modify();
//     console.log("After modify:", count); //20
// }

// update();

//q7.1 Lexical scope 
// function a() { //function create
//     console.log("inside ", x); //10
// }

// function b() {
//     let x = 20; // b context
//     console.log("value of x in fun b", x); //20
//     //    function call
//     a(); // function call
//     console.log("value of x in fun b again", x); //20
// }
// let x = 10; //gec with value tdz
// b();


//q7.2 x = undefine
// function a() {
//     console.log("inside ", x);
// }

// function b() {
//     var x = 20;
//     console.log("value of x in fun b", x);
//     //    function call
//     a();
//     console.log("value of x in fun b again", x);
// }

// var x = 10;
// b();

// q8.1
//gec x=1, outer() , 
// let x = 1;
// console.log("140 global Before", x); //1
// function outer() {
//     //outer context  x = 2 ,inner
//     let x = 2;
//     console.log("143 outer Before", x); //2
    
//     function inner() {
//         //inner context x = undefine->tdz
//         console.log("146 Inner Before: ", x); //error
//         let x = 3;
//         console.log("148 Inner After:", x);
//     }
//     inner();
//     console.log("151 outer After", x);
// }
// outer();
// console.log("154 global After", x);


// q8.2
//gec x=1, outer() , 
// var x = 1;
// console.log("140 global Before", x); //1
// function outer() {
//     //outer context  x = 2 ,inner()
//     var x = 2;
//     console.log("143 outer Before", x); //2
    
//     function inner() {
//         //inner context x = 3
//         console.log("146 Inner Before: ", x); //undefine
//         var x = 3;
//         console.log("148 Inner After:", x); //3
//     }
//     inner();
//     console.log("151 outer After", x); //2
// }
// outer();
// console.log("154 global After", x); //1

//q9.1
//gec x= 1;
// let x = 1;
// {
//     //context x = 2;
//     let x = 2;
//     {
//         //context x = 3;
//         let x = 3;
//         console.log(x); //3
//     }
//     console.log(x); //2
// }
// console.log(x); //1


//q9.2 //gec x = 3;
// var x = 1;
// {
//     var x = 2;
//     {
//         var x = 3;
//         console.log(x); //3
//     }
//     console.log(x); //3
// }

// console.log(x); //3



//q10.1 -> H.W
// let name = "global";

// function one() {
//     let name = "function";

//     if (true) {
//         let name = "block";
//         console.log("Inside block:", name);
//     }

//     console.log("Inside function:", name);
// }

// one();
// console.log("Global:", name);


//q10.2 -> H.W
// var name = "global";

// function one() {
//     var name = "function";

//     if (true) {
//         var name = "block";
//         console.log("Inside block:", name);
//     }

//     console.log("Inside function:", name);
// }

// one();
// console.log("Global:", name);