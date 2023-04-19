import React from 'react';

const Introduction = () => {
  return (
    <div id='introduction'>
      <div id='intro-cv-container'>
        <h1 id='intro-text'>
          Hi! I am Raisyam.
          <br />A Web Dev! 💻
        </h1>
        <a
          id='download-cv'
          className='button-effect button-yellow'
          href='downloads/Raisyam Muhammad Fauzan Burhani_CV.pdf'
          target='_blank'
        >
          Download CV 📄
        </a>
      </div>
    </div>
  );
};

export default Introduction;
