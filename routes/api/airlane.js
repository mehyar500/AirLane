const router = require("express").Router();
const airlaneController = require("../../controllers/airlaneController");

//Matches with "/api/airlane"
router
  .route("/")
  .get(airlaneController.findAll)
  .post(airlaneController.create);

//Matches with "/api/airlane/:id"
router
  .route("/:id")
  .get(airlaneController.findById)
  .put(airlaneController.update)
  .delete(airlaneController.remove);

module.exports = router;
