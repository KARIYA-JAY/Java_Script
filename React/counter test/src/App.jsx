import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcount] = useState(0)
  function incvalue(){
     counter = counter + 1
     setcount(counter)
  }
  return (
    <>
      <h1> Counter is here : {counter}</h1>
      <button onClick={incvalue}>inc</button>
      <button onClick={()=> {setcount(counter-1)}}>dec</button>
    </>
  )
}

export default App
