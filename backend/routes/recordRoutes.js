const express = require("express");
const router = express.Router();
const { getRecords, setRecord } = require("../controllers/recordController");

router.get("/", getRecords);
router.post("/", setRecord);

module.exports = router;
