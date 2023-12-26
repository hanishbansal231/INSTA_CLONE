import React from 'react'
import ProfileSide from '../components/ProfileSide'
import PostSide from '../components/PostSide'

export default function Home() {
    return (
        <div className='Home relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            <div >
                <ProfileSide />
            </div>
            <div >
                <PostSide />
            </div>
            <div >
                <div></div>
            </div>



        </div>
    )
}
