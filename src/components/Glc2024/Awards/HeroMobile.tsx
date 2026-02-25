"use client";
import { XMark2 } from "@/components/Svgs";
import React from "react";
import heroIcon from "../../../../public/images/glc2024/awards/awardHeroMobile.png"
import xicon from "../../../../public/images/glc2024/xiconmedum3.png"

const HeroMobile = () => {
  return (
    <div className=" lg:flex pb-24  lg:items-center mt-20 lg:mt-32 lg:-translate-y-[8%] relative  ">
      <div className="flex flex-col h-full justify-between items-center ">
        <div className="relative flex flex-col items-center z-[50] text-slide-in">
             <img src={"/images/heroIMages/Group 188.svg"}  alt="mahe tag" className="lg:hidden" />
        </div>
        <div className="text-center">
          <h1 className="text-[#FF9618] text-2xl mt-10 lg:text-4xl font-bold font-helvetica mb-3">04 OCTOBER 2025</h1>
          <p className="text-lg lg:text-[24px] text-[#000000CC]  font-medium font-helvetica">
            Ramdas Pai Auditorium,
            <br /> Manipal Academy of Higher Education,
            <br /> Bengaluru Campus
          </p>
          <button
            onClick={() => {
              window.open("https://forms.gle/Ng1hxzHHhvYX8aZJ6", "_blank");
            }}
            className="bg-primary  px-8 text-sm lg:text-[18px] font-helvetica mt-4 lg:mt-8 uppercase text-white font-bold py-3"
          >
            Submit nomination
          </button>
        </div>
        <div className="flex flex-col mt-10  items-center">
          <h1 className="text-ce text-base text-[#000000CC] font-helvetica ">Co presenting Partner</h1>
          <img src={"/images/awardnav.svg"} alt="logo" width={220} height={48} className=" object-contain mt-2" />

          {/* <img src={"/images/latestHeader.svg"} alt="logo"  className="hidden lg:block object-contain" /> */}
        </div>
      </div>
      {/* <Image
                src={"/images/hand1.png"}
                alt="hero"
                width={583}
                height={600}
                className=" absolute animate-hand2 hidden lg:block"
              />
              <Image
                src={"/images/hand2.png"}
                alt="hero"
                width={457}
                height={562}
                className=" absolute animate-hand1 hidden lg:block"
              /> */}
      {/* <Image
                src={"/images/hand1.png"}
                alt="hero"
                width={583}
                height={600}
                className=" absolute animate-hand2-phone lg:hidden"
              />
              <Image
                src={"/images/hand2.png"}
                alt="hero"
                width={457}
                height={562}
                className=" absolute animate-hand1-phone  lg:hidden"
              /> */}
      <div className="lg:absolute hidden right-0 mt-32 xl:mt-48  lg:-right-20 xl:-right-64 lg:flex justify-end items-end">
        <img src="/images/glc2024/awards/hero.png" alt="" className="h-[80%] w-[80%] hidden lg:block  xl:w-[85%]" />

        <div className="relative">
          <div className="h-[20rem] w-[100px] bg-black hidden lg:block absolute -left-5 bottom-10 animate-background-overlay"></div>
        </div>
      </div>
        <div className="absolute -right-5 -top-36">
          <img src={heroIcon.src} alt="" width={150} height={150} />
        </div>
         <div className="absolute -left-5 -bottom-36">
          <img src={xicon.src} alt="" width={250} height={250} />
        </div>
    </div>
  );
};

export default HeroMobile;
