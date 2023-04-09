const asyncHandler = require("express-async-handler");
const Record = require("../models/recordModel");
const User = require("../models/userModel");

const getRecords = asyncHandler(async (req, res) => {
  const records = await Record.find({ user: req.user.id });
  res.status(200).json(records);
});

const setRecord = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }

  const record = await Record.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(record);
  //res.status(200).json({message: 'hey baby'})
});

module.exports = {
  getRecords,
  setRecord,
};
