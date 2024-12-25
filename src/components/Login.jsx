import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const { signInUser} = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        // const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const user = { email, password };
        signInUser(email, password)
            .then(result => {
                    //console.log(result.json());
                    navigate('/dashboard');
            })
            .then(err => console.log(err));
    }
    return (
        <div className='border max-w-screen-xl mx-auto rounded-2xl my-36 shadow-xl'>
            <div className='grid grid-cols-2  p-10'>
                <div className=''>

                </div>
                <div className='mx-20'>
                    <h2 className='text-3xl font-bold text-center'>Sign In</h2>
                    <p className='text-lg font-semibold text-center py-3'>Enter your email and personal details to create your account</p>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="flex pt-5">
                                <span className="label-text">Forgot password?</span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-center py-3'>
                                <span className="label-text">Don't have an account? <Link to={'/register'} className='text-blue-800 font-bold'>Register</Link> </span>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div>
                            <div className="inline-flex items-center justify-center w-full relative">
                                <hr className="w-full h-px bg-gray-500 border-0" />
                                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/4 bg-white ">OR</span>
                            </div>
                        </div>
                        <div className='flex justify-center pt-5 btn-primary '>
                            <button className='btn text-white'><FcGoogle className='text-lg' /> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;