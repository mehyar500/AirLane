const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "Legal first name is required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "Legal last name is required"
  },
  email: {
    type: String,
    required: "Email is required",
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  }
});


userSchema.plugin(passportLocalMongoose);

const Userdb = mongoose.model("Userdb", userSchema);

module.exports = Userdb;