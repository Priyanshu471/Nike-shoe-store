import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import emptybag from "../../assets/emptybag.png";
import emptycart from "../../assets/emptycart.svg";

const Cartempty = ({ onCartToggle }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7">
        <img
          src={emptycart}
          alt=""
          className=" w-96 lg:w-72 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-[102%]"
        />
        <button
          type="button"
          className="button-theme border-2 blur-effect-theme rounded-md flex items-center justify-center gap-0.5 text-slate-900 text-sm px-5 transition-all duration-250"
          onClick={onCartToggle}
        >
          <ArrowLeftIcon className="w-5 h-4" />
          <span className="">Continue Shopping</span>
        </button>
      </div>
    </>
  );
};

export default Cartempty;
