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
  }
});

//prehook to your mongoose schema with bcrypt, hashing a password before saving it to the database
userSchema.pre('save', function (next) {
  let user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    console.log("Hashed password: " + hash);
    next();
  })
});

// userSchema.methods.comparePassword = function(passwordAttempt, cb) {
//   bcrypt.compare(passwordAttempt, this.password, function(err, isMatch) {
//     if (err) {
//       return cb(err);
//     } else {
//       cb(null, isMatch);
//     }
//   });
// };

// userSchema.plugin(passportLocalMongoose);

const Userdb = mongoose.model("Userdb", userSchema);

module.exports = Userdb;