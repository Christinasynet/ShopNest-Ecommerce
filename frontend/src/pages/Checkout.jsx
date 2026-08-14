import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { clearCart } from "../redux/cartSlice";
import { openRazorpay } from "../utils/razorpay";

import "../styles/checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const [shipping, setShipping] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "India",
  });

  const handleChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const proceedToPayment = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (
      !shipping.fullName ||
      !shipping.address ||
      !shipping.city ||
      !shipping.postalCode ||
      !shipping.country
    ) {
      alert("Please fill all shipping details.");
      return;
    }

    try {
      await openRazorpay({
        totalPrice,
        shipping,
        cartItems,
        navigate,
        dispatch,
        clearCart,
      });
    } catch (error) {
      console.error(error);
      alert("Payment failed.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="checkout-container">
        <div className="checkout-left">
          <h2>Checkout</h2>

          <div className="checkout-form">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={shipping.fullName}
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Address"
              value={shipping.address}
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={shipping.city}
              onChange={handleChange}
            />

            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={shipping.postalCode}
              onChange={handleChange}
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={shipping.country}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="checkout-right">
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div
              key={item._id}
              className="summary-item"
            >
              <span>
                {item.name} × {item.qty}
              </span>

              <span>
                ₹{item.price * item.qty}
              </span>
            </div>
          ))}

          <hr />

          <div className="summary-item">
            <strong>Total</strong>
            <strong>₹{totalPrice}</strong>
          </div>

          <button
            className="payment-btn"
            onClick={proceedToPayment}
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;