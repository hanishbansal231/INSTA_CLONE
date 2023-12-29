import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginAccount } from '../redux/slice/authSlice';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        value: '',
        password: '',
    });

    const userInput = (event) => {
        const { value, name } = event.target;
        setUserInfo((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await dispatch(loginAccount(userInfo));
            // console.log(res);
            if (res?.payload?.success) {
                navigate('/');

                setUserInfo({
                    userName: '',
                    email: '',
                    password: '',
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='flex bg-gray-50 flex-col items-center justify-center min-h-screen w-full'>
                <form onSubmit={onFormSubmit} className='form'>
                    <h2 className='font-mono text-center text-5xl mb-5'>Instagram</h2>
                    <div>
                        {/* <label htmlFor="userName">username<sup className='text-pink-600'>*</sup></label> */}
                        <input
                            type='text'
                            value={userInfo.value}
                            name='value'
                            id='value'
                            placeholder='Email, or Username'
                            className='input'
                            onChange={userInput}
                        />
                    </div>
                    {/* <div>
                        <label htmlFor="email">Email<sup className='text-pink-600'>*</sup></label>
                        <input
                            type='text'
                            value={userInfo.email}
                            name='email'
                            id='email'
                            placeholder='Enter Your Email'
                            className='input'
                            onChange={userInput}
                        />
                    </div> */}
                    <div>
                        {/* <label htmlFor="password">Password<sup className='text-pink-600'>*</sup></label> */}
                        <input
                            type='password'
                            value={userInfo.password}
                            name='password'
                            id='password'
                            placeholder='Password'
                            className='input'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        <button className='button' type='submit'>Log in</button>
                    </div>
                    <div className='w-full text-center'>
                        <p className='or w-full grid grid-cols-3 items-center'>OR</p>
                        <p className='text-sm my-3 text-[#00376b]'>
                            <Link to={'/forgot-password'}>Forgot Password?</Link>
                        </p>
                    </div>
                </form>
                <div className='border bg-white w-[350px] p-5 mx-3 mt-4 text-center sm:mx-5 md:mx-0 rounded'>
                    <p>Don't have an account? <span className='text-[#4cb5f9]'><Link to={'/register'}>Sign up</Link></span></p>
                </div>
            </div>
        </>
    )
}

export default Login