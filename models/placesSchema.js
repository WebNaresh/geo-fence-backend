const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Map = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your name"],
    maxLength: [30, "name cannot exceed 30 characters"],
    minLength: [4, "name should have more than 4 characters"],
    unique: true,
  },
});
const MapModel = mongoose.model("Map", Map);
module.exports = { MapModel };
