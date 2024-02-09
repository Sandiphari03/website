import React, { useState } from 'react'
import Work from "../assets/work.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Employer from '../assets/employers.png';
import B1 from '../assets/b1.jpg';
import B2 from '../assets/b2.jpg';
import B3 from '../assets/b3.jpg';
import B7 from '../assets/b7.jpg';
import B5 from '../assets/b5.jpg';
import B6 from '../assets/b6.jpg';
import B4 from '../assets/b4.jpg';


const Page5 = () => {

    const brandIconStyle = {
        // paddingLeft: '60px'
    };

    const brandButtonStyle = {
        transition: 'transform 0.3s',
        // padding: '15px',
        // margin: '0 10px'
    };

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    // }

    // const testimonials = [
    //     {
    //         image: B1,
    //     },
    //     {
    //         image: B2,
    //     },
    //     {
    //         image: B3,
    //     },
    //     {
    //         image: B4,
    //     },
    // ]

    return (
        <div className=''>

            {/* <div className='mt-6 bg-white max-w-[1240px] grid grid-cols-2 m-auto rounded-lg xss:p-0  shadow-sm'> */}
            {/* <div> */}

            {/* </div> */}
            {/* <div className=' m-auto'>
                <div className='mt-20 '>
                    <Slider {...settings}>
                        {testimonials.map((d) => (
                            <div className="bg-white pl-5 pr-5 ds:pt-5 ds:pb-5 lg:pt-10 lg:pb-10 rounded-lg ">
                                <div className='p-2 flex' style={{ width: '50%' }}>
                                    <img src={d.image} alt={d.name} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div> */}
















            <div className='bg-white pt-10 pb-10 '>

                <section>
                    <div className="element" >
                        <div className="logooo" >
                            <div className='mt-6 bg-white max-w-[1240px] grid grid-cols-7 m-auto rounded-lg xss:p-0  '>
                                <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
                                    <img src={B1} alt="brand" className="brand-icon" style={brandIconStyle} />
                                </a>
                                <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
                                    <img src={B2} alt="brand" className="brand-icon" style={brandIconStyle} />
                                </a>
                                <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
                                    <img src={B3} alt="brand" className="brand-icon" style={brandIconStyle} />
                                </a>
                                <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
                                    <img src={B7} alt="brand" className="brand-icon" style={brandIconStyle} />
                                </a>
                                <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
                                    <img src={B5} alt="brand" className="brand-icon" style={brandIconStyle} />
                                </a>
                                <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
                                    <img src={B6} alt="brand" className="brand-icon" style={brandIconStyle} />
                                </a>
                                <a href="your-bell-link.html" className="brand-button" style={brandButtonStyle}>
                                    <img src={B4} alt="brand" className="brand-icon" style={brandIconStyle} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <hr />


            <div className='pt-20' style={{ position: 'relative', display: 'flex' }}>
                <div className="  w-full flex-auto m-auto grid sl:grid-cols-2 max-w-[1480px] ">
                    <div className='flex items-center justify-end w-full  mx-auto'>
                        <img
                            src={Work}
                            alt="logo"
                            className='pt-0 max-w-full w-full sl:max-w-[65%] xl:max-w-[65%] lgi:max-w-[65%] 2xl:max-w-[75%]  h-auto hidden sl:flex'
                        // style={{ maxWidth: '80%', width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className=' pl-20 w-full'>
                        <h1 className="lgi:text-5xl lg:text-6xl sl:text-4xl md:text-3xl xs:text-3xl font-semibold mt-8">
                            Millions of Jobs.Find the one
                            <br />
                            that suits you.
                        </h1>
                        <p className="text-base mt-4 text-gray-500 font-semi-bold">
                            Search all the open positions on the web. Get your own
                            <br />
                            personalized salary estimate. Read reviews on over 600,000
                            <br />
                            companies worldwide.
                        </p>
                        <p className="text-base mt-4 text-gray-500 font-semi-bold">
                            <span className="text-base mt-4 text-black font-semi-bold">
                                ✔ Bring to the table win-win survival
                                <br /> ✔ Capitalize on low hanging fruit to identify
                                <br /> ✔ But I must explain to you how all this</span>
                        </p>
                        <div className=' pt-10  items-left justify-center'>
                            <button className="flex items-left text-base font-medium w-52 p-4 text-white bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700 border border-transparent rounded-lg">
                                <span className="m-auto font-semibold">Get Started</span>
                            </button>
                        </div>

                    </div>

                    {/* Displaying blog thumbnails */}
                    <img
                        src={Employer}
                        alt="Blog 1"
                        className="sl:max-w-[30%] xf:max-w-[33%]  xl:max-w-[35%] lg:max-w-[37%]  lgi:max-w-[40%] relative  lgi:bottom-24 lg:bottom-20  sl:bottom-16 sl:left-40  xf:left-50 lg:left-70 lgi:left-80 ml-80 items-center m-auto h-auto hidden sl:flex"
                    />

                </div>
            </div>
            <div className='flex items-center justify-center pl-20 pr-20 pb-10'>
                <div className='items-center justify-between mt-6 bg-white max-w-[1240px] grid grid-cols-3 xf:gap-64 ss:gap-48 md:gap-16 xs:gap-8 m-auto lg:p-10 sl:p-4 xss:p-0 pl-10 pr-10 '>
                    <div className='bg-white items-center m-auto justify-between font-extrabold xf:text-6xl ss:text-5xl md:text-4xl xs:text-3xl'>
                        4M
                        <p>4 million daily active users</p>
                    </div>
                    <div className='bg-white  font-extrabold xf:text-6xl ss:text-5xl md:text-4xl xs:text-3xl'>
                        12K
                        <p>Over 12k open job positions</p>
                    </div>
                    <div className='bg-white font-extrabold xf:text-6xl ss:text-5xl md:text-4xl xs:text-3xl'>
                        20M
                        <p>Over 20 million stories shared</p>
                    </div>

                </div>
            </div>

        </div>



    )
}

export default Page5
