const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const aircraftSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    trim: true
  },
  capacity: {
    type: Number
  }
});

const Aircraftdb = mongoose.model("Aircraftdb", aircraftSchema);

module.exports = Aircraftdb;