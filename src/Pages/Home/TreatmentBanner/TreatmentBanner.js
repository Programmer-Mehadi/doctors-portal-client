import React from 'react';
import treatmentBanner from '../../../assets/images/treatment.png'
const TreatmentBanner = () => {
    return (
        <div>
            <div className="hero py-[80px]">
                <div className="hero-content  grid grid-cols-1 md:grid-cols-2  lg:px-10">
                    <img src={treatmentBanner} className="h-[600px] rounded-lg shadow-2xl w-full md:w-fit" />
                    <div className='pt-14 md:pt-0'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreatmentBanner;