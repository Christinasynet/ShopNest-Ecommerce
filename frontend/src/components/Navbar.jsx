import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaShoppingCart,
  FaHome,
  FaStore,
  FaUser,
  FaSearch,
  FaPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import "../styles/navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">

      {/* Left Section */}
      <div className="nav-left">

        <Link to="/" className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/Free.png`}
            alt="ShopNest Logo"
            className="logo-img"
          />

          <span>ShopNest</span>
        </Link>

        <ul className="nav-links">

          <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>

          <li>
            <Link to="/products">
              <FaStore />
              Shop
            </Link>
          </li>

          {user?.role === "admin" && (
            <li>
              <Link to="/add-product">
                <FaPlus />
                Add Product
              </Link>
            </li>
          )}

        </ul>
      </div>

      {/* Search */}
      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search products..."
        />
      </div>

      {/* Right Section */}
      <div className="nav-right">

        {/* Cart */}
        <Link to="/cart" className="cart-link">
          <FaShoppingCart />

          <span>Cart</span>

          {cartItems.length > 0 && (
            <span className="cart-count">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* User */}
        {user ? (
          <div
            className="profile-dropdown"
            ref={dropdownRef}
          >

            <button
              type="button"
              className="profile-btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FaUser />

              <span>{user.username}</span>
            </button>

            {showDropdown && (
              <div className="dropdown-content">

                <Link
                  to="/myorders"
                  onClick={() => setShowDropdown(false)}
                >
                  My Orders
                </Link>

                {user.role === "admin" && (
                  <Link
                    to="/add-product"
                    onClick={() => setShowDropdown(false)}
                  >
                    Add Product
                  </Link>
                )}

                <button
                  className="logout-dropdown"
                  onClick={() => {
                    setShowDropdown(false);
                    logoutHandler();
                  }}
                >
                  <FaSignOutAlt />
                  Logout
                </button>

              </div>
            )}

          </div>
        ) : (
          <Link
            to="/login"
            className="login-btn"
          >
            <FaUser />
            Login
          </Link>
        )}

      </div>

    </nav>
  );
};

export default Navbar;