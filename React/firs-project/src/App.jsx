import { useState,useEffect } from "react"
function App(packageData) {
  
const [data,setData]=useState(0); 


useEffect(()=>{
  console.log("counter: ",data); 
},[data]); 
// useEffect(()=>{
//   fetch("firs-project/package.json")
//   .then(res => res.json)
//   .then(res => setData(res[packageData]))
//   console.log(packageData);
// },[packageData])

  return (
    <div>
      <h1>count : {data}</h1>

      <button onClick={()=> setData(data+1)}>Increment</button>
    </div>
  
  )
}
export default App
