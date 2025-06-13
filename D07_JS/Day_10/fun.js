console.log("Function");

//1.Function Declaration

// function greet(nam = "User Name") {
//     console.log("Welcome :" , nam);
// }

// // greet();
// greet("Himanshu",  "Bharat");



// function greet(nam) {
//     return "Hello, " + nam + "!";
// }

// let x = greet("Himanshu");
// console.log(x);


//using arguments
// function findNoArg(){
//     // console.log("Total arguments: " ,arguments);
//    for(let i = 0; i<arguments.length; i++){
//        console.log("args : " + (i+1) + " "+ arguments[i] )
//    }

// }
// findNoArg("a" , "b" , 100 ,200 ,"Himanshu " , "Bharat");

//...arr
// function findNoArg(...arrName){
//     console.log("Total arguments: " ,arrName);
// //    for(let i = 0; i<arrName.length; i++){
// //        console.log("args : " + (i+1) + " "+ arrName[i] )
// //    }

// }
// findNoArg("a" , "b" , 100 ,200 ,"Himanshu " , "Bharat");


//constructor
// function person(name, age){
//   this.name = name;
//   this.age = age;
// }

// const p = new person("Bharat" , 22);
// console.log(p.name);
// p.name = "Himanshu";
// console.log(p.name);


//3. Arrow Function
// const multiply = (a,b) => a*b;
// console.log(multiply); //print function
// console.log(multiply(4 , 10)); // get value 

// //without parameter

// const greet = () => "Hello Everyone";

// one argument
// const cube = a => a*a*a;
// console.log(cube(3));

//with block body

// const fun = (firstName , lastName , age) => {
//    console.log("inside fun ");
//    console.log("inside fun " , firstName);
//    console.log("inside fun " , lastName);
//    return `my name is ${firstName} ${lastName} and my age is ${age}`;
// }

// fun("Himan" , "kr" , 22);
// console.log(fun("Himan" , "kr" , 22));

//arguments not work in arrow function
// const fun = () => {
//     console.log("inside fun ");
//     console.log("inside fun :" , arguments);
    
// }

// fun("Himan" , "kr" , 22);
// console.log(fun("Himan" , "kr" , 22));


const fun = (...arr) => {
    console.log("inside fun ");
    console.log("inside fun :" , arr);
    
}

// fun("Himan" , "kr" , 22);
console.log(fun("Himan" , "kr" , 22));

