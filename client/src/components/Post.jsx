import React from 'react'
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { RiShareCircleFill } from "react-icons/ri";

export default function Post() {
    return (
        <div className='Post flex flex-col p-2  bg-white rounded gap-2'>
            <div className='flex items-center gap-3 px-2'>
                <img className='w-[30px] h-[30px] rounded-full' src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
                <h4>Elon Musk</h4>
            </div>
            <div className='px-2 text-sm'>
                <p>Life is too short to be boring 🌟</p>
            </div>
            <img className='w-[100%] max-h-[20rem] object-cover ' src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
            <div className='flex items-center gap-4 text-2xl px-2 cursor-pointer'>
                <button><FaRegHeart /></button>
                <button><FaRegComment /></button>
                <button><RiShareCircleFill /></button>
            </div>
            <div className='px-2 flex flex-col cursor-pointer'>
                <span className='text-sm font-medium'>13331 likes</span>
                <span>View all 549 comments</span>
                {/* <div className='flex flex-col'>
                    <span>nick</span>
                    <span>super</span>
                    <span>View all 549 comments</span>
                </div> */}
            </div>
        </div>
    )
}
