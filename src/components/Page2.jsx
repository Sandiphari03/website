import React, { useState } from 'react';
import { ImBullhorn } from "react-icons/im";
 
 
const Page2 = () => {
  const [isHovered, setIsHovered] = useState(Array(9).fill(false));
 
  const handleHover = (index) => {
    setIsHovered((prev) => prev.map((item, i) => (i === index ? true : item)));
  };
 
  const handleMouseLeave = (index) => {
    setIsHovered((prev) => prev.map((item, i) => (i === index ? false : item)));
  };
 
  const boxes = [
    { title: 'Accounting/Finance', positions: '(1 Position open)', icon: 'fa fa-dollar' },
    { title: 'Development', positions: '(6 Position open)', icon: 'fa fa-code' },
    { title: 'Customer Service', positions: '(4 Position open)', icon: 'fa fa-user' },
    { title: 'Marketing', positions: '(5 Position open)', icon: 'fa fa-bullhorn' },
    { title: 'Human Resource', positions: '(0 Position open)', icon: 'fa fa-search' },
    { title: 'Health And Care', positions: '(3 Position open)', icon: 'fa fa-medkit' },
    { title: 'Design', positions: '(7 Position open)', icon: 'fa fa-pencil' },
    { title: 'Project Management', positions: '(1 Position open)', icon: 'fa fa-rocket' },
    { title: 'Automotive Job', positions: '(1 Position open)', icon: 'fa fa-car' },
    // Add more objects for other boxes as needed
  ];
 
  return (
    <div className='bg-white p-6'>
      <div className='bg-white items-center text-center pt-20 pb-20' >
        <h1 className="xs:text-3xl font-semibold">Popular Job Categories</h1>
        <p className="text-base mt-4 text-gray-500 font-semi-bold">
          2020 jobs live – 293 added today.
        </p>
        <div className='mt-6 bg-white max-w-[1240px] grid grid-cols-1 ss:grid-cols-3 ss:gap-8 sf:gap-10 xs:gap-6  m-auto rounded-lg lg:p-10 sl:p-4 xss:p-0 pl-10 pr-10 '>
          {boxes.map((box, index) => (
            <div key={index} className='bg-white grid grid-rows-1 gap-8 m-auto rounded-lg w-full '>
              <div
                className='border sl:p-4 xs:p-2 flex rounded-lg'
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div
                  className="bg-gray-50 text-blue-500 rounded-lg sl:p-4 sl:pl-6 sl:pr-6 xs:p-3 xs:pl-4 xs:pr-4  items-center"
                  style={{
                    backgroundColor: isHovered[index] ? '#1967D2' : '#E2E8F0',
                    color: isHovered[index] ? 'white' : '#1967D2',
                    fontSize: '28px',
                  }}
                >
                  <i className={box.icon} aria-hidden="true" style={{ color: isHovered[index] ? 'white' : '#1967D2', fontSize: '28px' }}></i>
                </div>
                <div className="p-4 pl-8">
                  <h2 className="text-ex font-semibold" style={{ color: isHovered[index] ? '#1967D2' : 'black' }}>{box.title}</h2>
                  <p className="text-sm text-gray-500">{box.positions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};
 
export default Page2;
 
      // import React, { useState } from 'react';
 
// const Page2 = () => {
//   const [isHovered, setIsHovered] = useState(false);
 
//   const handleHover = () => {
//     setIsHovered(true);
//   };
 
//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };
 
//   const boxStyles = {
//     backgroundColor: isHovered ? '#1967D2' : '#E2E8F0',
//     color: isHovered ? 'white' : '#1967D2',
//   };
 
//   const iconStyles = {
//     color: isHovered ? 'white' : '#1967D2',
//     backgroundColor: isHovered ? '#1967D2' : '#E2E8F0',
//   };
 
//   const textStyle = {
//     color: isHovered ? '#1967D2' : 'black',
//   };
 
//   return (
//     <div className='bg-white'>
//       <div className='bg-white items-center text-center pt-20'>
//         <h1 className="xs:text-3xl font-semibold">
//           Popular Categories
//         </h1>
//         <p className="text-base mt-4 text-gray-500 font-semi-bold">
//           2020 jobs live – 293 added today.
//         </p>
//         <div className='mt-6 bg-white max-w-[1240px] grid grid-cols-1 dd:grid-cols-3 gap-6 m-auto rounded-lg lg:p-6 sl:p-4 xss:p-0  shadow-sm'>
//           {/* Box 1 */}
//           <div className='bg-white grid grid-rows-3 gap-6 m-auto rounded-lg w-full shadow-sm'>
 
//             <div className='border p-4 flex rounded-lg' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
//               <div className="bg-gray-200 text-blue-500 rounded-lg p-4 pl-6 pr-6 items-center" style={boxStyles}>
//                 <i className="fa fa-dollar" aria-hidden="true" style={{ iconStyles, fontSize: '38px' }}></i>
//               </div>
//               <div className="p-4 pl-8">
//                 <h2 className="text-lg font-semibold" style={textStyle}>Accounting/Finance</h2>
//                 <p className="text-sm text-gray-500">(1 Position open)</p>
//               </div>
//             </div>
 
//             <div className='border p-3 flex rounded-lg' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
//               <div className="bg-gray-200 text-blue-500 rounded-lg p-4  items-center" style={boxStyles}>
//                 <i className="fa fa-code" aria-hidden="true" style={{ iconStyles, fontSize: '38px' }}></i>
//               </div>
//               <div className="p-4 pl-8">
//                 <h2 className="text-lg font-semibold" style={textStyle}>Development</h2>
//                 <p className="text-sm text-gray-500">(6 Position open)</p>
//               </div>
//             </div>
 
//             <div className='border p-4 flex rounded-lg' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
//               <div className="bg-gray-200 text-blue-500 rounded-lg p-4 items-center" style={boxStyles}>
//                 <i className="fa fa-user" aria-hidden="true" style={{ iconStyles, fontSize: '38px' }}></i>
//               </div>
//               <div className="p-4 pl-8">
//                 <h2 className="text-lg font-semibold" style={textStyle}>Customer Service</h2>
//                 <p className="text-sm text-gray-500">(4 Position open)</p>
//               </div>
//             </div>
 
//           </div>
 
//           {/* Box 2 */}
//           <div className='bg-white grid grid-rows-3 gap-6 m-auto rounded-lg w-full shadow-sm'>
 
//           <div className='border p-4 flex rounded-lg' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
//               <div className="bg-gray-200 text-blue-500 rounded-lg p-4 pl-6 pr-6 items-center" style={boxStyles}>
//                 <i className="fa fa-bullhorn" aria-hidden="true" style={{ iconStyles, fontSize: '38px' }}></i>
//               </div>
//               <div className="p-4 pl-8">
//                 <h2 className="text-lg font-semibold" style={textStyle}>Marketing</h2>
//                 <p className="text-sm text-gray-500">(5 Position open)</p>
//               </div>
//             </div>
 
//             <div className='border p-4 flex rounded-lg' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
//               <div className="bg-gray-200 text-blue-500 rounded-lg p-4  items-center" style={boxStyles}>
//                 <i className="fa fa-search" aria-hidden="true" style={{ iconStyles, fontSize: '38px' }}></i>
//               </div>
//               <div className="p-4 pl-8">
//                 <h2 className="text-lg font-semibold" style={textStyle}>Human Resource</h2>
//                 <p className="text-sm text-gray-500">(0 Position open)</p>
//               </div>
//             </div>
 
//             <div className='border p-4 flex rounded-lg' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
//               <div className="bg-gray-200 text-blue-500 rounded-lg p-4 items-center" style={boxStyles}>
//                 <i className="fa fa-medkit" aria-hidden="true" style={{ iconStyles, fontSize: '38px' }}></i>
//               </div>
//               <div className="p-4 pl-8">
//                 <h2 className="text-lg font-semibold" style={textStyle}>Health And Care</h2>
//                 <p className="text-sm text-gray-500">(3 Position open)</p>
//               </div>
//             </div>
//           </div>
 
//           {/* Box 3 */}
//           <div className='bg-white grid grid-rows-3 gap-6 m-auto rounded-lg w-full shadow-sm'>
 
//           <div className='border p-4 flex rounded-lg' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
//               <div className="bg-gray-200 text-blue-500 rounded-lg p-4 pl-6 pr-6 items-center" style={boxStyles}>
//                 <i className="fa fa-pencil" aria-hidden="true" style={{ iconStyles, fontSize: '38px' }}></i>
//               </div>
//               <div className="p-4 pl-8">
//                 <h2 className="text-lg font-semibold" style={textStyle}>Design</h2>
//                 <p className="text-sm text-gray-500">(7 Position open)</p>
//               </div>
//             </div>
 
//             <div className='border p-4 flex rounded-lg' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
//               <div className="bg-gray-200 text-blue-500 rounded-lg p-4  items-center" style={boxStyles}>
//                 <i className="fa fa-rocket" aria-hidden="true" style={{ iconStyles, fontSize: '38px' }}></i>
//               </div>
//               <div className="p-4 pl-8">
//                 <h2 className="text-lg font-semibold" style={textStyle}>Project Management</h2>
//                 <p className="text-sm text-gray-500">(1 Position open)</p>
//               </div>
//             </div>
 
//             <div className='border p-4 flex rounded-lg' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
//               <div className="bg-gray-200 text-blue-500 rounded-lg p-4 items-center" style={boxStyles}>
//                 <i className="fa fa-car" aria-hidden="true" style={{ iconStyles, fontSize: '38px' }}></i>
//               </div>
//               <div className="p-4 pl-8">
//                 <h2 className="text-lg font-semibold" style={textStyle}>Automotive Job</h2>
//                 <p className="text-sm text-gray-500">(1 Position open)</p>
//               </div>
//             </div>
 
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default Page2;
 