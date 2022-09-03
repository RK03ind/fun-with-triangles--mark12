import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      FUN WITH TRIANGLES
      <div>
        <NavLink to="/is-triangle" activeClassName="active">
          <span>Is Triangle ?</span>
        </NavLink>
        <NavLink to="/" activeClassName="active">
          <span>Quiz</span>
        </NavLink>
        <NavLink to="/hypotenuse" activeClassName="active">
          <span>Hypotenuse</span>
        </NavLink>
        <NavLink to="/area" activeClassName="active">
          <span>Area of Triangle</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
