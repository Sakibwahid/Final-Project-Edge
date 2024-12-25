import react, { useState } from 'react';
import { FaListOl } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineChecklistRtl } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Booking = () => {
    const [clicked, setClicked] = useState(false);
    const redirect = useNavigate();
    const handleBook = () => {
        setClicked(true);
        //console.log('btn click');
        document.getElementById('my_modal_1').showModal();
        setTimeout(() => { redirect('/booked') }, 3000);

    }
    //console.log(clicked);
    return (
        <div className='shadow-2xl p-5 flex flex-col rounded-xl border'>
            <h2 className='text-xl font-bold my-5 text-left'>Community Statistics</h2>
            <div className='grid grid-cols-2 *:border *:p-2 *:rounded-md gap-3'>
                <div className='text-left flex gap-3 items-center'>
                    <div className='rounded-md p-2 bg-red-200'>
                        <FaListOl className='text-3xl' />
                    </div>
                    <div>
                        <h2 className='text-lg font-bold'>0</h2>
                        <p className='font-medium text-md text-gray-500'>Completed Session</p>
                    </div>
                </div>
                <div className='text-left flex gap-3'>
                    <div className='rounded-md p-2 bg-green-200'>
                        <FaRegClock className='text-3xl' />
                    </div>
                    <div>
                        <h2 className='text-lg font-bold'>0 Minitues</h2>
                        <p className='font-medium text-md text-gray-500'>Total monitoring time</p>
                    </div>
                </div>
                <div className='text-left flex gap-3'>
                    <div className='rounded-md p-2 bg-blue-200'>
                        <MdOutlineChecklistRtl className='text-3xl' />
                    </div>
                    <div>
                        <h2 className='text-lg font-bold'>3%</h2>
                        <p className='font-medium text-md text-gray-500'>Average attendance</p>
                    </div>
                </div>
                <div className='text-left flex gap-3'>
                    <div className='rounded-md p-2 bg-green-200'>
                        <IoSchoolSharp className='text-3xl' />
                    </div>
                    <div>
                        <h2 className='text-lg font-bold'>5 years+</h2>
                        <p className='font-medium text-md text-gray-500'>Experience</p>
                    </div>
                </div>
            </div>
            <h2 className='text-xl font-bold my-5 text-left'>Sessions</h2>
            <div className='flex justify-between'>
                <div className='text-left flex gap-3'>
                    <p>Digital Marketing</p>
                    <p>30 Minitues</p>
                </div>
                <div className='badge badge-outline text-left'>
                    150BDT
                </div>
            </div>
            <button onClick={handleBook} className={clicked ? `btn-disabled btn my-2 btn-primary` : `btn my-2 btn-primary`}>Book Now</button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className='bg-green-600 p-3 w-fit rounded-md text-white mx-auto font-bold my-2'>
                        OK !
                    </div>
                    <h3 className="font-bold text-lg">Session Booked Success</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default Booking;