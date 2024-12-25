import React from 'react';
import Booking from '../components/Booking';
import MentorProfile from '../components/MentorProfile';
const Dashboard = () => {
    return (
        <div className='w-full text-center p-20 mt-20 text-left'>
            <div className='grid grid-cols-2 gap-5'>
                <div className=''>
                    <MentorProfile></MentorProfile>
                </div>
                <div className=''>
                    <Booking></Booking>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;