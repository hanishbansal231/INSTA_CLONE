import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { forgotPassword } from '../redux/slice/authSlice';
import { IoLockClosedOutline } from "react-icons/io5";

function ForgotPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState('');

    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await dispatch(forgotPassword(userInfo));

            if (res?.payload?.success) {
                setUserInfo('');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='flex items-center flex-col justify-center min-h-screen w-full'>
                <form onSubmit={onFormSubmit} className='form'>
                    <div className='text-center w-full flex-col items-center flex justify-center'>
                        <div className='border-4 border-black w-[120px] h-[120px] rounded-full flex items-center justify-center'>
                            <span className='text-6xl font-thin'>
                                <IoLockClosedOutline />
                            </span>
                        </div>
                        <div className='my-5'>
                            <h3 className='text-black font-semibold'>Trouble logging in?</h3>
                            <p className='text-sm mt-3 text-[#737373]'>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                        </div>
                    </div>
                    <div>
                        <input
                            type='text'
                            value={userInfo}
                            name='value'
                            id='value'
                            placeholder='Email, or Username'
                            className='input'
                            onChange={(e) => setUserInfo(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            className={`button ${userInfo ? '' : 'disabled:bg-[#b2dffc]'}`}
                            type='submit'
                            disabled={!userInfo}>Send login link</button>
                    </div>
                    <div className='w-full text-center'>
                        <p className='or w-full grid grid-cols-3 items-center'>OR</p>
                        <p className='text-[#262626]'>
                            <Link to={'/register'}>Create new account</Link>
                        </p>

                    </div>
                </form>
                <div className='form text-center'>
                    <Link to={'/login'}>Back to login</Link>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword