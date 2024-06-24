const mongoose = require("mongoose");
const Coordinate = new mongoose.Schema({
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please Enter Your parentId"],
    ref: "Map",
  },
  coordinate: [
    {
      lat: {
        type: Number,
        required: [true, "Please Enter Your lat"],
      },
      lng: {
        type: Number,
        required: [true, "Please Enter Your lng"],
      },
    },
  ],
});
const CoordinateModel = mongoose.model("Coordinate", Coordinate);
module.exports = { CoordinateModel };
