const asyncHandler = require("express-async-handler");

const getRecords = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Records" });
});

const setRecord = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }

  res.status(200).json({ message: "Set Record" });
});

module.exports = {
  getRecords,
  setRecord,
};
