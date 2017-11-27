const app = require("express").Router();
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models/users");
const bcrypt = require("bcrypt");
const session = require("express-session");
const authenticationMiddleware = require("../utils/authenticationMiddleware");
const saltRounds = 10;

// If no API routes are hit, send the React app
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// signup new user
app.post("/signup", (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, userCreated, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    const newUser = { firstName, lastName, email, userCreated, password: hash };
    db.User.create(newUser)
      .then(user => {
        //console.log(user);
        console.log("This is the userID for new user:");
        console.log(user._id);
        db.User.findOne({ _id: user._id }).then((signedInUser, error) => {
          if (error) throw error;
          console.log("NEW USER CREATED: ");
          console.log(signedInUser);
          //deserialize config is expecting user.userID to be accessible
          req.login({ userID: signedInUser._id }, err => {
            res.redirect("/");
          });
        });
      })
      .catch(err => {
        // If an error occurred, send it to the client
        console.log(err);
        res.redirect("/");
      });
  });
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile", //if login was successful, redirect to profile page
    failureRedirect: "/" //if login unseccussful, redirect to homepage
  })
);

app.post("/logout", (req, res) => {
  console.log(`Logging out user:`);
  console.log(req.user);

  req.session.destroy(err => {
    req.logout();
    res.send(true);
  });
});

// profile page. Only renders if authentication is verified, if not, redirect to root
app.get("/profile", authenticationMiddleware(), (req, res) => {
  //console log user info if any
  console.log(req.user);
  console.log(req.isAuthenticated());

  res.redirect("/");
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

      db.User.findOne({ email }).then((user, error) => {
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

module.exports = app;
