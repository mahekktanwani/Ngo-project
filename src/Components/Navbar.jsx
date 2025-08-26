import React from "react";

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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Mission</a></li>
          <li><a href="#contact">About us</a></li>
          <li><a href="#donation">Donation</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
