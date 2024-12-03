import React from 'react';
import IconUser from './IconUser';
import './Navbar.css'; 

function Navbar () {
  return (
    <nav className="navbar">
        <div className='user'>USUARIO</div>
       <div><IconUser width='48px' height='30px' /></div>
    </nav>
  );
};

export default Navbar;
