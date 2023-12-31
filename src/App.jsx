import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Calculation from "./components/Calculation/Calculation";
import Swal from "sweetalert2";
import "animate.css";

function App() {
  const [courseAdd, setCourseAdd] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
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
        title: "You have already registered this course !!!",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      // total credit & price calculate
      courseAdd.forEach((course_des) => {
        credit = credit + course_des.credit;
        price = price + course_des.price;
      });
      const remaining = 20 - credit;

      if (remaining < 0 || credit > 20) {
        Swal.fire({
          icon: "warning",
          title: "You don't have enough credit hour to add this course !!!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } else {
        // adding course to the list & update calculation
        const newCourse = [...courseAdd, course];
        setCourseAdd(newCourse);
        setRemainingCredit(remaining);
        setTotalCredit(credit);
        setTotalPrice(price);
      }
    }
  };

  return (
    <>
      <h1 className="text-pri-text text-3xl font-bold text-center mt-12">
        Course Registration
      </h1>
      <div className="md:flex gap-6">
        <Courses handleCourseAdd={handleCourseAdd}></Courses>
        <Calculation
          courseAdd={courseAdd}
          remainingCredit={remainingCredit}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
        ></Calculation>
      </div>
    </>
  );
}

export default App;
