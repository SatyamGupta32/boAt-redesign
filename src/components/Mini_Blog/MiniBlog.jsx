import React from "react";
import "./MiniBlog.css";
import { posts } from "../../data/posts";
import { Link } from "react-router-dom";

const MiniBlog = () => {
  return (
    <div className="blog-hero-box">
      <div className="heading">Blogs & News Events</div>
      <div className="line" />
      <div className="blog-container">
        {posts.map((post) => (
          <article className="blog-card" key={post.id}>
            <Link to={`/blogs/${post.slug}`}>
              <img
                src={post.heroImage}
                alt={post.title}
                className="blog-card-img"
              />
            </Link>
            <div className="blog-card-body">
              <time className="blog-card-date">{post.date}</time>
              <div className="blog-card-title">
                <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
              </div>
              <p className="blog-card-intro">{post.intro}</p>
              <Link to={`/blogs/${post.slug}`} className="blog-card-link">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MiniBlog;
