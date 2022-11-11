import React from 'react';
import img from '../../../assets/images/appointment.png';
const ContactUs = () => {
    return (
        <div className='py-20'>
            <div className="" style={{ backgroundImage: `url(${img})` }}>
                <div className="flex-col lg:flex-row-reverse">
                    <div className="card  w-full shadow-2xl ">
                        <div className="card-body w-[90%] md:w-[468px] mx-auto py-12 grid grid-cols-1 gap-4">
                            <div className='text-center'>
                                <h2 className='text-secondary text-xl font-bold'>Contact Us</h2>
                                <p className='text-2xl font-semibold text-white py-6'>Stay connected with us</p>
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea placeholder="Your message" className="input input-bordered h-[130px] pt-2" ></textarea>
                            </div>
                           
                            <div className="form-control mt-6 grid justify-center ">
                                <button className="btn btn-primary w-fit text-white px-8">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;