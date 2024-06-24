const express = require("express");
const {
  addCoordinateToParent,
  getAllCoordinateOfParent,
  getSingleCoordinate,
} = require("../controller/coordinateController");
const router = express.Router();
router
  .route("/coordinate/:parentId")
  .post(addCoordinateToParent)
  .get(getAllCoordinateOfParent);

router.route("/coordinate-single/:coordinateId").get(getSingleCoordinate);
module.exports = router;
