const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
   email: {
    type: String,
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
  passwordConf: {
    type: String,
    required: true,
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;