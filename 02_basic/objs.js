/*
//for decclartion of we have 2 method 1 is literal and 2 is construtor
//Singleton is an constructure type object //object.create
// now we discss object literals

const mySym = Symbol("key1")
//declring symbol

const jsuser = {
    name: "hitesh",
    "full name": "hitesh choudhary",
    [mySym]: "mykey1",//we cant decler that without squre breakets
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastlogindays: ["monday", "saturday"]
} 
//in object key : value pair is must
//by diffult key ko as a string he use krte hai

console.log(jsuser.email );//hitesh@google.com
// standerd method for asscessing the value by using .
console.log(jsuser["email"])//hitesh@google.com
// another method is using squre breaket
console.log(jsuser["full name"]);//hitesh choudhary
// we cant declar the full name by . method 
console.log(jsuser[mySym]);//mykey1

jsuser.email = "hitesh@chatgpt.com"
//we can over ride by using this 

//Object.freeze(jsuser)
//we can freeze this now user will not override the value

jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting());//undefined
console.log(jsuser.greetingTwo());//hello js user, hitesh

*/
//object singleton with construtor

//const tinderuser = new object() //singleton object //{}
const tinderuser = {} //not single ton // {}

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false

console.log(tinderuser);
//{ id: '123abc', name: 'sammy', isloggedin: false }

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chodhary"
        }
    }
}

console.log(regularuser.fullname.userfullname.firstname)//hitesh
//console.log(regularuser.fullname?.userfullname.firstname)//this ? use for requried feild

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 2: "b"}

//const obj3 = { obj1, obj2 }
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'b', '3': 'a' } }
const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2, obj4)//{} these are target rest is source
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser)); 

console.log(tinderuser.hasOwnProperty('isLoggedIn'));


