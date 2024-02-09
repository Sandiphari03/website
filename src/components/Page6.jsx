import React, { useState } from 'react';


import blog1 from "../assets/blog1-qbbovqc4kykgl9onnd3uwzd5z0qidgt33fpuunlah0.jpg";
import blog2 from "../assets/blog1-qbbovt5n5gobk3kk6wbqmgnjr6cm0k4a3tobahh3yc.jpg";
import blog3 from "../assets/blog2-qbbovu3hcaplvpj71eqd6yf0ck7z8980fybsrrfps4.jpg";

const Page5 = () => {
  const [hoveredItems, setHoveredItems] = useState({
    blog1: false,
    blog2: false,
    blog3: false,
  });

  const handleHover = (blogId) => {
    setHoveredItems((prev) => ({ ...prev, [blogId]: true }));
  };

  const handleMouseLeave = (blogId) => {
    setHoveredItems((prev) => ({ ...prev, [blogId]: false }));
  };

  // const windowSize = useWindowSize(); // Hook to get window size
  // const isSmallScreen = windowSize.width < 600; // Define your breakpoint here


  return (
    <div className='pt-2 pb-10'>
      <div className='items-center text-center pt-20 pb-1'>
        <h1 className="xs:text-3xl font-semibold">
          Recent News Articles
        </h1>
        <p className="text-base mt-4 mb-20 text-gray-500 font-semi-bold">
          Fresh job-related news content posted each day.
        </p>
      </div>

      <div className='flex items-center justify-center p-2'>
        <div className='items-center justify-between mt-6 rounded-lg max-w-[1740px] grid md:grid-cols-3 xs:grid-cols-1 xs:gap-8 m-auto lg:p-10 sl:p-4 xss:p-0 pl-10 pr-10 '>


          <div className='bg-white rounded-lg p-5 items-center m-auto justify-between font-extrabold'>
            <div className="flex justify-center mb-4 w-300 h-200">
              {/* Displaying blog thumbnails */}
              <img
                src={blog1}
                alt="Blog 1"
                className="w-300 h-200 rounded-lg transform transition-transform duration-300 hover:scale-110 object-cover"
              />
            </div>
            <p className='text-gray-400 text-s pb-3'>
              April 26,  2021 Education • 1 Comment
            </p>

            <h1 className='text-xl pb-3 hover:text-blue-600'>Attractive Sales And Profit</h1>
            <p className='text-gray-400 text-s pb-3'>A job ravenously while Far much that one rank <br />beheld after outside....</p>                        <div class="relative">
              <p className='text-blue-600 text-s relative inline-block hover:underline'> Read More
                {/* <FontAwesomeIcon icon={faArrowRight} /> */}
              </p>
              <span class="absolute bottom-0 left-0 w-0 h-0 bg-black transition-all duration-600 origin-left transform hover:w-full"></span>
            </div>
          </div>





          {/* Block 2 */}
          {/* {!isSmallScreen && ( */}
          <div className='bg-white rounded-lg p-5 items-center m-auto justify-between font-extrabold'>
            <div className="flex justify-center mb-4 w-300 h-200">
              {/* Displaying blog thumbnails */}
              <img
                src={blog2}
                alt="Blog 2"
                className="w-300 h-200 rounded-lg transform transition-transform duration-300 hover:scale-110 object-cover"
              />
            </div>
            <p className='text-gray-400 text-s pb-3'>
              April 26,  2021 Education  1 Comment
            </p>

            <h1 className='text-xl pb-3 hover:text-blue-600' >5 Tips For Yoyur Job Interview </h1>
            <p className='text-gray-400 text-s pb-3'>A job ravenously while Far much that one rank <br />beheld after outside....</p>
            <div class="relative">
              <p className='text-blue-600 text-s relative inline-block hover:underline'> Read More
                {/* <FontAwesomeIcon icon={faArrowRight} /> */}
              </p>
              <span class="absolute bottom-0 left-0 w-0 h-0 bg-black transition-all duration-600 origin-left transform hover:w-full"></span>
            </div>
            {/* </div> */}
            {/* ... (rest of your content) */}
          </div>
          {/* )} */}





          {/* Block 3 */}
          {/* {!isSmallScreen && ( */}
          <div className='bg-white rounded-lg p-5 items-center m-auto justify-between font-extrabold'>
            <div className="flex justify-center mb-4 w-300 h-200">
              {/* Displaying blog thumbnails */}
              <img
                src={blog3}
                alt="Blog 3"
                className="w-300 h-200 rounded-lg transform transition-transform duration-300 hover:scale-110 object-cover"
              />
            </div>
            <p className='text-gray-400 text-s pb-3'>
              April 26,  2021 Education  1 Comment
            </p>

            <h1 className='text-xl pb-3 hover:text-blue-600' >The Evening of Holiday</h1>
            <p className='text-gray-400 text-s pb-3'>A job ravenously while Far much that one rank <br />beheld after outside....</p>
            <div class="relative">
              <p className='text-blue-600 text-s relative inline-block hover:underline'> Read More
                {/* <FontAwesomeIcon icon={faArrowRight} /> */}
              </p>
              <span class="absolute bottom-0 left-0 w-0 h-0 bg-black transition-all duration-600 origin-left transform hover:w-full"></span>
            </div>

            {/* ... (rest of your content) */}
          </div>
          {/* )} */}

        </div>
      </div>
    </div>
  )
}

export default Page5;


// import React from 'react';
// import blog1 from "../assets/blog1-qbbovqc4kykgl9onnd3uwzd5z0qidgt33fpuunlah0.jpg";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import blog2 from "../assets/blog1-qbbovt5n5gobk3kk6wbqmgnjr6cm0k4a3tobahh3yc.jpg";
// import blog3 from "../assets/blog2-qbbovu3hcaplvpj71eqd6yf0ck7z8980fybsrrfps4.jpg";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faDotCircle } from '@fortawesome/free-solid-svg-icons';


// const Page5 = () => {
//     return (
//         <div className='pt-20'>
//             {/* <div className='mt-6 bg-white max-w-[1240px] grid grid-cols-2 m-auto rounded-lg xss:p-0  shadow-sm'> */}
//             {/* <div> */}

//             {/* </div> */}
//             <div className='items-center text-center pt-20 pb-1'>
//                 <h1 className="xs:text-3xl font-semibold">
//                     Recent News Articles
//                 </h1>
//                 <p className="text-base mt-4 mb-20 text-gray-500 font-semi-bold">
//                     Fresh job related news content posted each day.
//                 </p>
//             </div>

//             <div className='flex items-center justify-center p-20'>
//                 <div className='items-center justify-between mt-6 rounded-lg max-w-[1740px] grid grid-cols-3  xs:gap-8 m-auto lg:p-10 sl:p-4 xss:p-0 pl-10 pr-10 '>
//                     <div className='bg-white rounded-lg p-5 items-center m-auto justify-between font-extrabold'>
//                         <div className="flex justify-center mb-4 w-300 h-200">
//                             {/* Displaying blog thumbnails */}
//                             <img src={blog1} alt="Blog 1" className="w-300 rounded-lg transform transition-transform duration-300 hover:scale-110" />
//                         </div>
//                         <p className='text-gray-400 text-s pb-3'>
//                             April 26,  2021 Education  1 Comment
//                         </p>
//                         <h1 className='text-xl pb-3' >Attractive Sales And Profit</h1>
//                         <p className='text-gray-400 text-s pb-3'>A job ravenously while Far much that one rank <br />beheld after outside....</p>
//                         <p className='text-blue-600 text-s'> Read More
//                         {/* <FontAwesomeIcon icon={faArrowRight} /> */}
//                         </p>
//                     </div>





//                     <div className='bg-white rounded-lg p-5 items-center m-auto justify-between font-extrabold'>
//                         <div className="flex justify-center mb-4 w-300 h-200">
//                             {/* Displaying blog thumbnails */}
//                             <img src={blog2} alt="Blog 1" className="w-300 rounded-lg transform transition-transform duration-300 hover:scale-110" />
//                         </div>
// <p className='text-gray-400 text-s pb-3'>
//     April 26,  2021 Education  1 Comment
// </p>
// <h1 className='text-xl pb-3' >5 Tips For Yoyur Job Interview </h1>
// <p className='text-gray-400 text-s pb-3'>A job ravenously while Far much that one rank <br />beheld after outside....</p>
// <p className='text-blue-600 text-s'> Read More
// {/* <FontAwesomeIcon icon={faArrowRight} /> */}
// </p>
//                     </div>
//                     <div className='bg-white rounded-lg p-5 items-center m-auto justify-between font-extrabold '>
//                         <div className="flex justify-center mb-4 w-300 h-200">
//                             {/* Displaying blog thumbnails */}
//                             <img src={blog3} alt="Blog 1" className="w-300 rounded-lg transform transition-transform duration-400 hover:scale-110 object-cover" />
//                         </div>
// <p className='text-gray-400 text-s pb-3'>
//     April 26,  2021 Education  1 Comment
// </p>
// <h1 className='text-xl pb-3' >The Evening of Holiday</h1>
// <p className='text-gray-400 text-s pb-3'>A job ravenously while Far much that one rank <br />beheld after outside....</p>
// <p className='text-blue-600 text-s'> Read More
// {/* <FontAwesomeIcon icon={faArrowRight} /> */}
// </p>
//                     </div>

//                 </div>
//             </div>

//         </div>



//     )
// }

// export default Page5
