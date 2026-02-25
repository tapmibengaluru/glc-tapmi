"use client";

import Lottie from "lottie-react";
import animationData from "@/animationData/compass.json";
export default function RegisterNow() {
  return (
    <section className="py-20 pt-28 lg:py-32 lg:pb-44 bg-[#FDF2EC] relative">
      <h4 className="text-[12px] lg:text-[28px] font-helvetica font-bold tracking-[0.1px] text-center mt-2 hidden lg:block">
        Register Now and <br className="lg:hidden" /> Take Part in
      </h4>
      <img
        onClick={() => {
          window.open("https://www.tapmi.edu.in/bba-honors/", "_blank");
        }}
        src="/bizkid/group1.svg"
        alt="date"
        className="mx-auto -mt-28 lg:hidden py-10 relative z-50"
      />
      <div className="relative">
        <h1 className="text-[36px] lg:text-[140px] flex-grow 3xl:text-[140px] font-bungee text-center leading-[35.2px] lg:leading-[65px] 3xl:leading-[85px] tracking-[0.1px] mt-8 hidden lg:block">
          TAPMI
        </h1>
      </div>
      <h1 className="text-[120px] lg:text-[240px] flex-grow 3xl:text-[280px] font-bungee text-center  lg:leading-[65px] 3xl:leading-[85px] tracking-[0.1px] my-24 hidden lg:block">
        BIZ
        <br className="lg:hidden" />
        KID
      </h1>
      <h1 className="text-[36px] lg:text-[140px] flex-grow 3xl:text-[140px] font-bungee text-center leading-[35.2px] lg:leading-[65px] 3xl:leading-[85px] tracking-[0.1px] hidden lg:block">
        BOOTCAMP
      </h1>
      <img
        src="/bizkid/group.svg"
        alt="date"
        className="absolute top-0 left-1/2 translate-y-24 -translate-x-1/2 hidden lg:block"
      />
      <img
        src="/bizkid/group2.svg"
        alt="date"
        className="absolute -top-6 left-1/2  -translate-x-1/2 lg:hidden z-[60]"
      />
      <img
        src="/bizkid/date.svg"
        alt="date"
        className="absolute -top-[44%] lg:top-0 left-1/2 -translate-x-1/4 translate-y-24 lg:translate-x-1/3  scale-75 xs:scale-50 lg:scale-100"
        style={{
          animationDelay: "0.5s",
        }}
      />
      {/* <img
        onClick={() => {
          window.open("https://www.tapmi.edu.in/bba-honors/", "_blank");
        }}
        src="/bizkid/compass.svg"
        alt="date"
        className="absolute bottom-0  lg:right-1/2 lg:translate-y-0 lg:-translate-x-[75%] scale-50 lg:scale-75 xl:scale-100 xl:-translate-x-[85%] hidden lg:block"
      /> */}
      <div
        onClick={() => {
          window.open("https://www.tapmi.edu.in/bba-honors/", "_blank");
        }}
      >
        <Lottie
          animationData={animationData}
          className="absolute bottom-0 left-1/2 -translate-x-64 scale-75 lg:scale-100  lg:left-1/2 lg:-translate-x-[32rem] lg:translate-y-0  w-56 h-56 z-[60]"
        />
      </div>
    </section>
  );
}
