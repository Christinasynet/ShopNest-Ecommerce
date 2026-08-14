import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#000",
        color: "white",
        padding: "40px 60px",
        borderTop: "1px solid #111",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h2
          style={{
            color: "#ff7300",
            marginBottom: "10px",
          }}
        >
          ShopNest
        </h2>

        <p style={{ color: "#bdbdbd" }}>
          Premium E-Commerce Platform.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <Link
          to="/about"
          style={{ color: "#d1d1d1" }}
        >
          About Us
        </Link>

        <Link
          to="/return-policy"
          style={{ color: "#d1d1d1" }}
        >
          Return Policy
        </Link>

        <Link
          to="/disclaimer"
          style={{ color: "#d1d1d1" }}
        >
          Disclaimer
        </Link>
      </div>

      <div>
        <p style={{ color: "#bdbdbd" }}>
          © 2026 ShopNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;