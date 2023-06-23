import React from 'react'
import { FaTwitter,
     FaHome, 
    FaSearch,
     FaRegBell,
     FaRegEnvelope,
     FaClipboardList,
     FaRegBookmark,
     FaUserAlt,
     FaRegMehBlank } 
     from "react-icons/fa"
    

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <a href=''>
                        <FaTwitter className='icons logo'/>
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaHome className='icons'/>
                       <b>Home</b> 
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaSearch className='icons'/>
                        Explore
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaRegBell className='icons'/>
                        Notifications
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaRegEnvelope className='icons'/>
                        Messages
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaClipboardList className='icons'/>
                       Lists
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaRegBookmark className='icons'/>
                        Bookmarks
                    </a>
                </li>
                 {/* <li>
                    <a href=''>
                        <className='icons'/>
                        Verified
                    </a>
                </li>  */}
                <li>
                    <a href=''>
                        <FaUserAlt className='icons'/>
                        Profile
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaRegMehBlank className='icons'/>
                        More
                    </a>
                </li>
                <div className='sidebar_Btn'>
                 <a href=''>Tweet</a>
                </div>
            </ul>

        </div>
    )
}

export default Sidebar
