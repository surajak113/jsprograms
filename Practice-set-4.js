/*
//Q1. What will the following print in JavaScript ?
//Console.log("har\".lenght)

let nm = "Har\"";
console.log(nm.length)   // Output will be : 4
*/


//Q2. Explore the includes, StartWith & Endwith Functions of a string

const sentence = "I am studing in SGMCOE";
const word = "SGMCOE";
console.log(`The Word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

console.log(`sentence  ${sentence.startsWith(word) ?'starts with : the word' : ' Does not start with this word ' }`);

console.log(`sentence  ${sentence.endsWith(word) ?'ends with the word' : ' Does not ends wit this word ' }`);



/*
//Q3. Write a program to Convert a given string to lowercase

let nm = "SURAJ";

console.log(nm.toLowerCase());

*/

/*
//Q4. Extract the amount of the string "Please give Rs 1000";

let sentence = "Please give Rs 1000";

let amt = Number.parseInt(sentence.slice(15));

console.log(amt);

*/

/*
//Try to change fourth character of the string were you able to do it

let friend = "rohan"

friend[4] = "A";

console.log(friend); //friend is not changed , because string is immutable

*/


