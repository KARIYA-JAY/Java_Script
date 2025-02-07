const numms = [1,2,2,3,4,5,2]

// const one = numms.filter((i) => {if(i==2){console.log("hi its 2 ")}} )
// console.log(one)

const new_num = numms.filter( (i) => console.log(i))
console.log(new_num) 

// filter is also used for object same as above 

// --------------------------------------------------
// maps

const add_num =numms.map( (num ) => num + 10)
console.log(add_num)


//-------------------------------
// chaining you can use as your wish function 

const chain =numms
            .map( (num ) => num + 10)
            .map( (num ) => num * 2)
            .filter( (num) => num <= 25)
console.log(chain)

//-----------------------------------------------------
//reduce

const arr =  [1,2,3,4]

const reduceses = arr.reduce( (acc,current) =>
     {
        console.log(acc + " + " + current) 
        return acc+current
     },0)
console.log(reduceses) 