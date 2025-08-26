import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          className="logo-img"
          src="https://static.vecteezy.com/system/resources/previews/043/213/518/non_2x/two-kangaroos-facing-each-other-within-a-circle-design-a-simple-and-elegant-logo-for-an-ngo-dedicated-to-wildlife-conservation-free-vector.jpg"
          alt="Logo"
        />
        <h1 className="logo-text">furEverSafe</h1>
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Mission">Mission</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Donation">Donation</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </nav>
  );
};

export default Navbar;
