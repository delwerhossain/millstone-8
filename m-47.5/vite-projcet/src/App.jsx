import { useState } from 'react'
import reactLogo from './assets/react.svg'
import citLogo from './images/water_mark11.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Test></Test>
    </div>
  )
}

function Menu() {
  return (
    <div className='w-screen h-screen bg-red-300'>
      <h1 className=''> test </h1>
    </div>
  );
}

export default App
