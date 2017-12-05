const apiRoutes = require("./api/index.js");
const router = require("express").Router();
const passport = require("passport");
const Userdb = require("../models/users.js");
const userController = require("../controllers/userController");
const path = require("path");
const session = require("express-session");
const authenticationMiddleware = require("../utils/authenticationMiddleware");


// userauth page. Only renders if authentication is verified, if not, redirect to root 
router.get("/userauth", passport.authenticate('local'), (req, res) => {
  //console log user info if any
  console.log(req.user);
  console.log(req.isAuthenticated());
  res.redirect("/");
});

//Matches with "/signup" 
router
  .route("/signup")
  .post(userController.create)

//matches /login
router.post(
  "/login",
  //authenticate input against database
  passport.authenticate("local", {
    successRedirect: "/profile", //if login was successful, redirect to profile page
    failureRedirect: "/" //if login unseccussful, redirect to homepage
  })
);

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
router.get("/profile", /*authenticationMiddleware()*/ passport.authenticate('local'), (req, res) => {
  //console log user info if any
  console.log(req.user);
  console.log(req.isAuthenticated());
  res.redirect("/")
});

//API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
