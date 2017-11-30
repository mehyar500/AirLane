const mongoose = require("mongoose");
const Schema = mongoose.Schema;


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
  }
});

const User = mongoose.model("Userdb", userSchema);

module.exports = User;