import React from 'react';
import { useLoaderData } from 'react-router';
import "./sunglass.css"

const Sunglass = () => {
    const useSunglass = useLoaderData();
    console.log(useSunglass);
    return (
          <div className="sunglass-container">
      <h2 className="heading">😎 Wow! Excellent Sunglasses</h2>
      <div className="sunglass-grid">
        {useSunglass.map((sunglass) => (
          <div key={sunglass.id} className="sunglass-card">
            <img src={sunglass.image} alt={sunglass.name} className="sunglass-img" />
            <h3 className="sunglass-name">{sunglass.name}</h3>
            <p className="sunglass-brand">Brand: {sunglass.brand}</p>
            <p className="sunglass-price">Price: ${sunglass.price}</p>
            <p className="sunglass-rating">Rating: ⭐ {sunglass.rating}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Sunglass;