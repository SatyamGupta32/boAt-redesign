// src/components/Categories/Categories.jsx
import React from "react";
import { categories } from "../../data/categories";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-box">
      <div className="categories-list">
        {categories.map((cat) => (
          <div className="categories" key={cat.id}>
            <div className="categories-img">
              <img src={cat.image} alt={cat.label} />
            </div>
            <div className="categories-label">
              {cat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
