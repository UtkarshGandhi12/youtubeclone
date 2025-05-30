import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [inputSearch , setInputSearch ] = useState("")
  return (
    <div className='sticky top-0 z-50 flex items-center justify-between w-full px-4 py-2 bg-white h-14'>
            <div className='flex items-center h-20 w-50 '>
                 <button className='items-center rounded-full hover:bg-slate-400 size-10'> <MenuIcon/> </button> 
                <button className='items-center' >  
                  <img className='w-40 h-10' src='https://tse4.mm.bing.net/th?id=OIP.67a2_yXeFgot-8tX7CzXHgHaCt&pid=Api&P=0&h=220' alt='logo' />
                </button>  
            </div>
        <div className='flex justify-between w-1/2'>
            <div className='flex w-full overflow-hidden border-2 border-black rounded-full'>
                 <input className='w-full h-full pl-5 text-left ' type='text' placeholder='Search' onChange={e =>setInputSearch(e.target.value)} value={inputSearch}/>
                <Link to={`${inputSearch}`} className='w-1/6  bg-slate-500 flex justify-center items-center '>
                    < SearchIcon/>  
                </Link>
          
            </div>
            <button className='p-2 ml-3 rounded-full bg-slate-500 hover:bg-slate-400 '>
                 <MicIcon/>
            </button>
        </div>
        
        <div className='flex lg:w-40 w-1/8 justify-evenly'>
          <button className='items-center rounded-full hover:bg-slate-400 size-10'>
          <VideoCallIcon/>
          </button>
          <button className='items-center rounded-full hover:bg-slate-400 size-10'>
          <NotificationsNoneIcon/>
          </button>
          <button>
          <Avatar src='https://tse4.mm.bing.net/th?id=OIP.5X8UEZhoJiADEL4xFMrkigHaJy&pid=Api&P=0&h=220'></Avatar>
          </button>
        </div>
    </div>

  )
}

export default Header
