// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import t1image from "../assets/t4.jpg";
// import t2image from "../assets/t3.jpg";
// import t3image from "../assets/t2.jpg";
// import t4image from "../assets/t1.jpg";
// import './Page4.css';
// import B1 from '../assets/b1.jpg';
// import B2 from '../assets/b2.jpg';
// import B3 from '../assets/b3.jpg';
// import B7 from '../assets/b7.jpg';
// import B5 from '../assets/b5.jpg';
// import B6 from '../assets/b6.jpg';
// import B4 from '../assets/b4.jpg';

 
 
 
// const testimonials = [
//     {
//         greet: 'Awesome Design',
//         name: 'John Doe',
//         occupation: 'Designer',
//         testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         image: t2image,
    
//     },
//     {
//         greet: 'Awesome Design',
//         name: 'Jane Smith',
//         occupation: 'Developer',
//         testimonial: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         image: t1image,
//     },
//     {
//         greet: 'Awesome Design',
//         name: 'Jane Smith',
//         occupation: 'Developer',
//         testimonial: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         image: t3image,
//     },
//     {
//         greet: 'Awesome Design',
//         name: 'Jane Smith',
//         occupation: 'Developer',
//         testimonial: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         image: t4image,
//     },
//     // Add more testimonials as needed
// ];
 
// const TestimonialSlider = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1, // Show one testimonial on smaller screens
//             },
//         },
//     ],
// };
 
// const customPrevArrow = (props) => (
//     <button {...props}>
//         {/* Your custom previous arrow content */}
//         <span>Previous</span>
//     </button>
// );
 
// const customNextArrow = (props) => (
//     <button {...props}>
//         {/* Your custom next arrow content */}
//         <span>Next</span>
//     </button>
// );
 
// const customDots = (dots) => (
//     <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', listStyle: 'none', padding: 0 }}>
//         {dots.map((dot, index) => (
//             <li key={index} style={{ margin: '0 5px', /* Your custom styles for individual dot */ }}>
//                 {dot}
//             </li>
//         ))}
//     </ul>
// );
// const onHoverStyle = {
//     transform: 'scale(1.1)'
//   };
 
//   const onHoverResetStyle = {
//     transform: 'scale(0.9)'
//   };
 
//   const brandIconStyle = {
//     // paddingLeft: '60px'
//   };
 
//   const brandButtonStyle = {
//     transition: 'transform 0.3s',
//     // padding: '15px',
//     // margin: '0 10px'
//   };
  
 
//     return (
        
        
//         <div className='mt-6  max-w-[2640px] grid grid-cols-1  m-auto  w-126'>
//         {/* <div className='bg-blue-50'> */}
        

//             <div className='items-center text-center pt-20 pb-36'>
//                 <h1 className="xs:text-3xl font-semibold">
//                     Testimonials From Our Customers
//                 </h1>
//                 <p className="text-base mt-4 mb-20 text-gray-500 font-semi-bold">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
 
//                 <div className="flex justify-center">
//                     {/* Centering the testimonial container */}
//                     <div className="testimonial-container  p-3" style={{ width: '35%' }}>
//                         {/* Fixed width of 96px, adjust as needed */}
//                         <Slider {...settings}>
//                             {testimonials.map((testimonial, index) => (
//                                 <div key={index} className=" flex bg-white p-8 testimonial ">
//                                     <h1 className='text-blue-500 font-bold text-left text-xl pb-6'>{testimonial.greet}
 
//                                     </h1>
//                                     <p className="testimonial-text testimonial-image rounded-full mx-auto mb-4 text-gray-500 text-ex font-semibold">{testimonial.testimonial} alt={testimonial.name}</p>
//                                     <div className='p-2 flex' style={{ width: '50%' }}>
//                                     <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
//                                     <p className=" testimonial-info pl-4 pt-4 text-gray-600">
//                                         <span className="testimonial-name text-xl font-bold">{testimonial.name}</span>
//                                         <br/>
//                                          <span className="testimonial-occupation text-sm">{testimonial.occupation}</span>
//                                     </p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 {/* </div> */}
//             </div>
//         </div>
        
    //     <div className='bg-white pt-10 pb-10 '>
 
    //     <section>
    //   <div className="element" >
    //     <div className="logooo" >
    //     <div className='mt-6 bg-white max-w-[1240px] grid grid-cols-7 m-auto rounded-lg xss:p-0  '>
    //       <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
    //         <img src={B1} alt="brand" className="brand-icon" style={brandIconStyle} />
    //       </a>
    //       <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
    //         <img src={B2} alt="brand" className="brand-icon" style={brandIconStyle} />
    //       </a>
    //       <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
    //         <img src={B3} alt="brand" className="brand-icon" style={brandIconStyle} />
    //       </a>
    //       <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
    //         <img src={B7} alt="brand" className="brand-icon" style={brandIconStyle} />
    //       </a>
    //       <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
    //         <img src={B5} alt="brand" className="brand-icon" style={brandIconStyle} />
    //       </a>
    //       <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
    //         <img src={B6} alt="brand" className="brand-icon" style={brandIconStyle} />
    //       </a>
    //       <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
    //         <img src={B4} alt="brand" className="brand-icon" style={brandIconStyle} />
    //       </a>
    //       </div>
    //     </div>
    //   </div>
    
    // </section>
 
    //     </div>
    //     <hr />
//         </div>  
        
//     );
// };
 
 
 
// export default TestimonialSlider;
 
 
 
// // return (
// //     <div className='bg-blue-50'>
// //         <div className='items-center text-center pt-20'>
// //             <h1 className="xs:text-3xl font-semibold">
// //                 Testimonials From Our Customers
// //             </h1>
// //             <p className="text-base mt-4 mb-20 text-gray-500 font-semi-bold">
// //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// //             </p>
 
// //             <div className="testimonial-container items-center justify-between p-6" style={{ width: '30%' }}>
// //                 <Slider {...settings}>
// //                     {testimonials.map((testimonial, index) => (
                        
// //                         <div key={index} className=" bg-white p-4 pl-10 pr-10 testimonial shadow-md " style={{ }}>
                            
// //                             <p className="testimonial-text testimonial-image rounded-full mx-auto mb-4">{testimonial.testimonial}alt={testimonial.name}  </p>
// //                             <p className="testimonial-info text-center">
// //                                 <span className="testimonial-name text-center">{testimonial.name}</span> - <span className="testimonial-occupation">{testimonial.occupation}</span>
// //                             </p>
// //                             <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
// //                         </div>
// //                     ))}
                   
// //                 </Slider>
// //             </div>
// //         </div>
// //     </div>
// // );
// // };