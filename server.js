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

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// log every request to the console
app.use(morgan('dev'));

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
    resave: true,
    saveUninitialized: false
}));
//initialize passport with express app
app.use(passport.initialize());
//setup a passport session to be used with express app
app.use(passport.session());
// Add routes, both API and view
app.use(routes);

// passport config
passport.use(new LocalStrategy(Userdb.authenticate()));
passport.serializeUser((user, done) => {
    console.log('serializing user: ');
    console.log(user);
    done(null, user._id);
  });
passport.deserializeUser((id, done) => {
  user.findById(id, (err, user) => {
    console.log("no im not serial");
    done(err, user);
  });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
  console.log("Done sending every request to Reazt app");
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
