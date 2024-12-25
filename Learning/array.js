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



