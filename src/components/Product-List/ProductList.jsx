// src/components/ProductList/ProductList.jsx
import React, { useRef } from "react";
import { products, tittles } from "../../data/product";
import ProductCart from "../Cart/Product-cart/ProductCart";
import "./ProductList.css";
import Ads from "../Ads/ads";

const ProductList = () => {
  const scrollRef = useRef(null);

  const scrollAmount = () => {
    // Scroll by one “page” (1/3 of visible width)
    return scrollRef.current.clientWidth / 3;
  };

  const scrollLeft = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollLeft - scrollAmount(), behavior: "smooth" });
  };

  const scrollRight = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollLeft + scrollAmount(), behavior: "smooth" });
  };

  return (
    <div className="product-list"> 
      <div className="category-product-list">
        <div className="category">
          <div className="category-heading">{tittles[0].name}</div>
          <div className="line" />

          <div className="slider-wrapper">
            <button className="slider-btn left" onClick={scrollLeft}>
              ‹
            </button>

            <div className="product-grid" ref={scrollRef}>
              {products.map((product) => (
                <ProductCart key={product.id} data={product} />
              ))}
            </div>

            <button className="slider-btn right" onClick={scrollRight}>
              ›
            </button>
          </div>
        </div>
        <Ads/>
        <div className="category">
          <div className="category-heading">{tittles[1].name}</div>
          <div className="line" />

          <div className="slider-wrapper">
            <button className="slider-btn left" onClick={scrollLeft}>
              ‹
            </button>

            <div className="product-grid" ref={scrollRef}>
              {products.map((product) => (
                <ProductCart key={product.id} data={product} />
              ))}
            </div>

            <button className="slider-btn right" onClick={scrollRight}>
              ›
            </button>
          </div>
        </div>

        <div className="category">
          <div className="category-heading">{tittles[2].name}</div>
          <div className="line" />

          <div className="slider-wrapper">
            <button className="slider-btn left" onClick={scrollLeft}>
              ‹
            </button>

            <div className="product-grid" ref={scrollRef}>
              {products.map((product) => (
                <ProductCart key={product.id} data={product} />
              ))}
            </div>

            <button className="slider-btn right" onClick={scrollRight}>
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
