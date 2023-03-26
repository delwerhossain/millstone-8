import { useState } from 'react'
import './App.css'
import Shopping from './components/Shopping/Shopping.jsx'
import { removeAll }  from './components/Shopping/Shopping.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-red-500'> Shopping Cart </h1>
      <button onClick={()=>removeAll()} className='text-2xl  bg-slate-500 mx-4 my-4 text-stone-50'>remove All</button>
     <Shopping></Shopping> 

    </div>
  )
}   

export default App
