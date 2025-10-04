import React from 'react';
import { useLoaderData } from 'react-router';
import "./laptop.css"

const Laptops = () => {
const laptops = useLoaderData();
    return (
         <div className="laptop-container">
      <h2 className="heading">💻 Laptop Collection</h2>
      <div className="laptop-grid">
        {laptops.map((laptop) => (
          <div key={laptop.id} className="laptop-card">
            <img src={laptop.image} alt={laptop.name} className="laptop-img" />
            <h3>{laptop.name}</h3>
            <p><strong>Brand:</strong> {laptop.brand}</p>
            <p><strong>Processor:</strong> {laptop.processor}</p>
            <p><strong>Type:</strong> {laptop.type}</p>
            <p>⭐ {laptop.rating}</p>
            <p className="price">${laptop.price}</p>
            <button className="btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Laptops;