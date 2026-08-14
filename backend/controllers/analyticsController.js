const User = require("../model/User");
const Product = require("../model/product");
const Order = require("../model/Order");

const getAdminStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments({ role: "user" });
        const totalProducts = await Product.countDocuments({});
        const totalOrders = await Order.countDocuments({});

        const orders = await Order.find({});

        const totalRevenue = orders.reduce(
            (sum, order) => sum + order.totalPrice,
            0
        );

        res.status(200).json({
            totalUsers,
            totalProducts,
            totalOrders,
            totalRevenue
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = { getAdminStats };