import React from 'react'
import PostShare from './PostShare'
import Posts from './Posts'

export default function PostSide() {
    return (
        <div className='PostSide flex flex-col gap-2 h-[100vh] overflow-auto'>
            <PostShare />
            <Posts />
        </div>
    )
}
