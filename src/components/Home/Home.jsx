import React from 'react';
import { useLoaderData } from 'react-router';
import Gohome from '../Gohome/Gohome';

const Home = () => {
    const homeData = useLoaderData();
    console.log(homeData);
    return (
      <div className="home-container">
      <h2 className="home-title">This is Home</h2>
      
      
    </div>
    );
};

export default Home;