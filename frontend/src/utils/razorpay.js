import api from "../services/api";
import { verifyPayment } from "../services/paymentService";
import { createOrder } from "../services/orderService";

export const openRazorpay = async ({
  totalPrice,
  shipping,
  cartItems,
  navigate,
  dispatch,
  clearCart,
}) => {
  try {
    // Get Razorpay Key
    const keyResponse = await api.get("/payments/key");
    const razorpayKey = keyResponse.data.key;

    // Create Razorpay Order
    const orderResponse = await api.post("/payments/order", {
      amount: totalPrice,
    });

    const order = orderResponse.data;

    const options = {
      key: razorpayKey,
      amount: order.amount,
      currency: order.currency,
      name: "ShopNest",
      description: "ShopNest Order Payment",
      image: "/free.png",

      order_id: order.id,

      handler: async function (response) {
        try {
          // Verify Payment
          const verify = await verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (!verify.success) {
            alert("Payment Verification Failed");
            return;
          }

          // Save Order
          await createOrder(
            cartItems,
            totalPrice,
            shipping,
            response.razorpay_payment_id
          );

          dispatch(clearCart());

          alert("Payment Successful!");

          navigate("/order-success");
        } catch (err) {
          console.log(err);
          alert("Failed to save order.");
        }
      },

      prefill: {
        name: shipping.fullName,
      },

      notes: {
        address: shipping.address,
      },

      theme: {
        color: "#ff7300",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.on("payment.failed", function (response) {
      alert(response.error.description);
    });

    razorpay.open();
  } catch (error) {
    console.log(error);
    alert("Unable to start payment.");
  }
};