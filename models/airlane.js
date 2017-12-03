const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airLaneSchema = new Schema({
    date: {
        type: Date
    },
    howMany: {
        type: Number
    },
    location: {
        type: String
    },
    destination: {
        type: String
    },
    price: {
        type: Number
    }
});

const Airlanedb = mongoose.model("Airlanedb", airLaneSchema);

module.exports = Airlanedb;
