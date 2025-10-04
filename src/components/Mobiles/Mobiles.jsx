import React from 'react';
import { useLoaderData } from 'react-router';
import "./mobile.css"


const Mobiles = () => {
    const mobiles = useLoaderData();
    return (
         <div className="mobile-container">
      <h2 className="heading">📱 Latest Mobile Collection</h2>
      <div className="mobile-grid">
        {mobiles.map((mobile) => (
          <div key={mobile.id} className="mobile-card">
            <img src={mobile.image} alt={mobile.name} className="mobile-img" />
            <h3>{mobile.name}</h3>
            <p><strong>Brand:</strong> {mobile.brand}</p>
            <p><strong>Processor:</strong> {mobile.processor}</p>
            <p><strong>RAM:</strong> {mobile.ram} | <strong>Storage:</strong> {mobile.storage}</p>
            <p><strong>Type:</strong> {mobile.type}</p>
            <p>⭐ {mobile.rating}</p>
            <p className="price">${mobile.price}</p>
            <button className="btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Mobiles;