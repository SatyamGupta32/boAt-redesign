import React from "react";
import "./BlogContent.css";
import { useParams, Link } from "react-router-dom";
import { posts } from "../../data/posts";

const BlogContent = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <p className="not-found">Post not found.</p>;

  return (
    <article className="blog-detail">
      {/* Hero Section */}
      <div
        className="blog-hero"
        style={{ backgroundImage: `url(${post.heroImage})` }}
      ></div>
      <div className="blog-hero-text">
        <h1>{post.title}</h1>
        <p>{post.heroSubtitle}</p>
      </div>

      {/* Intro */}
      <div className="blog-intro">
        <time className="blog-date">{post.date}</time>
        <p className="blog-intro-text">{post.intro}</p>
      </div>

      <div className="section-box">
        {" "}
        {/* Content Sections */}
        {post.sections.map((sec, idx) => (
          <section className="blog-section" key={idx}>
            <h2 className="section-heading">{sec.heading}</h2>
            <div className="section-img">
              <img src={sec.image} alt={sec.heading} />
            </div>
            <p className="section-text">{sec.text}</p>
          </section>
        ))}
      </div>

      {/* Explore More */}
      <section className="blog-more">
        <h2>Explore More Blogs</h2>

        <div className="line" />

        <div className="blog-list-grid">
          {posts
            .filter((p) => p.slug !== slug)
            .slice(0, 3)
            .map((p) => (
              <Link
                to={`/blogs/${p.slug}`}
                className="more-blog-card"
                key={p.id}
              >
                <div
                  className="more-card-img"
                  style={{ backgroundImage: `url(${p.heroImage})` }}
                />
                <h3 className="more-card-title">{p.title}</h3>
              </Link>
            ))}
        </div>
      </section>
    </article>
  );
};

export default BlogContent;
