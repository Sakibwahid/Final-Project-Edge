import React from 'react';

const TestimonialCard = () => {
    return (
        <div className="py-10 px-6 md:px-24 lg:py-16 lg:px-40">
            <figure className="bg-white pb-4 px-3 text-center">
                <blockquote >
                    <p className="text-[10px] font-medium text-gray-900 md:text-lg md:p-16 ">
                        "Landwind is just awesome. It contains tons of predesigned components and pages,
                        starting from a login screen to a complex dashboard. Perfect choice for your next SaaS
                        application."
                    </p>
                </blockquote>
                <figcaption className="flex justify-center items-center mt-6">
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="px-2 text-[9px] lg:text-sm">Sakib Wahid</div>
                        <div className="pl-3 text-[8px] lg:text-xs font-light text-gray-500 dark:text-gray-400">
                            Undergraduate at IIUC
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
};

export default TestimonialCard;