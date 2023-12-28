import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
            <div className='flex items-center justify-center min-h-screen w-full'>
                <form onSubmit={onFormSubmit} className='border w-[600px] p-5 mx-3 sm:mx-5 md:mx-0 rounded'>
                    <div>
                        <label htmlFor="firstName">First Name<sup className='text-pink-600'>*</sup></label>
                        <input
                            type='text'
                            value={userInfo.firstName}
                            name='firstName'
                            id='firstName'
                            placeholder='Enter Your First Name'
                            className='border w-full p-3 my-2 rounded outline-0'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name<sup className='text-pink-600'>*</sup></label>
                        <input
                            type='text'
                            value={userInfo.lastName}
                            name='lastName'
                            id='lastName'
                            placeholder='Enter Your Last Name'
                            className='border w-full p-3 my-2 rounded outline-0'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="userName">username<sup className='text-pink-600'>*</sup></label>
                        <input
                            type='text'
                            value={userInfo.userName}
                            name='userName'
                            id='userName'
                            placeholder='Enter Your Username'
                            className='border w-full p-3 my-2 rounded outline-0'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email<sup className='text-pink-600'>*</sup></label>
                        <input
                            type='text'
                            value={userInfo.email}
                            name='email'
                            id='email'
                            placeholder='Enter Your Email'
                            className='border w-full p-3 my-2 rounded outline-0'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number<sup className='text-pink-600'>*</sup></label>
                        <input
                            type='text'
                            value={userInfo.phoneNumber}
                            name='phoneNumber'
                            id='phoneNumber'
                            placeholder='Enter Your Phone Number'
                            className='border w-full p-3 my-2 rounded outline-0'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password<sup className='text-pink-600'>*</sup></label>
                        <input
                            type='password'
                            value={userInfo.password}
                            name='password'
                            id='password'
                            placeholder='Enter Your Password'
                            className='border w-full p-3 my-2 rounded outline-0'
                            onChange={userInput}
                        />
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register