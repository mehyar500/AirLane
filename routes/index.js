const apiRoutes = require("./api/index.js");
const app = require("express").Router();
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");


// If no API routes are hit, send the React app
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//API Routes
app.use("/api", apiRoutes);

//setting passport for log in, log out and signup
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  db.User.findOne({ _id: user.userID }).then((user, error) => {
    if (error) {
      done(error);
    }

    done(null, user);
  });
});

passport.deserializeUser((user, done) => {
  db.User.findOne({ _id: user.userID }).then((user, error) => {
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
