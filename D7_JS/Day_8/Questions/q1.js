// ques1
// You are given a string. Your task is to:
let str = "   Hello I love JavaScript. javascript is Awesome!   ";
// TODOs:
console.log(str);

// Remove any leading and trailing spaces.
str = str.trim();
console.log(str);

// Convert the entire message to lowercase.
str = str.toLowerCase();
console.log(str);

// Replace all occurrences of the word "javascript" with "JS".
str = str.replaceAll("javascript" , "JS");
console.log(str);


// Count how many words are in the message (split by space).
let count = str.split(" ").length;
console.log(count);

// Capitalize the first character of the final string and print it.

str = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str);




