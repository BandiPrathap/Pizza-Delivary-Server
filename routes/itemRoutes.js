const express = require("express");
const { getItems } = require("../controllers/itemsController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", verifyToken, getItems);

module.exports = router;
