const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require("./routes/mapRoute");
const route2 = require("./routes/msgRoute");
const coordinateRoute = require("./routes/coordinateRoute");
const error = require("./utils/error");
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// import routes
app.use("/api", route);
app.use("/message", route2);
app.use("/api", coordinateRoute);
app.use("/", (req, res) => {
  res.send("Server is working");
});
app.use(error);
module.exports = app;
// npm i express cookie-parser body-parser bcryptjs
