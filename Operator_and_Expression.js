console.log("Operator in Javascript")

let a = 10;
let b = 2;

// + , - , * , / are the operators and a , b are the operands
// 1. Arithematic Operators :

console.log("a + b : ", a+b)
console.log("a - b : ", a-b)
console.log("a * c : ", a*b)
console.log("a / b : ", a/b)
console.log("a ** b : ", a**b)
console.log("a % b : ", a%b)
console.log("a++ : ", a++)          //it will print value of a and then it will increment value of a
console.log("--a : ", --a)          //it will decrement the value of a then it will print the value

// 2. Assignment Operators : 

a = 20

a += 10
a -=5
a *= 2
a /= 2
a %= 5

// 3. Comparison Operators : 

let num1 = 6;
let num2 = 4;

console.log("num1 == num2 is : ", num1==num2)
console.log("num1 != num2 is : ", num1!=num2)
console.log("num1 === num2 is : ", num1===num2) //it compares the value as well as the type of the variable is both are same then true else false
console.log("num1 !== num2 is : ", num1!==num2)

// 4. Logical Operators :

let x = 10;
let y = 25;

console.log(x<y && x==10) //if both conditions will be true then it will print true else false
console.log(x>y || x==10) //if both conditions will be false then it will print false else true
console.log(!false)      //it will print true



