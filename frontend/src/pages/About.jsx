import React from "react";

const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "900px",
          background: "#050505",
          borderRadius: "25px",
          padding: "50px",
          textAlign: "center",
          border: "1px solid #111",
          boxShadow: "0 0 25px rgba(255,115,0,0.1)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 25px",
            borderRadius: "30px",
            border: "2px solid #ff7300",
            color: "#fff",
            marginBottom: "25px",
            boxShadow: "0 0 15px rgba(255,115,0,0.5)",
          }}
        >
          @shopnest
        </div>

        <h1
          style={{
            color: "#fff",
            fontSize: "4rem",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          About Us
        </h1>

        <h2
          style={{
            color: "#ff7300",
            marginBottom: "25px",
            fontSize: "2rem",
          }}
        >
          Welcome to ShopNest
        </h2>

        <p
          style={{
            color: "#d1d1d1",
            fontSize: "1.3rem",
            lineHeight: "2",
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}
        >
          Join our shopping community and discover amazing products
          at unbeatable prices. ShopNest provides a secure, fast,
          and reliable online shopping experience for customers
          worldwide.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "#1c1c1c",
              color: "#fff",
              border: "1px solid #333",
              padding: "15px 30px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            🌐 Website
          </button>

          <button
            style={{
              background: "#3b0f0f",
              color: "#ff6b6b",
              border: "1px solid #7a1d1d",
              padding: "15px 30px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            📺 Products
          </button>

          <button
            style={{
              background: "#3a1031",
              color: "#ff6bd6",
              border: "1px solid #7c2366",
              padding: "15px 30px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            📷 Instagram
          </button>

          <button
            style={{
              background: "#10294f",
              color: "#6ea8ff",
              border: "1px solid #2959a5",
              padding: "15px 30px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            💼 LinkedIn
          </button>

          <button
            style={{
              background: "#161616",
              color: "#fff",
              border: "1px solid #333",
              padding: "15px 30px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            ✕ Twitter
          </button>
        </div>

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <button
            style={{
              background: "#0f5132",
              color: "#7dffbf",
              border: "1px solid #198754",
              padding: "15px 35px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            💬 WhatsApp
          </button>

          <button
            style={{
              background: "#1c1c1c",
              color: "#fff",
              border: "1px solid #333",
              padding: "15px 35px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            🔗 Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;