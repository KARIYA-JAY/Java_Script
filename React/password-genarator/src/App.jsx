import  Passgen  from './Components/Passgen'
import  Test  from './Components/Test'
function App() {
  const user = "jay"; 
  return (
    <>
    <Passgen />
    <Test user={user}/>
    </>
  )
}

export default App
