const router = require("express").Router();
const controller = require("./user.controller.js");
router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.put("/:id", controller.updateOne);
router.delete("/:id", controller.deleteOne);
module.exports = router;
