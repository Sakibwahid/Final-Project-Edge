import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import RegisterInterviewee from './RegisterInterviewee';
import RegisterInterviewer from './RegisterInterviewer';

const GradientStyle = () => ({
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(0deg, rgba(2,0,36,1) 18%, rgba(50,50,87,1) 60%, rgba(74,80,121,1) 78%, rgba(115,125,156,1) 100%)'
});
const Register = () => {
    const [tab, setTab] = useState('interviewee');
    const tabStyle = ' rounded-full lg:min-h-10 py-2 px-4'
    return (
        <div className='border max-w-screen-xl mx-auto rounded-2xl my-36 shadow-xl'>
            <div className='grid grid-cols-2 '>
                <div className='col-span-1 m-2 rounded-2xl hidden lg:block' style={GradientStyle()}>
                    <div className='hero-content flex-col p-10 text-center text-white'>
                        <div><img src='src\assets\Logo\Logo-dark.png' className='w-24'></img></div>
                        <h3 className='text-3xl font-semibold'>Get Started With Us</h3>
                        <p className='text-sm font-light'>Register now to accelerate your career with our expert mentors</p>
                    </div>
                </div>
                <div className='col-span-2 p-10 lg:col-span-1 lg:p-10'>
                    <h2 className='text-3xl font-bold text-center'>Sign Up</h2>
                    <p className='text-md text-gray text-center py-3'>Enter your email and personal details to create your account</p>
                    <div className='flex justify-center my-5'>
                        <div className='menu menu-horizontal py-0 px-0 bg-gray-300 rounded-full space-x-1 *:font-semibold'>
                            <button className={tab === 'interviewee' ? `bg-black text-white ${tabStyle}` : `text-black ${tabStyle}`} onClick={() => setTab('interviewee')}>Interviewee</button>
                            <button className={tab === 'interviewer' ? `bg-black text-white ${tabStyle}` : `text-black ${tabStyle}`} onClick={() => setTab('interviewer')}>Interviewer</button>
                        </div>
                    </div>
                    <div className='lg:mb-10 '>
                        <div className={tab === 'interviewee' ? `` : `hidden`}>
                            <RegisterInterviewee></RegisterInterviewee>
                        </div>
                        <div className={tab === 'interviewer' ? `` : `hidden`}>
                            <RegisterInterviewer></RegisterInterviewer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;