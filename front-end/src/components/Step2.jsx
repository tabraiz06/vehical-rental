import React from "react";

const Step2 = ({ data, setData, nextStep }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col  h-[500px] items-center justify-center ">
      <form className="flex flex-col ">
        <h1>Select vehicleType</h1>
        <div className="flex gap-[1.5rem]">
          <label htmlFor="two wheelers">Two Wheelers</label>
          <input
            type="radio"
            name="vehicleType"
            onChange={handleChange}
            value={"two wheelers"}
          />
        </div>
        <div className="flex gap-[1.5rem]">
          <label htmlFor="four wheeler">Four Wheelers</label>
          <input
            type="radio"
            name="vehicleType"
            onChange={handleChange}
            value={"four wheelers"}
          />
        </div>
      </form>
    </div>
  );
};

export default Step2;
