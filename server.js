const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();
const Userdb = require("./models/users");
//authentication packages
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bcrypt = require('bcrypt');


//set up cookies for sessions
app.use(cookieParser());
console.log("Cookie parser does");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
console.log("done configuring body-parser for ajax");

// log every request to the console
app.use(morgan('dev'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  console.log("production env: serve up static");
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/airlane";
mongoose.connect(MONGODB_URI, { useMongoClient: true });
console.log("Done connectin to mongoose");

//initialize passport and express-session
app.use(session({
    secret: 'holla hoops', //random key
    store: new MongoStore({ url: MONGODB_URI }),
    resave: true,
    saveUninitialized: false
}));
console.log("Done initializing passport and express session");

//initialize passport with express app
app.use(passport.initialize());
console.log("server app using initilized passport");
//setup a passport session to be used with express app
app.use(passport.session());
console.log("server app using initialized session");

// Add routes, both API and view
app.use(routes);
console.log("server app using routes");



// passport session setup: passport needs ability to serialize and unserialize users out of session.
// passport.use(new LocalStrategy(Userdb.authenticate()));
passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user._id);
});

passport.deserializeUser((user, done) => {
  console.log(user);
  Userdb.findById(user._id, (err, user) => {
    if (err) {
      done(err);
    }

    done(null, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    (email, password, done) => {
      console.log(email, password);
      Userdb.findOne({ email: email }, (err, user) => {
         if (err) {
           return done(err);
         }
         if (!user) {
           return done(null, false, {
             message: "Incorrect email."
           });
         }

        const hash = user.password;
        console.log("Hashed Pass: " + hash);
        if (hash.length === 0) {
          //essentially, if no user info is returned
          done(null, false);
        } else {
          //... else, run the bycrypt compare method to authenticate
          //bcrypt de-hash
          bcrypt.compare(password, hash, (err, response) => {
            if (response === true) {
              console.log("Successful login!");
              return done(null, user);
            } else {
              console.log("Unsuccessful login!");
              return done(null, false);
            }
          });
        }

      });
    }
  )
);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
  console.log("Done sending every request to Reazt app");
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
