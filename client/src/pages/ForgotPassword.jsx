import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../redux/slice/authSlice';

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
            <div className='flex items-center justify-center min-h-screen w-full'>
                <form onSubmit={onFormSubmit} className='border w-[600px] p-5 mx-3 sm:mx-5 md:mx-0 rounded'>
                    <div>
                        <input
                            type='text'
                            value={userInfo.value}
                            name='value'
                            id='value'
                            placeholder='Email, or Username'
                            className='border w-full p-3 my-2 rounded outline-0'
                            onChange={(e) => setUserInfo(e.target.value)}
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

export default ForgotPassword