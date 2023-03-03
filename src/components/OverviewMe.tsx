import React from 'react';

const OverviewMe = () => {
  return (
    <nav id="overview-me-navbar">
      <ul>
        <li>
          <a className="button-effect button-yellow" href="#skills">
            👨‍💻Skills
          </a>
        </li>
        <li>
          <a className="button-effect button-yellow" href="#services">
            🔧Services
          </a>
        </li>
        <li>
          <a className="button-effect button-yellow" href="#projects">
            💻Projects
          </a>
        </li>
        <li>
          <a className="button-effect button-yellow" href="#about-me">
            🙋‍♂️About Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default OverviewMe;
