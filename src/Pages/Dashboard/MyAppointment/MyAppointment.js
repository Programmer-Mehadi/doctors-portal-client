import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import getToken from '../../../Hooks/useToken';

const MyAppointment = () => {
    const { user, logOut } = useContext(AuthContext);
    const email = user?.email;    
    const url = `http://localhost:5000/bookings?email=${email}`;
    // const [bookings, setBookings] = useState([]);
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setBookings(data))
    // }, [])

    const { data: bookings = [], } = useQuery({
        queryKey: ['bookings', 'email'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `barer ${localStorage.getItem('accessToken')}`,
                }
            })
            const data = await res.json();
            if (data[0]?.status) {
                logOut();
            }
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-3xl'>My Apoointments</h3>

            <div className="overflow-x-auto my-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{booking?.patient ? booking.patient : 'Not Set'}</td>
                                    <td>{booking?.treatment}</td>
                                    <td>{booking?.appointmentDate}</td>
                                    <td>{booking?.slot}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;