import React, { useEffect, useState } from "react";
import axios from "axios";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

import Step3 from "./components/Step3";

import Step4 from "./components/Step4";

const App = () => {
  const [step, setStep] = useState(1);
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    vehicleType: "",
    vehicleName: "",
    vehicleModel: "",
    startDate: null,
    endDate: null,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitData = async () => {
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.vehicleModel === "" ||
      formData.vehicleName === "" ||
      formData.vehicleType === "" ||
      formData.startDate === "" ||
      formData.endDate === ""
    ) {
      return alert("please fill all the details correctly");
    }
    try {
      const response = await fetch("http://localhost:8080/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setFormData({
          firstName: "",
          lastName: "",
          vehicleType: "",
          vehicleName: "",
          vehicleModel: "",
          startDate: null,
          endDate: null,
        });
        setStep(1);
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const fetchData = async () => {
    const res = await fetch("http://localhost:8080/api/vehicle-types", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    setProducts(result.types);
  };
  useEffect(() => {
    fetchData();
  }, [formData.vehicleName]);

  let filter = [];
  if (formData.vehicleType !== "") {
    products.filter((ele) => {
      if (ele.vehicleType === formData.vehicleType) {
        filter.push(ele);
      }
    });
  }

  return (
    <div className="App">
      {step === 1 && (
        <Step1 data={formData} setData={setFormData} nextStep={nextStep} />
      )}
      {step === 2 && (
        <div className="flex flex-col h-full w-full m-[0 auto] items-center">
          <Step2
            data={formData}
            setData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            products={products}
          />
          <div className="flex">
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      )}
      {/* Other steps */}
      {step === 3 && (
        <div className="flex flex-col h-full w-full m-[0 auto] items-center">
          <Step3 products={filter} data={formData} setData={setFormData} />
          <div className="flex">
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="flex flex-col h-full w-full m-[0 auto] items-center">
          <Step4 data={formData} setData={setFormData} />
          <div className="flex">
            <button onClick={prevStep}>Back</button>
            <button onClick={submitData}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
