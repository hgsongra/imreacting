import React from "react";

const NavBar = props => {
  return (
    <nav className='navbar navbar-light bg-light'>
      Navbar{" "}
      <span className='badge badge-secondary badge-pill'>{props.total}</span>
    </nav>
  );
};

export default NavBar;
