const Order = require("../model/Order");
const sendEmail = require("../utils/sendEmail");

// ================= CREATE ORDER =================
const createOrder = async (req, res) => {
  try {
    const { items, totalPrice, address, paymentId } = req.body;

    if (
      !items ||
      items.length === 0 ||
      !totalPrice ||
      !address ||
      !paymentId
    ) {
      return res.status(400).json({
        message: "Invalid order data",
      });
    }

    const newOrder = new Order({
      user: req.user._id,
      items,
      totalPrice,
      fullName: address.fullName,
      address: address.address,
      city: address.city,
      postalCode: address.postalCode,
      country: address.country,
      paymentId,
      status: "Pending",
    });

    await newOrder.save();

    // Send confirmation email
    const message = `Dear ${req.user.username},

Thank you for your order!

Your order has been successfully placed.

Order Details:
--------------------------------
Order ID: ${newOrder._id}
Total Price: ₹${totalPrice}
Payment ID: ${paymentId}
--------------------------------

We will notify you once your order is shipped.

Thank you for shopping with ShopNest!

Regards,
ShopNest Team`;

    try {
      await sendEmail(
        req.user.email,
        "ShopNest Order Confirmation",
        message
      );
    } catch (emailError) {
      console.log("Email Error:", emailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.log("ORDER ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= MY ORDERS =================
const myOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).populate("items.product", "name price imageUrl");

    res.status(200).json(orders);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= GET ALL ORDERS =================
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "username email")
      .populate("items.product", "name price");

    res.status(200).json(orders);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= UPDATE ORDER STATUS =================
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    order.status = status;

    await order.save();

    res.status(200).json({
      message: "Order status updated",
      order,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  myOrders,
  getOrders,
  updateOrderStatus,
};