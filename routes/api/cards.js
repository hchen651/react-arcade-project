const router = require("express").Router();
const cardController = require("../../controllers/cardController");

// Matches with "/api/cards"
router.route("/")
  .get(cardController.findAll)
  .post(cardController.create);

// Matches with "/api/cards/:id"
router
  .route("/:id")
  .get(cardController.findById)
  .put(cardController.update)
  .delete(cardController.remove);

module.exports = router;
