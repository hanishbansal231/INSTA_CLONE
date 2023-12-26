import React from 'react'

export default function ProfileCard() {
    return (
        <div className='ProfileCard rounded-md flex flex-col relative gap-1 overflow-x-clip bg-red-500'>
            <div className='ProfileImages relative flex flex-col items-center justify-center'>
                <img className='w-[100%]' src="https://thumbs.dreamstime.com/blog/2021/11/how-to-convey-thanksgiving-themed-facebook-cover-photos-38537-image60219890.jpg" alt="" />
                <img className='w-[6rem] rounded-full absolute bottom-[-3rem] shadow' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE26NjQaonqTRt7BXD_87Iuukitk_kcGBv3w&usqp=CAU" alt="" />
            </div>
            <div className='ProfileName flex flex-col items-center mt-3 gap-3'>
                <span className=' font-bold'>Elon Musk</span>
                <span>Elon Reeve Musk is a businessman and investor. He is the founder, chairman, CEO</span>
            </div>
            <div className='followStatus flex flex-col items-center justify-center gap-2'>
                <hr className='w-[85%] border-1 border-black' />
                <div className=' flex gap-2 w-[80%] justify-around items-center'>
                    <div className='follow flex flex-col gap-1 items-center justify-center'>
                        <span className=' font-bold'>11M</span>
                        <span>Followers</span>
                    </div>
                    <div className='v1'></div>
                    <div className='follow'>
                        <span className=' font-bold'>101</span>
                        <span>Following</span>
                    </div>
                    <div className='v1'></div>
                    <div className='follow'>
                        <span className=' font-bold'>10</span>
                        <span>Post</span>
                    </div>
                </div>
                <span>
                    <a href=''>
                        My Profile
                    </a>
                </span>
            </div>
        </div>
    )
}
