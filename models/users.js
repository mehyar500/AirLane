const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
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
UserSchema.pre('save', function (next) {
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

UserSchema.methods.comparePassword = function(passwordAttempt, cb) {
  bcrypt.compare(passwordAttempt, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    } else {
      cb(null, isMatch);
    }
  });
};

UserSchema.static("authenticate", function(email, password, callback) {
  this.findOne({ email: email }, function(err, user) {
    if (err) {
      console.log("findOne error occurred");
      return callback(err);
    }
    if (!user) {
      return callback(null, false);
    }
    user.verifyPassword(password, function(err, passwordCorrect) {
      if (err) {
        return callback(err);
      }
      if (!passwordCorrect) {
        return callback(err, false, { message: "bad password" });
      }
      console.log("User Found, returning user");
      return callback(null, user);
    });
  });
});

UserSchema.plugin(passportLocalMongoose);

const Userdb = mongoose.model("Userdb", UserSchema);

module.exports = Userdb;