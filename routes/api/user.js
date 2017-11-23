const app = require("express").Router();
const userController = require("../../controllers/userController");

//Matches with "/api/user"
app
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

//Matches with "/api/user/:id"
app
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = app;

