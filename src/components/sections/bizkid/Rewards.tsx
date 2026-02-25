"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
export default function Rewards() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, {
    once: true,
    margin: "-300px",
  });
  return (
    <section ref={animationRef} className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="flex items-center justify-center gap-4">
          <img
            src="/bizkid/star1.svg"
            alt="star"
            className="w-10 h-10 lg:w-20 lg:h-20"
            loading="lazy"
          />
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ delay: 0, duration: 1, ease: "easeInOut" }}
            className="text-[28px] lg:text-[56px] flex-grow 3xl:text-[72px] font-helvetica font-extrabold text-center leading-[35.2px] lg:leading-[65px] 3xl:leading-[85px] tracking-[0.1px]"
          >
            Big Rewards Await!
          </motion.h1>
          <img
            src="/bizkid/star2.svg"
            alt="star"
            className="w-10 h-10 lg:w-20 lg:h-20"
            loading="lazy"
          />
        </div>
        <div className="mt-24 justify-center items-center container hidden lg:flex">
          <div
            className={`h-fit w-[352px] border bg-[#DDFBFF] border-[#259AA1] mt-16 px-6 py-10 space-y-4 rounded-[20px] ${
              isInView ? "reward-animation1" : ""
            }`}
          >
            <img
              src={"/bizkid/trophy2.svg"}
              alt="illustration"
              className="h-[196px] w-full object-contain"
            />
            <h3
              className={`text-[48px] font-helvetica text-[#259AA1] font-black leading-[46.8px] tracking-[0.1px] text-center`}
            >
              2nd Prize
            </h3>
            <p className="font-helvetica text-[28px] leading-tight font-bold text-center ">
              INR 20,000
            </p>
            <p className="text-[#1E1E1E] opacity-80 text-[12px] leading-[15.6px] tracking-[0.1px] text-center">
              Every participant will receive a certificate of participation,
              co-endorsed by Manipal Academy of Higher Education and TAPMI.
            </p>
          </div>
          <div
            className={` w-[427px] border bg-[#FFF6EA] border-[#FC9D29] px-6 py-12 space-y-4 rounded-[20px] z-50`}
          >
            <img
              src={"/bizkid/trophy1.svg"}
              alt="illustration"
              className="h-[249px] w-full object-contain"
              loading="lazy"
            />
            <h3
              className={`text-[56px] font-helvetica text-[#FC9D29] font-black leading-[46.8px] tracking-[0.1px] text-center`}
            >
              1st Prize
            </h3>
            <p className="font-helvetica text-[28px] leading-tight font-bold text-center">
              INR 30,000
            </p>
            <p className="text-[#1E1E1E] opacity-80 text-[12px] max-w-[17rem] mx-auto leading-[15.6px] tracking-[0.1px] text-center">
              Every participant will receive a certificate of participation,
              co-endorsed by Manipal Academy of Higher Education and TAPMI.
            </p>
          </div>
          <div
            className={`h-fit w-[352px] border bg-[#FFEBE0] mt-16 border-[#F26C21] px-6 py-10 space-y-4 rounded-[20px]  ${
              isInView ? "reward-animation2" : ""
            }`}
          >
            <img
              src={"/bizkid/trophy3.svg"}
              alt="illustration"
              className="h-[196px] w-full object-contain"
              loading="lazy"
            />
            <h3
              className={`text-[48px] font-helvetica text-[#F26C21] font-black leading-[46.8px] tracking-[0.1px] text-center`}
            >
              3rd Prize
            </h3>
            <p className="font-helvetica text-[28px] leading-tight font-bold text-center">
              INR 10,000
            </p>
            <p className="text-[#1E1E1E] opacity-80 text-[12px] leading-[15.6px] tracking-[0.1px] text-center">
              Every participant will receive a certificate of participation,
              co-endorsed by Manipal Academy of Higher Education and TAPMI.
            </p>
          </div>
        </div>
        <div className="lg:hidden mt-8 space-y-4 max-w-sm mx-auto">
          <div className="border max-w-[14rem] bg-[#FFF6EA] p-2 border-[#FC9D29] rounded-[12px] flex gap-5 items-center">
            <img
              src={"/bizkid/trophy11.svg"}
              alt="illustration"
              className="h-[74px] w-fit  -rotate-[13deg]"
              loading="lazy"
            />
            <div>
              <h4 className="text-[#FC9D29] text-xl font-helvetica font-black">
                1st Prize
              </h4>
              <p className="font-helvetica font-bold ">INR 30,000</p>
            </div>
          </div>
          <div className="border ml-auto max-w-[14rem] bg-[#DDFBFF] p-2 border-[#259AA1] rounded-[12px] flex gap-5 justify-end items-center">
            <div>
              <h4 className="text-[#259AA1] text-xl font-helvetica font-black">
                2nd Prize
              </h4>
              <p className="font-helvetica font-bold ">
                INR 20,000
              </p>
            </div>
            <img
              src={"/bizkid/trophy2.svg"}
              alt="illustration"
              className="h-[74px] w-fit rotate-[13deg]"
              loading="lazy"
            />
          </div>
          <div className="border max-w-[14rem] bg-[#FFEBE0] p-2 border-[#F26C21] rounded-[12px] flex gap-5 items-center">
            <img
              src={"/bizkid/trophy3.svg"}
              alt="illustration"
              className="h-[74px] w-fit  -rotate-[13deg]"
              loading="lazy"
            />
            <div>
              <h4 className="text-[#F26C21] text-xl font-helvetica font-black">
                3rd Prize
              </h4>
              <p className="font-helvetica font-bold ">INR 10,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
