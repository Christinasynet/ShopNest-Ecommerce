import React from "react";

const Disclaimer = () => {
  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          width: "95%",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "30px",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            background: "#0a0a0a",
            borderRadius: "20px",
            padding: "30px",
            border: "1px solid #222",
            height: "fit-content",
            position: "sticky",
            top: "20px",
          }}
        >
          <h2
            style={{
              color: "#ff7300",
              marginBottom: "20px",
            }}
          >
            Quick Overview
          </h2>

          <p
            style={{
              color: "#ccc",
              lineHeight: "1.8",
            }}
          >
            ShopNest is an educational e-commerce platform
            showcasing modern web technologies and shopping
            experiences.
          </p>

          <hr
            style={{
              borderColor: "#222",
              margin: "20px 0",
            }}
          />

          <p style={{ color: "#fff" }}>✓ Product Information</p>
          <p style={{ color: "#fff" }}>✓ Pricing Disclaimer</p>
          <p style={{ color: "#fff" }}>✓ Payment Services</p>
          <p style={{ color: "#fff" }}>✓ External Links</p>
          <p style={{ color: "#fff" }}>✓ User Responsibilities</p>
          <p style={{ color: "#fff" }}>✓ Limitation of Liability</p>

          <div
            style={{
              marginTop: "25px",
              padding: "15px",
              background: "#111",
              borderRadius: "12px",
              border: "1px solid #333",
            }}
          >
            <h4 style={{ color: "#ff7300" }}>
              Last Updated
            </h4>

            <p style={{ color: "#ccc" }}>
              June 2026
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            background:
              "linear-gradient(180deg,#0a0a0a,#050505)",
            borderRadius: "24px",
            padding: "60px",
            border: "1px solid #222",
            boxShadow:
              "0 0 30px rgba(255,115,0,0.15)",
            color: "white",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "10px 20px",
              borderRadius: "30px",
              background: "#111",
              color: "#ff7300",
              border: "1px solid #ff7300",
              marginBottom: "25px",
            }}
          >
            ShopNest Policy Center
          </div>

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "800",
              marginBottom: "25px",
              background:
                "linear-gradient(90deg,#ffffff,#ff7300)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Legal & Site Disclaimer
          </h1>

          <hr
            style={{
              borderColor: "#222",
              marginBottom: "30px",
            }}
          />

          <p
            style={{
              color: "#cfcfcf",
              lineHeight: "2",
              fontSize: "1.15rem",
            }}
          >
            ShopNest is developed for educational and
            demonstration purposes. Product information,
            pricing, images, and integrations may be
            sample content and should not be interpreted
            as legally binding commercial offerings.
          </p>

          <h2
            style={{
              color: "#ff7300",
              marginTop: "40px",
              borderLeft: "4px solid #ff7300",
              paddingLeft: "15px",
            }}
          >
            1. Accuracy of Information
          </h2>

          <p style={{ color: "#cfcfcf", lineHeight: "2" }}>
            While we strive for accuracy, information
            displayed on ShopNest may occasionally contain
            inaccuracies, typographical errors, or outdated
            details.
          </p>

          <h2
            style={{
              color: "#ff7300",
              marginTop: "40px",
              borderLeft: "4px solid #ff7300",
              paddingLeft: "15px",
            }}
          >
            2. Product Images & Descriptions
          </h2>

          <p style={{ color: "#cfcfcf", lineHeight: "2" }}>
            Images and descriptions are provided for
            reference purposes only. Actual products may
            vary in appearance, packaging, specifications,
            or color.
          </p>

          <h2
            style={{
              color: "#ff7300",
              marginTop: "40px",
              borderLeft: "4px solid #ff7300",
              paddingLeft: "15px",
            }}
          >
            3. Payment Processing
          </h2>

          <p style={{ color: "#cfcfcf", lineHeight: "2" }}>
            Payment integrations may operate in testing
            environments. ShopNest does not guarantee the
            availability of third-party payment services.
          </p>

          <h2
            style={{
              color: "#ff7300",
              marginTop: "40px",
              borderLeft: "4px solid #ff7300",
              paddingLeft: "15px",
            }}
          >
            4. External Links
          </h2>

          <p style={{ color: "#cfcfcf", lineHeight: "2" }}>
            ShopNest may contain links to external websites.
            We are not responsible for their content,
            privacy practices, or availability.
          </p>

          <h2
            style={{
              color: "#ff7300",
              marginTop: "40px",
              borderLeft: "4px solid #ff7300",
              paddingLeft: "15px",
            }}
          >
            5. User Responsibilities
          </h2>

          <p style={{ color: "#cfcfcf", lineHeight: "2" }}>
            Users are responsible for safeguarding account
            credentials and ensuring that information
            submitted through the platform is accurate.
          </p>

          <h2
            style={{
              color: "#ff7300",
              marginTop: "40px",
              borderLeft: "4px solid #ff7300",
              paddingLeft: "15px",
            }}
          >
            6. Limitation of Liability
          </h2>

          <p style={{ color: "#cfcfcf", lineHeight: "2" }}>
            ShopNest and its developers shall not be liable
            for any losses, damages, or interruptions
            resulting from the use of this platform.
          </p>

          <div
            style={{
              marginTop: "50px",
              padding: "25px",
              background: "#111",
              borderRadius: "15px",
              border: "1px solid #222",
            }}
          >
            <h3 style={{ color: "#ff7300" }}>
              Important Notice
            </h3>

            <p
              style={{
                color: "#d1d1d1",
                lineHeight: "1.8",
              }}
            >
              By accessing or using ShopNest, you acknowledge
              that you have read, understood, and agreed to
              this disclaimer and all related policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;