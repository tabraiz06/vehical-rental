const express = require("express");
const VehicleType = require("../models/vehicleType");
const router = express.Router();
router.get("/vehicle-types", async (req, res) => {
  try {
    const types = await VehicleType.find();
    
    res.status(200).json({ types });
  } catch (error) {
    res.status(400).json({message:error.message})
  }
});
module.exports = router;
