import './App.css'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <main>
        <button onClick=[()=>{setCount{count + 1}}]>clicked {count} times</button>
    </main>
  )
}
