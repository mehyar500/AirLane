const router = require("express").Router();
const aircraftController = require("../../controllers/aircraftController");

//Matches with "/api/user"
router
  .route("/")
  .get(aircraftController.findAll)
  .post(aircraftController.create);

//Matches with "/api/user/:id"
router
  .route("/:id")
  .get(aircraftController.findById)
  .put(aircraftController.update)
  .delete(aircraftController.remove);

module.exports = router;
