import React from 'react';
import Slider from "../assets/slider1.png";
import Topnav from './Topnav';
import './Page1.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
 
const Page1 = () => {
  return (
    <div className=''>
      {/* <Topnav /> Placed the Topnav component above the content */}
      <div style={{ display: '' }}>
        {/* <NavLinks/> */}
        <div className='' style={{ position: 'relative', display: 'flex' }}>
          <div className="w-full flex-auto m-auto grid sl:grid-cols-2 max-w-[1480px] ">
            <div className='m-auto lg:pt-0 xs:pt-20 xs:p-3 w-full'>
              <h1 className="lgi:text-7xl lg:text-6xl sl:text-4xl md:text-3xl xs:text-2xl font-semibold mt-8">
                There Are <span className='lgi:text-7xl lg:text-6xl sl:text-4xl md:text-3xl xs:text-2xl  text-blue-500'>93,178 </span>Postings Here
                <br/>
                For You!
              </h1>
              <p className="text-base mt-4 text-gray-500 font-semi-bold">
                Find Jobs, Employment & Career Opportunities
              </p>
              <div className='mt-6 bg-white max-w-[1040px] hidden ds:grid ds:grid-cols-3  m-auto w-full rounded-lg lg:p-6 sl:p-4 sm:p-3 xss:p-0 shadow-sm'>
                <div className='flex border-r items-center'>
                  <i className="text-base m-auto fas fa-search mr-2 text-gray-500"></i>
                  <input type="text" placeholder="Job titles, keywords..." className='m-auto text-base outline-none' />
                </div>
                <div className='text-base m-auto flex items-center bg-white'>
                  <i className="m-auto fas fa-map-marker-alt mr-2 text-gray-500"></i>
                  <select className='outline-none bg-white text-gray-500'>
                    <option value='pincode' disabled selected>City or Postcode</option>
                    <option value='Florida'>Florida</option>
                    <option value='Los Angeles'>Los Angeles</option>
                    <option value='Miami'>Miami</option>
                    <option value='Nevada'>Nevada</option>
                    <option value='London'>London</option>
                  </select>
                </div>
                <button className="m-auto font-semibold flex text-center items-right justify-between text-base sl:px-9 xs:px-9 w-36 sl:p-5 xs:p-3 text-white bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700 border border-transparent rounded-lg">
                  Find Jobs
                </button>
              </div>
              <div className='mt-6 bg-white  max-w-[1040px] ds:hidden xs:grid-rows-3 m-auto rounded-lg md:p-8 sl:p-8 sm:p-4 xs:p-3 shadow-sm'>
                <div className='flex xs:p-5 border-b w-full items-left'>
                  <i className="text-base items-left m-auto fas fa-search mr-2 text-gray-500"></i>
                  <input type="text" placeholder="Job titles, keywords..." className='m-auto w-full items-left text-base outline-none' />
                </div>
                <div className='text-base  items- m-auto flex xs:p-5 bg-white'>
                  <i className="m-auto fas fa-map-marker-alt mr-2 text-gray-500"></i>
                  <select className='w-full outline-none bg-white text-gray-500'>
                    <option value='pincode' disabled selected>City or Postcode</option>
                    <option value='Florida'>Florida</option>
                    <option value='Los Angeles'>Los Angeles</option>
                    <option value='Miami'>Miami</option>
                    <option value='Nevada'>Nevada</option>
                    <option value='London'>London</option>
                  </select>
                </div>
                <div className='flex items-center justify-center'>
                 <button className="flex items-center text-base font-medium w-full p-4 text-white bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700 border border-transparent rounded-lg">
                 <span className="m-auto font-semibold">Find Jobs</span>
                 </button>
                </div>
 
 
 
                {/* <button className="m-auto flex w-full text-center items-right justify-between text-base px-9 xs:p-3 text-white bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700 border border-transparent rounded-lg">
                  Find Jobs
                </button> */}
              </div>
              <p className="text-base mt-4 text-gray-500 font-semi-bold">
                <span className="text-base mt-4 text-black font-semi-bold">Popular Searches :</span> Designer Developer Web IOS PHP Senior Engineer
              </p>
            </div>
            <div className='flex items-center justify-end w-full  mx-auto'>
            <img
            src={Slider}
            alt="logo"
            className='pt-2 max-w-full w-full sl:max-w-[70%] xl:max-w-[70%] lgi:max-w-[80%] 2xl:max-w-[90%]  h-auto hidden sl:flex'
            // style={{ maxWidth: '80%', width: '100%', height: 'auto' }}
            />
           </div>
           </div>
        </div>
      </div>
    </div>
  );
};
 
export default Page1;
 
 
// import React from 'react';
// import Slider from "../assets/slider1.png";
// import Topnav from './Topnav';
// import './Page1.css';
 
// const Page1 = () => {
//   return (
    
//     <div className=''>
//       {/* <Topnav /> Placed the Topnav component above the content */}
//       <div style={{ display: '' }}>
//         {/* <NavLinks/> */}
//         <div className='flex pt-20' style={{position: 'fixed', display: 'flex'}}>
//           <div className="my-content flex-auto position-relative" style={{ flex: 2, display: 'flex'}}>
//             <h1 className="text-5xl font-bold mt-8 position-relative" style={{ position: 'fixed', top: 200, left: 200 }}>
//               There Are <span className='text-5xl text-blue-500'>93,178 </span>Postings Here
//               <br className=''/>
//               For You!
//             </h1>
//             <p className="text-lg mt-4 position-relative text-gray-400 font-semi-bold" style={{flex: 1, display: 'flex', justifyContent: 'right', position: 'fixed', top: 350, left: 200 }} >
//               Find Jobs, Employment & Career Opportunities
//             </p>
//           </div>
//           <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', position: 'fixed', top: 100, right: 40 }}>
//             <img
//               src={Slider}
//               alt="logo"
//               className="position-relative"
//               style={{ width: '80%', height: '80%', maxWidth: '600px' }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
    
 
//   );
// };
 
// export default Page1;
 
 
 
 
// import React from 'react';
// import Slider from "../assets/slider1.png";
// // import NavLinks from "./NavLinks";
// import './Page1.css';
// // import Topnav from './Topnav';
 
// const Page1 = () => {
//   return (
    // <div className=''>
    //   {/* <Topnav /> Placed the Topnav component above the content */}
    //   <div style={{ display: '' }}>
    //     {/* <NavLinks/> */}
    //     <div className='flex justify-center items-center md:hidden'>
    //       <div className="my-content flex-auto text-center" style={{ flex: 2 }}>
    //         <h1 className="text-4xl font-bold mt-8">
    //           There Are <span className='text-4xl text-blue-500'>93,178 </span>Postings Here
    //           <br />
    //           For You!
    //         </h1>
    //         <p className="text-lg mt-4">
    //           Find Jobs, Employment & Career Opportunities
    //         </p>
    //       </div>
    //       <div style={{ flex: 1, position: 'relative' }}>
    //         <img
    //           src={Slider}
    //           alt="logo"
    //           className=""
    //           style={{ width: '120%', height: 'auto', maxWidth: '1000px' }}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };
 
// export default Page1;