const pizza_items = require("../items");

const getItems = (req, res) => {
  try {
    res.json(pizza_items);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = { getItems };
