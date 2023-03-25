import { useState } from 'react'
import './App.css'
import Shopping from './components/Shopping/Shopping.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App grid ">
     <h1 className='text-red-500'> Shopping Cart </h1>
     <Shopping></Shopping> 

    </div>
  )
}   

export default App
