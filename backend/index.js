const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// ================= CORS =================

const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://shopnest-ecommerce-beta.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin
      if (!origin) {
        return callback(null, true);
      }

      // Allow fixed origins
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow all Vercel preview deployments
      const isVercelPreview =
        /^https:\/\/shopnest-ecommerce-[a-z0-9]+-christinasynet58-9907s-projects\.vercel\.app$/.test(
          origin
        );

      if (isVercelPreview) {
        return callback(null, true);
      }

      console.log("CORS blocked origin:", origin);

      return callback(new Error("Not allowed by CORS"));
    },

    credentials: true,
  })
);

// ================= BODY PARSER =================

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// ================= HOME =================

app.get("/", (req, res) => {
  res.send("shopNest Backend is working properly!");
});

// ================= ROUTES =================

console.log("Auth routes loaded");

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/products",
  require("./routes/productRoutes")
);

app.use(
  "/api/orders",
  require("./routes/orderRoutes.js")
);

app.use(
  "/api/payments",
  require("./routes/paymentRoutes.js")
);

app.use(
  "/api/analytics",
  require("./routes/analyticsRoutes")
);

// ================= SERVER =================

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});