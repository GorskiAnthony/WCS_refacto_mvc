const router = require("express").Router();
const userController = require("./controllers/userController");

router.get("/", userController.getAllUser);
router.get("/:id", userController.getOneUser);
router.post("/", userController.getAllUser);
router.put("/:id", userController.getOneUser);
router.delete("/:id", userController.getOneUser);

module.exports = router;
