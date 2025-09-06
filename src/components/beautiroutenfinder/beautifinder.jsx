import React from "react";
import "./BeautyRoutineFinder.css";

export default function BeautyRoutineFinder() {
  return (
    <div className="beauty-finder-section">
      <div className="content-box">
        <p className="tagline">Newly launched</p>
        <h2 className="title">
          BEAUTY ROUTINE <br /> FINDER
        </h2>
        <p className="subtitle">
          Find the perfect regimen <br />
          <em>expertly curated for your concerns</em>
        </p>
        <p className="desc">
          BEGIN WITH ANSWERING A FEW QUESTIONS
        </p>
        <button className="btn">GET STARTED &gt;</button>
      </div>
    </div>
  );
}
