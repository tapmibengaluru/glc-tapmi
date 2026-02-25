"use client";
import React from "react";

const Hero = () => {
  return (
    <>
    <div className=" lg:flex lg:items-center lg:mt-32 lg:-translate-y-[8%] relative  container">
            <div className="flex flex-col h-full xl:justify-between ">
            <div className="relative z-[50] text-slide-in">
                      <img src={"/images/heroIMages/Group 187.svg"}  alt="mahe tag" className="hidden lg:block lg:w-[70%] lg2:w-[90%] xl:w-full  xl:mt-20 max-w-full h-auto object-contain" />
                      <img src={"/images/heroIMages/Group 188.svg"}  alt="mahe tag" className="lg:hidden" />
              <button
                onClick={() => {
                  window.open("https://forms.gle/Ng1hxzHHhvYX8aZJ6", "_blank");
                }}
                className="bg-primary  px-8 text-sm lg:text-[18px] font-helvetica mt-4 lg:mt-8 uppercase text-white font-bold py-3"
              >
                Submit nomination
              </button>
            </div>
            <div>
              <h1 className="text-[#FF9618] text-xl mt-20 lg:mt-32 lg:text-3xl font-bold font-helvetica mb-3">04 OCTOBER 2025</h1>
              <p className="text-lg lg:text-[24px] text-[#000000CC]  font-medium font-helvetica">
                Ramdas Pai Auditorium,
                <br /> Manipal Academy of Higher Education,
                <br /> Bengaluru Campus
              </p>
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
          <div className="lg:absolute hidden right-0 mt-10 xl:mt-56  lg:-right-20 xl:-right-64 lg:flex justify-end items-end">
           <img src="/images/glc2024/awards/hero.png" alt="" className="h-[70%] w-[70%] hidden lg:block  xl:w-[85%]" />
            
            <div className="relative">
              <div className="h-[20rem] w-[100px] bg-black hidden lg:block absolute -left-5 bottom-10 animate-background-overlay"></div>
            </div>
          </div>
          </div>
</>
  );
};

export default Hero;
