import {
  CheckCircleIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import ProgressBar from "./ProgressBar";
import pay from "../../assets/Pay.svg";
import Visa from "../../assets/visa.svg";
import Paypal from "../../assets/paypal.svg";
import Gpay from "../../assets/gpay.svg";
import Paytm from "../../assets/Paytm.svg";

import Mastercard from "../../assets/mastercard.svg";
import Amex from "../../assets/amex.svg";
import {
  CalendarDaysIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { selectTotalAmount } from "../../app/CartSlice";
import { useSelector } from "react-redux";

const Payment = ({ formData, setFormData }) => {
  const totalAmount = useSelector(selectTotalAmount);
  return (
    <>
      <div className="flex justify-center sm:hidden ">
        <div className="progress-bar my-10">
          <div className="arrow-pointer1 flex justify-center items-center">
            <CheckCircleIcon className="icon-style active:scale-100 cursor-default" />
          </div>
          <div className="arrow-pointer2 flex justify-center items-center">
            <CheckCircleIcon className="icon-style active:scale-100 cursor-default" />
          </div>
          <div className="arrow-pointer3 flex justify-center items-center">
            <EllipsisHorizontalCircleIcon className="icon-style active:scale-100 cursor-default" />
          </div>
        </div>
      </div>
      <div className="absolute right-[-8%] top-[15%]  sm:hidden">
        <img src={pay} alt="" className="w-[400px] " />
      </div>
      <h1 className=" text-slate-900 text-2xl absolute  mt-1 left-[18%] hidden sm:block">
        Payment Details
      </h1>
      <div className="grid grid-cols-3 sm:block  ">
        <div className="flex flex-col gap-2 sm:mt-10">
          <div className=" w-64 h-28 glass-bg bg-pink-200 flex  flex-col justify-center gap-1 items-center ml-4 sm:h-20">
            <h1>Total to Pay</h1>
            <h2 className="text-2xl text-slate-950">₹{totalAmount}</h2>
          </div>
          <div className=" w-64 h-auto glass-bg bg-pink-200 flex  flex-col justify-center gap-1 items-center ml-4">
            <h1 className="text-slate-900 text-md mt-4">
              How would you like to pay?
            </h1>
            <div className="glass-bg w-auto h-auto mt-3 hover:border-pink-500 hover:scale-105 duration-200">
              <div className="flex justify-center gap-2 mx-2 ">
                <img src={Visa} alt="" className="" />
                <img src={Mastercard} alt="" className="" />
                <img src={Amex} alt="" className="" />
              </div>
            </div>
            <div className="glass-bg w-auto h-auto my-3 hover:border-pink-500 hover:scale-105 duration-200">
              <div className="flex justify-center gap-2 mx-2">
                <img src={Paypal} alt="" className="" />
                <img src={Gpay} alt="" className="" />
                <img src={Paytm} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-2 w-[70%] sm:w-64 h-[360px] glass-bg bg-pink-200  flex  flex-col text-center sm:ml-4 sm:mt-4 sm:h-[275px]">
          <h1 className="text-2xl my-3 sm:hidden">Payment Details</h1>
          <div className="flex items-center mx-3">
            <UserCircleIcon className="icon-style text-slate-800 active:scale-100 cursor-default" />
            <h1 className="ml-1 text-xl text-slate-800 mt-1">Name on Card</h1>
          </div>
          <input
            type="text"
            name="cardnumber"
            placeholder="Priyanshu Mishra"
            maxLength="20"
            className="w-auto h-auto rounded glass-bg outline-none  mx-1 text-slate-900  focus:border-pink-600 p-1 text-lg my-2 mb-4"
            value={formData.cardname}
            onChange={(e) =>
              setFormData({ ...formData, cardname: e.target.value })
            }
          />
          <div className="flex items-center mx-3">
            <CreditCardIcon className="icon-style text-slate-800 active:scale-100 cursor-default" />
            <h1 className="ml-1 text-xl text-slate-800">Card Number</h1>
          </div>
          <input
            type="text"
            name="cardnumber"
            placeholder="1234 XXXX XXXX 4321"
            maxLength="20"
            className="w-auto h-auto rounded glass-bg outline-none  mx-1 text-slate-900  focus:border-pink-600 p-1 text-lg my-2 mb-4"
            value={formData.cardnumber}
            onChange={(e) =>
              setFormData({ ...formData, cardnumber: e.target.value })
            }
          />
          <div className="grid grid-cols-2">
            <div>
              <div className="flex items-center mx-3 sm:mx-1">
                <CalendarDaysIcon className="icon-style text-slate-800 active:scale-100 cursor-default sm:hidden" />
                <h1 className="ml-1 text-xl text-slate-800 sm:text-sm">
                  Expiry Date
                </h1>
              </div>
              <div className="flex">
                <input
                  type="text"
                  name="month"
                  placeholder="MM"
                  maxLength="2"
                  className="w-20 sm:w-10 h-auto rounded glass-bg outline-none  mx-1 text-slate-900  focus:border-pink-600 p-1 text-lg my-2 mb-4"
                  value={formData.month}
                  onChange={(e) =>
                    setFormData({ ...formData, month: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="year"
                  placeholder="YYYY"
                  min="1999"
                  max="2020"
                  maxLength="4"
                  className="w-20  sm:w-12 h-auto rounded glass-bg outline-none  mx-1 text-slate-900  focus:border-pink-600 p-1 text-lg my-2 mb-4"
                  value={formData.year}
                  onChange={(e) =>
                    setFormData({ ...formData, year: e.target.value })
                  }
                />
              </div>
            </div>
            <div className=" flex justify-center items-start flex-col">
              <div className="flex items-center ">
                <ShieldCheckIcon className="icon-style text-slate-800 active:scale-100 cursor-default sm:hidden" />
                <h1 className="ml-1 text-xl text-slate-800 sm:text-sm">CVV</h1>
              </div>
              <div className="flex">
                <input
                  type="password"
                  name="cvv"
                  placeholder=""
                  min="1999"
                  max="2020"
                  maxLength="3"
                  className="w-20 sm:w-11 h-auto rounded glass-bg outline-none  mx-1 text-slate-900  focus:border-pink-600 p-1 text-lg my-2 mb-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
