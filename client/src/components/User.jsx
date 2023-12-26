import React from 'react'

export default function User() {
    return (
        <div className='Follower w-[100%] mt-2'>
            <div className='flex items-center justify-between gap-3'>
                <div className='flex items-center gap-3'>
                    <img className='w-[50px] h-[50px] rounded-full' src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
                    <div className='name flex flex-col items-center'>
                        <span className=' text-xs'>Nick</span>
                        <span className=' text-xs'>@nick</span>
                    </div>
                </div>
                <button className='bg-[#f95f35] text-white px-2 py-1 rounded-md'>following</button>
            </div>
        </div>
    )
}
