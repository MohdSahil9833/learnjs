let myDate  = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//Tue Sep 19 2023 18:46:51 GMT+0000 (Coordinated Universal Time)
//Tue Sep 19 2023
//9/19/2023, 6:46:51 PM
//object

let myCreatedDate = new Date(2023, 0 , 23)
console.log(myCreatedDate.toDateString()); 
//Mon Jan 23 2023
let myCreatedDates = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());
//1/23/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

//1695149552756
//1674432000000
//1695149552

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//2023-09-19T18:52:32.756Z
//9
//2
 
newDate.toLocaleString('default',{
    weekday: "long",
})