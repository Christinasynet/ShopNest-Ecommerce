const express = require("express");
const { Protect } = require("../middleware/authmiddleware");
const { admin } = require("../middleware/adminmiddleware");
const { getAdminStats } = require("../controllers/analyticsController");

const router = express.Router();

router.get("/", Protect, admin, getAdminStats);

module.exports = router;