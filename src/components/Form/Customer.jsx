import {
  AtSymbolIcon,
  CalendarDaysIcon,
  DevicePhoneMobileIcon,
  IdentificationIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import "./style.scss";
import customer from "../../assets/customer.svg";
import ProgressBar from "./ProgressBar";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";

const Customer = ({ formData, setFormData }) => {
  return (
    <>
      <div className="flex justify-center sm:hidden">
        <div className="progress-bar my-10">
          <div className="arrow-pointer1 flex justify-center items-center ">
            <EllipsisHorizontalCircleIcon className="icon-style active:scale-100 cursor-default" />{" "}
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
      <h1 className=" text-slate-900 text-2xl absolute  mt-1 left-[25%] hidden sm:block">
        Your Details
      </h1>
      <div className="grid grid-cols-3 mx-[5%] mt-10">
        <div className="col-span-2 grid grid-cols-2 sm:block">
          <div className=" mb-5  ">
            <div className="flex">
              <UserIcon className="icon-style active:scale-100 cursor-default" />
              <h1 className="ml-1 text-xl text-slate-50">First Name</h1>
            </div>
            <input
              type="text"
              name="FirstName"
              className="w-[12rem] rounded glass-bg outline-none   text-slate-700  focus:border-pink-600 sm:w-[15rem]"
              value={formData.fname}
              onChange={(e) =>
                setFormData({ ...formData, fname: e.target.value })
              }
            />
          </div>
          <div className=" mb-5">
            <div className="flex">
              <UserIcon className="icon-style active:scale-100 cursor-default" />
              <h1 className="ml-1 text-xl text-slate-50">Last Name</h1>
            </div>
            <input
              type="text"
              name="LastName"
              className="w-[12rem] rounded glass-bg outline-none  focus:border-pink-600 text-slate-700 sm:w-[15rem]"
              value={formData.lname}
              onChange={(e) =>
                setFormData({ ...formData, lname: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col mb-5">
            <div className="flex">
              <DevicePhoneMobileIcon className="icon-style active:scale-100 cursor-default" />
              <h1 className="ml-1 text-xl text-slate-50">Contact No</h1>
            </div>
            <input
              type="number"
              name="number"
              className="w-[12rem] rounded glass-bg outline-none  focus:border-pink-600 text-slate-700 sm:w-[15rem]"
              value={formData.contactno}
              onChange={(e) =>
                setFormData({ ...formData, contactno: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col mb-5">
            <div className="flex">
              <AtSymbolIcon className="icon-style active:scale-100 cursor-default" />
              <h1 className="ml-1 text-xl text-slate-50">Email</h1>
            </div>
            <input
              type="email"
              name="number"
              className="w-[12rem] rounded glass-bg outline-none  focus:border-pink-600 text-slate-700 sm:w-[15rem] "
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col mb-5">
            <div className="flex">
              <IdentificationIcon className="icon-style active:scale-100 cursor-default" />
              <h1 className="ml-1 text-xl text-slate-50">Gender</h1>
            </div>
            <div className="flex glass-bg w-[12.56rem] rounded py-0.5 px-1  active:border-pink-600 sm:w-[15rem]">
              <label className="">
                <input type="radio" name="radio" />
                <div className="box sm:w-[7rem]">
                  <span>Male</span>
                </div>
              </label>
              <label className="">
                <input type="radio" name="radio" />
                <div className="box sm:w-[7rem]">
                  <span>Female</span>
                </div>
              </label>
            </div>
          </div>
          <div className="flex flex-col  mb-2">
            <div className="flex">
              <CalendarDaysIcon className="icon-style active:scale-100 cursor-default" />
              <h1 className="ml-1 text-xl text-slate-50 placeholder:text-slate-50">
                Date Of Birth
              </h1>
            </div>
            <input
              type="date"
              name="date"
              className="w-[12rem] rounded glass-bg outline-none  focus:border-pink-600 text-slate-700 sm:w-[15rem]"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>
        </div>
        <div className="absolute right-[0%] top-[15%] sm:hidden">
          <img src={customer} alt="" className="h-full w-[400px]" />
        </div>
      </div>
    </>
  );
};

export default Customer;
