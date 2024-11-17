import { useState } from 'react'
import './App.css'
import { getCampera, postColor } from './index.js'

//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-red-600 w-max h-max'>
      <button onClick={getCampera}>boton</button>

      </div>
    </>
  )
}

export default App
