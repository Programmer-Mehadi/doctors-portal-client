import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div>
            <form className='grid grid-cols-1 gap-4 px-8 w-[90%] max-w-[500px] mx-auto py-12 my-12 shadow-md rounded' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <div>
                    <label className="label">
                        <span className="label-text font-bold">Email</span>
                    </label>
                    <input type='email' className='input input-bordered w-full' {...register("email")} placeholder="email" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-bold">Password</span>
                    </label>
                    <input type='password' className='input input-bordered w-full' {...register("password")} placeholder="password" />
                    <p>Forget password?</p>
                </div>
                <p>{data}</p>
                <input className='btn btn-accent' type="submit" value='Login' />
                <p className='font-semibold mx-auto'>New to Doctors portal?<span className='text-secondary ml-2'>Create new account?</span></p>
                <div className='flex justify-center items-center gap-4'>
                    <hr className='w-full'/><span className='w-fit'>OR</span><hr className='w-full' />
                </div>
                <button className='btn hover:bg-secondary hover:text-white btn-outline-accent text-black bg-white'>CONTINUE WITH GOOGLE</button>
            </form>
        </div>
    );
};

export default Login;