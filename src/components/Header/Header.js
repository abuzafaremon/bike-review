import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to='/home' className={({ isActive }) => (isActive ? 'active-link' : ' ')}>Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : ' ')} to='/reviews'>Reviews</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : ' ')} to='/dashboard'>Dashboard</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : ' ')} to='/blogs'>Blogs</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : ' ')} to='/about'>About</NavLink>
      </nav>
    </div>
  );
};

export default Header;