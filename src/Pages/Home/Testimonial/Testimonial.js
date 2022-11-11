import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import img from '../../../assets/images/people1.png'
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            location: 'California',
            img: img
        },
        {
            id: 2,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            location: 'California',
            img: img
        }, {
            id: 3,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            location: 'California',
            img: img
        }
    ]
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-2xl text-secondary font-bold'>Testimonial</h2>
                    <h2 className='text-4xl font-semibold'>What Our Patients Says</h2>
                </div>
                <div><img className='h-[156px]' src={quote} alt="" /></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                        testimonialData.map(testimonial=><TestimonialCard key={testimonial.id} testimonial={testimonial}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;