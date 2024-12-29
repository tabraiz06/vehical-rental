const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  vehicleType: String,
  vehicleName: String,
  vehicleModel: String,
  quantiy: Number,
  startDate: String,
  endDate: String,
  status: {
    type: String,
    default: "pending",
  },
});
module.exports = mongoose.model("booking", bookingSchema);
