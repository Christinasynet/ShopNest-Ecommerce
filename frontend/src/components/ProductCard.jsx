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

  // ================= ADD TO CART =================
  const addToCartHandler = () => {
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`);
  };

  // ================= DELETE PRODUCT =================
  const deleteProductHandler = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${product.name}"?`
    );

    if (!confirmDelete) {
      return;
    }

    if (!user?.token) {
      alert("You are not authorized. Please login again.");
      return;
    }

    try {
      setDeleting(true);

      await api.delete(`/products/${product._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      alert("Product deleted successfully!");

      if (onDelete) {
        onDelete(product._id);
      }
    } catch (error) {
      console.error("DELETE PRODUCT ERROR:", error);

      if (error.response) {
        alert(
          error.response.data.message ||
            "Failed to delete product"
        );
      } else {
        alert("Unable to connect to the backend.");
      }
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="product-card">

      {/* ================= PRODUCT IMAGE ================= */}
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

      {/* ================= PRODUCT INFORMATION ================= */}
      <div className="product-info">

        {/* Rating */}
        <div className="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span>4.8</span>
        </div>

        {/* Product Name */}
        <h3 className="product-name">
          {product.name}
        </h3>

        {/* Category */}
        <span className="category">
          {product.category}
        </span>

        {/* Price */}
        <p className="product-price">
          ₹{product.price}
        </p>

        {/* Description */}
        <p className="product-description">
          {product.description?.length > 80
            ? product.description.substring(0, 80) + "..."
            : product.description}
        </p>

        {/* ================= BUTTONS ================= */}
        <div className="product-buttons">

          {/* Add To Cart */}
          <button
            className="cart-btn"
            onClick={addToCartHandler}
          >
            <FaShoppingCart />
            Add to Cart
          </button>

          {/* View Details */}
          <Link
            to={`/product/${product._id}`}
            className="details-btn"
          >
            View Details
          </Link>

          {/* Delete - Admin Only */}
          {user?.role === "admin" && (
            <button
              className="delete-btn"
              onClick={deleteProductHandler}
              disabled={deleting}
            >
              <FaTrash />

              {deleting
                ? "Deleting..."
                : "Delete"}
            </button>
          )}

        </div>

      </div>

    </div>
  );
};

export default ProductCard;