import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>


<header className='w-full   bg-black    text-white text-opacity-100 font-serif'>

<div className="container ">

<nav className="flex justify-around sm:text-2xl">
  <Link to="/" className=" text-sm sm:text-2xl hover:text-gray-300">Home</Link>
  <Link to="/about" className=" text-sm sm:text-2xl hover:text-gray-300">About</Link>
  <Link to="/services" className= "text-sm sm:text-2xl hover:text-gray-300">Services</Link>
  <Link to="/blog" className= "text-sm sm:text-2xl hover:text-gray-300">Blog  </Link>
  <Link to="/contact" className= " text-sm sm:text-2xl hover:text-gray-300">Contact</Link>
</nav>

</div>

</header>
    </div>
  )
}

export default Header