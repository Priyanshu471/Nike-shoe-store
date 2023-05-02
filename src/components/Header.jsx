import {React,useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { selectTotalQTY, setOpenCart } from '../app/CartSlice.js';

const Header = () => {
    const [headerstate,setHeaderState] = useState(false);
    const dispatch =useDispatch();
    const totalQTY = useSelector(selectTotalQTY);
    const onCartToggle =() =>{
        dispatch(setOpenCart({
            cartState: true
        }))
    }
    const onHeaderScroll=()=>{
        if(window.scrollY>30)
        {
            setHeaderState(true);
        }
        else
        {
            setHeaderState(false);
        }
    };
    useEffect(()=>{
        window.addEventListener('scroll', onHeaderScroll);

        return () =>{
            window.removeEventListener('scroll', onHeaderScroll);
        }
    },[])
  return (
    <>
      <header className={!headerstate?'absolute top-7 left-0 right-0 opacity-100 z-50':'fixed top-0  left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[100] border-2 glass-bg'}>
        <nav className='flex items-center justify-between nike-container'>
            <div className='flex items-center'>
                <img src="./icons/nike.png" alt="" className={`w-20 h-auto`}/>
            </div>
            <ul className={`flex items-center justify-center gap-2`}>
                <li className='grid items-center'>
                    <MagnifyingGlassIcon className={`icon-style ${headerstate && "filter brightness-0 transition-all duration-200"}`}/>
                </li >
                <li className='grid items-center'>
                    <HeartIcon className={`icon-style ${headerstate && " text-red-500 transition-all duration-200"}`}/>
                </li>
                <li className='grid items-center'>
                    <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                        <ShoppingBagIcon className={`icon-style ${headerstate && " text-slate-700 transition-all duration-200"}`}/>
                        <div className={`absolute top-4 right-0 bg-white text-slate-900 shadow shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}>{totalQTY}</div>
                    </button>
                </li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
