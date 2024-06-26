// addName a User
const ErrorHandler = require("../utils/errorHandler");
const catchAssyncError = require("../middleware/catchAssyncError");
const { MapModel } = require("../models/placesSchema");

exports.addName = catchAssyncError(async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name || name.length < 4 || name.length > 30) {
      return next(new ErrorHandler("Please Enter Your name", 400));
    }
    const mapInstance = await MapModel.create({ name });

    res.status(200).json({
      success: true,
      message: `Your place ${name} is added successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

exports.mapInfo = catchAssyncError(async (req, res, next) => {
  try {
    const name = req.params.name;
    const mapInfo = await MapModel.findOne({ name: name });
    res.status(200).json({
      success: true,
      mapInfo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
