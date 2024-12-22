
"use strict" ;  // this is says working on letesy versions . 
let age = "33" 

console.log(typeof age)

let stringtonumber = Number (age)
console.log(typeof stringtonumber)
console.log(stringtonumber)

// "33" =  33 
// "33ab" = NAN
// true = 1 / false = 0

let status = 1
let str = ""
let str1 = "xdfcgbhj" // true 

let numbertobolean  = Boolean (status) // true 
console.log(numbertobolean)

let strtoboolean  = Boolean (str) // false 
console.log(strtoboolean)



// -----------------------operations-----------------------

let s = "jay" 
let k = " kariya" 
let o = 20

let h = s+k 
console.log(s + k )
console.log(h)
console.log(o + s )
console.log(1 + "2") // 12
console.log("1" + 2) // 12
console.log("1" + "2")// 12
console.log(1 + "2" + 3) //123
console.log(2+3+"2") // 52
 
// must remember above instruction 
console.log(+true) // 1


// //---------------------------comparision--------------------------

// console.log(2 == 2)
// console.log(2 >= 2)
// console.log(2 <= 2)
// console.log(2 != 2)

console.log("jay" > 0 ) // false
console.log("20"< 50) // true auto convert

console.log(null >= 0) // true
console.log(null == 0) // false
console.log(null < 0) // false 
console.log(undefined > 0) // in all case undefine is come false 

// all are work diffrent == , < , > , (=== this also check data type) 



