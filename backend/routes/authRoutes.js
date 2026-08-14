const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getUsers } = require("../controllers/authController.js");
const { Protect } = require('../middleware/authmiddleware.js');
const { admin } = require('../middleware/adminmiddleware.js');

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", Protect, getUsers);

  
module.exports = router;





