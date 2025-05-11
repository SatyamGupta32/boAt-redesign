import { useState } from "react";
import { Container, GlobalStyles } from "./App.style.js";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import Layout from "./components/Cart/Layout/layout";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  return (
    <Container className="toogle">
      <GlobalStyles />
      <Routes>
      <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="products/:slug" element={<Detail />} />
          <Route path="/blogs/:slug" element={<Blogs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
