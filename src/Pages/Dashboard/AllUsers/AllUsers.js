import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json()
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `barer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <h2 className='text-3xl mb-5'>All users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' ? <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-secondary btn-sm'>Make Admin</button> : 'Already admin'}</td>
                                <td><button className='btn btn-sm btn-danger bg-red-600 border border-red-600 text-white'>Delete</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;