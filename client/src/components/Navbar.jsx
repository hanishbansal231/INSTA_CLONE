import React from 'react';
import { FaHome, FaSearch, FaFacebookMessenger, FaRegHeart } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { FaRegSquarePlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom"


export default function Navbar() {
    return (
        <div className='py-3 px-5'>
            <div className='flex items-center justify-center'>
                <img className='w-[140px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <NavLink className="flex items-center gap-2">
                    <FaHome />
                    <span>Home</span>
                </NavLink>
                <NavLink className="flex items-center gap-2">
                    <FaSearch />
                    <span>Search</span>
                </NavLink>
                <NavLink className="flex items-center gap-2">
                    <BsCameraReelsFill />
                    <span>Reels</span>
                </NavLink>
                <NavLink className="flex items-center gap-2">
                    <FaFacebookMessenger />
                    <span>Message</span>
                </NavLink>
                <NavLink className="flex items-center gap-2">
                    <FaRegHeart />
                    <span>Notification</span>
                </NavLink>
                <NavLink className="flex items-center gap-2">
                    <FaRegSquarePlus />
                    <span>Create</span>
                </NavLink>

            </div>
        </div>
    )
}
