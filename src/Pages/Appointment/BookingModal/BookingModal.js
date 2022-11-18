import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ bookingModalData, selectedDate, setBookingModalData, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, slots } = bookingModalData;
    const date = format(selectedDate, 'PP');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        console.log(name, email, slot, phone, date);
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: userName,
            slot,
            email,
            phone
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed.');
                    setBookingModalData(null);
                    refetch();
                }
                else {
                    if (data?.alreadyBooked === true) {
                        toast.error(data?.error);
                        setBookingModalData(null);
                        refetch();
                    }
                }
            })
    }
    return (
        <>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 py-6' onSubmit={handleSubmit}>
                        <input value={date} type="text" className="input input-bordered  w-full" disabled name="date" />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots &&
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                            {
                                slots && slots.length == 0 && <option>No slot available</option>
                            }
                        </select>
                        <input type="text" name='userName' defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered  w-full" />
                        <input type="email" placeholder="Email" className="input input-bordered  w-full" name='email' defaultValue={user?.email} disabled />
                        <input type="number" placeholder="Phone Number" className="input input-bordered  w-full" name='phone' />
                        <button type='submit' className="btn btn-accent text-white">SUBMIT</button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;