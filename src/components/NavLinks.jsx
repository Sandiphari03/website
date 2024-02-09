import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";
import { SlArrowRight } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { CgMenuRight } from "react-icons/cg";
import "./NavLinks.css";
import { GoBell, GoX } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { FiFacebook, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import { BsBell } from 'react-icons/bs';
 
 
 
const NavLinks = () => {
  const [showLinks, setShowLinks] = useState(false);
 
  // const CgMenuRight = () => {
  //   setShowLinks(!showLinks);
  // };
 
  const toggleSideNav = () => {
    setShowLinks(!showLinks);
  };
 
  const closeSideNav = () => {
    setShowLinks(false);
    setRotateCross(false);
  };
 
  const Links = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Jobs",
      link: "/"
    },
    {
      name: "Employers",
      link: "/"
    },
    {
      name: "Candidates",
      link: "/"
    },
    {
      name: "Pages",
      link: "/"
    },
  ];
 
  return (
  
    <div className={`flex top-0 left-0 w-full h-full  ${showLinks ? 'overflow-hidden' : ''}`}>
      {/* Overlay */}
      {showLinks && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10"
          onClick={closeSideNav}
        />
      )}
      {/* <div> */}
      <nav className={`p-9 sl:hidden xss:bg-white sl:bg-white absolute top-0 left-0 right-0 z-9`}>
      <div className={`flex flex-wrap  justify-between ${showLinks ? 'bg-white' : ''}`}>
        {/* Logo */}
        <div className='absolute sl:hidden py-0 pl-4 top-5 left-0'>
          <Link to="/logo" className="navbar-logo">
            <img
              src={Logo}
              alt="logo"
              // size="1.9rem"
              style={{ width: '100%', height: '100%' }}
              className=" h-12 cursor-pointer top-3"
            />
          </Link>
        </div>
        
        {/* Menu Icon */}
        <div >
        <AiOutlineMenu
          onClick={toggleSideNav} // Corrected onClick function
          className='absolute top-5 right-3 sl:hidden cursor-pointer'
          size={24}
        />
         <GoPerson size={20} className="absolute top-5 right-20 sl:hidden ml-24 cursor-pointer" strokeWidth={0.5}/>
              {/* ImCross icon */}
        <BsBell  className="absolute top-5 right-12 sl:hidden ml-24 cursor-pointer" size='1.4rem'
        
       
        />
        </div>
        </div>
        </nav>
        {/* </div> */}
        
        {/* Links */}
        
        
        <div className={`transition-transform z-[100] duration-800 ease-in-out transform ${showLinks ? 'translate-x-0' : '-translate-x-full'} bg-zinc-800 w-73 h-full fixed top-0 left-0`}>
          <ul className="">
 
            {/* Logo Image */}
            <div className='flex items-center bg-white sm:w-auto  py-0 pl-0'>
              <Link to="/logo" className="navbar-logo">
              <div className="flex w-full p-2">
                <img
                  src={Logo}
                  alt="logo"
                  
                  style={{ width: '50%', height: '100%' }}
                />{/* CgProfile icon */}
              <GoPerson size={24} className="ml-28 mt-4 flex items-center  cursor-pointer" strokeWidth={-0.5}/>
              {/* ImCross icon */}
              <GoX size={30} className={" ml-2 mt-3 flex items-center cursor-pointer ${rotateCross ? 'rotate-45' : ''}"} strokeWidth={-2.1}  onClick={closeSideNav}/>
              </div>
              </Link>
            </div>
 
            {/* Navigation Links */}
            {Links.map((link, index) => (
              <li key={index} className="text-gray-400  hover:text-white py-4 px-1 pl-5 flex "
              style={{ width: '90%', height: '100%' }}>
                <Link to={link.link} className="flex w-full ">
                  <span className="text-sm  font-semibold">{link.name}</span>
                  <span className="ml-auto">
                    <SlArrowRight size={10}
                    className="ml-auto" />
                  </span>
                </Link>
              </li>
            ))}
            {/* Post Button */}
            <li className="text-gray-400 hover:text-white p-3 pt-40 pb-0 flex ">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-36 rounded">
                Post
              </button>
            </li>
             {/* Address and Contact Information */}
             <li className="text-gray-400 py-4 px-4">
              <p className='pb-2'>Call us:</p>
              <p className='text-white pb-4'>123 456 7890</p>
              <p className='text-smm font-thin pb-1'>328 Queensberry Street, North Melbourne VIC</p>
              <p className='text-smm font-thin pb-1'>3051, Australia.</p>
              <p className='text-smm font-thin pb-1'>Email: support@superio.com</p>
            </li>
            <div className="flex space-x-2">
            <li className="text-gray-400 hover:text-white py-4 px-40 pl-5 flex ">
            
            <Link to="/" className="flex w-full space-x-6">
              <FiFacebook size={12} className="ml-2 text-smmm transition duration-300 hover:text-blue-500" />
              <FiLinkedin size={12} className="ml-2 text-smmm transition duration-300 hover:text-blue-500" />
              <FiInstagram size={12} className="ml-2 text-smmm transition duration-300 hover:text-blue-500" />
              <FiTwitter size={12} className="ml-2 text-smmm transition duration-300 hover:text-blue-500" />
            </Link>
          </li>
          </div>
          </ul>
          </div>
       
     
 
     </div>
  );
};
 
export default NavLinks;
 