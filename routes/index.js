const apiRoutes = require("./api/index.js");
const router = require("express").Router();
const Userdb = require("../models/users.js");
const path = require("path");
const session = require("express-session");

//API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
