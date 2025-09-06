import React from 'react'
import './Productcard.css'
import { CiHeart } from "react-icons/ci";

export default function ProductReusebleCard({ image, title, price, des, rating, numofRating, id }) {
  return (
    <div className='productCartContainer' key={id}>
      <div style={{ position: 'relative' }}>
        <img src={image} alt={des} />
        <span><CiHeart /></span>
      </div>
      <div>
        <p>{title.length > 100 ? title.slice(0, 109) + "..." : title}</p>
        <p>{des}</p>
        <p>₹{price}</p>
       {/**  <p><span>★ {rating}</span><span> ({numofRating} Reviews)</span></p> */}
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
