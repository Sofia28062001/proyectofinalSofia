import React from 'react';
import IconUser from './IconUser';
import './Navbar.css'; 

function Navbar () {
  return (
    <>
    <nav className="navbar">
        <div className='user'>USUARIO</div>
       <button><IconUser width='50px' height='40px' color='white' /></button>
    </nav>
    </>
  );
};


export default Navbar;


