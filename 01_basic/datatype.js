// primitive datatype (call by value) : string , number , Boolean , null , undefined , symbol , bigint .

const score = 100
console.log(typeof score);
const scoreValue = 100.3
console.log(typeof scoreValue);


const isLoggedIn = false
console.log(typeof isLoggedIn);

const outsideTemp = null
console.log(typeof outsideTemp);

let userEmail;
console.log(typeof userEmail);


const id = Symbol("123")
console.log(typeof id);

const anotherId = Symbol("123")
console.log(anotherId);

console.log(id === anotherId);

const bignumber = 123456789n
console.log(typeof bignumber);

//number
//number
//boolean
//object
//undefined
//symbol
//Symbol(123)
//false
//bigint

//non-primitive (call by refernce) : array , objects , function

const heros = ["batman","superman","flash"];
console.log(typeof heros)
let myObj = {
    name: "sahil",
    age: 22,
}
console.log(typeof myObj)

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction)

//object
//object
//function