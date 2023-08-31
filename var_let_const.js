console.log("Difference between var, let and const");
var x = 10;
let y = "suraj";
var z = null

const rollno = 3;
rollno = 5; //This will through error as the variable is constant and cannot be changed 

{
    let y = 'this'
    console.log(y);
}

console.log(y);