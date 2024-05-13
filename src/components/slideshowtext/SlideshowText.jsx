import React from "react";
import logo from "../../assets/logo.png";

function SlideshowText() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      <div className="-rotate-12 text-[55px] w-64 text-[#ffffff] leading-none">
        Save <br />
        The Date
        <br />
        <span className="text-[45px]">
          - 19<span className="text-[#f0394d]">.</span>12
          <span className="text-[#f0394d]">.</span>16 -
        </span>
      </div>
      <div className="mt-8 w-1/3">
        <hr className="pb-0.5" />
        <hr />
        <div className="p-2 text-[#ffffff]">*** WE ARE GETTING MARRIED ***</div>
        <hr className="pb-0.5" />
        <hr />
      </div>
      <div className="m-4 h-16 w-40 flex flex-row justify-around items-center text-center">
        <img src={logo} alt="logo" className="h-10 w-44" />
      </div>
    </div>
  );
}

export default SlideshowText;
