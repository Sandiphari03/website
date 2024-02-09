// import React, { useState } from 'react';

// const MenuItems = () => {
//   const Menus = ['Home1', 'Home2', 'Home3', 'Home4', 'Home5'];
//   const [open, setOpen] = useState(false);

//   const handleMouseEnter = () => {
//     setOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <a
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         className="cursor-pointer flex text-sm text-black hover:text-blue-600 px-2 py-3"
//       >
//         Home
//       </a>
//       {open && (
//         <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex bg-white p-4 w-30 absolute -left-1 top-10">
//           <ul>
//             {Menus.map((menu) => (
//               <li className="text-sm p-2 cursor-pointer hover:text-blue-500" key={menu}>
//                 {menu}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuItems;








// import React from 'react'

// export const MenuItems = () => {
//   const Menus = ["Home1", "Home2", "Home3", "Home4", "Home5"];
// 	const [open, setOpen] = useState(false);
	
// 	const handleMouseEnter = () => {
// 		setOpen(true);
// 	  };
	
// 	  const handleMouseLeave = () => {
// 		setOpen(false);
// 	  };

//   return (

//     <div>MenuItems</div>
//   )
// }


// import React, { useState } from "react";
// import { AiOutlineDown } from "react-icons/ai";

// const MenuItems = () => {
//   // Handle state and mouse events for each menu item separately
//   const [openHome, setOpenHome] = useState(false);
//   const [openFindJob, setOpenFindJob] = useState(false);
//   const [openEmployer, setOpenEmployer] = useState(false);
//   // ... and other menu items

//   // Define handleMouseEnter and handleMouseLeave functions for each menu item

//   return (
//     <div className="2xl:space-x-10 lg:space-x-4 xf:space-x-1 xl:space-x-0 hidden sl:flex">
//       {/* Home Dropdown */}
//       {/* ... */}
//       {/* Find Jobs Dropdown */}
//       {/* ... */}
//       {/* Employers Dropdown */}
//       {/* ... */}
//       {/* Candidates Dropdown */}
//       {/* ... */}
//       {/* Pages Dropdown */}
//       {/* ... */}
//       {/* Blogs Dropdown */}
//       {/* ... */}
//     </div>
//   );
// };

// export default MenuItems;
