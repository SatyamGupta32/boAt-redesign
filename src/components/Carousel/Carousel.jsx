import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab, addToCart } from "../../stores/cart";
import { initCarousel } from "../../data/home";
import "./Carousel.css";

const Carousel = () => {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    initCarousel();
  }, []);

  // Add item to cart and open cart tab
  const handleAddToCart = (productId) => {
    dispatch(addToCart({ productId, quantity: 1 }));
    dispatch(toggleStatusTab());
  };

  return (
    <div className="home-container">
      <div className="carousel">
        <div className="list">
          {/* Slide 1: boAt Airdopes 141 ANC (id: 3) */}
          <div className="item">
            <img src="/images/a141.webp" alt="boAt Airdopes 141 ANC" />
            <div className="introduce">
              <div className="title">NEW ARRIVAL</div>
              <div className="topic">boAt Airdopes 141 ANC</div>
              <div className="des">
                Active Noise Cancelling TWS earbuds with up to 42 hours
                playback, low latency gaming, and ASAP Charge.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">boAt Airdopes 141 ANC</div>
              <div className="des">
                Experience Hybrid ANC, 50ms Beast Mode, Quad ENx mics, Insta
                Wake N' Pair technology, and USB-C ASAP Charge for uninterrupted
                listening.
              </div>
              <div className="specifications">
                <div><p>Playback Time</p><p>42 hours</p></div>
                <div><p>Noise Cancellation</p><p>Hybrid ANC</p></div>
                <div><p>Bluetooth</p><p>5.3</p></div>
                <div><p>Charging Port</p><p>Type-C</p></div>
                <div><p>Controls</p><p>Touch</p></div>
              </div>
              <div className="checkout">
                <button onClick={() => handleAddToCart(3)}>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          {/* Slide 2: boAt Airdopes 458 Spatial Bionic Sound (id: 4) */}
          <div className="item">
            <img src="/images/a458.png" alt="boAt Airdopes 458 Spatial Bionic Sound" />
            <div className="introduce">
              <div className="title">NEW ARRIVAL</div>
              <div className="topic">boAt Airdopes 458 Spatial Bionic Sound</div>
              <div className="des">
                Immersive THX-tuned Spatial Bionic Sound earbuds with 30 hours
                playback, IWP tech, and ASAP Charge.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">boAt Airdopes 458 Spatial Bionic Sound</div>
              <div className="des">
                Feel cinematic audio with THX-tuned drivers, 30 hrs playtime,
                Insta Wake N' Pair, ASAP Charge, and IPX5 water resistance.
              </div>
              <div className="specifications">
                <div><p>Playback Time</p><p>30 hours</p></div>
                <div><p>Audio Tech</p><p>Spatial Bionic Sound</p></div>
                <div><p>Bluetooth</p><p>5.3</p></div>
                <div><p>Water Resistance</p><p>IPX5</p></div>
                <div><p>Charging Port</p><p>Type-C</p></div>
              </div>
              <div className="checkout">
                <button onClick={() => handleAddToCart(4)}>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          {/* Slide 3: boAt Airdopes 511-V2 (id: 2) */}
          <div className="item">
            <img src="/images/511V2.webp" alt="boAt Airdopes 511-V2" />
            <div className="introduce">
              <div className="title">NEW ARRIVAL</div>
              <div className="topic">boAt Airdopes 511-V2</div>
              <div className="des">
                Dual 6mm driver earbuds with up to 35 hours playback, Quad ENx
                mics, and ASAP Charge.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">boAt Airdopes 511-V2</div>
              <div className="des">
                Featuring dual 6mm drivers, ENx Quad mics, 35 hrs playtime, ASAP
                Charge, and ergonomic fit for all-day comfort.
              </div>
              <div className="specifications">
                <div><p>Playback Time</p><p>35 hours</p></div>
                <div><p>Drivers</p><p>6mm Dual</p></div>
                <div><p>Bluetooth</p><p>5.2</p></div>
                <div><p>Water Resistance</p><p>IPX4</p></div>
                <div><p>Controls</p><p>Touch</p></div>
              </div>
              <div className="checkout">
                <button onClick={() => handleAddToCart(2)}>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          {/* Slide 4: boAt Airdopes 311 Pro (id: 1) */}
          <div className="item">
            <img src="/images/311pro.webp" alt="boAt Airdopes 311 Pro" />
            <div className="introduce">
              <div className="title">NEW ARRIVAL</div>
              <div className="topic">boAt Airdopes 311 Pro</div>
              <div className="des">
                Value-packed earbuds with 50 hours playback, Quad ENx mics,
                Insta Wake N' Pair, and ASAP Charge under ₹999.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">boAt Airdopes 311 Pro</div>
              <div className="des">
                Compact design, 50 hrs battery, ENx mics for clear calls, Insta
                Wake N' Pair pairing, and IPX4 sweat-proof protection.
              </div>
              <div className="specifications">
                <div><p>Playback Time</p><p>50 hours</p></div>
                <div><p>Connectivity</p><p>IWP Sync</p></div>
                <div><p>Bluetooth</p><p>5.3</p></div>
                <div><p>Water Resistance</p><p>IPX4</p></div>
                <div><p>Controls</p><p>Touch</p></div>
              </div>
              <div className="checkout">
                <button onClick={() => handleAddToCart(1)}>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          {/* Slide 5: boAt Airdopes Flex 454 ANC (id: 5) */}
          <div className="item">
            <img src="/images/flex454.webp" alt="boAt Airdopes Flex 454 ANC" />
            <div className="introduce">
              <div className="title">NEW ARRIVAL</div>
              <div className="topic">boAt Airdopes Flex 454 ANC</div>
              <div className="des">
                Flexible earbuds with Hybrid ANC, 32 hours playback, ASAP
                Charge, and IPX6 sweat-proof durability.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">boAt Airdopes Flex 454 ANC</div>
              <div className="des">
                Lightweight flex-fit earbuds featuring Hybrid ANC, 32 hrs
                battery life, ASAP Charge, and IPX6 water & sweat resistance.
              </div>
              <div className="specifications">
                <div><p>Playback Time</p><p>32 hours</p></div>
                <div><p>Noise Cancellation</p><p>Hybrid ANC</p></div>
                <div><p>Bluetooth</p><p>5.3</p></div>
                <div><p>Water Resistance</p><p>IPX6</p></div>
                <div><p>Controls</p><p>Touch</p></div>
              </div>
              <div className="checkout">
                <button onClick={() => handleAddToCart(5)}>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          {/* Slide 6: boAt Nirvana Ion ANC (id: 6) */}
          <div className="item">
            <img src="/images/ionanc.webp" alt="boAt Nirvana Ion ANC" />
            <div className="introduce">
              <div className="title">NEW ARRIVAL</div>
              <div className="topic">boAt Nirvana Ion ANC</div>
              <div className="des">
                Sporty neckband earbuds with Hybrid ANC, 20 hours battery,
                magnetic controls, and IPX5 water resistance.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </div>
            <div className="detail">
              <div className="title">boAt Nirvana Ion ANC</div>
              <div className="des">
                Neckband form factor offering Hybrid ANC, 20 hrs playback,
                magnetic earbuds, fast charging, and IPX5 sweat resistance.
              </div>
              <div className="specifications">
                <div><p>Playback Time</p><p>20 hours</p></div>
                <div><p>Noise Cancellation</p><p>Hybrid ANC</p></div>
                <div><p>Bluetooth</p><p>5.2</p></div>
                <div><p>Water Resistance</p><p>IPX5</p></div>
                <div><p>Controls</p><p>Magnetic</p></div>
              </div>
              <div className="checkout">
                <button onClick={() => handleAddToCart(6)}>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>

        <div className="arrows">
          <button id="prev">&#8249;</button>
          <button id="next">&#8250;</button>
          <button id="back">See All &#8599;</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
