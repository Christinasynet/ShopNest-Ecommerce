import React from "react";

const ReturnPolicy = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "40px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "75%",
          backgroundColor: "#050505",
          borderRadius: "20px",
          padding: "50px",
          border: "1px solid #111",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            marginBottom: "30px",
          }}
        >
          Return & Refund Policy
        </h1>

        <hr
          style={{
            border: "1px solid #111",
            marginBottom: "35px",
          }}
        />

        <p
          style={{
            color: "#cfcfcf",
            lineHeight: "2",
            fontSize: "1.2rem",
            marginBottom: "40px",
          }}
        >
          At ShopNest, we proudly stand behind the quality of our
          products and customer experience. If for any reason you
          are not completely satisfied with your purchase, you may
          request a return within 30 days of receiving your order,
          subject to the conditions outlined below.
        </p>

        <h2 style={{ color: "#ff7300", marginBottom: "20px" }}>
          1. Eligibility for Returns
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            lineHeight: "2",
            fontSize: "1.15rem",
            marginBottom: "40px",
          }}
        >
          To be eligible for a return, the item must be unused,
          undamaged, and in the same condition in which it was
          received. The product must be returned in its original
          packaging along with invoices, accessories, manuals,
          warranty cards, and proof of purchase.
        </p>

        <h2 style={{ color: "#ff7300", marginBottom: "20px" }}>
          2. Refund Processing
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            lineHeight: "2",
            fontSize: "1.15rem",
            marginBottom: "40px",
          }}
        >
          Once your returned product has been received and
          inspected, we will notify you regarding approval of your
          refund. Approved refunds are processed to the original
          payment method within 5–7 business days depending on your
          bank or payment provider.
        </p>

        <h2 style={{ color: "#ff7300", marginBottom: "20px" }}>
          3. Non-Returnable Products
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            lineHeight: "2",
            fontSize: "1.15rem",
            marginBottom: "40px",
          }}
        >
          Certain products cannot be returned, including digital
          downloads, gift cards, software licenses, personalized
          items, hygiene products, and items marked as final sale.
        </p>

        <h2 style={{ color: "#ff7300", marginBottom: "20px" }}>
          4. Damaged or Incorrect Orders
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            lineHeight: "2",
            fontSize: "1.15rem",
            marginBottom: "40px",
          }}
        >
          If you receive a damaged, defective, or incorrect item,
          please contact our support team within 48 hours of
          delivery. Supporting images may be requested to assist in
          processing your replacement or refund request.
        </p>

        <h2 style={{ color: "#ff7300", marginBottom: "20px" }}>
          5. Shipping Charges
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            lineHeight: "2",
            fontSize: "1.15rem",
            marginBottom: "40px",
          }}
        >
          Original shipping costs are generally non-refundable.
          Return shipping fees may be the responsibility of the
          customer unless the return is due to a defective product
          or an error on our part.
        </p>

        <h2 style={{ color: "#ff7300", marginBottom: "20px" }}>
          6. Exchange Requests
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            lineHeight: "2",
            fontSize: "1.15rem",
            marginBottom: "40px",
          }}
        >
          Eligible products may be exchanged subject to stock
          availability. If a replacement product is unavailable,
          the customer may choose a refund instead.
        </p>

        <h2 style={{ color: "#ff7300", marginBottom: "20px" }}>
          7. Order Cancellation
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            lineHeight: "2",
            fontSize: "1.15rem",
            marginBottom: "40px",
          }}
        >
          Orders may be cancelled before shipment. Once an order
          has been dispatched, standard return procedures will
          apply and cancellation cannot be guaranteed.
        </p>

        <h2 style={{ color: "#ff7300", marginBottom: "20px" }}>
          8. Contact & Support
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            lineHeight: "2",
            fontSize: "1.15rem",
          }}
        >
          For assistance regarding returns, refunds, exchanges, or
          order-related concerns, please contact the ShopNest
          support team. We are committed to resolving customer
          issues quickly and professionally.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;