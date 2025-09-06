import React from 'react';
import { Link } from 'react-router-dom';

export default function ImageContainer1() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '100vw',
      margin: 'auto',
      padding: '20px',
      textAlign: 'center',
      position:"relative",
      top:"90px"
    }}>
      <Link to="">
        <img
          src="/pictures/banner12.jpg"
          alt="banner"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '6px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease-in-out',
          }}
          
        />
      </Link>
    </div>
  );
}
