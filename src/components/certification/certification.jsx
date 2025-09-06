import React from "react";
import "./CertificationSection.css";

export default function CertificationSection() {
  return (
    <div className="certification-section">
      <div className="certification-text">
        <h2>Clean, Cruelty Free & Socially Responsible</h2>
        <p>
          We pride ourselves in sourcing pure, natural and clean raw materials
          in the making of our products - be it responsibly sourced vegetable
          waxes for candles, premium organic sugarcane alcohol for diffusers, or
          natural herbs, halmaddi and spices for handrolled incense. The
          products are cruelty free, not tested on animals and made responsibly
          by skilled artisans. Our production facilities are regularly audited
          and certified by Sedex, GMP, and ISO bodies.
        </p>
      </div>

      <div className="certification-logos">
        <img src="/pictures/crueltyfree.png" alt="Cruelty Free" />
        <img src="/pictures/gmp.png" alt="GMP" />
        <img src="/pictures/makeinindia.avif" alt="Made in India" />
        <img src="/pictures/logo-sedex.png" alt="Sedex" />
        <img src="/pictures/iso.png" alt="ISO Certified" />
      </div>

      <p className="certification-footer">
        "All our products are certified Animal Cruelty Free."
      </p>
    </div>
  );
}
