import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Calculation from "./components/Calculation/Calculation";
import Swal from "sweetalert2";
import "animate.css";

function App() {
  const [courseAdd, setCourseAdd] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCourseAdd = (course) => {
    const isExist = courseAdd.find(
      (course_details) => course_details.id === course.id
    );

    let credit = course.credit;
    let price = course.price;

    if (isExist) {
      Swal.fire({
        icon: "warning",
        title: "You already registered this course !!!",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      // adding course to the list
      const newCourse = [...courseAdd, course];
      setCourseAdd(newCourse);
      // total credit calculate
      courseAdd.forEach((course_des) => {
        credit = credit + course_des.credit;
        price = price + course_des.price;
      });
    }
  };

  return (
    <>
      <h1 className="text-pri-text text-3xl font-bold text-center mt-12">
        Course Registration
      </h1>
      <div className="md:flex gap-6">
        <Courses handleCourseAdd={handleCourseAdd}></Courses>
        <Calculation courseAdd={courseAdd}></Calculation>
      </div>
    </>
  );
}

export default App;
