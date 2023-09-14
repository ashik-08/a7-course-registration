import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Calculation from './components/Calculation/Calculation'

function App() {
  const [courseAdd, setCourseAdd] = useState([]);

  const handleCourseAdd = (course) => {
    const newCourse = [...courseAdd, course];
    setCourseAdd(newCourse);

  }

  return (
    <>
      <h1 className='text-pri-text text-3xl font-bold text-center mt-12'>Course Registration</h1>
      <div className='md:flex gap-6'>
        <Courses 
        handleCourseAdd={handleCourseAdd}>
        </Courses>
        <Calculation 
        courseAdd={courseAdd}>
        </Calculation>
      </div>
    </>
  )
}

export default App
