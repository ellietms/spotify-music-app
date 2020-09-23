import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav className="navbar main-navbar">
      <span className="navbar-brand">
        <img
          src="https://www.freeiconspng.com/uploads/spotify-icon-2.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="spotify-logo"
        />
        Spotify
      </span>
    </nav>
  );
};

export default Navbar;
