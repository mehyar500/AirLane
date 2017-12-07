const router = require("express").Router();
const aircraftController = require("../../controllers/aircraftController");

//Matches with "/api/aircraft"
router
  .route("/")
  .get(aircraftController.findAll)
  .post(aircraftController.create);

//Matches with "/api/aircraft/:id"
router
  .route("/:id")
  .get(aircraftController.findById)
  .put(aircraftController.update)
  .delete(aircraftController.remove);

module.exports = router;
 