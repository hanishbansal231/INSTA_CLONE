import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerAccount } from '../redux/slice/authSlice';

function VerifyEmail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(null);
  const { userDetails } = useSelector((state) => state.auth);

  const {
    firstName,
    lastName,
    userName,
    email,
    phoneNumber,
    password,
  } = userDetails;

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await dispatch(registerAccount({
        firstName,
        lastName,
        userName,
        email,
        phoneNumber,
        password,
        otp,
      }))

      if(res?.payload?.success){
        navigate('/login');
        setOtp(null);
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex items-center justify-center w-full min-h-screen'>
      <form onSubmit={onFormSubmit} className='border px-3 py-3 rounded'>
        <div>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            containerStyle="otp-container"
            renderInput={(props) => <input {...props} placeholder='-' style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }} className="lg:w-[60px] w-[44px] border-0 m-1 mb-3 bg-gray-100 mt-10 rounded-[0.5rem] text-black aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50" />}
          />
        </div>
        <div className='w-full'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default VerifyEmail