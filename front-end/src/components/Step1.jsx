import React from "react";
import { TextField } from "@mui/material";

const Step1 = ({ data, setData, nextStep }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="flex flex-col w-[40%] h-[500px] items-center justify-center">
        <h1>What's Your Name</h1>
        <TextField
          className="w-full"
          label="First Name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          aria-required
        />
        <TextField
          className="w-full"
          label="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          aria-required
        />
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step1;
