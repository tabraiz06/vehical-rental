const mongoose = require("mongoose");
const VehicleTypeSchema = mongoose.Schema({
  vehicleName: String,
  vehicleType: String,
  vehicleModels: [String],
});
module.exports = mongoose.model("vehicleType", VehicleTypeSchema);
