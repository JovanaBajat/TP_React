import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';



const Nav = () => {
  return (
    <div className="wrapper">
        <div className="items">
        <Link to='/' className="home menu">Home</Link>
        <div className="home menu">P1</div>
        <div className="home menu">P2</div>
        <div className="home menu">P3</div>
        <Link to='/about' className="about menu">About</Link>

        </div>
    </div>

  )
}

export default Nav;
