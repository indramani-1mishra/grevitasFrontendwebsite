import React from 'react';

export default function OurProducts() {
  return (
    <div
      style={{
        textAlign: 'center',
        margin: '40px 0',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        position:'relative',
        top:"50px"
      }}
    >
      <p
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#222',
          marginBottom: '10px',
          position: 'relative',
          display: 'inline-block',
          
        }}
      >
        OUR PRODUCTS
        <span
          style={{
            content: "''",
            display: 'block',
            width: '60%',
            height: '4px',
            backgroundColor: '#00a86b',
            margin: '10px auto 0',
            borderRadius: '2px',
          }}
        ></span>
      </p>
    </div>
  );
}
