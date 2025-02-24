import { useState } from 'react'
import './App.css'
import Sardor from './components/Sardor' // ✅ Правильный импорт

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sardor />
    </>
  )
}

export default App
