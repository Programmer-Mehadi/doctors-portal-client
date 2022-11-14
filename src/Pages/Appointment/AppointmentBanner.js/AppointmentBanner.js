import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/images/chair.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className="hero min-h-[600px]" style={{
            backgroundImage: `url('/bg.png')`
        }}>
            <div className="hero-content flex flex-col  justify-between items-center lg:flex-row-reverse">
                <img src={chair} className="w-[80%] mx-auto lg:w-1/2 my-auto rounded-lg shadow-2xl h-[355px]" alt='' />
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                />
            </div>

        </div >
    );
};

export default AppointmentBanner;