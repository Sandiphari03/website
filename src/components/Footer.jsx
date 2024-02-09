import React, { useState } from 'react'
import App from "../assets/speak.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "../assets/logo.png";

const Footer = () => {
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


    return (
        <div>
            <div className=' bg-white pt-20'>
                {/* <div className='mt-6 bg-white max-w-[1240px] grid grid-cols-2 m-auto rounded-lg xss:p-0  shadow-sm'> */}
                {/* <div> */}

                {/* </div> */}
                <div className='p-5' style={{ position: 'relative', display: 'flex' }}>
                    <div className="bg-white w-full gap-20 flex-auto m-auto grid xs:grid-cols-1 lgi:grid-cols-5 lg:grid-cols-4 xf:grid-cols-3 sm:grid-cols-2 max-w-[1380px] ">
                        <div className=''>
                            <div className="w-full pr-16">
                                <img src={Logo} alt="logo" className=" flex cursor-pointer relative w-full h-full object-contain" style={{ width: '156px', height: '50px' }} />
                            </div>
                            <h1 className='pt-3 text-xl font-semibold'>
                                Call us
                            </h1>
                            <p className='pt-2 pb-2 text-blue-600 font-semibold'>0123 456 789</p>
                            <p className='text-gray-400 pb-2 font-semibold'>328 Queensberry Street, North Melbourne VIC</p>
                            <p className='text-gray-400 pb-2 font-semibold'>support@superio.com</p>

                        </div>
                        <div>
                            <h1 className='pt-0 text-xl font-semibold '>For Candidates</h1>
                            
                            <p className='relative group pt-3 pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Browse Jobs</h1></a><div className="absolute top-4 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Browse Candidates</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Candidates Dashboard</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Job Alert</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">My Bookmark</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>

                        </div>
                        <div>
                            <h1 className='pt-0 text-xl font-semibold'>For Employers</h1>
                            <p className='relative group pt-3 pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">All Employers</h1></a><div className="absolute top-4 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Employes Dashboard</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Submit Job</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Job Packages</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>

                        </div>
                        <div>
                            <h1 className='pt-0 text-xl font-semibold'>About Us</h1>
                            <p className='relative group pt-3 pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Contact Us</h1></a><div className="absolute top-4 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">About Us</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Terms</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Packages</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">FAQS</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                        </div>
                        <div>
                            <h1 className='pt-0 text-xl font-semibold'>Helpful Resources</h1>
                            <p className='relative group pt-3 pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Site Map</h1></a><div className="absolute top-4 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Terms oD Use</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Privacy Center</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group pb-2'><a href='#'> <h1 className=" text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Security Center</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                            <p className='relative group  pb-2'><a href='#'> <h1 className="text-gray-500 font-semibold transition-transform duration-300 ease-in-out group-hover:text-blue-500 group-hover:translate-x-5 relative z-10">Accessibility Center</h1></a><div className="absolute top-0 left-0 w-3 h-0.5 mt-2 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></p>
                        </div>
                    </div>


                </div>
                <hr />
                <div className='p-5' style={{ position: 'relative', display: 'flex' }}>
                    <div className="bg-white w-full flex-auto m-auto grid sm:grid-cols-2 xs:grid-cols-2 max-w-[1380px] ">
                        <div className='pt-3 text-gray-400 font-semibold'>
                            © 2021 Superio. All Right Reserved.
                        </div>
                        <div className='logo flex items-center justify-end w-full  mx-auto'>
                            <a href="#" className="text-gray-400 hover:text-violet-500 mr-4">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-violet-500 mr-4">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-violet-500 mr-4">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-violet-500">
                                <i className="fab fa-linkedin-in"></i>
                            </a>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}


export default Footer
