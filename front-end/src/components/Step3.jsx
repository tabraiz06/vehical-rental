import React from "react";

const Step3 = ({ products, data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  let filterModel = [];
  if (data.vehicleName !== "") {
    products.filter((ele) => {
      if (ele.vehicleName === data.vehicleName) {
        filterModel = ele.vehicleModels;
      }
    });
  }

  return (
    <div className="flex flex-col w-full h-[500px] items-center justify-center gap-[1rem]">
      <h1>Select Vehicle Brand, Model </h1>
      <form className="flex flex-col gap-[1rem]">
        <label htmlFor="select model">select Brand</label>
        <select name="vehicleName" onChange={handleChange}>
          <option value="select">Selcet Brand</option>
          {products.map((ele) => {
            return (
              <>
                <option value={ele.vehicleName} key={ele.id}>
                  {ele.vehicleName}
                </option>
              </>
            );
          })}
        </select>
        <label htmlFor="select model">Select Model</label>
        <select name="vehicleModel" onChange={handleChange}>
          <option value="select model">select model</option>
          {filterModel.map((ele) => {
            return (
              <option value={ele} key={ele.id}>
                {ele}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export default Step3;
