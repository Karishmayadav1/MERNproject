import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import {Link} from 'react-router-dom';
import Registration from './Registration';

const Navbar = () => {
  return (
    <nav className="navbar">     
      {/* <Link to = {{pathname:'/editdata/'}}><u>Edit</u></Link> */}
      <button className="add-button"> <a href="registration">
          Registration
       </a></button>
      <button className="login"> <a href="login">
          Login
       </a></button>
      <button className="add-button" > <a href="showdata">
           Add Users
          </a></button>
    </nav>
  );
};

export default Navbar;
