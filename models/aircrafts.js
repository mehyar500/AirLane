const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const aircraftSchema = new Schema({
  name: {
    type: String,
    required: "Name is required",
    trim: true
  },
  type: {
    type: String
  },
  capacity: {
    type: Number
  }
});

const Aircraftdb = mongoose.model("Aircraftdb", aircraftSchema);

module.exports = Aircraftdb;