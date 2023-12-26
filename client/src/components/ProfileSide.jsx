import React from 'react'
import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard'
import FollowersCard from './FollowersCard'

export default function ProfileSide() {
    return (
        <div className='ProfileSide flex flex-col gap-2 px-2 w-[65%]'>
            <LogoSearch />
            <ProfileCard />
            <FollowersCard />
        </div>
    )
}
