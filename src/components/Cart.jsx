import React, { useEffect } from "react";
import Cartcount from "./Cart/Cartcount";
import Cartitem from "./Cart/Cartitem";
import Cartempty from "./Cart/Cartempty";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from "../app/CartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);
  // console.log(cartItems);
  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 glass-bg w-full h-screen duration-500 opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        } `}
      >
        <div className={`glass-bg h-screen max-w-lg w-full absolute right-0`}>
          <Cartcount
            totalQTY={totalQTY}
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
          />
          {cartItems?.length === 0 ? (
            <Cartempty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                {cartItems?.map((item, i) => (
                  <Cartitem key={i} item={item} />
                ))}
              </div>
              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center ">
                <div className=" flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    ₹{totalAmount}
                  </h1>
                </div>
                <div className="grid items-center gap-2 text-center">
                  <p className="text-xs font-light ">
                    Taxes and Shipping Will Calculate At Shipping
                  </p>
                  <Link to={`/form`}>
                    <button
                      type="button"
                      className=" bg-theme-cart active:scale-95 transition-all duration-200 text-white rounded py-0.5 w-full md:w-[60%] sm:w-[30%] "
                    >
                      CheckOut
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
