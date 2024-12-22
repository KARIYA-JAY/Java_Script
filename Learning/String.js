let name = new String("  jay")
console.log(name)

let name1 =  name.trim()
console.log(name1)

let nameSubstring = name.substring(0,1)
console.log(nameSubstring)


let nameslice = name.slice(1,2)
console.log(nameslice)

console.log(name.trim())

console.log(name.replace('j','s').trim())


console.log(name1+name)
console.log(`with trim ${name1} without trim ${name} `)
