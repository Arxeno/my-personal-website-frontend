import React from 'react';

const AboutMe = () => {
  return (
    <div id="about-me" className="container">
      <h1 className="border-effect head-of-each-section">About Me</h1>
      <div id="about-me-subcontainer">
        <figure>
          <img className="button-effect" src="images/myphoto-ui.webp" />
        </figure>
        <p>
          Hi! I am Raisyam. I love to learn many things including IT. Currently,
          i'm learning Full Stack Web Development. But at the same time, i'm
          also learning all about start-ups and businesses. Because my dream is
          to help people by contributing myself in Technology-based Business.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
