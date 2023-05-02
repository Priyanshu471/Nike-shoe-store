import { ArrowLeftOnRectangleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react'

const Cartcount = ({onCartToggle, totalQTY,onClearCartItems}) => {
  return (
    <>
      <div className='bg-white h-11 flex items-center justify-between px-1  sticky top-0 left-0 right-0 w-full rounded'>
        <div className='flex items-center gap-3'>
            <div className='grid items-center cursor-pointer' onClick={onCartToggle}>
                <ArrowLeftOnRectangleIcon className='w-8 h-8 text-slate-900 hover:text-blue-500 active:scale-95'/>
            </div>
            <div className='grid items-center'>
                <h1 className='text-base font-medium text-slate-900'>Your Cart<span className=' text-xs bg-theme-cart text-slate-100 font-thin rounded ml-1 px-2 py-0.5 '>{totalQTY} Item</span></h1>
            </div>
        </div>
        <div onClick={onClearCartItems} className=' flex items-center bg-theme-cart text-slate-100 rounded cursor-pointer hover:text-red-500 active:scale-95'>
            <button type='button' className='w-6 h-6 '>
                <XMarkIcon className=''/>
            </button>
        </div>
      </div>
    </>
  )
}

export default Cartcount;
