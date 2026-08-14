import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../redux/cartSlice";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDE */}

        <div style={{ flex: 2 }}>
          <h1 style={{ marginBottom: "25px" }}>
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <>
              <h2>Your cart is empty.</h2>

              <Link to="/products">
                <button
                  style={{
                    marginTop: "20px",
                    padding: "12px 20px",
                    background: "#ff7300",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Continue Shopping
                </button>
              </Link>
            </>
          ) : (
            cartItems.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "20px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <img
                    src={
                      item.imageUrl?.[0] ||
                      "https://via.placeholder.com/120"
                    }
                    alt={item.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />

                  <div>
                    <h3>{item.name}</h3>

                    <p
                      style={{
                        color: "#666",
                        marginTop: "10px",
                      }}
                    >
                      ₹{item.price}
                    </p>
                  </div>
                </div>

                {/* Quantity */}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <button
                    onClick={() =>
                      dispatch(decreaseQty(item._id))
                    }
                    style={{
                      width: "35px",
                      height: "35px",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>

                  <h3>{item.qty}</h3>

                  <button
                    onClick={() =>
                      dispatch(increaseQty(item._id))
                    }
                    style={{
                      width: "35px",
                      height: "35px",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Total */}

                <h3>
                  ₹{item.price * item.qty}
                </h3>

                {/* Remove */}

                <button
                  onClick={() =>
                    dispatch(removeFromCart(item._id))
                  }
                  style={{
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDE */}

        {cartItems.length > 0 && (
          <div
            style={{
              flex: 1,
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "25px",
              position: "sticky",
              top: "100px",
            }}
          >
            <h2>Order Summary</h2>

            <hr />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <span>Items</span>

              <strong>{totalItems}</strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <span>Delivery</span>

              <strong>FREE</strong>
            </div>

            <hr style={{ margin: "20px 0" }} />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <strong>Total</strong>

              <strong>₹{totalPrice}</strong>
            </div>

            <Link to="/checkout">
              <button
                style={{
                  width: "100%",
                  marginTop: "30px",
                  background: "#ff7300",
                  color: "white",
                  border: "none",
                  padding: "15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "17px",
                }}
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;