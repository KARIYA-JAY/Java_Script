// class parent {
//     constructor(name,pass){
//         this.name = name
//         this.pass = pass
//     }
// }
// let obj = new parent("jay" , "123")
// console.log(obj)
// console.log(obj.name)

//-----------------------------------------------------------------------------------------------

// class parent {
//     constructor(name,pass){
//         this.name = name
//         this.pass = pass
//     }
//     get name(){
//         console.log("this is getter")
//     }
//     set name(name1){
//         console.log("this is setter",name1)
//     }
// }
// let obj = new parent("jay" , "123")
// console.log(obj)
// console.log(obj.name)

//----------------------------------------------------------------------------------------

const ok =Object.getOwnPropertyDescriptor(Math,"PI") 
console.log(ok);

Object.defineProperty(Math,"PI",{
    writable : true
})



