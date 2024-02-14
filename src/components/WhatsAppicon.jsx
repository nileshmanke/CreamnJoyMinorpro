import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import "../myStyle.css";



const WhatsAppIcon = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const salesLink = 'https://api.whatsapp.com/send?phone=919595361008&text=We are Interested for SuperStokiest at …….';
  const marketingLink = 'https://api.whatsapp.com/send?phone=919595361008&text=We are Interested for Distributor at …….';

  return (
    <div >
      <div className="inner-div bottom-6 left-2 fixed sm:bottom-20 sm:left-4  z-10">
        <div className="relative">
          <button onClick={toggleDropdown} className="text-green-500 text-5xl sm:text-5xl focus:outline-none animate-opacity">
            <FaWhatsapp />
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-green-500  shadow-md py-2 px-4 rounded-md  bottom-14 left-4 z-20 w-[200px]">
              <a href={salesLink} className="block text-white font-bold hover:text-gray-600 py-1 border-2 border-black p-5 mb-3 rounded-xl" target="_blank" rel="noopener noreferrer">
                 Super Stockiest
              </a>
              
              <a href={marketingLink} className="block text-white font-bold hover:text-gray-600 py-1  border-2 border-black p-5 rounded-xl" target="_blank" rel="noopener noreferrer">
                 Distributor
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppIcon;
