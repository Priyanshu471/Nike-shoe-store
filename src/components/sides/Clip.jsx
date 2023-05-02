import React from 'react'
import {PlayIcon} from "@heroicons/react/24/solid"
const Clip = ({clip,imgsrc}) => {
  return (
    <>
      <div className=' relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 lg:h-24 md:w-24 md:h-20 sm:w-16 sm:h-14 '>
        <img src={imgsrc} alt="" className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500' 
        />
        <div className='absolute top-11 left-11 lg:left-9 lg:top-8 right-0 opacity-100 z-[100] w-8 h-8 md:h-5 md:w-5 flex items-center justify-center'>
            <PlayIcon className='icon-style  text-slate-100 md:h-4' />
        </div>
        
        <video autoPlay={true} loop={true} playsInline={true} muted={true} className='absolute  top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-20 '>
            <source src={clip} type='video/mp4'/>
        </video>
      </div>
    </>
  )
}

export default Clip
