const apiRoutes = require("./api/index.js");
const router = require("express").Router();
const passport = require("passport");
const Userdb = require("../models/users");
const path = require("path");
const bcrypt = require("bcrypt");
const session = require("express-session");
const authenticationMiddleware = require("../utils/authenticationMiddleware");
const saltRounds = 10;

//API Routes
router.use("/api", apiRoutes);

//userauth
router.get("/userauth", (req, res) => {
  if (req.isAuthenticated()) { //if user is authenticated, send user info, otherwise send false
    res.json(req.user)
} else {
    res.json({})
}
});

// register new user
router.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    const newUser = { firstName, lastName, email, password: hash };
    Userdb.create(newUser)
      .then((user) => {
        //console.log(user);
        console.log("This is the userID for new user:");
        console.log(user._id);
          Userdb.findOne({ _id: user._id })
            .then((signedInUser, error) => {
              if (error) throw (error);
              console.log("NEW USER CREATED: ");
              console.log(signedInUser);
              //deserialize config is expecting user.userID to be accessible
              req.login({userID: signedInUser._id}, (err) => {
                  res.redirect("/");
              })
            })
            .catch(err => console.log(err));
      })
      .catch((err) => { 
          // If an error occurred, send it to the client
          console.log(err);
          res.redirect("/");
      });
});

});
//matches /login
router.post("/login", passport.authenticate('local', {

    successRedirect: "/profile", //if login was successful, redirect to profile page
    failureRedirect: "/" //if login unseccussful, redirect to homepage

}) );
//matches /logout
router.post("/logout", (req, res) => {
  console.log(`Logging out user:`);
  console.log(req.user);
  req.session.destroy( (err) => {
      req.logout();
      res.send(true);
  })
});

// profile page. Only renders if authentication is verified, if not, redirect to root 
router.get("/profile", authenticationMiddleware(), (req, res) => {
  //console log user info if any
  console.log(req.user);
  console.log(req.isAuthenticated());
  res.redirect("/")
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
