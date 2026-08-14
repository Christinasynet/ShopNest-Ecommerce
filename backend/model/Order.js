const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
    }
  }
],

    totalPrice: {
        type: Number,
        required: true,
    },fullName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city : {
        type: String,
        required: true,
    },
    postalCode : {
        type: String,
        required: true,
    },
    country : {
        type: String,
        required: true,
    },
    paymentId: {
        type: String,
        required: true,
    },
   status: {
    type: String,
    enum: ["Pending", "Paid", "Shipped", "Delivered", "Cancelled"],
    default: "Pending",
},
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
