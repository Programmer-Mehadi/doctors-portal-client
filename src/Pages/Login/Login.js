import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const handleLogin = (data) => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <form className='grid grid-cols-1 gap-4 px-8 w-[90%] max-w-[500px] mx-auto py-12 my-12 shadow-md rounded' onSubmit={handleSubmit(handleLogin)}>
                <h2 className="text-2xl font-bold text-center">Login</h2>
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
                    <input type='password' className='input input-bordered w-full' {...register("password", { required: "Password is required", minLength: 6 })} placeholder="password" />
                    {
                        errors.password && <p className='text-red-500 my-1'>{errors.password.message}</p>
                    }
                    {errors.password && errors.password.type === "minLength" && <p className='text-red-500 my-1'>Password length atleast 6 characters.</p>}
                    <p>Forget password?</p>
                </div>
                <p>{data}</p>
                <input className='btn btn-accent' type="submit" value='Login' />
                <Link to='/signup' className='font-semibold mx-auto'>New to Doctors portal?<span className='text-secondary ml-2'>Create new account?</span></Link>
                {/* <div className='flex justify-center items-center gap-4'>
                    <hr className='w-full'/><span className='w-fit'>OR</span><hr className='w-full' />
                </div> */}
                <div className="divider">OR</div>
                <p className='btn hover:bg-secondary hover:text-white btn-outline-accent text-black bg-white'>CONTINUE WITH GOOGLE</p>
            </form>
        </div>
    );
};

export default Login;