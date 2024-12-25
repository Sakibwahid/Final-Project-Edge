import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='w-11/12 max-w-screen-xl mx-auto py-5'>
            <div className='grid md:grid-cols-2 py-16 gap-10'>
                <div className=' md:text-left md:col-span-1'>
                    <h3 className='text-2xl font-medium'>Get started with us launch your career with a boost of our experts.</h3>
                    <p className='font-semibold text-gray-500 mt-2 mb-5'>FIND. BOOK. GET BETTER.</p>
                    <p className='text-lg font-semibold mb-2'>Get connected</p>
                    <div className="join w-full">
                        <input className="input join-item focus:border-none focus:outline-none" placeholder="Email" />
                        <button className="btn join-item border-none bg-green-500">Subscribe</button>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-y-5 justify-center md:text-right md:col-span-1'>
                    <div className='col-span-4'>
                        <h2 className='text-md md:text-lg lg:text-xl py-2 font-semibold text-gray-700'>Plateform</h2>
                        <ul className='text-sm md:text-md text-gray-600 flex flex-col gap-2'>
                            <li className='hover:underline hover:font-semibol cursor-pointer'>Interviewee</li>
                            <li className='hover:underline hover:font-semibol cursor-pointer'>Book a session</li>
                            <li className='hover:underline hover:font-semibol cursor-pointer'>Become mentor</li>
                            <li className='hover:underline hover:font-semibol cursor-pointer'>Testimonial</li>
                        </ul>
                    </div>
                    <div className='col-span-4 '>
                        <h2 className='text-md md:text-lg lg:text-xl font-semibold py-2 text-gray-700'>Company</h2>
                        <ul className='text-sm md:text-md flex flex-col gap-2 text-gray-600'>
                            <li className='hover:underline hover:font-semibol cursor-pointer'>About</li>
                            <li className='hover:underline hover:font-semibol cursor-pointer'>Privacy & Policy</li>
                            <li className='hover:underline hover:font-semibol cursor-pointer'>Terms of use</li>
                        </ul>
                    </div>
                    <div className='col-span-4'>
                        <h2 className='text-md md:text-lg lg:text-xl py-2 font-semibold text-gray-700'>Support</h2>
                        <ul className='text-sm md:text-md flex flex-col gap-2 text-gray-600'>
                            <li className='hover:underline hover:font-semibol cursor-pointer'>FAQ</li>
                            <li className='hover:underline hover:font-semibol cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center border bg-white rounded-xl py-5 px-4'>
                <div className='flex justify-center items-center'>
                    <img src='src\assets\Logo\Logo-default.png' className='w-32'></img>
                </div>
                <div className='flex gap-2 md:gap-6 text-2xl'>
                    <FaFacebook className='hover:text-blue-700 transition-all duration-300 cursor-pointer transform hover:scale-125'></FaFacebook>
                    <FaTwitter className='hover:text-blue-500 transition-all duration-300 cursor-pointer transform hover:scale-125'></FaTwitter>
                    <FaYoutube className='hover:text-red-600 transition-all duration-300 cursor-pointer transform hover:scale-125'></FaYoutube>
                    <FaLinkedin className='hover:text-blue-500 transition-all duration-300 cursor-pointer transform hover:scale-125'></FaLinkedin>
                </div>
            </div>
        </div>
    );
};

export default Footer;