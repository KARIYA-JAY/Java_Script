import React from 'react'
import { useState } from 'react'

export default function Card({props}) {
  let [counter,setcounter] = useState(10)

  function inccounter(){
    counter = counter + 1
    setcounter(counter)
  }
  
  function deccounter(){
    counter = counter - 1
    setcounter(counter)
  }
  return (
    <div className=' bg-violet-500 rounded-xl mt-10 p-2 text-3xl text-center ' >
     <h1 className='p-10 font-bold text-white text-center'>This is a {props.count}  manual count : {counter}</h1>
     <button onClick={inccounter} className='bg-violet-950 p-5 text-white m-5 rounded-xl'>Add</button>
     <button onClick={deccounter} className='bg-violet-950 p-5 text-white m-5 rounded-xl'>Remove</button>
     </div>
  )
}
