console.log("Primitive Data Types  : ");

let a = 500;                            //number
let b = null;                           //null
let c = true;                           //boolean
let d = BigInt("1000")                  //bigint
let e = "Suraj"                         //string
let f = Symbol("I am a Symbol")         //symbol
let g                                   //undefine

console.log(a,b,c,d,e,f,g);

//Non-Primitive Data Type - Objects in Javascript

const item = {
    "abc" : true,
    "def" : false,
    "ghi" : 50,
    "jkl" : undefined
}

console.log(item.abc)