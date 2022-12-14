import React from 'react';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (

        <div className="hero min-h-[600px]" style={{
            backgroundImage: `url('/bg.png')`
        }}>
            <div className="hero-content flex flex-col  justify-center items-center lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 my-auto rounded-lg shadow-2xl h-[355px]" alt='' />
                <div className='text-center lg:text-left mt-8 lg:mt-0'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div >

    );
};

export default Banner;