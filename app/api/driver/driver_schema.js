const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  driver_num: {
    type: Number,
    required: true,
  },
  driver_name: {
    type: String,
    required: true,
  },
  driver_team: {
    type: String,
    required: true,
    
  }
});

const Driver = mongoose.model("drivers", DriverSchema);

module.exports = Driver;