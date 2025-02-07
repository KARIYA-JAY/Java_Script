const arr = [1,2,3,3,5,9,20]

// for of loop

for (const i of arr) {
    console.log(i)
}

const new1 = new Map
new1.set('name',"jay")
new1.set('age',20)

for (const [j, values] of new1)
{
    console.log(j," - ", values)
}

//------------------------------------------------



const obj ={
    name :"jay",
    age : 20
}
for (const element in obj) {
    console.log(obj[element])
}

for (const key in arr) {
    console.log(key)
}
//----------------------------------------------------

// for each 

arr.forEach(function (i){
    console.log(" for each ",i)
})

arr.forEach((j)=>{
    console.log(j)
})
