import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const handleSignup = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <form className='grid grid-cols-1 gap-4 px-8 w-[90%] max-w-[500px] mx-auto py-12 my-12 shadow-md rounded' onSubmit={handleSubmit(handleSignup)}>
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <div>
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <input type='text' className='input input-bordered w-full' {...register("name", { required: "Name is required" })} placeholder="name" />
                    {
                        errors.name && <p className='text-red-500 my-1'>{errors.name.message}</p>
                    }
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-bold">Email</span>
                    </label>
                    <input type='email' className='input input-bordered w-full' {...register("email", { required: "Email is required" })} placeholder="email" />
                    {
                        errors.email && <p className='text-red-500 my-1'>{errors.email.message}</p>
                    }
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-bold">Password</span>
                    </label>
                    <input type='password' className='input input-bordered w-full' {...register("password", {
                        required: "Password is required", minLength: 6,
                        pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: "Password must be length(Atleast one [A-Z],[!@#$&*],[0-9],[a-z])" }
                    })} placeholder="password" />
                    {
                        errors.password && <p className='text-red-500 my-1'>{errors.password.message}</p>
                    }
                    {errors.password && errors.password.type === "minLength" && <p className='text-red-500 my-1'>Password length atleast 6 characters.</p>}

                </div>
                <p>{data}</p>
                <input className='btn btn-accent' type="submit" value='Sign up' />
                <p className='font-semibold mx-auto'>Already have an account?<Link to='/login' className='text-secondary ml-2'>Login</Link></p>
                {/* <div className='flex justify-center items-center gap-4'>
                <hr className='w-full'/><span className='w-fit'>OR</span><hr className='w-full' />
            </div> */}
                <div className="divider">OR</div>
                <p className='btn hover:bg-secondary hover:text-white btn-outline-accent text-black bg-white'>CONTINUE WITH GOOGLE</p>
            </form>
        </div>
    );
};

export default Signup;