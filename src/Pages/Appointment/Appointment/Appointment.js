import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner.js/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());     
    return (
        <div>
            <AppointmentBanner setSelectedDate={setSelectedDate}></AppointmentBanner>
            <AvailableAppointments selectedDate={selectedDate}></AvailableAppointments>
        </div>
    );
};

export default Appointment;