import React, { useState, useEffect } from "react";
import iconCart from "/images/iconCart.png";
import menuIcon from "/images/menu-white.svg";
import closeIcon from "/images/close-white.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../../stores/cart";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Update cart badge count
  useEffect(() => {
    const total = carts.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(total);
  }, [carts]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", mobileOpen);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [mobileOpen]);

  const handleOpenTabCart = () => dispatch(toggleStatusTab());
  const toggleMobile = () => setMobileOpen((open) => !open);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={() => setMobileOpen(false)}>
          bo<span>A</span>t
        </Link>
      </div>

      {/* desktop nav */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">Info</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* mobile hamburger */}
      <button className="hamburger" onClick={toggleMobile}>
        <img src={menuIcon} alt="Menu" />
      </button>

      {/* cart button */}
      <div className="cart-btn" onClick={handleOpenTabCart}>
        <div className="img-box">
          <img src={iconCart} alt="Cart" />
        </div>
        {totalQuantity > 0 && (
          <span className="cart-btn__badge">{totalQuantity}</span>
        )}
      </div>

      {mobileOpen && <div className="mobile-backdrop" onClick={toggleMobile} />}
      {/* slide-in mobile menu */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <img
          src={closeIcon}
          alt="Close"
          onClick={() => setMobileOpen(false)}
        />
        <div className="links">
          <Link to="/" onClick={toggleMobile}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMobile}>
            Info
          </Link>
          <Link to="/contact" onClick={toggleMobile}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
