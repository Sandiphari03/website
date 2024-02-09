import React from 'react'
import App from "../assets/speak.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Page8 = () => {
  return (
    <div>
            <div className=' bg-white pt-20'>
                {/* <div className='mt-6 bg-white max-w-[1240px] grid grid-cols-2 m-auto rounded-lg xss:p-0  shadow-sm'> */}
                {/* <div> */}

                {/* </div> */}
                <div className='p-5' style={{ position: 'relative', display: 'flex' }}>
                    <div className="bg-slate-100 rounded-lg w-full flex-auto m-auto grid sl:grid-cols-2 max-w-[1380px] "> 
                    <div className=' pl-10 w-full'>
                        
                            <h1 className="lgi:text-4xl lg:text-3xl sl:text-2xl md:text-2xl xs:text-2xl font-semibold mt-8">
                            Recruiting?
                                
                            </h1>
                            <p className="text-base mt-4 text-gray-500 font-semi-bold">
                            Advertise your jobs to millions of monthly users and search 15.8 million CVs
                                <br />
                                in our database.
                            </p>
                           
                            <div className='flex pt-10 pb-5 items-left gap-5 font-bold'>
                            <button className="flex items-left text-base font-medium w-52 p-3 text-white bg-blue-600 hover:bg-white hover:text-blue-700 hover:border-blue-700 border border-transparent rounded-lg">
                                <span className="m-auto font-semibold">Start Recruiting Now</span>
                            </button>
                                
                            </div>

                        </div>
                        <div className='flex items-center justify-end w-full  mx-auto'>
                            <img
                                src={App}
                                alt="logo"
                                className='rounded-lg pt-0 max-w-full w-full sl:max-w-[55%] xl:max-w-[55%] lgi:max-w-[55%] 2xl:max-w-[45%]  h-auto hidden sl:flex'
                            // style={{ maxWidth: '80%', width: '100%', height: 'auto' }}
                            />
                        </div>
                       


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page8
