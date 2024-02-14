import React, { useState,useRef ,useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";
import {  useLocation } from 'react-router-dom';
import "../myStyle.css";
const Header = () => {

  const navigate = useNavigate();
const [conedrop, setconedrop] = useState(false);
  const [family, setfamily] = useState(false)
  const [sundae, setsundae] = useState(false)
  const [koolfie, setkoolfie] = useState(false);
  const [isProductOpen, setProductOpen] = useState(false);
  const [mproduct, setmproduct] = useState(false);
  const [mcup, setmcup] = useState(false);
  const [mcone, setmcone] = useState(false);
  const [mkoolfies, setmkoolfies] = useState(false);
  const [mfamily, setmfamily] = useState(false);
  const [msundae, setmsundae] = useState(false);



  const toggleProductMenu = () => {
    setProductOpen(!isProductOpen);
  };

const msundaefunction=()=>{
  navigate('/product');
  setmproduct(false);
  setIsMenuOpen(!isMenuOpen);
}

const mfamilyfunction=()=>{
  navigate('/product');
  setmproduct(false);
  setIsMenuOpen(!isMenuOpen);
}

const mkoolfiesfunction=()=>{
  navigate('/product');
  setmproduct(false);
  setIsMenuOpen(!isMenuOpen);
}

const mconesfunction=()=>{
  navigate('/product');
  setmproduct(false);
  setIsMenuOpen(!isMenuOpen);
}


const mcupsfunction=()=>{
  navigate('/product');
  setmproduct(false);
  setIsMenuOpen(!isMenuOpen);
}




  const smallcupfun = () => {
    
    navigate('/product');
    setdrop(!drop)
    setcupsdrop(false)
}

const mediumcupfun = () => {
    
  navigate('/product');
  setdrop(!drop)
  setcupsdrop(false)
}

const largecupfun = () => {
    
  navigate('/product');
  setdrop(!drop)
  setcupsdrop(false)
}
const largeconefun = () => {
    
  navigate('/product');
  setdrop(!drop)
  setconedrop(false)
}
const smallconefun = () => {
    
  navigate('/product');
  setdrop(!drop)
  setconedrop(false)
}
const mediumconefun = () => {
    
  navigate('/product');
  setdrop(!drop)
  setconedrop(false)
}

const familyfun=()=>{
  navigate('/product');
  setdrop(!drop)
  setfamily(false) 
}

const sundaefun=()=>{
  navigate('/product');
  setdrop(!drop)
  setsundae(false)

}

const koolfiefun=()=>{
  navigate('/product');
  setdrop(!drop)
  setkoolfie(false)

}
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [drop, setdrop] = useState(false);
  const [cupsdrop, setcupsdrop] = useState(false)
  const location = useLocation();
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close dropdowns when navigating to a new page
    setdrop(false);
    setcupsdrop(false);
    setconedrop(false);
    setfamily(false);
    setsundae(false);
    setkoolfie(false);
    setIsMenuOpen(false);
    setmcup(false);
    setmcone(false);
    setmfamily(false);
    setmkoolfies(false);
    setmsundae(false);
    setmproduct(false);
  }, [location.pathname]);

  return (
    <div>
      <header className='w-full bg-white text-black text-opacity-100 ' style={{ fontFamily: 'Comfortaa, sans-serif', fontSize: '16px' }}>
        <div className="container">
          
          <div className="flex  items-center justify-around  sm:text-2xl">
          <div >
            <NavLink exact to="/" >            <img className='w-[150px] animate-pulse' src='/images/CREAM N JOY LOGO PHOTO COPY (1).png' alt=''/>
</NavLink>

          </div>
            {!isMenuOpen && ( /* Render this only if menu is not open */
              <div className=" hidden    sm:flex justify-around gap-6 relative"> {/* Adjusted */}
                <NavLink exact to="/" className="text-sm sm:text-2xl hover:text-black font-bold " activeClassName="active">Home</NavLink>
                    <div className='relative'>
                    <div className="text-sm sm:text-2xl font-bold hover:text-black flex cursor-pointer "onClick={()=>setdrop(!drop)}  activeClassName="active">Product <span className={`mt-1 ${drop ? "rotate-180" : ""} text-3xl`}><RiArrowDropDownLine /></span></div>
<div className={`absolute ${drop ? "block" :"hidden"} box top-[50px] bg-white  w-[250px] z-30`}>


  <ul className='text-xl flex  flex-col gap-4 p-2'>
    <div className=''>  
      <li className=' hover:bg-slate-600 cursor-pointer hover:text-white  scale-100 hover:scale-102 flex ' onClick={()=>{
        setcupsdrop(!cupsdrop);
        setconedrop(false);
        setfamily(false);
        setsundae(false);
        setkoolfie(false);
      }}>CUPS <span className={`mt-1 text-2xl ${cupsdrop ? "rotate-90" : ""}`}><RiArrowDropDownLine /></span> </li>
  
        </div>
    <Link to="/product" onClick={()=>setdrop(false)} className=' hover:bg-slate-600  cursor-pointer hover:text-white scale-100 hover:scale-102'> PREMIUM CUPS</Link>
    
    <li className=' hover:bg-slate-600 cursor-pointer hover:text-white scale-100 hover:scale-102 flex ' onClick={() => {
  setconedrop(!conedrop);
  setcupsdrop(false);
  setsundae(false)
  setfamily(false)
  setkoolfie(false)
}}>CONES <span className={`mt-1 text-2xl ${conedrop? "rotate-90" : ""}`} ><RiArrowDropDownLine /></span></li>
    <Link to="/product" onClick={()=>setdrop(false)} className=' hover:bg-slate-600 cursor-pointer hover:text-white scale-100 hover:scale-102'>CHOCOBARS</Link>

    <li className=' hover:bg-slate-600 cursor-pointer hover:text-white scale-100 hover:scale-102 flex ' onClick={()=>{setkoolfie(!koolfie);
    setconedrop(false);
    setcupsdrop(false)
    setfamily(false)
    setsundae(false)}}>KOOLFIES <span className={`mt-1 text-2xl ${koolfie? "rotate-90" : ""}`} ><RiArrowDropDownLine /></span></li>
    <Link to="/product" onClick={()=>setdrop(false)} className=' hover:bg-slate-600 cursor-pointer hover:text-white scale-100 hover:scale-102'>PREMIUM KOOLFIES</Link>
    <Link to="/product"  onClick={()=>setdrop(false)}  className=' hover:bg-slate-600 cursor-pointer hover:text-white scale-100 hover:scale-102'>PREMIUM CONES</Link>

    <li className=' hover:bg-slate-600 cursor-pointer hover:text-white scale-100 hover:scale-102 flex ' onClick={()=>{setfamily(!family);
    setcupsdrop(false);
    setconedrop(false)
    setsundae(false)
    setkoolfie(false)}}>FAMILY PACK <span className={`mt-1 text-2xl ${family? "rotate-90" : ""}`} ><RiArrowDropDownLine /></span></li>
    <li className=' hover:bg-slate-600 cursor-pointer hover:text-white scale-100 hover:scale-102 flex ' onClick={()=>{setsundae(!sundae);
    setcupsdrop(false);
    setconedrop(false)
    setfamily(false)
    setkoolfie(false)}}>SUNDAE <span className={`mt-1 text-2xl ${sundae? "rotate-90" : ""}`} ><RiArrowDropDownLine /></span></li>
    
  </ul>
</div>


<div className={`absolute  left-[240px] top-[58px] bg-white z-20 text-lg p-4 w-[230px]   ${cupsdrop ? "block" : "hidden"}`} onMouseLeave={()=>setcupsdrop(false)}>
        <ul className='flex flex-col gap-y-2'>
          <li className='hover:bg-red-700 text-black  hover:text-white  cursor-pointer  hover:font-semibold' onClick={smallcupfun}><div >SMALL CUP</div> </li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={mediumcupfun}><div>MEDIUM CUP</div></li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={largecupfun}><div>LARGE CUP</div></li>
        </ul>
      </div>



      <div className={`absolute  left-[240px] top-[145px] bg-white z-20 text-lg p-4 w-[230px]   ${conedrop ? "block" : "hidden"}`} onMouseLeave={()=>setconedrop(false)}>
        <ul className='flex flex-col gap-y-2'>
          <li className='hover:bg-red-700 text-black  hover:text-white  cursor-pointer  hover:font-semibold' onClick={smallconefun}><div >SMALL CONE</div> </li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={mediumconefun}><div>MEDIUM CONE</div></li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={largeconefun}><div>LARGE CONE</div></li>
        </ul>
      </div>
      <div className={`absolute  left-[240px] top-[360px] bg-white z-20 text-lg p-4 w-[230px]   ${family ? "block" : "hidden"}`} onMouseLeave={()=>setfamily(false)}>
        <ul className='flex flex-col gap-y-2'>
          <li className='hover:bg-red-700 text-black  hover:text-white  cursor-pointer  hover:font-semibold' onClick={familyfun}><div >CREAM BALLS</div> </li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={familyfun}><div>CHOCO CHIPS</div></li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={familyfun}><div>RAJESHAI KESAR PISTA</div></li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={familyfun}><div>MAST VANILLA</div></li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={familyfun}><div>BUTTERSCOTCH CRUNCH</div></li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={familyfun}><div>PREMIUM CATERING BULK</div></li>

        </ul>
      </div>

      <div className={`absolute  left-[240px] top-[400px] bg-white z-20 text-lg p-4 w-[230px]   ${sundae ? "block" : "hidden"}`} onMouseLeave={()=>setsundae(false)}>
        <ul className='flex flex-col gap-y-2'>
          <li className='hover:bg-red-700 text-black  hover:text-white  cursor-pointer  hover:font-semibold' onClick={sundaefun}><div >MIX FRUIT</div> </li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={sundaefun}><div>MANGO RIPPLE</div></li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={sundaefun}><div>CHOCOLATE RIPPLE</div></li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={sundaefun}><div>FULLY LOADED</div></li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={sundaefun}><div>RAJBHOG</div></li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={sundaefun}><div>AMERICAN DRY FRUIT</div></li>

        </ul>
      </div>


      <div className={`absolute  left-[240px] top-[230px] bg-white z-20 text-lg p-4 w-[230px]   ${koolfie ? "block" : "hidden"}`} onMouseLeave={()=>setkoolfie(false)}>
        <ul className='flex flex-col gap-y-2'>
          <li className='hover:bg-red-700 text-black  hover:text-white  cursor-pointer  hover:font-semibold' onClick={koolfiefun}><div >ICE LOLLY</div> </li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={koolfiefun}><div>DOLLY</div></li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={koolfiefun}><div>NUTTY BARS</div></li>
          <li className='hover:bg-red-700  text-black  hover:text-white cursor-pointer hover:font-semibold' onClick={koolfiefun}><div>PUNJABI KOOLFIES</div></li>

        </ul>
      </div>

                    </div>
                                    <NavLink to="/about" className="text-sm sm:text-2xl hover:text-black font-bold " activeClassName="active">About</NavLink>
                {/* <NavLink to="/services" className="text-sm sm:text-2xl hover:text-black" activeClassName="active">Services</NavLink> */}
                <NavLink to="/gallery" className="text-sm sm:text-2xl hover:text-black font-bold " activeClassName="active">Gallery</NavLink>
                <NavLink to="/contact" className="text-sm sm:text-2xl hover:text-black font-bold " activeClassName="active">Contact</NavLink>
                <NavLink to="/" className="bg-green-700 text-white p-2 rounded-lg animate-opacity2">Order Now</NavLink>

              </div>
            )}
            <div className="sm:hidden">
              {isMenuOpen ? (
                <FaTimes className="text-black text-2xl cursor-pointer absolute right-3" onClick={toggleMenu} />
              ) : (
                <FaBars className="text-black text-2xl cursor-pointer absolute right-3 " onClick={toggleMenu} />
              )}
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
  <div className=" overflow-hidden bg-white shadow-2xl text-black py-2" style={{ fontFamily: 'Comfortaa, sans-serif', fontSize: '16px' }}>
    <nav className="w-screen flex gap-y-3 flex-col items-center sm:hidden">
      <NavLink exact to="/" className="text-xl font-semibold  sm:text-sm hover:text-gray-300 py-1" activeClassName="active" onClick={toggleMenu}>Home</NavLink>
      <div>
      <div to="/product" className="text-xl font-semibold sm:text-sm hover:text-black py-1 text-black flex justify-between "  onClick={()=>setmproduct(!mproduct)} > Product <span className={` text-2xl ${mproduct ? "rotate-180" : ""}`}><RiArrowDropDownLine /></span>    </div>
<div className={`bg-white  flex flex-col  ${mproduct ? "block" : "hidden"}`}>
  <ul className='flex flex-col p-4 gap-y-4'>
  <div onClick={()=>{setmcup(!mcup);
  setmcone(false)
  setmkoolfies(false);
  setmfamily(false);
  setmsundae(false);
  }}>    
    <li className='hover:bg-red-700 text-black  font-extrabold hover:text-white  flex  justify-between p-1'>CUPS <span className={`text-xl ${ mcup ? "rotate-180" : ""}`}><RiArrowDropDownLine /> </span> </li>
    <div className={`p-4 ${mcup ? "block" : "hidden"}`}>
      <ul>
        <li onClick={mcupsfunction}>small cups</li>
        <li onClick={mcupsfunction}>medium cups</li>
        <li onClick={mcupsfunction}>large cup</li>
      </ul>
    </div>
</div>
    
    <div>
    <li className='hover:bg-red-700 text-black hover:text-white font-bold  flex justify-between p-1' onClick={()=>{
      setmcone(!mcone);
      setmcup(false);
      setmkoolfies(false);
      setmfamily(false);
      setmsundae(false);
    }}>CONES <span className={` text-xl ${mcone ?"rotate-180" : ""}`}><RiArrowDropDownLine /> </span> </li>
<div className={` p-4 ${mcone ? "block" : "hidden"}`}>
<ul>
        <li onClick={mconesfunction}>small cones</li>
        <li onClick={mconesfunction}>medium cones</li>
        <li onClick={mconesfunction}>large cones</li>
      </ul>
</div>
    </div>

   
    <Link to="/product" className='hover:bg-red-700 text-black hover:text-white font-bold p-1 '  onClick={()=>{
      setmproduct(false);
    }}>PREMIUM CUPS</Link>
    <Link to="/product" className='hover:bg-red-700 text-black hover:text-white font-bold  p-1' onClick={()=>{
      setmproduct(false);
    }}>PREMIUM CONES</Link>
    <div onClick={()=>{
      setmkoolfies(!mkoolfies);
      setmcup(false);
      setmcone(false);
      setmfamily(false);
      setmsundae(false);
    }}>
    <li className='hover:bg-red-700 text-black hover:text-white font-bold flex justify-between p-1'>KOOLFIES  <span className={` text-xl ${mkoolfies ? "rotate-180" :""}`}><RiArrowDropDownLine /> </span></li>
<div className={` p-4 ${mkoolfies ? "block" : "hidden"}`}>
  <ul>
    <li onClick={mkoolfiesfunction}>Ice Lolly</li>
    <li onClick={mkoolfiesfunction}>Dolly</li>
    <li onClick={mkoolfiesfunction}>Nutty Bars</li>
    <li onClick={mkoolfiesfunction}>Punjabi Koolfies</li>
    
    
  </ul>
</div>
    </div>
    <div onClick={()=>{
      setmfamily(!mfamily);
      setmcup(false);
      setmcone(false);
      setmkoolfies(false);
      setmsundae(false);
    }}>
    <li className='hover:bg-red-700 text-black hover:text-white font-bold flex justify-between p-1'>FAMILY PACK <span className={` text-xl ${mfamily ?"rotate-180" :""}`}><RiArrowDropDownLine /> </span> </li>
<div className={` p-4 ${mfamily ? "block" : "hidden"}`}>
  <ul >
    <li  className='mt-1' onClick={mfamilyfunction}>Cream Balls</li>
    <li className='mt-1' onClick={mfamilyfunction}>Choco Chips</li>
    <li  className='mt-1'onClick={mfamilyfunction}>Rajeshai Kesar Pista</li>
    <li  className='mt-1'onClick={mfamilyfunction}>Mast Vanilla</li>
    <li  className='mt-1'onClick={mfamilyfunction}>ButterScotch Crunch</li>
    <li  className='mt-1'onClick={mfamilyfunction}>Premium Catering Bulk</li>
  </ul>

</div>
    </div>
    <div onClick={()=>{
      setmsundae(!msundae);
      setmcup(false);
      setmcone(false);
      setmkoolfies(false);
      setmfamily(false);
    }}>
    <li className='hover:bg-red-700 text-black hover:text-white font-bold flex justify-between p-1'>SUNDAE <span className={` text-xl ${msundae ? "rotate-180" : "" }`}><RiArrowDropDownLine /> </span> </li>
<div className={` p-4 ${msundae ? "block" : "hidden"}`}>
  <ul>
    <li  className='mt-1' onClick={msundaefunction}  >Mix Fruit</li>
    <li  className='mt-1' onClick={msundaefunction} >Mango Ripple</li>
    <li  className='mt-1' onClick={msundaefunction} >Chocolate Ripple</li>
    <li  className='mt-1' onClick={msundaefunction} >Fully Loaded</li>
    <li  className='mt-1' onClick={msundaefunction} >Rajbhog</li>
    <li  className='mt-1' onClick={msundaefunction} > American Dry Fruit</li>

  </ul>
</div>
    </div>
    <Link to="/product" className='hover:bg-red-700 text-black hover:text-white font-bold p-1' onClick={()=>{
      setmproduct(false);
    }}>CHOCOBARS</Link>
  </ul>
</div>
      </div>
      <NavLink to="/about" className="text-xl font-semibold sm:text-sm hover:text-gray-300 py-1" activeClassName="active" onClick={toggleMenu}>About</NavLink>
      <NavLink to="/gallery" className="text-xl font-semibold sm:text-sm hover:text-gray-300 py-1" activeClassName="active" onClick={toggleMenu}>Gallery</NavLink>
      <NavLink to="/contact" className="text-xl font-semibold sm:text-sm hover:text-gray-300 py-1" activeClassName="active" onClick={toggleMenu}>Contact</NavLink>
      <button><NavLink to="/" className="bg-green-700 text-white p-2 rounded-lg w-[150x] animate-opacity2">Order Now</NavLink></button>  
    </nav>
  </div>
)}


    </div>
  );
};

export default Header;
