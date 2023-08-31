/*
//Q1. Write a program to print the marks of a student in an object using foor loop

let student = {
    suraj : 50,
    aniket : 45,
    sushant : 47,
    pratik : 48
}

for(let i = 0 ; i < Object.keys(student).length ; i++)
{
    console.log(Object.keys(student)[i] + " : " + student[Object.keys(student)[i]]);
}

*/

/*
//Q2. Write a program to print the marks of a student in an object using foor in loop

for(let i in student)
{
    console.log("Marks of "+ i + " : " + student[i]);
}
*/

/*
// Q3. Write a program to print "try again" until the user enters the correct number

let num = 0;
let x = 10;

while(num != x)
{
    num = Number.parseInt(prompt("Enter Number : "));
    console.log("try again");
}

console.log("You have Entered Correct number");

*/

//Q4. write a function to find mean of 5 numbers

const mean = (a,b,c,d,e) =>
{
    return (a + b + c + d + e) / 5;
}

console.log(mean(2,4,5,6,8))