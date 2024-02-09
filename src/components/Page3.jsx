import React, { useState } from 'react';
import Y1image from "../assets/y1.jpg";
import Y2image from "../assets/y2.jpg";
import Y3image from "../assets/y9.jpg";
import Y4image from "../assets/y11.jpg";
import Y5image from "../assets/y52.jpg";
import Y6image from "../assets/y1.jpg";
import { FaBookmark } from 'react-icons/fa';

const Page3 = () => {
  const [isHovered, setIsHovered] = useState(Array(6).fill(false));

  const handleHover = (index) => {
    setIsHovered((prev) => prev.map((item, i) => (i === index ? true : item)));
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prev) => prev.map((item, i) => (i === index ? false : item)));
  };

  const boxes = [
    { title: 'Junior Graphic Desinger (Web)', positions: 'Design, Development New York  $150-$180 week', image: Y1image },
    { title: 'Finance Manager Health', positions: '(6 Position open)', image: Y2image },
    { title: 'General Ledger Accountant', positions: '(4 Position open)', image: Y3image },
    { title: 'Assistance/StoreKeeper', positions: '(5 Position open)', image: Y4image },
    { title: 'Group Marketing Manager', positions: '(0 Position open)', image: Y5image },
    { title: 'Product Sales Specialist', positions: '(0 Position open)', image: Y6image },
    // Add more objects for other boxes as needed
  ];

  return (
    <div className='bg-white'>
      <div className='bg-white items-center text-center pt-20 pb-20'>
        <h1 className="xs:text-3xl font-semibold">Featured Jobs</h1>
        <p className="text-base mt-4 text-gray-500 font-semi-bold">
          Know your worth and find the job that qualifies your life
        </p>
        <div className='mt-6 bg-white max-w-[1240px] grid grid-cols-1 ss:grid-cols-2 ss:gap-6 sf:gap-10 xs:gap-6 m-auto rounded-lg xss:p-10 sl:p-4  '>
          {boxes.map((box, index) => (
            <div key={index} className='bg-white grid grid-rows-1 gap-8 m-auto rounded-lg w-full shadow-sm'>
              <div
                className='border sl:p-10 xs:p-6 flex rounded-lg'
              // onMouseEnter={() => handleHover(index)}
              // onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* <div
                  className="bg-gray-200 rounded-lg sl:p-4 sl:pl-6 sl:pr-6 xs:p-3 xs:pl-4 xs:pr-4 items-center"
                  style={{
                    backgroundColor: isHovered[index] ? '#1967D2' : '#E2E8F0',
                    color: isHovered[index] ? 'white' : '#1967D2',
                  }}
                > */}
                <img
                  src={box.image}
                  alt={box.title}
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover',
                    borderRadius: '0%',
                    display: 'block',
                  }}
                />
                {/* </div> */}

                <div className=" pl-8 ">
                  <div
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleMouseLeave(index)}>
                    <h2 className="text-xl flex  font-semibold items-left text-left" style={{ color: isHovered[index] ? '#1967D2' : 'black' }}>{box.title}<span className="text-green-600 text-sm font-medium p-2"> Featured</span></h2>


                  </div>
                  <div className="w-full flex top-0 left-0 text-sm font-medium gap-0 items-left text-gray-500" style={{ marginLeft: '0' }}>
                    <h1 style={{ marginLeft: '0' }}>
                      <i className="fas fa-briefcase"></i> Design
                    </h1>
                    <h1 style={{ marginLeft: '0' }}>
                      <i className="fas fa-map-marker-alt xm:pl-10 xss:pl-2 "></i> New York
                    </h1>
                    <h1 style={{ marginLeft: '0' }}>
                      <i className="fas fa-dollar-sign xm:pl-10 xss:pl-2"></i> 150 - 180 /week
                    </h1>
                  </div>

                  <div className='pt-2 flex gap-6' >
                    <button className="flex text-sm font-medium pl-4 pr-4 w-20 h-5 text-blue-700 bg-blue-100 rounded-4xl" style={{ marginRight: '-0.5rem' }}>
                      Full Time
                    </button>
                    <button className="flex text-sm font-medium  pl-4 pr-4 w-16 h-5 text-amber-500 bg-amber-100 rounded-4xl" style={{ marginLeft: '-0.5rem' }}>
                      Urgent
                    </button>
                  </div>


                </div><FaBookmark className="text-gray-400 ml-6" />
              </div>

            </div>
          ))}

        </div>
        <div className='flex items-center justify-center pt-10'>
          <button className="flex items-center text-base font-medium w-52 p-3 text-white bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700 border border-transparent rounded-lg">
            <span className="m-auto font-semibold">Load More Listing</span>
          </button>
        </div>
      </div>

    </div>


  );
};

export default Page3;