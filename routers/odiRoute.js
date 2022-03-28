const express = require("express");
const router = new express.Router();
const getController = require("../controller/getController");

router.route("/odi")
.get(getController.getOdi);

module.exports = router;