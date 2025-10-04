import React from 'react';
import { useLoaderData } from 'react-router';
import "./watch.css"

const Watch = () => {
    const watches = useLoaderData();

    return (
          <div className="watch-container">
      <h2 className="heading">⌚ Premium Watch Collection</h2>
      <div className="watch-grid">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-card">
            <img src={watch.image} alt={watch.name} className="watch-img" />
            <h3 className="watch-name">{watch.name}</h3>
            <p className="watch-brand">{watch.brand}</p>
            <p className="watch-type">{watch.type}</p>
            <p className="watch-price">${watch.price}</p>
            <p className="watch-rating">⭐ {watch.rating}</p>
            <button className="btn-buy">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Watch;