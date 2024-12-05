import React from 'react';
import IconUser from './IconUser';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="user">USUARIO</div>
      <button className="navbar-button">
        <IconUser />
      </button>
    </nav>
  );
}

export default Navbar;


