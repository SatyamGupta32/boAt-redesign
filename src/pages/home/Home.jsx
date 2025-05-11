// src/components/Home/Home.jsx
import React, { useEffect } from "react";
import "./home.css";
import Header from '../../components/Header/header'
import Carousel from "../../components/Carousel/Carousel";
import ProductList from "../../components/Product-List/ProductList";
import Categories from "../../components/Categories/Categories";
import MiniBlog from "../../components/Mini_Blog/MiniBlog";
import Footer from "../../components/Footer/Footer";
import Ads from '../../components/Ads/Ads';


const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Carousel />
      <Ads />
      <Categories />
      <ProductList />
      <Ads/>
      <MiniBlog />
      <Footer/>
    </div>
  );
};

export default Home;
