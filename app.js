const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");
const serverless = require("serverless-http");
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors());

// Serve static files from the public directory
app.use(express.static('public'));

app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/items", itemRoutes);

const pizza_items = require("./items");

const getItems = (req, res) => {
  try {
    console.log(pizza_items);
    res.json(pizza_items);
  } catch (error) {
    console.error('Error getting items:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

app.get('/pizza', getItems);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server successfully created on port ${PORT}`);
  } else {
    console.log("Server not created", err);
  }
});

//module.exports.handler = serverless(app);
