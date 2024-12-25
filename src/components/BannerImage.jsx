import React from 'react';

const BannerImage = () => {
    const GradientStyle=['bg-slate-950 p-5 rounded-lg text-center flex flex-col justify-between'];
    return (
        <div className='w-full md:w-10/12 mx-auto mt-28 mb-10'>
            <div className='grid md:grid-cols-10 gap-2 text-center'>
                <div className='col-span-10 md:col-span-5 bg-slate-950 rounded-lg'>
                    <img src="src\assets\Banner image.jpg" alt="" className='h-full rounded-lg' />
                </div>
                <div className='flex flex-col  rounded-lg p-4 justify-between col-span-4 md:col-span-2 bg-slate-950'>
                    <p className='text-xs lg:text-lg text-white'>We have built</p>
                    <p className='text-3xl lg:text-5xl text-white font-semibold'>20M+</p>
                    <p className='text-xs lg:text-lg text-white'>connections</p>
                </div>
                <div className='col-span-6 md:col-span-3 grid gap-2'>
                    <div className='p-3 bg-slate-950  rounded-lg flex justify-center items-center'>
                        <p className='text-xs lg:text-lg text-white font-semibold'><span className='text-2xl lg:text-4xl'>10K</span><br></br>Expert Mentors</p>
                    </div>
                    <div className='p-3 bg-slate-950 rounded-lg flex justify-center items-center sm:p-5'>
                        <p className='text-xs lg:text-lg text-white font-semibold'><span className='text-2xl lg:text-4xl'>99%</span><br></br>Happy members</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerImage;