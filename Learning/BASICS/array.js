const number = [1,2,3,4,5,6,7]

console.log(number) 
console.log(number.length) // print length 

console.log(number.push(15)) // add 15
console.log(number)


console.log(number.pop()) //pop 15
console.log(number)

console.log(number.unshift(0)) // shift all element and add first position 0
console.log(number)

console.log(number.shift()) // remove first position number 
console.log(number)

console.log(number.slice(0,2)) // make a group of 0 to 2 but range 2 is not include and array can't change
console.log(number)

console.log(number.splice(0,2)) // make a group of 0 to 2 and range is also included and original array is modify 
console.log(number)

console.log(number.join()) // it create string of array 


//------------------------------------------------------------------

const myarray =  [0,1,2,3,4,5]

console.log(number.concat(myarray)) // it concate two array

console.log(...number,...myarray) // it also concate using spred operator (...)

let new1 = [123,12,45,[12,89,65,87,12,[78,56]],23,45]

console.log(new1.flat(Infinity)) // it will do concate all the sub array in main array

console.log(Array.isArray("jay")) // it checks jay name array is in code or not
console.log(Array.from("jay")) // it create a array element of jay
console.log(Array.from({name :"jay"})) // it can't make direcctly array it have must argument kesy array index array or etc

let namr= "jay"
let age = 20
let marrid = false

console.log(Array.of(namr,age,marrid)) //it makes arrayy of variables




