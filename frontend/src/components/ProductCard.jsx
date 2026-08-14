import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  FaShoppingCart,
  FaStar,
  FaTrash,
} from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onDelete }) => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);

  const [deleting, setDeleting] = useState(false);

  const addToCartHandler = () => {
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`);
  };

  const deleteProductHandler = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${product.name}"?`
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setDeleting(true);

      await api.delete(`/products/${product._id}`);

      alert("Product deleted successfully!");

      if (onDelete) {
        onDelete(product._id);
      }
    } catch (error) {
      console.error("DELETE PRODUCT ERROR:", error);

      alert(
        error.response?.data?.message ||
          "Failed to delete product"
      );
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="product-card">

      <div className="product-image-container">
        <img
          src={
            product.imageUrl?.[0] ||
            "https://via.placeholder.com/300"
          }
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-info">

        <div className="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span>4.8</span>
        </div>

        <h3 className="product-name">
          {product.name}
        </h3>

        <span className="category">
          {product.category}
        </span>

        <p className="product-price">
          ₹{product.price}
        </p>

        <p className="product-description">
          {product.description.length > 80
            ? product.description.substring(0, 80) + "..."
            : product.description}
        </p>

        <div className="product-buttons">

          <button
            className="cart-btn"
            onClick={addToCartHandler}
          >
            <FaShoppingCart />
            Add to Cart
          </button>

          <Link
            to={`/product/${product._id}`}
            className="details-btn"
          >
            View Details
          </Link>

          {user?.role === "admin" && (
            <button
              className="delete-btn"
              onClick={deleteProductHandler}
              disabled={deleting}
            >
              <FaTrash />
              {deleting ? "Deleting..." : "Delete"}
            </button>
          )}

        </div>

      </div>

    </div>
  );
};

export default ProductCard;