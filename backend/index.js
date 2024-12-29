const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const VehicleRoute = require("./routes/vehicleRoute");
const bookingRoute = require("./routes/bookingRoute");
const { seedDatabase } = require("./seed");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI);

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to the database");
  seedDatabase();
});

// Routes
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api", VehicleRoute);

app.use("/api", bookingRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
