import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getMyOrders } from "../services/orderService";
import "../styles/myOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await getMyOrders();
      setOrders(data);
    } catch (error) {
      console.log(error);
      alert("Unable to load orders");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <h2
          style={{
            textAlign: "center",
            marginTop: "80px",
          }}
        >
          Loading...
        </h2>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="orders-container">
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <h3>No Orders Found</h3>
        ) : (
          orders.map((order) => (
            <div
              className="order-card"
              key={order._id}
            >
              <h3>Order ID</h3>

              <p>{order._id}</p>

              <hr />

              <h4>Items</h4>

              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="order-item"
                >
                  <span>
                    {item.product?.name}
                  </span>

                  <span>
                    Qty : {item.qty}
                  </span>

                  <span>
                    ₹{item.price}
                  </span>
                </div>
              ))}

              <hr />

              <div className="order-bottom">

                <strong>
                  Total : ₹{order.totalPrice}
                </strong>

                <span
                  className={`status ${order.status.toLowerCase()}`}
                >
                  {order.status}
                </span>

              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
};

export default MyOrders;