import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/orderSuccess.css";

const OrderSuccess = () => {
  return (
    <>
      <Navbar />

      <div className="success-container">
        <div className="success-card">

          <div className="success-icon">
            ✅
          </div>

          <h1>Payment Successful!</h1>

          <p>
            Thank you for shopping with <strong>ShopNest</strong>.
          </p>

          <p>
            Your order has been placed successfully.
          </p>

          <div className="success-buttons">

            <Link to="/products">
              <button className="continue-btn">
                Continue Shopping
              </button>
            </Link>

            <Link to="/myorders">
              <button className="orders-btn">
                My Orders
              </button>
            </Link>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrderSuccess;