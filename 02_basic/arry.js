// /*
// const myArr = [0,1,2,3,4,5]
// console.log(myArr[0]);//0

// const myHeors = ["ironman","captain amerika"]
// console.log(myHeors);
// //[ 'ironman', 'captain amerika' ]

// //array method
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr. shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr);
// /*
// false
// 3
// [
//     0, 1, 2, 3,
//     4, 5, 6
// ]
// */
// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);
// /*
// [
//   0, 1, 2, 3,
//   4, 5, 6
// ]
// string
// */

// // slice=return a copy of session of an array, splice

// console.log("A", myArr);
// const myn1 = myArr.slice(1, 3) 
// console.log(myn1);
// console.log("B", myArr);
// const myn2 = myArr.splice(1, 3)
// console.log(myn2);
// console.log("c", myArr); 
// /*
// A [
//   0, 1, 2, 3,
//   4, 5, 6
// ]
// [ 1, 2 ]
// B [
//   0, 1, 2, 3,
//   4, 5, 6
// ]
// [ 1, 2, 3 ]
// c [ 0, 4, 5, 6 ]
// */
//////////////////array-function//////////
const marvel_heros = ["thor","ironman","spiderman"]
const dc_hero = ["superman","flash","batman"]
marvel_heros.push(dc_hero)
console.log(marvel_heros);
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]);//flash
marvel_heros.concat(dc_hero)
console.log(marvel_heros);
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
const allheros = marvel_heros.concat(dc_hero)
console.log(allheros);
/*
[
    'thor',
    'ironman',
    'spiderman',
    [ 'superman', 'flash', 'batman' ],
    'superman',
    'flash',
    'batman'
]
*/
const all_new_heros = [...marvel_heros, ...dc_hero]
console.log(all_new_heros);
/*
[
  'thor',
  'ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  'superman',
  'flash',
  'batman'
]
*/
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/
console.log(Array.isArray("Hitesh"));
//false
console.log(Array.from("hitesh"));
//[ 'h', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"}));
//[]
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
//[ 100, 200, 300 ]  