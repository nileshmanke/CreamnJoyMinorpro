import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#4b6584] text-white p-4  mt-3 border border-t-black border-dashed ">
      
      <div className="container mx-auto">
        {/* Manufacturer Section */}
        <div className="text-center  mb-4" >
          <h1 className="text-xs sm:text-sm font-semibold">MANUFACTURED BY:</h1>
          <h1 className="text-white text-lg sm:text-3xl font-bold" >SANMATI</h1>
          <h1 className="text-xs font-bold sm:font-semibold">MILK PRODUCTS</h1>
        </div>


        <div className='flex justify-center gap-8 text-3xl m-5'>

<div className='hover:translate-y-[-15px] hover:text-yellow-500 duration-1000'><i className="fa-brands fa-facebook"></i></div>
<div className='hover:translate-y-[-15px] hover:text-yellow-500 duration-1000'><i className="fa-brands fa-instagram"></i></div>
<div className='hover:translate-y-[-15px] hover:text-yellow-500 duration-1000'><i className="fa-brands fa-youtube"></i></div>
<div className='hover:translate-y-[-15px] hover:text-yellow-500 duration-1000'><i className="fa-brands fa-x-twitter"></i></div>
<div className='hover:translate-y-[-15px] hover:text-yellow-500 duration-1000'><i className="fa-brands fa-linkedin"></i></div>
</div>

       

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
          {/* Address Section */}
          <div className="text-center sm:text-left " style={{ fontFamily: 'Comfortaa, sans-serif', fontSize: '16px' }}>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className='font-semibold'>Plant add: Gut no. 10, Karodi, Lasur Road, Chatrapati Sambhaji Nagar, (Aurangabad) - 431136</p>
          </div>
          
          {/* Logo Section */}
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-16 m-auto mt-4 md:justify-center p-4 '>
  <div className='flex flex-col items-center md:items-start p-2 '>
    <img className='w-[53px] mb-2' src='/images/iso-2-1-logo-png-transparent.png' alt=''/>
    <p className='font-bold ' style={{ fontFamily: 'Comfortaa, sans-serif', fontSize: '16px' }}>22000:2005</p>
  </div>
  <div className='flex flex-col items-center md:items-start p-3 sm:mt-[5px]'>
    <img className='w-[62px] mb-2' src='/images/FSSAI_logo-1024x504.png' alt=''/>
    <p className='font-bold' style={{ fontFamily: 'Comfortaa, sans-serif', fontSize: '16px' }}>11517044000742</p>
  </div>
</div>



          
          {/* Contact Section */}
          <div className="text-center sm:text-left  sm:ml-3" style={{ fontFamily: 'Comfortaa, sans-serif', fontSize: '16px' }}>
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <p>Email: <span className='font-semibold'>creamnjoy@gmail.com</span></p>
            <p>Customer Care:<span className='font-semibold'> +91 95953 61008</span></p>
          </div>
          
          {/* Header Links */}
          <div className="text-center text-xs sm:text-base sm:text-left p-2 sm:p-0">
            <h1 className='text-center text-xl font-bold mb-2' style={{ fontFamily: 'Comfortaa, sans-serif', fontSize: '16px' }}>Quick Links</h1>
            <ul className="flex-col   justify-center sm:text-center text-2xl font-bold" style={{ fontFamily: 'Comfortaa, sans-serif', fontSize: '14px' }}>
              <li className="mr-2 "><Link to="/">Home</Link></li>
              <li className="mr-2 mt-1"><Link to="/about">About</Link></li>
              <li className="mr-2 mt-1"><Link to="/gallery">Gallery</Link></li>
              <li className="mr-2 mt-1"><Link to="/product">Product</Link></li>
             
              
              <li className='mr-2 mt-1'><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="grid grid-cols-1  sm:grid-cols-1 p-2 text-center text-xs sm:text-sm w-full sm:flex justify-between sm:p-2 text-white bg-[#4b6584] mt-4 border-t border-t-white border-dashed " style={{ fontFamily: 'Comfortaa, sans-serif', fontSize: '16px' }}>
        <div>
          <h1>Copyright © 2024 | All rights reserved</h1>
        </div>
        <div className='mt-2'>
          <a href='https://www.mketech.in/' target='_blank'>Designed & Developed by Mk e-Tech Pvt. Ltd</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


{/* <p> 11517044000742</p>
            <p> 22000:2005</p> */}