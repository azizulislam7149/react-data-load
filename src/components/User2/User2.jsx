import React from 'react';
import "./user2.css"
const User2 = ({post}) => {
  const { userId, id, title } = post;
    return (
         <div className="post-card">
      <h3>{title}</h3>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Post ID:</strong> {id}</p>
    </div>
    );
};

export default User2;