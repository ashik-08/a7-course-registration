import PropTypes from "prop-types";
import dollar from "../../assets/dollar-sign.svg";
import book from "../../assets/book.svg";

const Course = ({ course, handleCourseAdd }) => {
  const { id, img, course_name, course_description, price, credit } = course;

  return (
    <div className={id === 9 ? "bg-white p-4 rounded-xl relative md:left-[53.5%] xl:left-0" : "bg-white p-4 rounded-xl"}>
      <figure>
        <img className="w-full" src={img} alt={`${course_name} cover-img`} />
      </figure>
      <h4 className="text-pri-text text-lg font-semibold mt-4">
        {course_name}
      </h4>
      <p className="text-sec-text text-sm font-normal mt-3">
        {course_description}
      </p>
      <div className="flex justify-between items-center mt-4">
        <p className="flex gap-2">
          <img src={dollar} alt="icon" />
          <span className="text-sec-text text-base font-medium">
            Price : {price}
          </span>
        </p>
        <p className="flex gap-2.5">
          <img src={book} alt="icon" />
          <span className="text-sec-text text-base font-medium">
            Credit : {credit}hr
          </span>
        </p>
      </div>
      <button
        onClick={() => handleCourseAdd(course)}
        className="bg-spe-text text-white text-lg font-semibold py-2 w-full rounded-lg mt-6"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleCourseAdd: PropTypes.func.isRequired,
};

export default Course;
