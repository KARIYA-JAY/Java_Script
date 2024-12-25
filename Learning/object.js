let user = {
    name: "jay",
    age : 20,
    location : "abad",
    email: "123@.com ",
    loggedin : true
}

console.log(user.name)
console.log(user["name"]) // this is another way of accessing object 

user.name= "mayur"
console.log(user.name)
Object.freeze(user) // freeze the obj can't modify


user.name= "raj"
console.log(user.name)

let obj1 = {1:"a",2:"b"}
let obj2 = {3:"a",4:"b"}
let obj3 = {5:"a",6:"b"}

let obj4 = Object.assign(obj1,obj2,obj3) // concate of obj
console.log(obj4)

let obj41 = {...obj1, ...obj2, ...obj3} // it return same as concate 
console.log(obj41)

console.log(Object.keys(obj1))  // return onlu keys array
console.log(Object.values(obj1)) // return only values in array
console.log(Object.entries(obj1)) // return single arry of each pair