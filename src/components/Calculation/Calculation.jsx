const Calculation = () => {
    return (
        <div className="md:w-1/4 bg-white h-fit rounded-xl p-6 mt-8">
            <h1 className="text-spe-text text-lg font-bold mb-4">Credit Hour Remaining 7 hr</h1>
            <hr />
            <h1 className="text-pri-text text-xl font-bold mt-4">Course Name</h1>
            <div className="text-sec-text text-base font-normal my-5">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </div>
            <hr />
            <h1 className="text-cal-text text-base font-medium my-4">Total Credit Hour : 13</h1>
            <hr />
            <h1 className="text-cal-text text-base font-semibold mt-4">Total Price : 48000 USD</h1>
        </div>
    );
};

export default Calculation;