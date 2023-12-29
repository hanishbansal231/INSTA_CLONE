import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../redux/slice/authSlice';

function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { resetToken } = useParams();

  const [userInfo, setUserInfo] = useState({
    password: '',
    comfirmPassword: '',
    resetToken,
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

      if (userInfo.password !== userInfo.comfirmPassword) {
        return;
      }

      const res = await dispatch(resetPassword(userInfo));
      // console.log(res);
      if (res?.payload?.success) {
        navigate('/login');

        setUserInfo({
          password: '',
          comfirmPassword: '',
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className='flex items-center justify-center min-h-screen w-full'>
        <form onSubmit={onFormSubmit} className='form'>
          <div className='text-center'>
            <h2 className='font-semibold'>Create A Strong Password</h2>
            <p className='text-sm mt-3 mb-10 text-[#737373]'>Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!$@%).</p>
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
            {/* <label htmlFor="comfirmPassword">Comfirm Password<sup className='text-pink-600'>*</sup></label> */}
            <input
              type='password'
              value={userInfo.comfirmPassword}
              name='comfirmPassword'
              id='comfirmPassword'
              placeholder='Enter Your Comfirm Password'
              className='input'
              onChange={userInput}
            />
          </div>
          <div>
            <button className='button' type='submit'>Reset Password</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ResetPassword