import {
  CheckIcon,
  EllipsisHorizontalCircleIcon,
  ForwardIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const ProgressBar = () => {
  return (
    <div className="flex justify-center ">
      <div className="progress-bar my-10">
        <div className="arrow-pointer1 flex justify-center items-center">
          <CheckIcon className="icon-style active:scale-100 cursor-default" />
        </div>
        {/* <div className="arrow-pointer2 flex justify-center items-center">
          <CheckIcon className="icon-style active:scale-100 cursor-default" />
        </div> */}
        {/* <div className="arrow-pointer3 flex justify-center items-center">
          <EllipsisHorizontalCircleIcon className="icon-style active:scale-100 cursor-default" />{" "}
        </div> */}
      </div>
    </div>
  );
};

export default ProgressBar;
