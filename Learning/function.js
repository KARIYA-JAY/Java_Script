function jay()
{
    console.log("hi its jay ")
}
jay()

// pass argument and parameter 

function add(num1 , num2 )
{
    return num1 + num2
}
let sum = add(20,"oop")
console.log(sum)

// for cart management we need n parameter pass as parameter

function cart(...numberofcartitem)
{
    return numberofcartitem.toString()
}

let cartitem = cart(12,45,78,63,45,87,85,32,87451)
console.log(cartitem)