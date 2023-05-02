import React from "react";
import Clip from "./sides/clip.jsx";
import Link from "./sides/Link.jsx";
const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
        <div className="z-20 relative opacity-100 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            {/* title */}
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {title}
            </h1>
            {/* subtitle */}
            <div className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extralight filter drop-shadow-sm text-slate-200 flex justify-center">
              {subtitle}
              <img
                src="src\assets\nike-circle.png"
                alt=""
                className="pl-1 mt-1.3 w-auto h-12 lg:h-9 mt-1 md:h-8 md:mt-1 sm:h-5 sm:mt-2 xsm:h-4 xsm:mt-2"
              />
            </div>
            {/* explorebutton */}
            <button
              type="button"
              className=" glass-bg shadow shadow-slate-200 text-slate-900 button-theme    rounded-xl my-5"
            >
              {btntext}
            </button>

            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {videos?.map((val, i) => (
                <Clip key={i} imgsrc={val.imgsrc} clip={val.clip} />
              ))}
            </div>
            <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
              {sociallinks.map((val, i) => (
                <Link key={i} icon={val.icon}></Link>
              ))}
            </div>
          </div>
          <div className="">
            <img
              src={img}
              alt=""
              className="w-auto lg:h-[45vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
