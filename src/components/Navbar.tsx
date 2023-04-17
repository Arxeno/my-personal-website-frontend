import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  closeDrawerContact,
  closeDrawerNav,
  toggleDrawerContact,
  toggleDrawerNav,
} from '../helpers/helpers';

const Navbar = () => {
  const [toHomePage, setToHomePage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const linkHandler = () => {
    setToHomePage(true);
  };

  const contactButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    closeDrawerNav();
    toggleDrawerContact(event);
  };

  const hamburgerButtonHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    closeDrawerContact();
    toggleDrawerNav(event);
  };

  useEffect(() => {
    setToHomePage(false);
  });

  return (
    <header id="header-nav">
      <h1>Raisyam✨</h1>
      <button
        id="hamburger-menu__button"
        className="button-effect"
        onClick={hamburgerButtonHandler}
      >
        <img src="images/hamburger-menu.svg" alt="Hamburger menu" />
      </button>
      <nav id="drawerNav">
        <ul id="nav-button">
          <li>
            <a id="blogsButton" className="button-effect button-yellow">
              ✍Blogs
            </a>
          </li>
          <li id="homeButton__li">
            <a
              id="homeButton"
              className="button-effect button-yellow"
              onClick={linkHandler}
            >
              🏠Home
            </a>
          </li>
          <li id="overviewMeButton__li">
            <a
              id="overviewMeButton"
              className="button-effect button-yellow"
              href="#overview-me-navbar"
            >
              🧐Overview Me
            </a>
          </li>
          <li>
            <button
              id="contactButton"
              className="button-effect button-yellow"
              onClick={contactButtonHandler}
            >
              📱Contact
            </button>
          </li>
        </ul>
      </nav>
      {toHomePage ? <Navigate to="/" /> : null}
      <div id="message-box">
        <p>Haloo</p>
      </div>
    </header>
  );
};

export default Navbar;
