const express = require("express");
const {
  createOrder,
  verifyPayment,
} = require("../controllers/paymentController");

const router = express.Router();

// Send Razorpay Key ID to frontend
router.get("/key", (req, res) => {
  res.status(200).json({
    key: process.env.RAZORPAY_KEY_ID,
  });
});

// Create Razorpay Order
router.post("/order", createOrder);

// Verify Payment Signature
router.post("/verify", verifyPayment);

module.exports = router;