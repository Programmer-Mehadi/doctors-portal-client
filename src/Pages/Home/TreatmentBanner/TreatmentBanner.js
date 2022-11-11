import React from 'react';
import treatmentBanner from '../../../assets/images/treatment.png'
const TreatmentBanner = () => {
    return (
        <div>
            <div className="hero py-12">
                <div className="hero-content flex-col lg:flex-row lg:px-20">
                    <img src={treatmentBanner} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:pl-14'>
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