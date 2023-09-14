import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Calculation from './components/Calculation/Calculation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-pri-text text-3xl font-bold text-center mt-12 mb-8'>Course Registration</h1>
      <div className='md:flex gap-6'>
        <Courses></Courses>
        <Calculation></Calculation>
      </div>
    </>
  )
}

export default App
