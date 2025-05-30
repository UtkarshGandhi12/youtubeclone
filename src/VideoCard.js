import React from 'react';
import { Avatar } from '@mui/material';

function VideoCard({image,views,title ,channel,timestamp ,channelImage}) {
  return (
    <article className='w-[25vw] my-2 overflow-hidden rounded-2xl'>
      <img className="w-full h-48 mb-2" src={image} alt="hi"/>
      <div className='flex'>
        <Avatar src={channelImage} alt='logo'/>
        <div>
            <h4 className='font-bold'>{title}</h4>
            <p>{channel}</p>
            <p>{views} . {timestamp}</p>
        </div>
      </div>
    </article>
  )
}

export default VideoCard ;
