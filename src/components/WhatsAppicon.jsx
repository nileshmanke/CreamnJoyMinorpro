import React from 'react';
import '../myStyle.css';
 

const WhatsAppIcon = () => {
  return (
    <div className="animate-opacity ">
      <div className=" inner-div bottom-10 left-2 fixed sm:bottom-10 sm:left-4 z-10">
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <i className="text-white text-3xl sm:text-5xl fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppIcon;
