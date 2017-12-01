const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resevationSchema = new Schema({
    
});

const Resevationdb = mongoose.model("Resevationdb", resevationSchema);

module.exports = Resevationdb;
