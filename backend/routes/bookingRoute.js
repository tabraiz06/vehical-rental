const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
router.post("/book", async (req, res) => {
  const {
    firstName,
    lastName,
    vehicleName,
    vehicleModel,
    vehicleType,
    startDate,
    endDate,
    quantity,
  } = req.body;

  if (new Date(startDate) > new Date(endDate)) {
    return res
      .status(400)
      .json({ message: "Start date must be before end date" });
  }

  // Check for overlapping bookings

  const overlappingBooking = await Booking.findOne({
    vehicleName,
  });

  if (overlappingBooking) {
    if (overlappingBooking.startDate === startDate) {
      res
        .status(400)
        .json({ message: "Vehicle is already booked for the selected dates" });
    } else if (overlappingBooking.endDate === endDate) {
      res.status(400).json({
        message: "Vehicle is already booked for the selected end dates",
      });
    } else {
      const booking = await Booking.create({
        firstName,
        lastName,
        vehicleName,
        vehicleModel,
        vehicleType,
        startDate,
        endDate,
        quantity,
      });

      res.status(201).json({ message: "Booking successful" });
    }
  } else {
    const booking = await Booking.create({
      firstName,
      lastName,
      vehicleName,
      vehicleModel,
      vehicleType,
      startDate,
      endDate,
      quantity,
    });

    res.status(201).json({ message: "Booking successful" });
  }
});

router.get('/book',async(req,res)=>{
  try {
    const bookings = await Booking.find()
    res.status(200).json(bookings)
  } catch (error) {
    res.status(400).json({message:error.message})
  }
})
module.exports = router;
