import React from 'react'

export default function Card(props) {
  return (
    <div className=' bg-red-500 rounded-xl mt-10 p-2'>
     <h1 className='p-10 font-bold text-white text-center'>This is a {props.count} </h1>
     </div>
  )
}
