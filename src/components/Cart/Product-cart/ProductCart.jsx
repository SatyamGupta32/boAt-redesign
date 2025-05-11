// ProductCart.jsx
import React from "react";
import { Link } from "react-router-dom";
import iconCart from "/images/iconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, toggleStatusTab } from "../../../stores/cart";
import "./ProductCart.css";

const ProductCart = ({ data }) => {
  useSelector((store) => store.cart.items);
  const { id, name, price, rating = 0, image } = data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
    dispatch(toggleStatusTab());
  };

  return (
    <Link to={`/products/${encodeURIComponent(name)}`}>
      <div className="product-cart">
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="rating-badge">
          <div className="block">
            <span className="review">★</span>
            <span className="rating">{rating}</span>
          </div>
        </div>
        <div className="product-details">
          <p className="product-name">{name}</p>
          <div className="price-and-button">
            <div className="prices">
              <span className="old-price">${price.oldPrice}</span>
              <span className="new-price">${price.newPrice}</span>
            </div>
            <div className="add-cart-btn" onClick={handleAddToCart}>
              <img src={iconCart} alt="cart" />
              Add To Cart
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;
