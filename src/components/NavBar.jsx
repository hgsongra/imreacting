import React from "react";

const NavBar = ({ total }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      Navbar <span className='badge badge-secondary badge-pill'>{total}</span>
    </nav>
  );
};

export default NavBar;
