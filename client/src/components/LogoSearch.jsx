import React from 'react';
import { FaSearch } from "react-icons/fa";
import "../style/LogoSearch.css"


function LogoSearch() {
    return (
        <div className="flex gap-1 LogoSearch">
            <img className=" w-[100px]" src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg" alt="" />
            <div className="Search flex rounded ">
                <input type="text" className=' bg-transparent border-0 outline-none' placeholder="#Explore" />
                <div className="s-icon">
                    <FaSearch />
                </div>
            </div>
        </div>
    )
}

export default LogoSearch;
