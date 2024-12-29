const mongoose = require("mongoose");
const vehicleType = require("./models/vehicleType");

const seedDatabase = async () => {
  await vehicleType.deleteMany({});

  const vehicleTypes = [
    {
      vehicleName: "Hatchback",
      vehicleType: "four wheelers",
      vehicleModels: ["Model X", "Model Y"],
    },
    {
      vehicleName: "SUV",
      vehicleType: "four wheelers",
      vehicleModels: ["Model Z", "Model A"],
    },
    {
      vehicleName: "Sedan",
      vehicleType: "four wheelers",
      vehicleModels: ["Model B", "Model C"],
    },
    {
      vehicleName: "Cruiser",
      vehicleType: "two wheelers",
      vehicleModels: ["Model D", "Model E"],
    },
  ];

  await vehicleType.insertMany(vehicleTypes);
  console.log("Database seeded!");
};

module.exports = { seedDatabase };
