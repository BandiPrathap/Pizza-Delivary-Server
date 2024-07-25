const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("../routes/authRoutes");
const itemRoutes = require("../routes/itemRoutes");
const verifyToken = require("../middleware/authMiddleware");
const db = require("../config/db");
const serverless = require("serverless-http");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/items", verifyToken, itemRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server successfully created on port ${PORT}`);
  } else {
    console.log("Server not created", err);
  }
});


module.exports.handler = serverless(app);