import React from 'react'
import ProfileSide from '../components/ProfileSide'
import PostSide from '../components/PostSide'
import NavSide from '../components/NavSide'

export default function Home() {
    return (
        <div className='Home relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            <div className=' '>
                <NavSide />
            </div>
            <div >
                <PostSide />
            </div>
            <div >
                <ProfileSide />
            </div>



        </div>
    )
}
