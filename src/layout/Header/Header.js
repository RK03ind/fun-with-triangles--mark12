import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header>
      FUN WITH TRIANGLES
      <div>
        <span>Is Triangle ?</span>
        <NavLink to="/" activeClassName="active">
          <span>Quiz</span>
        </NavLink>
        <NavLink to="/hypotenuse" activeClassName="active">
          <span>Hypotenuse</span>
        </NavLink>
        <span>Area of Triangle</span>
      </div>
    </header>
  );
};

export default Header;
