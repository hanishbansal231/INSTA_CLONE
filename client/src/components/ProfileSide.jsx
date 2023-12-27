import React from 'react'
import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard'
import FollowersCard from './FollowersCard'

export default function ProfileSide() {
    return (
        <div className='ProfileSide flex flex-col justify-end items-end gap-2 w-[100%] m-auto '>
            <div className='w-[70%] mr-0 py-3 px-5'>
                <ProfileCard />
                <FollowersCard />
            </div>
        </div>
    )
}
