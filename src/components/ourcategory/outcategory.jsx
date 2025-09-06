import React from "react";
import "./CategorySection.css";

export default function CategorySection() {
  const categories = [
    {
      id: 1,
      title: "Reed Diffusers",
      image: "/pictures/redd.jpg",
      description:
        "The soft lingering fragrance of reeds gently diffuses into the ambience",
      link: "#",
    },
    {
      id: 2,
      title: "Scented Candles",
      image: "/pictures/candle.jpg",
      description:
        "Hand-poured with vegetable waxes, these perfumed candles are here to brighten up your spirits",
      link: "#",
    },
  ];

  return (
    <div className="category-section">
      <h2>Our Categories</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.id}>
            <div className="category-image">
              <img src={cat.image} alt={cat.title} />
              <div className="overlay">
                <h3>{cat.title}</h3>
              </div>
            </div>
            <button className="shop-btn">SHOP NOW</button>
            <p className="description">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
