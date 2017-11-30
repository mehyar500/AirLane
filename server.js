const express = require("express");
const path = require("path");
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

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/airlane";
mongoose.connect(MONGODB_URI, { useMongoClient: true });

//initialize passport and express-session
app.use(session({
    secret: 'holla hoops', //random key
    store: new MongoStore({ url: MONGODB_URI }),
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

//setting passport for log in, log out and signup
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  Userdb.findOne({ _id: user.userID }).then((user, error) => {
    if (error) {
      done(error);
    }

    done(null, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email" //change default username to email
    },
    (email, password, done) => {
      console.log(email);
      console.log(password);
      // return done(null, "LOGIN SUCCESSFUL!");
      Userdb.findOne({ email }).then((user, error) => {
        if (error) {
          done(error);
        }
        const hashPass = user.password;
        console.log("Hash: " + hashPass);
        if (hashPass.length === 0) {
          //essentially, if no user info is returned
          done(null, false);
        } else {
          //... else, run the bycrypt compare method to authenticate
          //bcrypt de-hash
          bcrypt.compare(password, hashPass, (err, response) => {
            if (response === true) {
              console.log("Successful login!");
              return done(null, { userID: user._id });
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
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
