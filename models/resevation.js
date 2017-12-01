const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resevationSchema = new Schema({
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

const Resevationdb = mongoose.model("Resevationdb", resevationSchema);

module.exports = Resevationdb;
