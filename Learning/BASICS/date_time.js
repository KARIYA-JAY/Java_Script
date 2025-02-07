let date = new Date()
console.log(date)
console.log(date.toString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toISOString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())


// Date creation 

let my_date = new  Date("1-12-2024")
let new_date = new  Date(2023,2,3,5,2)

console.log(my_date.toLocaleString())
console.log(new_date.toLocaleDateString())

let time_stamp = Date.now()
console.log(time_stamp); // it give into milisecond 

console.log(Math.floor(time_stamp / 1000)) // now it is in second

let date1 = new Date()

console.log(date1.getDay()); // start from 1 = monday 
console.log(date1.getMonth()+1); // start from 0 

let defultdate = date1.toLocaleDateString('defult',{
    day:"numeric",
    weekday:"long",
    year:"numeric",
    month:"short"
})
console.log(defultdate);


