import React from 'react';
import { useLoaderData } from 'react-router';

const ShowDetails = () => {
    const userShowDetails = useLoaderData();
    console.log(userShowDetails);
  const{name, website, username} = userShowDetails;
    return (
        <div>
  
            <h2>All data show</h2>
        <h2>{name}</h2>
        <p>{website}</p>
        <span>{username}</span>
         
        </div>
    );
};

export default ShowDetails;