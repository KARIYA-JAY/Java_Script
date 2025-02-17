import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
    <Card count="1"/> 
    <Card count="2"/> 
    </>
  )
}

export default App
