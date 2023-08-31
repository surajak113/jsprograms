/*
//Q1. Use Logical operator to find whether the age of a person lies between 10 and 20

let age = prompt("Enter Your Age : ");
agt = Number.parseInt(age);
if(age>=10 && age<=20)
{
    console.log("Your Age is lies between 10 and 20");
}
else
{
    console.log("Your Age does not lies between 10 and 20");
}

*/

/*
//Q2. Demonstrate the use of switch case statement in JavaScript

let age = prompt("What is your Ahe ? : ");
age = Number.parseInt(age);
switch(age)
{
    case 12 : console.log("Your Age is 12");
              break;
    case 13 : console.log("Your Age is 13");
              break;
    case 14 : console.log("Your Age is 14");
              break;
    default : console.log("Your Age is not Special");
              break;
}

*/

/*
//Q3. Write a JavaScript program to find whether a number is divisible by 2 and 3 or not

let num = Number.parseInt(prompt("Enter Number : "));

if((num % 2 === 0) && (num % 3 === 0))
{
    console.log("Number is divisible by both 2 and 3");
}
else
{
    console.log("NUmber is not divisible by both 2 and 3");
}
*/

/*
//Q4. Write a JavaScript program to find whether a number is divisible by either  2 or 3

let num = Number.parseInt(prompt("Enter Number : "));

if((num % 2 === 0) || (num % 3 === 0))
{
    console.log("Number is divisible by Either 2 or 3");
}
else
{
    console.log("NUmber is not divisible by Either 2 or 3");
}

*/

//Print "you can drive " or "ypu cannot drive " based on age being greater than 18 using ternary operator

let age = Number.parseInt(prompt("Enter your age : "));

console.log(age>=18? "YOu Can Drive" : "You Cannot Drive");