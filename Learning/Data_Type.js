let name = "jay"
let age = 20 
let LoggedIn = true 
let height = null
let state ; 

console.log(name)
console.log(typeof name)

console.log(age)
console.log(typeof age)

console.log(LoggedIn)
console.log(typeof LoggedIn)

console.log(height)
console.log(typeof height)


console.log(typeof undefined)

console.log(typeof null) // null has object type not a special type like undefine  


//------------------------------object-----------------------------------

let user = {
    name:"jay",
    id:"123@gmail.com" ,
    age: 20,
}
let useerr = user 

useerr.name = "rohit" 
useerr.age=21

console.log(useerr.age,useerr.name)
console.log(user.age,user.name)

// if we change one object data that come both use same refrence so it change main object refrence not single object 
// stack work same but it work for valuse in primitive if we do same as above it make a copy of first var not use refrence