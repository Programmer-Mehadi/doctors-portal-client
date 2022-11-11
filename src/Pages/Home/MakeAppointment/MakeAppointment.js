import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
const MakeAppointment = () => {
    return (
        <div className='py-6 md:py-32'>
             <div className='mt-6 lg:h-[440px] ' style={{
            backgroundImage: `url(${appointment})`
        }}>
            <div className="hero ">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2  lg:px-10 ">
                    <img src={doctor} className="h-[580px] md:-mt-[155px]  rounded-lg  hidden md:flex  " />
                    <div className='p-8 md:p-0'>
                        <h2 className="text-2xl text-secondary font-bold">Appointment</h2>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default MakeAppointment;