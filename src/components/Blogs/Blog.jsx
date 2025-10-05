import React from 'react';
import { Link } from 'react-router';

const Blog = ({blog}) => {

    const{ id, name, email,} = blog; 
    return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "10px", borderRadius: "8px" }}>


 <h2>{name}</h2>
 <p>{email}</p>
 <Link to ={`/blogs/${id}`}>Show all data</Link>
</div>

    );
};

export default Blog;