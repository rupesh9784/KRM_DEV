// console.log("world"); //double quotes
// console.log('Hello world');  // single quotes
// console.log('Hello\n world');  // line change
// let variable1 = "Rupesh";
// console.log("my name :" + variable1);

// console.log(`I am
//                     using
//                         backtick`);
// console.log(`I am backtick too with varaible  ${variable1} `);

//types o varaibles

// var x;
// let y = 20;
// const z = 30; // no change
// console.log(x +" "+ y+" " +z);

// var x = 50; // redeclaration is possible
// // let y = 100; redeclaration is not possible
// console.log(x +" "+ y+" " +z);

// x = 100; // updation is possible
// y = 150;// updation is possible
// // z = 200;// updation is notpossible
// console.log(x +" "+ y+" " +z);

// data types 1.Primitive-> number , undefine , string , boolean ,null ,bigInt , symbol etc.
// 2. non primitive -> array , function , object
// type of
// let a;
// console.log("line 33" , a, "type of a: ", typeof(a)); //undefine

// a = 10;
// console.log("line 36" , a , "type of a: ", typeof(a)); //number

// a = 10.55;
// console.log( "line 39" ,a ,"type of a: ", typeof(a)); //number

// a = "praveen";
// console.log( "line 42" ,a,"type of a: ", typeof(a)); //string

// a = true;
// console.log( "line 45" ,a,"type of a: ", typeof(a)); //boolean

// a= null;
// console.log( "line 48" ,a,"type of a: ", typeof(a)); //object

// function
// greeting();
//without argument
// function greeting(){
//     console.log("Good Morning :) !");
//     function greeting2(){
//         console.log("Good Night :) !");
//     }
//     greeting2();
// }

// with argument
function greeting(name) {
  console.log("Good Morning :) !" + name);
  function greeting2() {
    console.log("Good Night :) !");
  }
  greeting2();
}

greeting();
greeting(10);
greeting("Naman");
