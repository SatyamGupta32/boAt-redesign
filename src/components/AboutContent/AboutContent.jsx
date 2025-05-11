import React from "react";
import "./AboutContent.css";

const AboutContent = () => {
  return (
    <div className="about-box">
      <div className="about-banner">
        <img
          src="/images/About_us_banner.webp"
          alt="About Us"
          className="about-img"
        />
      </div>
      <div className="top-container">
        <div className="top-description">
          <div className="about-heading">boAt set sail in 2014</div>
          <div className="description">
            During one of their many explorations, our founders{" "}
            <span className="white-text"> Aman Gupta </span> and
            <span className="white-text"> Sameer Mehta </span> discovered that
            the dopest people of our land were in search of{" "}
            <span className="red-text">affordable, </span>{" "}
            <span className="red-text">durable</span> and{" "}
            <span className="red-text"> ultra fashionable </span>audio products
            to groove to.
          </div>
          <div className="description">
            Thus, in 2014, they kickstarted a great voyage in Indian consumer
            waters.
          </div>
        </div>
        <div className="bottom-description">
          <div className="description-2">The aim of this journey?</div>
          <div className="description-3">
            Self discovery as an <span> Indian,</span>
          </div>
          <div className="description-4">
            <img className="desc-1" src="/images/ofcourse.webp" alt="desc-1" />
          </div>
          <div className="description-5">
            AND THAT'S WHERE THE BOATHEADS CAME INTO PICTURE.
          </div>
        </div>
      </div>
      <div className="mid-container">
        <div className="mid-img">
          <div className="mid-img-box">
            <img src="/images/IAmAboathead.jpg" alt="I Am A boat head" />
          </div>
        </div>
        <div className="mid-desc">
          <div className="description-2">
            Who or what is a boAthead, you ask?
          </div>
          <div className="description-3">It's You!</div>
          <div className="description-4">
            <img
              className="desc-2"
              src="/images/each_one_of_you.webp"
              alt="desc-2"
            />
          </div>
          <div className="description-5">
            It's someone who loves to groove, is always on the move, and crazy
            about reaching their goals!
          </div>
        </div>
      </div>
      <div className="down-container">
        <div className="down-img">
          <div className="down-img-box">
            <img src="/images/It_s_You.jpg" alt="It's You" />
          </div>
        </div>
        <div className="description-5">
          TOGETHER, WE ARE AN EVER-GROWING TRIBE OF
        </div>
        <div className="down-img">
          <div className="down-img-box-2">
            <img src="/images/Group_260.webp" alt="It's You" />
          </div>
        </div>
        <div className="globe-container">
          <div className="globe-left">
            <div className="globe-heading">
              Sailing across the nation and beyond
            </div>
            <div className="globe-desc-1">
              Every boAthead out there is our anchor! Their love and support
              inspires us to never back down, even in turbulent waters and
              stormy seas.
            </div>
            <div className="globe-desc-2">
              No wonder then, that we've sailed from strength to strength, even
              in a year like 2020.
            </div>
          </div>
          <div className="globe-right">
            <div className="globe-img">
              <img src="/images/globe.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="achievement-box">
          <div className="achi-heading">
            <span>Our achievements</span>
            <span>speak for themselves</span>
          </div>
          <div className="achi-img-box">
            <div className="achi-box">
              <div className="achi-img">
                <img src="/images/achievement-1.webp" alt="" />
              </div>
              <span className="achi-txt">
                The number 1 brand for truly wireless, and earwear in India as
                per Q3 CY21
              </span>
            </div>
            <div className="achi-box">
              <div className="achi-img">
                <img src="/images/achievement-2.webp" alt="" />
              </div>
              <span className="achi-txt">
                No. 3 Earwear + Smartwatch global market as per Q3 CY21
              </span>
            </div>
            <div className="achi-box">
              <div className="achi-img">
                <img src="/images/achievement-3.webp" alt="" />
              </div>
              <span className="achi-txt">
                Roaring the sound of the champions with the Indian Premier
                League
              </span>
            </div>
          </div>
          <div className="wht-next">
            <div className="wht-nxt-box">
              <div className="nxt-heading">What's next?</div>
              <div className="nxt-desc">
                <div className="nxt-desc-1">
                  All that has happened to us is overwhelming, yes, but it{" "}
                  <span className="white-text"> pushes us to do more,</span> be
                  more and make more products that you can use to jazz up your
                  lifestyle.
                </div>
                <div className="nxt-desc-2">
                  So, in 2021, we've started to{" "}
                  <span className="white-text"> fearlessly rock in India</span>{" "}
                  with a range of products that free-spirited Indians like you
                  can truly call your own!
                </div>
              </div>
            </div>
          </div>
          <div className="explore">
            <div className="exp-btn">EXPLORE NOW</div>
            <div className="india">MAKE IN INDIA</div>
            <div className="brand">
              <span className="orange-txt"> BY AN</span> INDIAN{" "}
              <span className="green-txt"> BRAND</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
