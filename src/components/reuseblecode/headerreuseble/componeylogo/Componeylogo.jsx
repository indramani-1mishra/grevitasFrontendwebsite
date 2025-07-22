import React from 'react';
import './componeylogo.css'

export default function Componeylogo({ image }) {
  return (
    <div className="componeyImageContainer">
      <img
        src={image}
        alt="Company Logo"
        loading="lazy"
        className="companyLogo"
      />
    </div>
  );
}
