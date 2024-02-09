import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t1image from "../assets/t4.jpg";
import t2image from "../assets/t3.jpg";
import t3image from "../assets/t2.jpg";
import t4image from "../assets/t1.jpg";
import './Page4.css';
import B1 from '../assets/b1.jpg';
import B2 from '../assets/b2.jpg';
import B3 from '../assets/b3.jpg';
import B7 from '../assets/b7.jpg';
import B5 from '../assets/b5.jpg';
import B6 from '../assets/b6.jpg';
import B4 from '../assets/b4.jpg';
import Q from '../assets/quotations.png';




const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setActiveIndex(newIndex);
    },
    afterChange: (currentIndex) => {
      console.log(currentIndex)
    
      let myIndex = currentIndex;
      if (currentIndex ===  testimonials.length-1) {
  
        
        myIndex= 0
        
      }else{
        myIndex=  currentIndex+1
      }
      setActiveIndex(myIndex);
    },
  };

  // const opacityStyle = {
  //   opacity: 0.5,
  //   transition: 'opacity 0.5s ease-in-out',
  // };


  return (
    <div className=''>
      <div className='items-center text-center pt-20 pb-36'>
        <h1 className="xs:text-3xl font-semibold">
          Testimonials From Our Customers
        </h1>
        <p className="text-base mt-4 mb-20 text-gray-500 font-semi-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className=' m-auto'>
          <div className='mt-20 '>
            <Slider {...settings}>
              {testimonials.map((d, index) => (
                <div className={`bg-white pl-5 pr-5 ds:pt-5 ds:pb-5 lg:pt-10 lg:pb-10 rounded-lg  ${
                  index === activeIndex ?'opacity-100': 'opacity-50' // Apply opacity for non-active slides
                }`} key={index} style={{ background: 'white', width: '200%', margin: '0 auto' }}>
                  <div>
                    <h1 className='text-blue-500 font-bold text-left text-xl ds:text-base pb-6'>{d.greet}</h1>
                    <p className="testimonial-text testimonial-image rounded-full mx-auto mb-4 text-gray-500 text-ex font-semibold">{d.testimonial}</p>
                    <div className='p-2 flex' style={{ width: '50%' }}>
                      <img src={d.image} alt={d.name} />
                      <p className="testimonial-info pl-4 pt-4 text-gray-600">
                        <span className="testimonial-name text-xl font-bold">{d.name}</span>
                        <br />
                        <span className="testimonial-occupation text-sm">{d.occupation}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};



const testimonials = [
  {
    greet: 'Awesome Design',
    name: 'John Doe',
    occupation: 'Designer',
    testimonial: 'Sempor incididunt alpha ut labore et dolore magna .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.',
    image: t2image,
    quote: Q,

  },
  {
    greet: 'Awesome Design',
    name: 'Jane Smith',
    occupation: 'Developer',
    testimonial: 'Lommodo consequat.Lorem aplha aplhaaplhaaplhaaplha ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: t4image,
    quote: Q,
  },
  {
    greet: 'Awesome Design',
    name: 'Jane Smith',
    occupation: 'Developer',
    testimonial: 'Utaboris nisi ut ex aplha aplha aplha ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.',
    image: t3image,
    quote: Q,
  },
  {
    greet: 'Awesome Design',
    name: 'Jane Smith',
    occupation: 'Developer',
    testimonial: 'Utlaboris nisi ut ex eaaplha  aplha  commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.',
    image: t4image,
    quote: Q,
  },
  // Add more testimonials as needed
];

export default TestimonialSlider;



{/*      <h1 className='text-blue-500 font-bold text-left text-xl pb-6'>{testimonials.greet}</h1>
                                <p className="testimonial-text testimonial-image rounded-full mx-auto mb-4 text-gray-500 text-ex font-semibold">{testimonials.testimonial} alt={testimonials.name}</p>
                                <div className='p-2 flex' style={{ width: '50%' }}>
                                    <img src={testimonials.image} alt={testimonials.name} className="testimonial-image" />
                                    <p className=" testimonial-info pl-4 pt-4 text-gray-600">
                                        <span className="testimonial-name text-xl font-bold">{testimonials.name}</span>
                                        <br />
                                        <span className="testimonial-occupation text-sm">{testimonials.occupation}</span> */}
