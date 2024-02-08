import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className='w-full bg-black text-white text-opacity-100 font-serif'>
        <div className="container">
          <nav className="flex justify-around sm:text-2xl">
            <NavLink exact to="/" className="text-sm sm:text-2xl hover:text-gray-300" activeClassName="active">Home</NavLink>
            <NavLink to="/about" className="text-sm sm:text-2xl hover:text-gray-300" activeClassName="active">About</NavLink>
            <NavLink to="/services" className="text-sm sm:text-2xl hover:text-gray-300" activeClassName="active">Services</NavLink>
            <NavLink to="/blog" className="text-sm sm:text-2xl hover:text-gray-300" activeClassName="active">Blog</NavLink>
            <NavLink to="/contact" className="text-sm sm:text-2xl hover:text-gray-300" activeClassName="active">Contact</NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
