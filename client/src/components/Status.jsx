import React from 'react';
import { FaPlus } from "react-icons/fa";
import "../style/Status.css"

export default function Status() {
    return (
        <div className='flex gap-5 overflow-x-auto card_box'>
            <div className='flex flex-col items-center justify-center min-w-[70px]'>
                <div className=' relative'>
                    <img className='w-[70px] h-[70px] relative rounded-full' src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
                    <FaPlus className=' bg-blue-500 text-white p-1 rounded-full text-lg absolute bottom-0 right-1' />
                </div>
                <span className=' text-sm'>Your Story</span>
            </div>

            <div className='flex flex-col items-center justify-center min-w-[70px]'>
                <img className='w-[70px] h-[70px] relative rounded-full p-1 border-2 border-red-600' src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
                <span className=' text-sm'>rohit_09</span>
            </div>
            <div className='flex flex-col items-center justify-center min-w-[70px]'>
                <img className='w-[70px] h-[70px] relative rounded-full p-1 border-2 border-red-600' src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
                <span className=' text-sm'>virat.kohli</span>
            </div>
            <div className='flex flex-col items-center justify-center min-w-[70px]'>
                <img className='w-[70px] h-[70px] relative rounded-full p-1 border-2 border-red-600' src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
                <span className=' text-sm'>md.sami</span>
            </div>
            <div className='flex flex-col items-center justify-center min-w-[70px]'>
                <img className='w-[70px] h-[70px] relative rounded-full p-1 border-2 border-red-600' src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
                <span className=' text-sm'>salaman_khan</span>
            </div>
            <div className='flex flex-col items-center justify-center min-w-[70px]'>
                <img className='w-[70px] h-[70px] relative rounded-full p-1 border-2 border-red-600' src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
                <span className=' text-sm'>sky_8209</span>
            </div>
            <div className='flex flex-col items-center justify-center min-w-[70px]'>
                <img className='w-[70px] h-[70px] relative rounded-full p-1 border-2 border-red-600' src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
                <span className=' text-sm'>deepika_padukone</span>
            </div>
        </div>
    )
}
