console.log("Code exeution and hoisting");




//var
// console.log(c);

// var c;
// console.log(c);

// c = 30;
// console.log(c);






// let
// console.log(a); // tdz error

// let a;   //tdz end
// console.log(a);


// a = 10;
// console.log(a);
// console.log(a); // tdz error

//const
// const a = 20;   //tdz end
// console.log(a);


// a = 10; //error
// console.log(a);





function fn(){
    console.log("I am first");
    console.log("I am first part 2");
    
}


function fn(){
    console.log("I am second");
}


function fn(){
    console.log("I am third");
}

fn();