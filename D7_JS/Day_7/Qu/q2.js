// Ques 1 : Mon ,Wed , Fri -> Work from home , Tue , thru -> Work from office , sat , sun ,holiday.

let day = "ss";

if(day == "Monday" || day == "Wednesday" || day == "Friday"){
    console.log("Work From Home");
} else if(day == "Tuesday "|| day == "Thrusday"){
    console.log("Work From Office");
} else if(day == "Saturday" || day == "Sunday"){
    console.log("Holiday");
} else {
    console.log("Invalid Input");
}


// using loops -> while , for

// * fizz buzz
// *  target -> 20
//    1->20
//    if number divisble by 3 only-> fizz
//    if number divisble by 5 only-> buzz
//    if number 3 & 5 both se divisble -> fizzBuzz
//    other wise -> number
// *  */
let target = 20;
for(let i = 1; i<=target; i++){
   if(i%3 == 0 && i%5 != 0){
    console.log("fizz");
   } else if(i%5 == 0 && i%3 != 0){
       console.log("buzz");
   } else if(i%3==0 && i%5==0){
       console.log("fizzbuzz");
    } else {
    console.log("Number : " + i);
   }
}


