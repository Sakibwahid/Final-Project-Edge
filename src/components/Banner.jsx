import React, { useState } from 'react';

const Banner = () => {
    const [tab, setTab] = useState(true);

    return (
        <div className='w-[90%] mx-auto *:text-balance *:text-center grid gap-8 mt-20 md:mt-24 md:mb-10 lg:mt-44 lg:mb-20'>
            <div>
                <div className={!tab? `hidden`:``}>
                    <div>
                        <h1 className='font-medium text-2xl sm:text-4xl lg:text-6xl'>Your Days of Getting Mocked in the Interviews are Over</h1>
                    </div>
                    <div className='w-3/4 mx-auto mt-2 text-slate-500'>
                        <p className='text-xs md:text-xl'>Build an epic career with expert Interviewers from all over the word, let's start today.</p>
                    </div>
                </div>
                <div className={tab?`hidden`:``}>
                    <div className=''>
                        <h1 className='font-medium text-2xl sm:text-4xl lg:text-6xl'>Convert regular Job Seekers to Elite Candidates with your Expertise </h1>
                    </div>
                    <div className='mx-auto mt-2 text-slate-500'>
                        <p className='text-xs md:text-xl'>Build confidence as a leader, grow your network, and define your legacy.</p>
                    </div>
                </div>
            </div>
            <div className='space-x-2'>
                <button className={tab ? `bg-custom-gradient text-white btn btn-outline rounded-xl` : `btn btn-outline rounded-xl`} onClick={() => setTab(true)}>Interviewee</button>
                <button className={tab ? `btn btn-outline rounded-xl` : `btn btn-outline rounded-xl text-white bg-black`} onClick={() => setTab(false)}>Interviewer</button>
            </div>
        </div>
    );
};

export default Banner;
