const MentorProfile = () => {

    return (
        <div className="text-left space-y-1">
            <div className="my-2">
                <p className="text-lg font-bold">5+ Years of Experience in Software Engineering</p>
            </div>
            <div className='py-5 flex flex-col rounded-xl'>
                <h2 className='text-xl font-bold my-2 text-left'>Background</h2>
                <div className='grid *:border *:p-2 shadow-lg'>
                    <div className="flex justify-between items-center p-3">
                        <h3 className="font-bold text-lg">Skills</h3>
                        <button className="border-red-700 bg-red-200 px-4 py-2 border rounded-md text-red-600 font-semibold">Fullstack</button>
                    </div>
                    <div className="flex justify-between items-center p-3">
                        <h3 className="font-bold text-lg">Fluent In</h3>
                        <div className="space-x-1">
                            <button className="px-4 py-2 border rounded-md font-semibold">Bengali</button>
                            <button className="px-4 py-2 border rounded-md font-semibold">English</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5 flex flex-col rounded-xl'>
                <h2 className='text-xl font-bold my-2 text-left'>Experiences</h2>
                <div className='grid *:border *:p-2 shadow-lg'>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg">Software Engineer</h3>
                        <p className="font-bold">ShareTrip Ltd <span className="text-gray-500">(20 Dec 2024 - 20 Dec 2024)</span></p>
                        <p>Played Key role in developing ShareTrip B2B Portal</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg">Software Engineer</h3>
                        <p className="font-bold">Field Nation  <span className="text-gray-500">(20 Dec 2024 - 20 Dec 2024)</span></p>
                        <p>Platform Operations Team</p>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}

export default MentorProfile;