import React from "react";
import "./HeroSection.css";
function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero-contant">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button className="nav-btn">Shop Now</button>
          <button className="second-button">Category</button>
        </div>
        <div className="shoping">
        <p>Also Available On</p>
        </div>
        <div className="brand-icon">
          <img src="/images/flipkart.png" alt="flipkart-logo" />
          <img src="/images/amazon.png" alt="amazon-logo" />
        </div>
      </div>
      <div className="hero-img">
        <img src="/images/hero-image.png" alt="brand-icon" />
      </div>
    </main>
  );
}

export default HeroSection;
