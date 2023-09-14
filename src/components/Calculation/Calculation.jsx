import PropTypes from "prop-types";

const Calculation = ({
  courseAdd,
  remainingCredit,
  totalCredit,
  totalPrice,
}) => {
  return (
    <div className="md:w-1/4 bg-white h-fit rounded-xl p-6 mt-8">
      <h1 className="text-spe-text text-lg font-bold mb-4">
        Credit Hour Remaining {remainingCredit} hr
      </h1>
      <hr />
      <h1 className="text-pri-text text-xl font-bold mt-4">Course Name</h1>
      <div className="text-sec-text text-base font-normal my-6 space-y-2.5">
        {courseAdd.map((item, idx) => (
          <p key={idx}>
            {idx + 1} {item.course_name}
          </p>
        ))}
      </div>
      <hr />
      <h1 className="text-cal-text text-base font-medium my-4">
        Total Credit Hour : {totalCredit}
      </h1>
      <hr />
      <h1 className="text-cal-text text-base font-semibold mt-4">
        Total Price : {totalPrice} USD
      </h1>
    </div>
  );
};

Calculation.propTypes = {
  courseAdd: PropTypes.array,
  remainingCredit: PropTypes.number,
  totalCredit: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default Calculation;
