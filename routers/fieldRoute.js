const express = require("express");
const router = new express.Router();
const getController = require("../controller/getController");

router.route("/batting")
.get(getController.getBat);

module.exports = router;