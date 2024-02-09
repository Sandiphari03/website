import React from 'react'
import App from "../assets/app.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Page7 = () => {
    return (
        <div>
            <div className=' bg-white pt-20'>
                {/* <div className='mt-6 bg-white max-w-[1240px] grid grid-cols-2 m-auto rounded-lg xss:p-0  shadow-sm'> */}
                {/* <div> */}

                {/* </div> */}
                <div className='' style={{ position: 'relative', display: 'flex' }}>
                    <div className="  w-full flex-auto m-auto grid sl:grid-cols-2 max-w-[1480px] ">
                        <div className='flex items-center justify-end w-full  mx-auto'>
                            <img
                                src={App}
                                alt="logo"
                                className='pt-0 max-w-full w-full sl:max-w-[65%] xl:max-w-[65%] lgi:max-w-[65%] 2xl:max-w-[75%]  h-auto hidden sl:flex'
                            // style={{ maxWidth: '80%', width: '100%', height: 'auto' }}
                            />
                        </div>
                        <div className=' sl:pl-20 xs:pl-5 sl:pt-36 xs:5 w-full'>
                        <p className='text-blue-600 text-xl font-semibold'> DOWNLOAD & ENJOY
                {/* <FontAwesomeIcon icon={faArrowRight} /> */}
              </p>
                            <h1 className="lgi:text-5xl lg:text-6xl sl:text-4xl md:text-3xl xs:text-3xl font-semibold mt-8">
                            Get the Superio Job
                                <br />
                                Search App
                            </h1>
                            <p className="text-base mt-4 text-gray-500 font-semi-bold">
                            Search through millions of jobs and find the right fit. 
                                <br />
                                Simply swipe right to apply.
                            </p>
                           
                            <div className='flex pt-10 pb-5 items-left gap-5 font-bold'>
                                <button className="flex items-left text-base font-medium sl:w-52 xs:w-36 sl:p-2 xs:p-1 text-white bg-black hover:bg-blue-700 hover:text-white border border-transparent rounded-lg">
                                <i className="fab fa-apple  fa-2x ml-2 mt-2"></i> {/* Apple icon */}
                                    <span className="m-auto font-semibold ">Download on <br/><span className='font-extrabold'>Apple Store</span></span>
                                </button>
                                <button className="flex items-left text-base font-medium sl:w-52 xs:w-36 sl:p-2 xs:p-1  text-white bg-black hover:bg-blue-700 hover:text-white border border-transparent rounded-lg">
                                <i className="flex fab fa-google-play fa-2x ml-2 mt-2"></i> {/* Google Play Store icon */}
                                    <span className="m-auto font-semibold ">Get it on <br/><span className='font-bold'>Google Play</span></span>
                                </button>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page7
