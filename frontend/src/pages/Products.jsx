import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import api from "../api";
import "../styles/Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");

        console.log("PRODUCTS:", response.data);

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />

      <div className="products-page">
        <h1 className="products-title">
          Our Products
        </h1>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;