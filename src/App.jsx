import { useState } from 'react'
import './App.css'
import  Card  from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl bg-green-700 p-4 rounded-xl mb-5">Tailwind</h1>
      <Card title="Apoorva Gupta" abouText="Good UI resouce, well versed with different UI frameworks"/>
      <Card title="Ankit Gupta" abouText="Good ServiceNow resouce, well versed with different servicenow modules"/>
    </>
  )
}

export default App
