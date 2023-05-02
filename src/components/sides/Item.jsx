import React from 'react'
import {useDispatch} from 'react-redux';
import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid'
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";
const Item = ({forpopular,id,color,border,shadow,title,text,img,btn,rating,price}) => {
    // console.log(id)
    const dispatch = useDispatch()

    const onAddToCart = () => {
      const item ={id,color,border,shadow,title,text,img,price};
      dispatch(setAddItemToCart(item));
    }

    const onCartToggle =() =>{
      dispatch(setOpenCart({
          cartState: true
      }))
  };
  return (
    <>    
    {/* bg-gradient-to-bl ${color} */}
      <div className={`relative  border-solid border ${border} glass-bg  ${shadow} grid items-center ${forpopular? 'justify-items-start':'justify-items-center'} rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 hover:rotate-2`}>

        <div className={`grid items-center ${forpopular? 'justify-items-start' : 'justify-items-center'}`}>
            <h1 className='text-slate-800 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>
            <p className=' text-slate-600 text-base md:text-sm font-normal filter drop-shadow'>{text}</p>
            <div className='flex items-center justify-between w-28 my-2'>
                <div className='flex items-center glass-bg shadow shadow-slate-200 px-1 rounded'><h1 className=' text-black text-sm font-medium '>₹{price}</h1></div>
                <div className='flex items-center'><StarIcon className='icon-style text-yellow-600 w-5 h-5 md:w-4 md:h-4'/><h1 className='md:text-sm font-normal text-slate-500'>{rating}</h1></div>
            </div>

            <div className='flex items-center gap-3 '>
                <button type='button' className=' glass-bg  button-theme p-0.5 shadow shadow-slate-200' onClick={()=>{onAddToCart()}}><ShoppingBagIcon className='icon-style text-slate-800'/></button>
                <button type='button' className=' glass-bg   button-theme p-0.5 shadow shadow-slate-200 text-sm text-black px-2 py-1'  onClick={()=>{onAddToCart(); onCartToggle();}}>{btn}</button>
            </div>
        </div>

        <div className={`flex items-center ${forpopular?'absolute top-5 right-1':'justify-center'}`}>
            <img src={img} alt="" className=' h-36 w-70 transition-theme transition ease-in-out  hover:-translate-y-12  hover:scale-110  duration-500 cursor-pointer'/>
        </div>
        
      </div>
    </>
  )
}

export default Item
