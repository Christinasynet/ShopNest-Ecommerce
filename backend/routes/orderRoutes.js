const express = require('express');
const {Protect} = require('../middleware/authmiddleware.js');
const {admin} = require('../middleware/adminmiddleware.js');

const {createOrder, getOrders, myOrders, updateOrderStatus} = require('../controllers/orderController.js');

const router = express.Router();
console.log("Protect =", Protect);
console.log("createOrder =", createOrder);
router.route('/').post(Protect, createOrder).get(Protect, admin, getOrders);

router.route('/myorders').get(Protect, myOrders);

router.route('/:id/status').put(Protect, admin, updateOrderStatus);

module.exports = router;

