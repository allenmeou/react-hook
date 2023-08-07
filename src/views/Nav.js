import "./Nav.scss";
import logo from "../logo.svg";
const Nav = () => {
  return (
    <div className="container">
      <header className="site-header">
        <div className="header__content--flow">
          <div className="header-content--left">
            <a href="#" className="brand-logo">
              <img className="App-logo" src={logo} alt="logo" />
              <span className="logo-text"></span>
            </a>
            <button className="nav-toggle">
              <span className="toggle--icon"></span>
            </button>
          </div>
          <div className="header-content--right">
            <nav className="header-nav" role="navigation">
              <ul className="nav__list" aria-expanded="false">
                <li className="list-item">
                  <a className="nav__link" href="#">
                    Home
                  </a>
                </li>
                <li className="list-item">
                  <a className="nav__link" href="#">
                    About
                  </a>
                </li>
                <li className="list-item">
                  <a className="nav__link" href="#">
                    Products
                  </a>
                </li>
                <li className="list-item">
                  <a className="nav__link" href="#">
                    Links
                  </a>
                </li>
                <li className="list-item">
                  <a className="nav__link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
