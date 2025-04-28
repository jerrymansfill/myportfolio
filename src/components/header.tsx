import React from 'react';
import '../css/index.css'
import '../css/about.css'
import '../css/contact.css'
import '../css/portfolio.css'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <nav className="navbar">
          <Link to="/"> <i className="fa fa-home"></i> <span>Home</span> </Link>
          <Link to="/about"> <i className="fa fa-user"></i> <span>about</span> </Link>
          <Link to="#"> <i className="fa fa-briefcase"></i> <span>Workout</span></Link>
          <Link to="/contact"> <i className="fa fa-address-book"></i> <span>contact</span> </Link>
      </nav></>
  );
};

export default Header
