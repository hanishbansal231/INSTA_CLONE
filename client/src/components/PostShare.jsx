import React from 'react';
import { CiImageOff } from "react-icons/ci";
import { MdVideoLibrary } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

export default function PostShare() {
    return (
        <div className='PostShare flex gap-1 bg-white p-2 rounded'>
            <img className='w-[40px] h-[40px] rounded-full' src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
            <div className='flex flex-col w-[90%] gap-2'>
                <input className='rounded-md p-2 bg-slate-200 text-sm  outline-none' type="text" name="" id="" placeholder='Search...' />
                <div className='postOptions flex justify-between'>
                    <div className='option text-green-600 font-medium pt-1  rounded-sm flex items-center justify-center gap-1 hover:cursor-pointer'>
                        <CiImageOff className='text-lg' />
                        <span className='text-xs'>Photo</span>
                    </div>
                    <div className='option text-blue-600 font-medium pt-1 rounded-sm flex items-center justify-center gap-1  hover:cursor-pointer'>
                        <MdVideoLibrary className='text-lg' />
                        <span className='text-xs'>Video</span>
                    </div>
                    <div className='option text-red-600 font-medium pt-1 rounded-sm flex items-center justify-center gap-1 hover:cursor-pointer'>
                        <BsCameraReelsFill className='text-lg' />
                        <span className='text-xs'>Reels</span>
                    </div>
                    <div className='option text-cyan-600 font-medium pt-1 rounded-sm flex items-center justify-center gap-1 hover:cursor-pointer'>
                        <FaLocationDot className='text-lg' />
                        <span className='text-xs'>Location</span>
                    </div>
                    <div className='option text-lime-600 font-medium pt-1 rounded-sm flex items-center justify-center gap-1 hover:cursor-pointer'>
                        <SlCalender className='text-lg' />
                        <span className='text-xs'>Shedule</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
