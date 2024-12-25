import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MentorCard from './MentorCard';

const ExploreMentor = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="w-full my-20">
            <div className="text-center flex justify-center flex-col items-center gap-4">
                <h3 className="text-2xl font-medium text-center ">
                    Discover the Top Experts
                </h3>
                <p className="text-xs">
                    {" "}
                    Explore the top interviewers from each category and elevate your
                    success rate more
                </p>
                <button className="btn text-white bg-custom-gradient rounded-xl min-h-10">See all </button>
            </div>
            <div className='p-5 rounded-lg'>
            </div>
        </div>
    );
};

export default ExploreMentor;