// src/components/Detail/Detail.jsx
import React from "react";
import "./Detail.css";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/header";

const Detail = () => {
  return (
    <div className="wrapper-div">
      <Header />
      <ProductDetail /> 
      <Footer />
    </div>
  );
};

export default Detail;
