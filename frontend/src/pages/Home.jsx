import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/products");
        const data = await res.json();

        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="loading">
          <h2>Loading Products...</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="home">
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to ShopNest</h1>
            <p>Discover the best products at unbeatable prices.</p>

            <div className="home-buttons">
              <Link to="/products">
                <button>Shop Now</button>
              </Link>

              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="featured-products">
          <h2>Featured Products</h2>

          <div className="products-container">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>

          <div className="view-all">
            <Link to="/products">
              <button>View All Products</button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;