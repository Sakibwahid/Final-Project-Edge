import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const [ reviews, setReviews ] = useState([]);
    useEffect(()=>{
        fetch('testimonial.json')
       .then(response => response.json())
       .then(data => setReviews(data))
    }, []);

    console.log(reviews);
    return (
        <div className='w-full bg-custom-gradient my-10 rounded-xl'>
            <TestimonialCard></TestimonialCard>
        </div>
    );
};

export default Testimonials;