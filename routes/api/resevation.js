const router = require("express").Router();
const resevationController = require("../../controllers/resevationController");

//Matches with "/api/user"
router
  .route("/")
  .get(resevationController.findAll)
  .post(resevationController.create);

//Matches with "/api/user/:id"
router
  .route("/:id")
  .get(resevationController.findById)
  .put(resevationController.update)
  .delete(resevationController.remove);

module.exports = router;
