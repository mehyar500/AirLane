const apiRoutes = require("./api/index.js");
const app = require("express").Router();
const path = require("path");

// If no API routes are hit, send the React app
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//API Routes
app.use("/api", apiRoutes);

module.exports = app;
