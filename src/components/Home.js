import React from 'react';
import '../assets/Home.css'
import gallery from './Gallery';
import Gallery from './Gallery';


const Home = () => {
  return (

  <div className="home">
    <h1>Welcome to the Developer's Guild</h1>
    <p>Your go-to place for tech enthusiasts at De Anza College.</p>
    <Gallery /> {Gallery}
    <button>Learn More</button>
  </div>
  


  );
}

export default Home;
