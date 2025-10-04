import React from 'react';
import "./user.css"
const User = ({user}) => {
      const {
    id,
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },
  } = user;
    return (
        <div className="user-card">
      <h2>{name} <span className="username">({username})</span></h2>
      <p><strong>Email:</strong> {email}</p>

      <div className="address">
        <h4>Address</h4>
        <p>{street}, {suite}</p>
        <p>{city} - {zipcode}</p>
        <p><strong>Geo:</strong> Lat {lat}, Lng {lng}</p>
      </div>
    </div>
  );
 
};

export default User;