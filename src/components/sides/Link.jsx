import React from 'react'

const Link = ({icon}) => {
  return (
    <><div className='glass-bg shadow shadow-slate-200'>
        <img src={icon} alt="" className='w-10 h-10 flex items-center cursor-pointer md:w-6 md:h-6 sm:h-5 sm:w-5 transition-all duration-200 hover:scale-110 '/>
      </div>
    </>
  )
}

export default Link
