import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-box">
      <div className="line-2" />
      <div className="footer-list-box">
        <div className="list-container-box">
          <div className="footer-list">
            <div className="list-heading">Shop by Features</div>
            <div className="list">
              <div className="footer-list-item">
                Soundbar with Wireless Subwoofer
              </div>
              <div className="footer-list-item">Dolby Soundbars</div>
              <div className="footer-list-item">
                Soundbar with Wired Subwoofer
              </div>
              <div className="footer-list-item">Alexa Enabled Soundbar</div>
            </div>
          </div>

          <div className="footer-list">
            <div className="list-heading">Cables</div>
            <div className="list">
              <div className="footer-list-item">Micro USB Cable</div>
              <div className="footer-list-item">C Type Cable</div>
              <div className="footer-list-item">Lightning Cable</div>
              <div className="footer-list-item">USB C to C Cable</div>
            </div>
          </div>

          <div className="footer-list">
            <div className="list-heading">Powerbanks</div>
            <div className="list">
              <div className="footer-list-item">Power Bank 10000mah</div>
              <div className="footer-list-item">Power Bank 20000mah</div>
              <div className="footer-list-item">Mobile Power Bank</div>
              <div className="footer-list-item">Fast Charging Power Bank</div>
            </div>
          </div>

          <div className="footer-list">
            <div className="list-heading">Earbuds</div>
            <div className="list">
              <div className="footer-list-item">Noise Cancellation Earbuds</div>
              <div className="footer-list-item"> Gaming Earbuds </div>
              <div className="footer-list-item">Playback Earbuds</div>
              <div className="footer-list-item">Premium Earbuds</div>
            </div>
          </div>

          <div className="footer-list">
            <div className="list-heading">Neckbands</div>
            <div className="list">
              <div className="footer-list-item">Fast Charger</div>
              <div className="footer-list-item">USB Charger</div>
              <div className="footer-list-item">Micro USB Charger</div>
              <div className="footer-list-item">Type C Adapter</div>
            </div>
          </div>

          <div className="footer-list">
            <div className="list-heading">Car Accessories</div>
            <div className="list">
              <div className="footer-list-item">AUX Cable for car</div>
              <div className="footer-list-item">Car Charger under 500</div>
              <div className="footer-list-item">Car Charger above 500</div>
              <div className="footer-list-item">Type C cable</div>
            </div>
          </div>
        </div>

        <div className="list-container-box">
          <div className="footer-list">
            <div className="list-heading">Discover</div>
            <div className="list">
              <div className="footer-list-item">Buy & Sell</div>
              <div className="footer-list-item">Merchent</div>
              <div className="footer-list-item">Giving Back</div>
              <div className="footer-list-item">Help & Support</div>
            </div>
          </div>

          <div className="footer-list">
            <div className="list-heading">About</div>
            <div className="list">
              <div className="footer-list-item">Staff</div>
              <div className="footer-list-item">team</div>
              <div className="footer-list-item">Careers</div>
              <div className="footer-list-item">Blogs</div>
            </div>
          </div>

          <div className="footer-list">
            <div className="list-heading">Resources</div>
            <div className="list">
              <div className="footer-list-item">Security</div>
              <div className="footer-list-item">Global</div>
              <div className="footer-list-item">Chart</div>
              <div className="footer-list-item">Privacy</div>
            </div>
          </div>

          <div className="footer-list">
            <div className="list-heading">Social Media</div>
            <div className="list">
              <div className="footer-list-item">Facebook</div>
              <div className="footer-list-item">Twittter</div>
              <div className="footer-list-item">instagram</div>
              <div className="footer-list-item">Youtube</div>
            </div>
          </div>
          
          <div className="footer-list">
            <div className="list-heading">Company</div>
            <div className="list">
              <div className="footer-list-item">About boAt</div>
              <div className="footer-list-item">News</div>
              <div className="footer-list-item">Read Our Blog</div>
              <div className="footer-list-item">Investor Relations</div>
            </div>
          </div>

          <div className="subscribe-container">
            <div className="heading">Subscribe to News</div>
            <div className="input">
              {" "}
              <input
                id="subscribe-input"
                name="subscribe-input"
                type="email"
                className="subscribe-input"
                placeholder="Enter your email address"
              />
              <div className="subscribe-div">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="company-logo-animation">
          <div
            className="boat"
            contentEditable={true}
            suppressContentEditableWarning={true}
          >
            <div className="boat">
              <div>
                {" "}
                bo<span className="A">A</span>t
              </div>
              <span className="bass">#Bass Fever</span>
            </div>
          </div>
        </div>
      </div>
      <div className="strip">
        <div className="social-media">
          <div className="media-icons">
            <Link to="https://www.facebook.com/boat.lifestyle/">
              <img src="/images/facebook.svg" alt="facebook" />
            </Link>
          </div>
          <div className="media-icons">
            <Link to="https://x.com/RockWithboAt">
              <img src="/images/twitter-x.svg" alt="twitter" />
            </Link>
          </div>
          <div className="media-icons">
            <Link to="https://www.youtube.com/channel/UCY3JXaO_v8H3E6hTYUp5qWQ">
              <img src="/images/youtube.svg" alt="youtube" />
            </Link>
          </div>
          <div className="media-icons">
            <Link to="https://www.instagram.com/boat.nirvana/">
              <img src="/images/instagram.svg" alt="instagram" />
            </Link>
          </div>
          <div className="media-icons">
            <Link to="https://www.linkedin.com/company/boat-lifestyle/?originalSubdomain=in">
              <img src="/images/linkedin.svg" alt="Linkedin" />
            </Link>
          </div>
        </div>
        <div className="confidential">
          {" "}
          <div>
            <Link to={"https://www.boat-lifestyle.com/"}>
              Privacy Policy Terms of Use Read more at:
            </Link>
          </div>
          <div>
            <Link to={"https://www.boat-lifestyle.com/"}>
              © 2025 Imagine Marketing Limited. All Rights Reserved. Read more
              at:
            </Link>
          </div>
          <div>
            <Link to={"https://www.boat-lifestyle.com/"}>
              For queries contact us: Manager, Imagine Marketing Limited Unit
              no. 204 & 205, 2nd floor, D-wing & E-wing, Corporate Avenue,
              Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
              Read more at:
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
