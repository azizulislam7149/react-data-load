import React from 'react';
import { useLoaderData } from 'react-router';

const Gohome = () => {
  
   const useGohome = useLoaderData();
   console.log(useGohome);
    return (
        <div>
           <h2>go home at once</h2>
           <div>
            {
                useGohome.map(home => <div home={home}>
                    <img src={home.image} alt="" />
                      <h2>name {home.name}</h2>
                      <p>{home.price}</p>
                      <p>{home.rating}</p>
                </div>)
            }
           </div>
        </div>
    );
};

export default Gohome;