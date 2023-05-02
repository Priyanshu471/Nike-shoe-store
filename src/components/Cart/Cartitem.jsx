import {
  MinusCircleIcon,
  MinusIcon,
  PlusCircleIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemCart,
} from "../../app/CartSlice";

const Cartitem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity, border },
}) => {
  const dispatch = useDispatch();
  const onRemoveItem = () => {
    dispatch(
      setRemoveItemCart({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
        border,
      })
    );
  };
  const onIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };
  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };
  return (
    <>
      <div className="flex items-center justify-between w-full px-2">
        <div className="flex items-center gap-5">
          <div
            className={` relative bg-gradient-to-b ${color} ${shadow} grid items-center rounded-md p-3 transition-all duration-300 ease-in-out  hover:scale-95`}
          >
            <img src={img} alt="" className="w-36 h-auto object-fill lg:w-28" />
            <div className="absolute  top-1 right-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded opacity-0 hover:opacity-100">
              ₹{price}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center  w-full gap-5">
              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-95 cursor-pointer"
                onClick={onDecreaseItemQTY}
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white storke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-sm w-7 h-6 lg:w-6 lg:h-5 flex items-center justify-center ">
                {cartQuantity}
              </div>
              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-95 cursor-pointer"
                onClick={onIncreaseItemQTY}
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white storke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-6 ">
          <div className="grid items-center justify-center ">
            <h1 className="font-medium text-sm ">₹{price * cartQuantity}.00</h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              type="button"
              className="bg-theme-cart rounded p-1 active:scale-95 grid items-center justify-center cursor-pointer"
              onClick={onRemoveItem}
            >
              <TrashIcon className="w-4 h-4 text-slate-50 hover:text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
