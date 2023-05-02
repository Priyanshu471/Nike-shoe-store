import React, { useState } from "react";
import Payment from "./Form/Payment";
import Shipping from "./Form/Shipping";
import Customer from "./Form/Customer";
import ProgressBar from "./Form/ProgressBar";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Button from "./orderButton/Button.jsx";

const Form = () => {
  const [page, setPage] = useState(0);
  const FormTitles = ["Your Details", "Shipping Details", "Payment Details"];
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    contactno: "",
    email: "",
    date: 0,
    houseno: "",
    street: "",
    city: "",
    pin: "",
    cardname: "",
    cardnumber: "",
    month: "",
    year: "",
  });
  const animation = () => {
    console.log("hi");
  };
  const PageDisplay = () => {
    if (page === 0) {
      return <Customer formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Shipping formData={formData} setFormData={setFormData} />;
    } else {
      return <Payment formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <>
      <main className="flex justify-center items-center flex-col form-bg h-[100vh] w-full sm:h-[130vh]">
        <div className="form-box w-40 h-40 rounded-3xl right-[13%] top-[2%] absolute lg:w-32 lg:h-32 lg:right-[2%] sm:w-[290px] sm:h-10 sm:rounded-md "></div>
        <div className="form-card w-[977px] h-[90vh] lg:w-[800px] lg:h-[85vh] md:w-[650px] sm:w-[300px] sm:h-auto sm:my-16">
          {PageDisplay()}
          <div className=" flex justify-between mx-[30%] my-[3rem] sm:mx-[5%]">
            <button
              type="button"
              className=" text-slate-50 bg-pink-500 rounded-lg text-xl py-2 px-8   sm:px-10 sm:text-sm  button-theme flex gap-1 justify-center items-center"
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              {" "}
              <ArrowLeftCircleIcon className="icon-style active:scale-100 cursor-default" />
              Prev
            </button>
            <button
              type="button"
              className=" text-slate-50 bg-pink-500 rounded-lg text-xl cursor-pointer py-2  px-8 sm:px-10 sm:text-sm button-theme flex gap-1 justify-center items-center"
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("order placed");
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Pay" : "Next"}
              <ArrowRightCircleIcon className="icon-style active:scale-100 cursor-default" />
            </button>
          </div>
        </div>

        <div className="form-box w-40 h-40 rounded-3xl left-[13%] bottom-[2%] absolute lg:w-32 lg:h-32 lg:left-[2%] sm:w-[290px] sm:h-10 sm:rounded-md"></div>
      </main>
    </>
  );
};

export default Form;
