import React from 'react';

const AppointmentOption = ({ appointment,setBookingModalData }) => {
    const { name, slots } = appointment;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another days.'}</p>
                <p>{slots.length > 1 && `${slots.length} SPACES AVAILABLE`}</p>
                <p>{slots.length < 1 && `${slots.length} SPACE AVAILABLE`}</p>
                <div className="card-actions justify-center">
                    {
                        slots.length > 0 ? <label onClick={() => setBookingModalData(appointment)} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Appointment</label> : 
                        <label htmlFor="booking-modal" className="btn btn-accent btn-disabled text-black">Book Appointment</label>
                    }
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;