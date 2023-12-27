import React from 'react'
import PostShare from './PostShare'
import Posts from './Posts'
import Status from './Status'
import "../style/PostSide.css"

export default function PostSide() {
    return (
        <div className='PostSide flex flex-col gap-2 h-[100vh] overflow-x-auto postSide_card_box'>
            <PostShare />
            <Status />
            <Posts />
        </div>
    )
}
