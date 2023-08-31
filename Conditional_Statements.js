let age = prompt("Hey What is your Age : ") //taking input from user

age = Number.parseInt(age) //converting a string to number

// 1. Simple if statement

if(age>0)
{
    alert("Your age is : "+age);
}

// 2. if else statement

if(age>0)
{
    alert("This is valid age");
}
else
{
    alert("This is not a valid age");
}

 // 3.if else lader

 if(age<0)
{
    alert("This is not valid age");
}
else if(age<9)
{
    alert("You are a Kid");
}
else
{
    alert("Your age is more than 9 ");
}

// 4. ternary operator

console.log(age<18? "Cannot vote" : "You Can Vote");

console.log("Program Over");


