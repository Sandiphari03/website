// import React, {useState} from 'react'
// import {AiOutlineMenu} from 'react-icons/ai';
// import { BsPersonCircle } from 'react-icons/bs';
// import { Link } from 'react-router-dom'; 

// const Sidenav = () => {
//   setShowLinks(!showLinks);
// };

//   return (
//     <div >
//     {showLinks && (
//       <ul className="absolute top-0 left-0 z-[100] bg-zinc-800 shadow">
//         {/* "absolute top-0 left-0 z-[100] bg-zinc-800 shadow transition-transform duration-300 ease-in-out transform w-72 h-full" */}

//         {/* Logo Image */}
//         <div className='flex items-center bg-white sm:w-auto  py-0 pl-0'>
//           <Link to="/logo" className="navbar-logo">
//           <div className="flex w-full p-2">
//             <img
//               src={Logo}
//               alt="logo"
              
//               style={{ width: '41%', height: '100%' }} 
//             />{/* CgProfile icon */}
//           <GoPerson size={20} className="ml-24 mt-3 flex items-center text-smmm cursor-pointer" strokeWidth={0.5}/>
//           {/* ImCross icon */}
//           <GoX size={20} className={" ml-2 mt-3 flex items-center text-smmm cursor-pointer ${rotateCross ? 'rotate-45' : ''}"} strokeWidth={-1.1}  onClick={closeSideNav}/>
//           </div>
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         {Links.map((link, index) => (
//           <li key={index} className="text-gray-400  hover:text-white py-4 px-1 pl-5 flex "
//           style={{ width: '90%', height: '100%' }}>
//             <Link to={link.link} className="flex w-full ">
//               <span className="text-sm font-thin font-semibold">{link.name}</span>
//               <span className="ml-auto">
//                 <SlArrowRight size={10}
//                 className="ml-auto" />
//               </span>
//             </Link>
//           </li>
//         ))}
//         {/* Post Button */}
//         <li className="text-gray-400 hover:text-white p-3 pt-40 pb-0 flex ">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-32 rounded">
//             Post
//           </button>
//         </li>
//          {/* Address and Contact Information */}
//          <li className="text-gray-400 py-4 px-4">
//           <p className='pb-2'>Call us:</p> 
//           <p className='text-white pb-4'>123 456 7890</p>
//           <p className='text-smm font-thin pb-1'>328 Queensberry Street, North Melbourne VIC</p>
//           <p className='text-smm font-thin pb-1'>3051, Australia.</p>
//           <p className='text-smm font-thin pb-1'>Email: support@superio.com</p>
//         </li>
//         <div className="flex space-x-2">
//         <li className="text-gray-400 hover:text-white py-4 px-40 pl-5 flex ">
        
//         <Link to="/" className="flex w-full space-x-6">
//           <FiFacebook size={12} className="ml-2 text-smmm transition duration-300 hover:text-blue-500" />
//           <FiLinkedin size={12} className="ml-2 text-smmm transition duration-300 hover:text-blue-500" />
//           <FiInstagram size={12} className="ml-2 text-smmm transition duration-300 hover:text-blue-500" />
//           <FiTwitter size={12} className="ml-2 text-smmm transition duration-300 hover:text-blue-500" />
//         </Link>
//       </li>
//       </div>
//       </ul>
//     )}
//   </div>
    
//   );
// };

// export default Sidenav
