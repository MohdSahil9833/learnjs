 // function are a set of code which can use repetedally

 function saymyname(){
    console.log("s");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("l");
 }
 //our function is ready
 saymyname()
 //function calling for our output
/*
 function addtwonum(num1,num2){
    console.log(num1 + num2);
 }
 //(num1,num2) is permeters
 addtwonum(2,2) //4 
 //(2,2) is argument
*/
function addtwonum(num1,num2){
   // let result = num1 + num2
   // return result
   return num1 + num2
}
const result = addtwonum(2,2 )
console.log("result: ", result);
//result:4

function loginusermsg(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return  `${username} just logged in`
}
console.log(loginusermsg("sahil"));//sahil just logged in
console.log(loginusermsg());//undefined just logged in

 // for shopping cart
 
 function calcartprice(val1, val2, ...num1){
    return num1
 }
 console.log(calcartprice(200,400,500, 2000));
//200 after ...(rest opertor ) this [ 200, 400, 500 ]
//[ 500, 2000 ] using `val1, val2, ...num1` this


const user = {
    username: "hitesh",
    price: 199
}
//this is object
function handleobj(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobj(user)
//username is hitesh and price is 199
handleobj({
   username: "sam",
   price: 399
})
//username is sam and price is 399

const mynewaary = [200, 400, 100, 600]

function returnSecondvalue(getarray){
   return getarray[1]
}
console.log(returnSecondvalue(mynewaary)); //400
console.log(returnSecondvalue([200, 400, 500, 1000])); //400

