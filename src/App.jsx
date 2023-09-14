import { useState } from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import Calculation from './components/Calculation/Calculation';
import Swal from 'sweetalert2';
import 'animate.css';

function App() {
  const [courseAdd, setCourseAdd] = useState([]);

  const handleCourseAdd = (course) => {
    const isExist = courseAdd.find(item => item.id === course.id);
    if (isExist) {
      Swal.fire({
        icon: 'warning',
        title: 'You already registered this course !!!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    } else {
      const newCourse = [...courseAdd, course];
    setCourseAdd(newCourse);
    }
    
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
