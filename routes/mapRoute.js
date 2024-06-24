const express = require("express");
const { addName, mapInfo } = require("../controller/mapController");
const router = express.Router();
router.route("/add-name").post(addName);
router.route("/map-info/:name").get(mapInfo);

module.exports = router;
