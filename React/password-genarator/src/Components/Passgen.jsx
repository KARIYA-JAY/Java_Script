import React from 'react'
import { useState,useEffect,useRef } from 'react'

 const Passgen = () => {

  const [length, setlength] = useState(8)
  const [numallow,setnumallow] = useState(false)
  const [charallow,setcharallow] = useState(false)
  const [password,setpassword] = useState("")
  const ref = useRef(null)
  const copy1 =  ()=> {
  ref.current?.select();
  window.navigator.clipboard.writeText(password)
  }
  const fn = ()=> {

      
      let pass =""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      let specialChars = "/*-+!@#$%^&*_";
      let specialCharUsed = false;

      
      
      if(numallow) str+="1234567890";
      if(charallow) str+=specialChars;

      for (let i = 1; i <= length; i++) {
        const gen = Math.floor(Math.random()*str.length+1)
        let char = str.charAt(gen)

        if (specialChars.includes(char)) {
          if (specialCharUsed > 3) continue; // Skip adding extra special characters
          specialCharUsed = true;
        }
        pass+=char
      }

      setpassword(pass)
  } 
  useEffect(()=> {
   fn()
  } ,[length,numallow,charallow ])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4 my-10 text-black  bg-slate-500 text-center' > 
    <h1 className='text-2xl text-center mt-10 text-black my-3'> Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-8 pb-10'>

        <input type="text" value={password} className='outline-none w-full py-1 px-3 ' placeholder='password' readOnly/>
      <button className='outline-none bg-blue-500 text-white p-3' onClick={copy1} >copy</button>
      </div> 
      <div className='flext text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={50} value={length} className='cursor-pointer'onChange={(e)=> {setlength(e.target.value)}} ref={ref} />
          <label> Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1 mt-5 '>
          <input type="checkbox" defaultValue={numallow} id='numinput' onChange={()=>{setnumallow((prev)=>!prev)}} />
          <label> Number </label>

          <input type="checkbox" defaultValue={charallow} id='charinput' onChange={()=>{setcharallow((prev)=>!prev)}} />
          <label> AllowChar </label>

        </div>
        
      </div>
    </div>
    </>
  )
}
export default Passgen