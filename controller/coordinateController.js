// Coordinate a User
const ErrorHandler = require("../utils/errorHandler");
const catchAssyncError = require("../middleware/catchAssyncError");
const { CoordinateModel } = require("../models/coordinateSchema");
const { MapModel } = require("../models/placesSchema");

exports.addCoordinateToParent = catchAssyncError(async (req, res, next) => {
  const { parentId } = req.params;
  const { coordinates } = req.body;
  if (!parentId || !coordinates) {
    return next(
      new ErrorHandler("Please Enter Your parentId and coordinates", 400)
    );
  }
  const checkParent = await MapModel.findById(parentId);
  if (!checkParent) {
    return next(new ErrorHandler("Please Enter Your valid parentId", 400));
  }
  const coordinateInstance = await CoordinateModel.create({
    parentId,
    coordinate: coordinates,
  });

  res.status(200).json({
    success: true,
    message: `Your GeoFencing is added for location ${checkParent?.name}`,
  });
});

exports.getAllCoordinateOfParent = catchAssyncError(async (req, res, next) => {
  const { parentId } = req.params;
  if (!parentId) {
    return next(new ErrorHandler("Please Enter Your parentId", 400));
  }
  const checkParent = await CoordinateModel.find({ parentId });
  if (!checkParent) {
    return next(new ErrorHandler("Please Enter Your valid parentId", 400));
  }
  res.status(200).json({
    success: true,
    data: checkParent,
  });
});

exports.getSingleCoordinate = catchAssyncError(async (req, res, next) => {
  const { coordinateId } = req.params;
  if (!coordinateId) {
    return next(new ErrorHandler("Please Enter Your id", 400));
  }
  const checkParent = await CoordinateModel.findById(coordinateId);
  if (!checkParent) {
    return next(new ErrorHandler("Please Enter Your valid id", 400));
  }
  res.status(200).json({
    success: true,
    data: checkParent,
  });
});
