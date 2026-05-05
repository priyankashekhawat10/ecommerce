import React, { useState, useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CartContext } from "../../context/CartContext"; // ✅ ADD THIS

function Navbar() {

  const [menu, setMenu] = useState(false);

  const { totalQuantity } = useContext(CartContext); // ✅ GET COUNT

  return (
    <div className="navbar">

      {/* LOGO */}
      <div className="logo">
        <h2>SHOP.CO</h2>
      </div>

      {/* NAV LINKS */}
      <div className={menu ? "nav-links active" : "nav-links"}>
        <Link to="/">Home</Link>
        <Link to="/Shop">On Sale</Link>
        <Link to="/Newarrivals">New Arrivals</Link>
        <Link to="/Brands">Brands</Link>
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <FiSearch />
        <input type="text" placeholder="Search for products..." />
      </div>

      {/* ICONS */}
      <div className="icons">
        <Link to="/cart" className="cart-link">
          <BsCart />

          {/* 🔴 RED COUNT */}
          {totalQuantity > 0 && (
            <span className="cart-count">{totalQuantity}</span>
          )}

        </Link>
        <CiUser />
      </div>

      {/* MOBILE MENU ICON */}
      <div 
        className="menu-icon" 
        onClick={() => setMenu(!menu)}
      >
        {menu ? <FaTimes /> : <FaBars />}
      </div>

    </div>
  );
}

export default Navbar;