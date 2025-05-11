import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";;
import ProductCart from "../Cart/Product-cart/ProductCart";
import { addToCart, toggleStatusTab } from "../../stores/cart";
import { products, wireless, gadgets, tittles, allProducts } from "../../data/product";
import Ads from '../../components/Ads/Ads';
import "./ProductDetail.css";

const ProductDetail = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const thumbRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState("#000");

  // Reviews state & modal
  const [reviews, setReviews] = useState([]);
  const [showAccordion, setShowAccordion] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: "",
  });

  // Load product detail
  useEffect(() => {
    const found = allProducts.find((p) => p.name === decodedName);
    if (found) {
      setDetail(found);
      setReviews(found.reviews || []);
      const imgUrl = found.subImages
        ? found.subImages[Object.keys(found.subImages)[0]]
        : found.image;
      setSelectedImage(imgUrl);
    } else {
      navigate("/", { replace: true });
    }
  }, [name, navigate]);

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

  // Image zoom handlers
  useEffect(() => {
    if (!selectedImage) return;
    const imageZoom = document.getElementById("imageZoom");
    if (!imageZoom) return;
    const moveHandler = (event) => {
      imageZoom.style.setProperty("--display", "block");
      const x = (event.offsetX * 100) / imageZoom.offsetWidth;
      const y = (event.offsetY * 100) / imageZoom.offsetHeight;
      imageZoom.style.setProperty("--zoom-x", x + "%");
      imageZoom.style.setProperty("--zoom-y", y + "%");
    };
    const outHandler = () => {
      imageZoom.style.setProperty("--display", "none");
    };
    imageZoom.addEventListener("mousemove", moveHandler);
    imageZoom.addEventListener("mouseout", outHandler);
    return () => {
      imageZoom.removeEventListener("mousemove", moveHandler);
      imageZoom.removeEventListener("mouseout", outHandler);
    };
  }, [selectedImage]);

  const handleMinusQuantity = () => setQuantity((q) => Math.max(1, q - 1));
  const handlePlusQuantity = () => setQuantity((q) => q + 1);
  const handleAddToCart = () => {
    if (!detail) return;
    dispatch(addToCart({ productId: detail.id, quantity }));
    dispatch(toggleStatusTab());
  };

  // Scroll thumbnails and change main image
  const handlePrev = () => {
    if (!detail) return;
    const arr = detail.subImages
      ? Object.values(detail.subImages)
      : [detail.image];
    const idx = arr.indexOf(selectedImage);
    const prevIdx = (idx - 1 + arr.length) % arr.length;
    setSelectedImage(arr[prevIdx]);
    thumbRef.current?.scrollBy({
      left: -thumbRef.current.clientWidth / 4,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (!detail) return;
    const arr = detail.subImages
      ? Object.values(detail.subImages)
      : [detail.image];
    const idx = arr.indexOf(selectedImage);
    const nextIdx = (idx + 1) % arr.length;
    setSelectedImage(arr[nextIdx]);
    thumbRef.current?.scrollBy({
      left: thumbRef.current.clientWidth / 4,
      behavior: "smooth",
    });
  };

  const openAccordion = () => setShowAccordion(true);
  const closeAccordion = () => {
    setNewReview({ rating: 0, comment: "" });
    setShowAccordion(false);
  };

  const submitReview = () => {
    if (newReview.rating < 1 || !newReview.comment.trim()) {
      return alert("Please select a rating and enter a comment.");
    }
    const review = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      user: currentUser,
      rating: newReview.rating,
      comment: newReview.comment.trim(),
    };
    setReviews((r) => [review, ...r]);
    closeAccordion();
  };
  if (!detail || !selectedImage) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <div className="detail-grid">
        <div className="detail-image">
          <div
            id="imageZoom"
            style={{
              "--url": `url(${selectedImage})`,
              "--zoom-x": "0%",
              "--zoom-y": "0%",
              "--display": "none",
            }}
          >
            <img src={selectedImage} alt="Product" />
          </div>
          {detail.subImages && (
            <div className="thumbnail-slider">
              <div className="thumb-btn left" onClick={() => handlePrev(-1)}>
                ‹
              </div>
              <div className="thumbnails" ref={thumbRef}>
                {Object.values(detail.subImages).map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt="thumbnail"
                    className={`thumbnail ${selectedImage === url ? "active" : ""
                      }`}
                    onClick={() => setSelectedImage(url)}
                  />
                ))}
              </div>
              <div className="thumb-btn right" onClick={() => handleNext(1)}>
                ›
              </div>
            </div>
          )}
        </div>
        <div className="detail-info">
          <h1 className="product-name-detail">{detail.name}</h1>
          <div className="price">
            {" "}
            <p className="new-price-detail">${detail.price.newPrice}</p>
            <p className="old-price-detail">${detail.price.oldPrice}</p>
            <p className="discount-detail">${detail.price.discount} off</p>
          </div>
          <div className="purchase-section">
            <div className="color-qty">
              <div className="quantity-selector">
                <div className="quantity-div" onClick={handleMinusQuantity}>
                  -
                </div>
                <span className="quantity-display">{quantity}</span>
                <div className="quantity-div" onClick={handlePlusQuantity}>
                  +
                </div>
              </div>

              <div className="color-selector">
                {["#000", "#fff", "#2390ac", "#800000"].map((clr) => (
                  <div
                    key={clr}
                    className={`color-panel${selectedColor === clr ? " active" : ""
                      }`}
                    onClick={() => setSelectedColor(clr)}
                  >
                    <div
                      className="color-swatch"
                      style={{ backgroundColor: clr }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="delivery">
            <div className="delivery-check">
              <input
                type="text"
                placeholder="Enter your pincode"
                className="pincode-input"
                id="pincodeInput"
              />
              <div
                className="check-delivery-div"
                onClick={() => {
                  const pincode = document.getElementById("pincodeInput").value;
                  if (!pincode) return alert("Please enter a pincode");
                  fetch(`https://api.postalpincode.in/pincode/${pincode}`)
                    .then((response) => response.json())
                    .then((data) => {
                      if (data[0].Status === "Success") {
                        alert("Delivery is available in your area!");
                      } else {
                        alert("Sorry, delivery is not available in your area.");
                      }
                    })
                    .catch(() =>
                      alert("Error checking delivery availability.")
                    );
                }}
              >
                Check
              </div>
            </div>
          </div>

          <section className="specs-list">
            <div>Specifications</div>
            <ul className="unordered-list">
              {detail.detail ? (
                Object.entries(detail.detail).map(([key, val], idx) => (
                  <li className="list-item" key={idx}>
                    <strong className="strong">{key} :</strong>
                    <span className="span">{val}</span>
                  </li>
                ))
              ) : (
                <li className="list-item">
                  <em>No specification available.</em>
                </li>
              )}
            </ul>
          </section>
          <div className="div-control">
            <div className="add-to-cart-div" onClick={handleAddToCart}>
              Add To Cart
            </div>

            <div className="buy-now-div" onClick={handleAddToCart}>
              BUY NOW
            </div>
          </div>
        </div>
      </div>
      <div className="strip-2">
        <div className="icon-box">
          <div className="icon">
            <img
              src="/images/warrantyFinal.svg"
              alt=""
              className="strip-icon"
            />
            <div className="text">12+3 Months Warranty</div>
          </div>
          <div className="icon">
            <img src="/images/replacement.svg" alt="" className="strip-icon" />
            <div className="text">7-day Replacement</div>
          </div>
          <div className="icon">
            <img src="/images/dellivery.svg" alt="" className="strip-icon" />
            <div className="text">Free Express Delivery</div>
          </div>
          <div className="icon">
            <img src="/images/gst.svg" alt="" className="strip-icon" />
            <div className="text">GST Billing</div>
          </div>
        </div>
      </div>

      <div className="product-description">
        <div className="product-desc-heading">About this item</div>
        <div className="line" />
        <ol className="about-list">
          {detail.detail ? (
            detail.about.map((point, idx) => {
              // split into [heading, restOfText]
              const [heading, ...restParts] = point.split(":");
              const rest = restParts.join(":").trim();

              return (
                <li key={idx}>
                  <strong className="desc-about-heading">{heading} :-</strong>{" "}
                  <span className="rest">{rest}</span>
                </li>
              );
            })
          ) : (
            <li>
              <em>No Specification Available</em>
            </li>
          )}
        </ol>
      </div>

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

      <div className="review-container">
        <div className="review-header">
          <div className="review-heading">Customer Reviews</div>
          <div className="write-review-btn" onClick={openAccordion}>
            Write a Review
          </div>
        </div>

        {/* — inline accordion form — */}
        <div className={`review-accordion ${showAccordion ? "open" : ""}`}>
          <p className="reviewer-name">{detail.currentUser || "User Name"}</p>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((v) => (
              <span
                key={v}
                className={v <= newReview.rating ? "star star--filled" : "star"}
                onClick={() => setNewReview({ ...newReview, rating: v })}
              >
                ★
              </span>
            ))}
          </div>
          <label>
            <span> Comment:</span>
            <textarea
              rows={4}
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
            />
          </label>
          <div className="modal-div">
            <div onClick={closeAccordion}>Cancel</div>
            <div onClick={submitReview}>Submit</div>
          </div>
        </div>

        {/* — review cards — */}
        <div className="review-list">
          {reviews.map((r) => (
            <div className="review-card" key={r.id}>
              <div className="review-top">
                <span className="review-user">{r.user}</span>
                <span className="review-date">{r.date}</span>
              </div>
              <div className="review-rating">{"⭐".repeat(r.rating)}</div>
              <p className="review-comment">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <Ads />
    </div>
  );
};

export default ProductDetail;
