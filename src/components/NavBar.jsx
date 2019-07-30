import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-light'>
        Navbar{" "}
        <span className='badge badge-secondary badge-pill'>
          {this.props.total}
        </span>
      </nav>
    );
  }
}
