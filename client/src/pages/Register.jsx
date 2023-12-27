import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [userInfo, setUserInfo] = useState({

    });

    return (
        <>
            <div className='flex items-center justify-center min-h-screen w-full'>
                <form className='border w-[600px] p-5 mx-3 sm:mx-5 md:mx-0 rounded'>
                    <div>
                        <label htmlFor=""></label>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register