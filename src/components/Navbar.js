import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav class="navbar main-navbar">
      <a class="navbar-brand" href="#">
        <img
          src="https://www.freeiconspng.com/uploads/spotify-icon-2.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="spotify-logo"
        />
        Bootstrap
      </a>
    </nav>
  );
};

export default Navbar;
