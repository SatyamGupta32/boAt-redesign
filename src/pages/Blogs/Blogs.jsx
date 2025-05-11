// src/pages/BlogDetail.jsx
import React from "react";
import "./Blogs.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/Footer";
import BlogContent from "../../components/BlogContent/BlogContent";

export default function Blogs() {
  return (
    <>
      <Header />
      <BlogContent />
      <Footer />
    </>
  );
}
