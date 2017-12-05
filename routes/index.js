const apiRoutes = require("./api/index.js");
const router = require("express").Router();
const passport = require("passport");
const userController = require("../controllers/userController");
const path = require("path");
const session = require("express-session");
const authenticationMiddleware = require("../utils/authenticationMiddleware");


//userauth
router.get("/userauth", (req, res) => {
  if (req.isAuthenticated()) { //if user is authenticated, send user info, otherwise send false
    res.json(req.user)
} else {
    res.json({})
}
});

//Matches with "/signup" 
router
  .route("/signup")
  .post(userController.create)


//matches /login
router.get("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/profile");
    });
  })(req, res, next);
});


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

//API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
  router.route("/userauth");
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
