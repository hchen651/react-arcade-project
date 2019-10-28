const router = require("express").Router();
const cardRoutes = require("./cards");
const userRoutes = require("./users");

router.use("/cards", cardRoutes);
router.use("/users", userRoutes);

module.exports = router;
