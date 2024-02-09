import React, { useState } from "react";
import Logo from "../assets/logo.png";
// import NavLinks from "./NavLinks";
import { AiOutlineDown } from "react-icons/ai";
// import Dropdown from "./Dropdown";
import "./Topnav.css";
import { FaBell } from "react-icons/fa";
// import MenuItems from "./MenuItems";
import {Link} from 'react-router-dom';
import Page1 from "./Page1";
import NavLinks from "./NavLinks";
import { FaRegBell } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
 
// import DropdownMenu from './DropdownMenu';
 
const Topnav = () => {
    const HomeMenus = ["Home 1", "Home 2", "Home 3", "Home 4", "Home 5"];
    const FindJobMenus = ["Find Jobs 1", "Find Jobs 2", "Find Jobs 3", "Find Jobs 4", "Find Jobs 5"];
    const EmployersMenus = ["Employers 1", "Employers 2", "Employers 3", "Employers 4", "Employers 5"];
    const CandidatesMenus = ["Candidates 1", "Candidates 2", "Candidates 3", "Candidates 4", "Candidates 5"];
    const PagesMenus = ["Pages 1", "Pages 2", "Pages 3", "Pages 4", "Pages 5"];
    const BlogsMenus = ["Blogs 1", "Blogs 2", "Blogs 3", "Blogs 4", "Blogs 5"];
  
    const [openHome, setOpenHome] = useState(false);
    const [openFindJob, setOpenFindJob] = useState(false);
    const [openEmployer, setOpenEmployer] = useState(false);
    const [openCandidates, setOpenCandidates] = useState(false);
    const [openPages, setOpenPages] = useState(false);
    const [openBlogs, setOpenBlogs] = useState(false);
    
 
    
  
    const handleMouseEnterHome = () => {
      setOpenHome(true);
    //   setOpenHome(false); // Close Find Jobs menu when hovering Home
    };
  
    const handleMouseLeaveHome = () => {
      setOpenHome(false);
    };
  
    const handleMouseEnterFindJob = () => {
      setOpenFindJob(true);
    //   setOpenFindJob(false); // Close Home menu when hovering Find Jobs
    };
  
    const handleMouseLeaveFindJob = () => {
      setOpenFindJob(false);
    };
 
    const handleMouseEnterEmployer = () => {
      setOpenEmployer(true);
    //   setOpenEmployer(false); // Close Find Jobs menu when hovering Employers
    };
 
    const handleMouseLeaveEmployer = () => {
      setOpenEmployer(false);
    };
 
    const handleMouseEnterCandidates = () => {
      setOpenCandidates(true);
    //   setOpenCandidates(false); // Close Find Jobs menu when hovering Candidates
    };
 
    const handleMouseLeaveCandidates = () => {
      setOpenCandidates(false);
    };
 
    const handleMouseEnterPages = () => {
      setOpenPages(true);
    //   setOpenPages(false); // Close Find Jobs menu when hovering Pages
    };
 
    const handleMouseLeavePages = () => {
      setOpenPages(false);
    };
 
    const handleMouseEnterBlogs = () => {
      setOpenBlogs(true);
    //   setOpenBlogs(false); // Close Find Jobs menu when hovering Blogs
    };
 
    const handleMouseLeaveBlogs = () => {
      setOpenBlogs(false);
    };
  
    return (
      <div className="hidden  sl:flex pt-3 pl-2">
        <nav className="flex font-medium justify-between  w-full sm:py-2 sm:pl-2 py-4 pl-12 lg:text-base" >
          <div className="flex ">
            <div className=" pr-16">
              
                <img src={Logo} alt="logo" className=" flex cursor-pointer relative " style={{ width: '100%', height: '100%' }} />
              
            </div>
  
            <div className="2xl:space-x-12 lg:space-x-8  xl:space-x-6 xf:space-x-2 sl:space-x-1 md:space-x-0 xs:space-x-0 hidden sl:flex">
              <div className="relative">
                {/* Home Dropdown */}
                <a
                  onMouseEnter={handleMouseEnterHome}
                  onMouseLeave={handleMouseLeaveHome}
                  className="font-semibold cursor-pointer flex text-base  text-black hover:text-blue-600 px-2 py-3"
                >
                  Home
                  <AiOutlineDown className="mh-3 w-3 text-black ml-2 hover:text-blue-600" />
                </a>
                {openHome && (
                    
                  <div
                  className="flex bg-white p-4 w-36 absolute -left-1 top-10" onMouseEnter={handleMouseEnterHome} onMouseLeave={handleMouseLeaveHome}>
                    <ul>
                      {HomeMenus.map((menu) => (
                        <li className="text-base p-2 cursor-pointer hover:text-blue-500" key={menu}>
                          {menu}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
  
              <div className="relative">
                {/* Find Jobs Dropdown */}
                <a
                  onMouseEnter={handleMouseEnterFindJob}
                  onMouseLeave={handleMouseLeaveFindJob}
                  className="font-semibold cursor-pointer flex text-base text-black hover:text-blue-600 px-1 py-3"
                >
                  FindJobs
                  <AiOutlineDown className="mh-3 w-3 text-black ml-2 hover:text-blue-600" />
                </a>
                {openFindJob && (
                  <div className="flex bg-white p-4 w-36 absolute -left-1 top-10" onMouseEnter={handleMouseEnterFindJob} onMouseLeave={handleMouseLeaveFindJob}>
                    <ul>
                      {FindJobMenus.map((menu) => (
                        <li className="text-base p-2 cursor-pointer hover:text-blue-500" key={menu}>
                          {menu}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
 
              <div className="relative">
                {/* Employers Dropdown */}
                <a
                  onMouseEnter={handleMouseEnterEmployer}
                  onMouseLeave={handleMouseLeaveEmployer}
                  className="font-semibold cursor-pointer flex text-base text-black hover:text-blue-600 px-2 py-3"
                >
                    Employers
                    <AiOutlineDown className="mh-3 w-3 text-black ml-2 hover:text-blue-600" />
                </a>
                {openEmployer && (
                  <div className="flex bg-white p-4 w-36 absolute -left-1 top-10" onMouseEnter={handleMouseEnterEmployer} onMouseLeave={handleMouseLeaveEmployer}>
                  <ul>
                    {EmployersMenus.map((menu) => (
                      <li className="text-base p-2 cursor-pointer hover:text-blue-500" key={menu}>
                        {menu}
                      </li>
                    ))}
                  </ul>
                  </div>
                  )}
              </div>
 
              <div className="relative">
                {/* Candidates Dropdown */}
                <a
                  onMouseEnter={handleMouseEnterCandidates}
                  onMouseLeave={handleMouseLeaveCandidates}
                  className="font-semibold cursor-pointer flex text-base text-black hover:text-blue-600 px-2 py-3"
                >
                    Candidates
                    <AiOutlineDown className="mh-3 w-3 text-black ml-2 hover:text-blue-600" />
                </a>
                {openCandidates && (
                  <div className="flex bg-white p-4 w-36 absolute -left-1 top-10" onMouseEnter={handleMouseEnterCandidates} onMouseLeave={handleMouseLeaveCandidates}>
                  <ul>
                    {CandidatesMenus.map((menu) => (
                      <li className="text-base p-2 cursor-pointer hover:text-blue-500" key={menu}>
                        {menu}
                      </li>
                    ))}
                  </ul>
                  </div>
                  )}
              </div>
 
              <div className="relative">
                {/* Pages Dropdown */}
                <a
                  onMouseEnter={handleMouseEnterPages}
                  onMouseLeave={handleMouseLeavePages}
                  className="font-semibold cursor-pointer flex text-base text-black hover:text-blue-600 px-2 py-3"
                  >
                    Pages
                    <AiOutlineDown className=" font-semibold mh-3 w-3 text-black ml-2 hover:text-blue-600" />
 
                  </a>
                  {openPages && (
                  <div className="flex bg-white p-4 w-36 absolute -left-1 top-10" onMouseEnter={handleMouseEnterPages} onMouseLeave={handleMouseLeavePages}>
                  <ul>
                    {PagesMenus.map((menu) => (
                      <li className="text-base p-2 cursor-pointer hover:text-blue-500" key={menu}>
                        {menu}
                      </li>
                    ))}
                  </ul>
                  </div>
                  )}
              </div>
 
              <div className="relative">
                {/* Blogs Dropdown */}
                <a
                  onMouseEnter={handleMouseEnterBlogs}
                  onMouseLeave={handleMouseLeaveBlogs}
                  className="font-semibold cursor-pointer flex text-base text-black hover:text-blue-600 px-2 py-3"
                  >
                    Blogs
                    <AiOutlineDown className="mh-3 w-3 text-black ml-2 hover:text-blue-600" />
 
                  </a>
                  {openBlogs && (
                  <div className="flex bg-white p-4 w-36 absolute -left-1 top-10" onMouseEnter={handleMouseEnterBlogs} onMouseLeave={handleMouseLeaveBlogs}>
                  <ul>
                    {BlogsMenus.map((menu) => (
                      <li className="text-base p-2 cursor-pointer hover:text-blue-500" key={menu}>
                        {menu}
                      </li>
                    ))}
                  </ul>
                  </div>
                  )}
              </div>
 
              
 
 
                            
                            
                    </div>
                    {/* </div> */}
                </div>
 
                {/* <div className="flex items-center justify-between py-5 px-80">
       <div className="flex items-center"> */}
                {/* <div className="flex items-center justify-end float-right"> */}
                <div className=" hidden sl:flex items-center space-x-3 pr-6 ">
                    <div className=" hidden md:flex ml-10 space-x-3 ">
                        <button className="font-semibold flex text-s  pt-4 pb-4 pl-7 w-36 text-blue-700 bg-blue-100  hover:bg-blue-700 hover:text-white rounded-lg ">
                            Login/Register
                        </button>
                    </div>
                    <div className=" hidden md:flex ml-10 space-x-3 ">
                        <button className="font-semibold flex text-s  pt-4 pb-4 pl-7 w-24 text-white color-blue bg-blue-700 hover:bg-blue-800 rounded-lg hover:text-white">
                            Job Post
                        </button>
                        <a href="/" className=" hidden md:flex pt-4">
                            <BsBell
                                size="1.6rem"
                                color="black"
                            />
                        </a>
                    </div>
                </div>
 
                {/* </div> */}
                
            </nav>
            
    </div>
        
    );
    
};
 
export default Topnav;
 
// import React, { useState } from 'react';
// import Logo from "../assets/logo.png";
// import NavLinks from './NavLinks';
// import { AiOutlineDown } from 'react-icons/ai'; // Import the dropdown icon
 
// const Topnav = () => {
//   const [showDropdown, setShowDropdown] = useState(null);
 
//   const handleDropdown = (index) => {
//     setShowDropdown(index === showDropdown ? null : index);
//   };
 
//   const Links = [
//     { name: "Home", link: "/" },
//     { name: "Jobs", link: "/" },
//     { name: "Employers", link: "/" },
//     { name: "Candidates", link: "/" },
//     { name: "Pages", link: "/" },
//   ];
 
//   const generateDropdownContent = (link) => {
//     const items = [];
//     for (let i = 1; i <= 5; i++) {
//       items.push(
//         <div key={i}>{link.name} {i}</div>
//       );
//     }
//     return items;
//   };
 
//   return (
//     <nav className="flex items-center justify-between py-2 px-4" size={12}>
//       <div className="flex items-center ">
//         <img src={Logo} alt="logo" className="h-12 cursor-pointer" />
//         <div className="ml-4 flex items-center space-x-10 ">
//           {Links.map((link, index) => (
//             <div key={index} className="relative">
//               <a
//               href={link.link}
//               className="text-black hover:text-blue rounded-lg px-2 py-1 transition-colors duration-300"
//               onMouseEnter={() => handleDropdown(index)}
//               onMouseLeave={() => handleDropdown(null)}
//             >
//                 {link.name}
//               </a>
//               {index === showDropdown && (
//                 <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md py-1">
//                   {/* Dropdown content here */}
//                   {generateDropdownContent(link)}
//                 </div>
//               )}
//               <AiOutlineDown className="h-4 w-4 text-black ml-1" />
//             </div>
//           ))}
//         </div>
//       </div>
//       <ul className='md:flex hidden items-left gap-10'>
//         <NavLinks />
//       </ul>
//     </nav>
//   );
// };
 
// export default Topnav;
 
// import React from 'react';
// import Logo from "../../assets/logo.png"
 
// const Topnav = () => {
//   return
//    <nav className="flex justify-between">
//     <img src={Logo} alt="logo" className="h-9 cursor-pointer"/>
//     <ul></ul>
//    </nav>;
 
// };
 
// export default Topnav;
 
 
{/* <a
                                
                                className="cursor-pointer flex text-sm text-black hover:text-blue-600  px-2 py-3"
                            >
                                Employers
                                <AiOutlineDown className="h-3 w-3 text-black hover:text-blue-600  ml-2" />
                            </a>
                            <a
                                
                                className="cursor-pointer flex text-sm text-black hover:text-blue-600  px-2 py-3"
                            >
                                Candidates
                                <AiOutlineDown className="h-3 w-3 text-black hover:text-blue-600  ml-2" />
                            </a>
                            <a
                                
                                className="cursor-pointer flex text-sm text-black hover:text-blue-600  px-2 py-3"
                            >
                                Pages
                                <AiOutlineDown className="h-3 w-3 text-black hover:text-blue-600  ml-2" />
                            </a>
                            <a
                                
                                className="cursor-pointer flex text-sm text-black hover:text-blue-600  px-2 py-3"
                            >
                                Blogs
                                <AiOutlineDown className="h-3 w-3 text-black hover:text-blue-600  ml-2" />
                            </a> */}
 
 
 
 
 
 
//                          import React from "react";
// import Logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
// import MenuItems from "./MenuItems";
 
// const Topnav = () => {
//   return (
//     <div className="flex pl-">
//       <nav className="flex justify-between items-center w-full sm:py-2 sm:pl-2 py-5 pl-6 lg:text-base">
//         <div className="flex justify-between items-center">
//           <div>
//             <Link to="/logo" className="navbar-logo">
//               <img src={Logo} alt="logo" className="h-12 flex cursor-pointer relative sm:h-min z-[110] pr-6" />
//             </Link>
//           </div>
 
//           {/* Render MenuItems component */}
//           <MenuItems />
          
//           {/* Other elements */}
//           {/* ... */}
          
//         </div>
 
//         {/* Other elements */}
//         {/* ... */}
 
//       </nav>
 
//       {/* Other elements */}
//       {/* ... */}
 
//     </div>
//   );
// };
 
// export default Topnav;
 