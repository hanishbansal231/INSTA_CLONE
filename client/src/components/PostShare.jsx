import React from 'react';
import { CiImageOff } from "react-icons/ci";
import { MdVideoLibrary } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

export default function PostShare() {
    return (
        <div className='PostShare flex gap-1 bg-white p-2 rounded'>
            <img className='w-[3rem] h-[3rem] rounded-full' src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
            <div className='flex flex-col w-[90%] gap-2'>
                <input className=' bg-gray-500 rounded-sm p-3 text-lg border-0 outline-none' type="text" name="" id="" />
                <div className='postOptions flex justify-around'>
                    <div className='option p-2 pl-4 pr-4 rounded-sm flex items-center justify-center text-sm hover:cursor-pointer'>
                        <CiImageOff />
                        Photo
                    </div>
                    <div className='option'>
                        <MdVideoLibrary />
                        Video
                    </div>
                    <div className='option'>
                        <BsCameraReelsFill />
                        Reels
                    </div>
                    <div className='option'>
                        <FaLocationDot />
                        Location
                    </div>
                    <div className='option'>
                        <SlCalender />
                        Shedule
                    </div>
                    <button className=' p-2 pl-8 pr-8 text-sm'>Share</button>

                </div>
            </div>
        </div>
    )
}
