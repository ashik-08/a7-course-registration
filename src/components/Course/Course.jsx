import dollar from "../../assets/dollar-sign.svg";
import book from "../../assets/book.svg";

const Course = ({ course }) => {
  const { id, img, course_name, course_description, price, credit } = course;

  return (
    <div>
      <div className="bg-white p-4 rounded-xl">
        <figure>
          <img className="w-full" src={img} alt="{course_name} cover image" />
        </figure>
        <h4 className="text-pri-text text-lg font-semibold mt-4">{course_name}</h4>
        <p className="text-sec-text text-sm font-normal mt-3">{course_description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="flex gap-2">
            <img className="-mt-1" src={dollar} alt="icon" />
            <span className="text-sec-text text-base font-medium">Price : {price}</span>
          </p>
          <p className="flex gap-2.5">
            <img src={book} alt="icon" />
            <span className="text-sec-text text-base font-medium">Credit : {credit}hr</span>
          </p>
        </div>
        <button className="bg-spe-text text-white text-lg font-semibold py-2 w-full rounded-lg mt-6">Select</button>
      </div>
    </div>
  );
};

export default Course;