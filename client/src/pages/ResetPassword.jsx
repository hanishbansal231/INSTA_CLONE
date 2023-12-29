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
        <form onSubmit={onFormSubmit} className='border w-[600px] p-5 mx-3 sm:mx-5 md:mx-0 rounded'>
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
            <label htmlFor="comfirmPassword">Comfirm Password<sup className='text-pink-600'>*</sup></label>
            <input
              type='password'
              value={userInfo.comfirmPassword}
              name='comfirmPassword'
              id='comfirmPassword'
              placeholder='Enter Your Comfirm Password'
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

export default ResetPassword