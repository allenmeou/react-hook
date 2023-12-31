import "../views/Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink activeClassName="active1" to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName="active1" to="/timer">
        Timer Apps
      </NavLink>
      <NavLink activeClassName="active1" to="/todo">
        Todo Apps
      </NavLink>
      <NavLink activeClassName="active1" to="/blog">
        Blog
      </NavLink>
      <NavLink activeClassName="active1" to="/youtube">
        Youtube
      </NavLink>
    </div>
  );
};

export default Nav;
