import React from 'react'

const Footer = ({footerAPI:{titles, links}}) => {
    // console.log(titles);
  return (
    <>
      <footer className='bg-footer pt-7 pb-5'>
        {/* <div>
            <img src="public\icons\logo2.png" alt="" />
        </div> */}
        <div className='nike-container text-slate-200'>
            <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'>
                {titles.map((val,i)=>(
                    <div key={i} className='text-lg lg:text-base md:text-sm uppercase font-semibold mb-2'>
                        <h1>{val.title}</h1>
                    </div>
                ))}
                {links.map((link,i)=> (
                    <ul key={i} className='grid items-center gap-1'>
                       {link.map((val,i)=>(
                        <li key={i} className='text-sm sm:text-xs hover:text-slate-300 transition-all duration-300 hover:translate-x-1' >{val.link}</li>
                       ))} 
                    </ul>
                ))}
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
