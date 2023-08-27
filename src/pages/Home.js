import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assests/animation.json'; 
// const animationData = 'https://gist.github.com/beginneralways/77a036b0d61b909c280f167ad10faf5a';


// D:\VSCODEFILES\My-Portfolio\frontend\public\lottie\animation_lltozb7r.json

const Home = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <section className="home">
      <div className="container">
        <div className="content">
          <h1 className="home-title">Welcome to My Portfolio</h1>
          <p className="home-description">Specializing in Node.js and its libraries</p>
          <Lottie options={lottieOptions} height={200} width={200} />
          <button className="cta-button">View Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
