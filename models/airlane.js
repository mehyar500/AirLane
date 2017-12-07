const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airLaneSchema = new Schema({
  departure: {
    type: String
  },
  arrival: {
    type: String
  },
  flight_date: {
    type: String
  },
  flight_type: {
    type: String
  },
  price_range: {
    type: String
  }
});

const Airlanedb = mongoose.model("Airlanedb", airLaneSchema);

module.exports = Airlanedb;
