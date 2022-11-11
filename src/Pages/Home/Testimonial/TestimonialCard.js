import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    console.log(testimonial);
    const { name, text, img, location } = testimonial;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{text}</h2>

                    <div className="card-actions flex gap-6 items-center pt-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} />
                            </div>
                        </div>
                        <div>
                            <h2>{name}</h2>
                            <h2>{location}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;