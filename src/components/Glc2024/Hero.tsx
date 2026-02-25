"use client"
import React from "react";
import { XMark } from "../Svgs";
import bg from "../../../public/images/glc2024/Hand.webp"

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col xl:justify-between h-full mt-5 lg:mt-10 px-5 lg:px-0  ">
        <div className="relative z-[50] mb-10 lg:mb-20 text-slide-in">
          <img src={"/images/heroIMages/Group 169.svg"}  alt="mahe tag" className=" lg:w-[80%] lg2:w-auto xl:mt-20" />
          <button
            onClick={() => {
              window.open("https://forms.gle/ZZjzvXM16xx75WKf7", "_blank");
            }}
            className="bg-[#F7038F] hover:bg-[#ed1d24] hidden lg:block px-8 text-[18px] font-helvetica mt-4 lg:mt-8 uppercase text-white font-bold py-3"
          >
            Register Now
          </button>
        </div>
        <div>
          <h1 className="text-[#FF9618] text-xl lg:text-3xl font-bold font-helvetica mb-3">04 OCTOBER 2025</h1>
          <p className=" lg:text-2xl text-[#171717]  font-medium font-helvetica">
            Ramdas Pai Auditorium,
            <br /> Manipal Academy of Higher Education,
            <br /> Bengaluru Campus
          </p>
          <button
            onClick={() => {
              window.open("https://forms.gle/ZZjzvXM16xx75WKf7", "_blank");
            }}
            className="bg-primary  lg:hidden px-8 text-[18px] font-helvetica mt-4 lg:mt-8 uppercase text-white font-bold py-3"
          >
            Register Now
          </button>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute -right-10 xl:-right-72 z-30 top-32 xl:top-32  ">
        <img src={bg.src} alt="" className="z-50 xl:w-[48vw]" />
      </div>
      <div className=" lg:hidden mt-8 !z-[999999999999999999] ">
        <img src={bg.src} alt="" height={500} width={500} className="z-50 h-[90%] w-full  object-cover " />
      </div>
            <div className="absolute  lg:hidden   bottom-32 left-0  w-20 h-28 bg-gradient-to-br from-[#EC2188] to-[#FF9618] "></div>
      <div className="absolute  lg:hidden -z-40  bottom-24 right-0  w-28 h-28 bg-gradient-to-br from-[#EC2188] to-[#FF9618] "></div>
      <div className="absolute  lg:hidden   bottom-[50%] md:bottom-[60%] right-20  w-10 h-10 bg-gradient-to-br from-[#FF9618] to-[#EC2188] "></div>
      <div className="absolute hidden lg:block   top-24 right-56   w-32 h-28 bg-gradient-to-br from-[#EC2188] to-[#FF9618] "></div>
      <div className="absolute hidden lg:block z-50   top-10 right-20 xl:-right-12  w-10 h-10 bg-gradient-to-br from-[#EC2188] to-[#FF9618] "></div>
      <div className="absolute  hidden lg:block  top-80 xl:top-96 -right-10  xl:-right-56 w-32 h-28 bg-gradient-to-br from-[#EC2188] to-[#EC2188] "></div>
      <div className="absolute hidden lg:block   top-[24rem] right-[28rem]    w-32 h-32 bg-gradient-to-br from-[#EC2188] to-[#FF9618] "></div>
      <div className="absolute  hidden lg:block  bottom-0 -right-10 xl:-right-56   w-28 h-28 bg-gradient-to-br from-[#EC2188] to-[#FF9618] ">
       
        <div className="absolute z-50 -left-5 -top-5     w-10 h-10 bg-gradient-to-br from-[#EC2188] to-[#FF9618] "></div>
      </div>
    </div>
  );
};

export default Hero;
