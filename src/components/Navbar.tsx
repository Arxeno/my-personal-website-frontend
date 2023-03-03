const Navbar = () => {
  return (
    <header id="header-nav">
      <h1>Raisyam✨</h1>
      <button id="hamburger-menu__button" className="button-effect">
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
              href="#/home"
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
            <button id="contactButton" className="button-effect button-yellow">
              📱Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
