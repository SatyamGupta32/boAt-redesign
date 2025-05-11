// src/pages/BlogList.jsx
import React from "react";
import { posts } from "../data/posts";
import BlogCard from "../components/BlogCard";
import "./BlogList.css";

export default function BlogList() {
  return (
    <section className="blog-list">
      <header className="blog-list-header">
        <h1>Our Blogs</h1>
      </header>
      <div className="blog-list-grid">
        {posts.map((p) => (
          <BlogCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  );
}
