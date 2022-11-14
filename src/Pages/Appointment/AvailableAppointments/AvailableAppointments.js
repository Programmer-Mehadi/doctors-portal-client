import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch('AppointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div className='py-24 px-4'>
            <p className='text-secondary text-2xl font-bold text-center'>You have selected date: {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-24'>
                {
                    appointmentOptions.map((option) =>
                        <AppointmentOption key={option._id} appointment={option}></AppointmentOption>
                    )
                }
            </div>
            <BookingModal></BookingModal>
        </div>
    );
};

export default AvailableAppointments; 