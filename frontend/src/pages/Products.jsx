import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import api from "../services/api";
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
        console.error(
          "Error fetching products:",
          error
        );
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (deletedId) => {
    setProducts((currentProducts) =>
      currentProducts.filter(
        (product) => product._id !== deletedId
      )
    );
  };

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
              onDelete={handleDelete}
            />
          ))}

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Products;