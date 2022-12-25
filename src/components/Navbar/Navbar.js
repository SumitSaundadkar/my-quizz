import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsSun } from "react-icons/bs";
const NavBar = () => {
  return (
    <header>
      <Link to="/">RapidFire</Link>

      <div>
        <ul>
          <Link to="/login">
            <li>
              <BsFillPersonFill size={35} />
            </li>
          </Link>
        </ul>
      </div>
      <div className="setting-icon">
        <li>
          <BsSun size={35} />
        </li>
      </div>
    </header>
  );
};
export { NavBar };
