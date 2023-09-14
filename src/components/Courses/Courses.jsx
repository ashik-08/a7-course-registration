import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Course from "../Course/Course";

const Courses = ({ handleCourseAdd }) => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);

    return (
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            {
                courses.map(course => 
                <Course 
                key={course.id}
                course={course}
                handleCourseAdd={handleCourseAdd}>
                </Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleCourseAdd: PropTypes.func.isRequired
};

export default Courses;