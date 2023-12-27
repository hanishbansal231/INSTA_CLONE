import React from 'react'
import User from './User'

export default function FollowersCard() {
    return (
        <div className='FollowersCard mt-3'>
            <h3>People you may know</h3>
            <User />
            <span>Show More</span>
        </div>
    )
}
