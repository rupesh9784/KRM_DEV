// Array

//dynamic array
// 0 based indexing
let arr1 = [];
console.log(arr1);

let arr2 = new Array(10 , 20 ,30);
console.log(arr2);

let arr3 = [1,2,3,4,5,6,7];
console.log(arr3);


//1. length
console.log("length of arr3" , arr3.length);

//2. value at index
console.log("index at 4th", arr3[4]);

//3. update value at index
arr3[4] = 50;
console.log(arr3);



let arr = [1,2,3,4,5,6,7];
console.log(arr);

//4. add element at end
arr.push(100);
arr.push(200);
arr.push(300);
console.log(arr);

//5. remove element from end
console.log(arr);
arr.pop();

//6. add element at first
arr.unshift(50);
arr.unshift(150);
console.log(arr);


//7. remove from start
arr.shift();
console.log(arr);

//8. to get a part of array
let subArr =  arr.slice(2,6);
console.log(subArr);

//9.1 splice remove and add
//remove splice(startindex , no of element)
arr.splice(2,3);
console.log(arr);

//add splice(startindex , no of element , ele1, ele2 , el3....)
arr.splice(2,2,10,20,30 ,40);
console.log(arr);










