import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>{/*creat all the links in this pages that is not yet created*/}
      <nav>
        <ul>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
