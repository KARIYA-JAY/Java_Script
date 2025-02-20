
import { useState } from 'react'
import './App.css'

function App() {

  const [color,setcolor] = useState("black")

  return (
    <>
   
    <div className="parent" style={{backgroundColor:color}}>
      <button onClick={()=>setcolor("white")}>White</button>
      <button onClick={()=>setcolor("red")}>red</button>
      <button onClick={()=>setcolor("black")}>black</button>
      <button onClick={()=>setcolor("green")}>green</button>
      <button onClick={()=>setcolor("yellow")}>yellow</button>
     

      </div>
    </>
  )
}

export default App
