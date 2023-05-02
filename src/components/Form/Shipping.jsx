import React from "react";
import ProgressBar from "./ProgressBar";
import {
  ArrowRightCircleIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  FlagIcon,
  HashtagIcon,
  HomeIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import "./style.scss";
import truck from "../../assets/Shipping.svg";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";

const Shipping = ({ formData, setFormData }) => {
  return (
    <>
      <div className="flex justify-center sm:hidden">
        <div className="progress-bar  my-10">
          <div className="arrow-pointer1 flex justify-center items-center">
            <CheckCircleIcon className="icon-style active:scale-100 cursor-default" />
          </div>
          <div className="arrow-pointer2 flex justify-center items-center">
            <EllipsisHorizontalCircleIcon className="icon-style active:scale-100 cursor-default" />
          </div>
          <div className=""></div>
        </div>
      </div>
      <div className="absolute right-[0%] top-[15%] sm:hidden">
        <img src={truck} alt="" className="w-[400px]" />
      </div>
      <h1 className=" text-slate-900 text-2xl absolute  mt-2 left-[18%] hidden sm:block">
        Shipping Details
      </h1>
      <div className="grid grid-cols-3 mx-[5%] mt-10 sm:mt-16">
        <div className="col-span-2 grid grid-cols-2  sm:block">
          <div className=" mb-5">
            <div className="flex">
              <HomeIcon className="icon-style active:scale-100 cursor-default" />
              <h1 className="ml-1 text-xl text-slate-50">House No</h1>
            </div>
            <input
              type="text"
              name="Houseno"
              className="w-[12rem] rounded glass-bg outline-none   text-slate-700  focus:border-pink-600"
              value={formData.houseno}
              onChange={(e) =>
                setFormData({ ...formData, houseno: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col mb-5">
            <div className="flex">
              <FlagIcon className="icon-style active:scale-100 cursor-default" />
              <h1 className="ml-1 text-xl text-slate-50">Street</h1>
            </div>
            <input
              type="text"
              name="street"
              className="w-[12rem] rounded glass-bg outline-none  focus:border-pink-600 text-slate-700"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col mb-5">
            <div className="flex">
              <BuildingOfficeIcon className="icon-style active:scale-100 cursor-default" />
              <h1 className="ml-1 text-xl text-slate-50">City</h1>
            </div>
            <input
              type="text"
              name="city"
              className="w-[12rem] rounded glass-bg outline-none  focus:border-pink-600 text-slate-700"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col mb-5">
            <div className="flex">
              <HashtagIcon className="icon-style active:scale-100 cursor-default" />
              <h1 className="ml-1 text-xl text-slate-50">Pincode</h1>
            </div>
            <input
              type="number"
              name="pincode"
              className="w-[12rem] rounded glass-bg outline-none  focus:border-pink-600 text-slate-700 "
              value={formData.pin}
              onChange={(e) =>
                setFormData({ ...formData, pin: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex">
              <TruckIcon className="icon-style active:scale-100 cursor-default" />
              <h1 className="ml-1 text-xl text-slate-50">Shipping</h1>
            </div>
            <div className="w-[31rem] h-auto glass-bg rounded flex flex-col justify-center items-center p-2 sm:w-[17rem] ">
              <label className="">
                <input type="radio" name="radio" />
                <div className="box1 sm:w-[15rem]">
                  <span className="sm:text-xs">
                    Prime-Delivery in 1 Days - ₹500
                  </span>
                </div>
              </label>
              <label className="">
                <input type="radio" name="radio" />
                <div className="box1 sm:w-[15rem] ">
                  <span className="sm:text-xs">
                    Urgent-Delivery in 2-3 Days - ₹250
                  </span>
                </div>
              </label>
              <label className="">
                <input type="radio" name="radio" />
                <div className="box1 sm:w-[15rem]">
                  <span className="sm:text-xs">
                    Normal-Delivery in 4-5 Days-Free
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
        {/* <div className=" col-span-3 flex justify-center mt-[5rem]">
          <button
            type="button"
            className=" text-slate-50 bg-pink-500 rounded-lg text-xl py-2 px-10 button-theme"
          >
            Next
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Shipping;
