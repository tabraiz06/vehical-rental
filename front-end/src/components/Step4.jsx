import React from "react";

const Step4 = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col w-full h-[500px] items-center justify-center">
      <form className="flex flex-col gap-6">
        <h1>Select Dates</h1>
        <label htmlFor="start date">Start Date</label>
        <input type="date" name="startDate" onChange={handleChange} />
        <label htmlFor="end date">End Date</label>
        <input type="date" name="endDate" onChange={handleChange} />
      </form>
    </div>
  );
};

export default Step4;
