import React from 'react';
import Siderow from './Siderow';
import HomeIcon from '@mui/icons-material/Home';
import { SiYoutubeshorts } from "react-icons/si";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import RestoreSharpIcon from '@mui/icons-material/RestoreSharp';
import PlaylistPlaySharpIcon from '@mui/icons-material/PlaylistPlaySharp';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { CgProfile } from "react-icons/cg";
import { FaChess } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";



function Sidebar() {
  return (
    <div className="text-lg w-60 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-black-300 scrollbar-track-gray-100">
        <Siderow  Icon={HomeIcon} Title={"Home"}/>
        <Siderow  Icon={SubscriptionsIcon} Title={"Subscriptions"}/>
        <Siderow  Icon={SiYoutubeshorts} Title={"Shorts"}/>
       
        <p className='pl-6 text-lg bg-yellow-500'> you > </p>

        <Siderow Icon={AccountBoxOutlinedIcon} Title={"Your channel"} />
        <Siderow Icon={RestoreSharpIcon} Title={"History"} />
        <Siderow Icon={PlaylistPlaySharpIcon} Title={"Playlists"} />
        <Siderow Icon={SlideshowIcon} Title={"Your videos"} />
        <Siderow Icon={WatchLaterIcon} Title={"Watch later"} />
        <Siderow Icon={ThumbUpOffAltIcon} Title={"Liked videos"} />

        <p className='pl-6 text-lg bg-yellow-500'> Subscriptions > </p>

        <Siderow Icon={CgProfile} Title={"UG ki Baatein"} />
        <Siderow Icon={FaChess} Title={"Chess with Vinayak"} />
        <Siderow Icon={FaCode} Title={"Code wars"} /> 
        <Siderow Icon={FaGamepad} Title={"UG shine"} /> 
        <Siderow Icon={FaMusic} Title={"UG shayari"} /> 
        <Siderow Icon={FaRegNewspaper} Title={"UG world"} /> 
        {/* <Siderow Icon={} Title={"UG songs"} />   */}
    </div>
  )
}

export default Sidebar ;
