import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { sendOtp, setUserDetails } from '../redux/slice/authSlice';

function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        phoneNumber: '',
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
            const res = await dispatch(sendOtp(userInfo));
            // console.log(res);
            if (res?.payload?.success) {
                dispatch(setUserDetails(userInfo));
                navigate('/email-verify');

                setUserInfo({
                    firstName: '',
                    lastName: '',
                    userName: '',
                    email: '',
                    phoneNumber: '',
                    password: '',
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='flex items-center flex-col justify-center min-h-screen w-full'>
                <form onSubmit={onFormSubmit} className='form'>
                    <h2 className='font-mono text-center text-5xl mb-5'>Instagram</h2>
                    <div className='w-full text-center'>
                        <p className='font-semibold text-[#737373] mb-3'>Sign up to see photos and videos from your friends.</p>
                        <p className='or w-full grid grid-cols-3 items-center'>OR</p>
                    </div>
                    <div>
                        {/* <label htmlFor="firstName">First Name<sup className='text-pink-600'>*</sup></label> */}
                        <input
                            type='text'
                            value={userInfo.firstName}
                            name='firstName'
                            id='firstName'
                            placeholder='Enter Your First Name'
                            className='input'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="lastName">Last Name<sup className='text-pink-600'>*</sup></label> */}
                        <input
                            type='text'
                            value={userInfo.lastName}
                            name='lastName'
                            id='lastName'
                            placeholder='Enter Your Last Name'
                            className='input'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="userName">username<sup className='text-pink-600'>*</sup></label> */}
                        <input
                            type='text'
                            value={userInfo.userName}
                            name='userName'
                            id='userName'
                            placeholder='Enter Your Username'
                            className='input'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="email">Email<sup className='text-pink-600'>*</sup></label> */}
                        <input
                            type='text'
                            value={userInfo.email}
                            name='email'
                            id='email'
                            placeholder='Enter Your Email'
                            className='input'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="phoneNumber">Phone Number<sup className='text-pink-600'>*</sup></label> */}
                        <input
                            type='text'
                            value={userInfo.phoneNumber}
                            name='phoneNumber'
                            id='phoneNumber'
                            placeholder='Enter Your Phone Number'
                            className='input'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="password">Password<sup className='text-pink-600'>*</sup></label> */}
                        <input
                            type='password'
                            value={userInfo.password}
                            name='password'
                            id='password'
                            placeholder='Enter Your Password'
                            className='input'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        <button className='button' type='submit'>Sign up</button>
                    </div>
                </form>
                <div className='border bg-white w-[350px] p-5 mx-3 mt-4 text-center sm:mx-5 md:mx-0 rounded'>
                    <p>Have an account? <span className='text-[#4cb5f9]'><Link to={'/login'}>Log in</Link></span></p>
                </div>
            </div>
        </>
    )
}

export default Register