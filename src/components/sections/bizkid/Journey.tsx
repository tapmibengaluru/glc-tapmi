"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Journey() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, margin: "-100px" });
  const [stage, setStage] = useState(1);
  return (
    <section
      ref={animationRef}
      className="py-20 lg:py-28 bg-[#fdf2ec] relative"
    >
      <img
        src="/bizkid/pencil.svg"
        alt="pencil"
        className="absolute w-1/2 lg:w-min -right-20 -top-16 lg:-right-32 lg:-top-24 sm:hidden lg:block"
        loading="lazy"
      />
      <img
        src="/bizkid/pen.svg"
        alt="pencil"
        className="absolute w-1/2 lg:w-min -left-16 lg:-left-20 bottom-0 lg:-bottom-24 z-50 sm:hidden lg:block"
        loading="lazy"
      />
      <div className="container ">
        <div className="flex items-center justify-center gap-4">
          <img
            src="/bizkid/star1.svg"
            alt="star"
            className="w-10 h-10 lg:w-20 lg:h-20"
            loading="lazy"
          />
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ delay: 0, duration: 1, ease: "easeInOut" }}
            className="text-[28px] lg:text-[56px] flex-grow 3xl:text-[72px] font-helvetica font-extrabold text-center leading-[35.2px] lg:leading-[65px] 3xl:leading-[85px] tracking-[0.1px]"
          >
            The BizKid Journey
          </motion.h2>
          <img
            src="/bizkid/star2.svg"
            alt="star"
            className="w-10 h-10 lg:w-20 lg:h-20"
            loading="lazy"
          />
        </div>
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          className="text-[12px] lg:text-[28px] font-helvetica font-bold tracking-[0.1px] text-center mt-2"
        >
          Stages of the Competition
        </motion.h4>
        <div className="mt-10 lg:mt-20 -rotate-2 lg:-rotate-[3.43deg] w-full max-w-sm lg:max-w-none mx-auto">
          <div className="flex ">
            <div
              onClick={() => {
                setStage(1);
              }}
              className="bg-[#FAD85D] cursor-pointer flex justify-center items-center w-[84px] lg:w-[355px] py-2 lg:py-8 rounded-t-[10px] lg:rounded-t-[20px]"
            >
              <p className="font-helvetica font-extrabold uppercase text-xs lg:text-[40px]">
                Stage 1
              </p>
            </div>
            <div
              onClick={() => {
                setStage(2);
              }}
              className="bg-[#707EFF] cursor-pointer flex justify-center items-center  w-[84px] lg:w-[355px] py-2 lg:py-6 rounded-t-[10px] lg:rounded-t-[20px]"
            >
              <p className="font-helvetica font-extrabold uppercase text-xs lg:text-[40px] text-white">
                Stage 2
              </p>
            </div>
            <div
              onClick={() => {
                setStage(3);
              }}
              className="bg-[#F2A0FF] cursor-pointer flex justify-center items-center  w-[84px] lg:w-[355px] py-2 lg:py-6 rounded-t-[10px] lg:rounded-t-[20px]"
            >
              <p className="font-helvetica font-extrabold uppercase text-xs lg:text-[40px]">
                Stage 3
              </p>
            </div>
          </div>
          {stage === 1 && (
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#FAD85D] p-8 lg:pl-24 lg:pr-16 lg:py-[4rem] 3xl:py-[8rem] rounded-b-[20px] rounded-tr-[20px] fade-in">
              <div className="basis-1/2">
                <h2 className="font-helvetica font-extrabold text-[28px] lg:text-[76px] text-[#1E1E1E]">
                  Sign UP
                </h2>
                <p className="font-helvetica text-xs lg:leading-tight lg:text-[20px]  max-w-lg">
                  The registration process is simple & easy. You can sign up
                  online by filling out a basic form with your team’s details.
                  Once registered, you will receive a confirmation email with
                  further instructions & important dates.
                </p>
                <button
                  onClick={() => {
                    window.open(
                      "https://forms.office.com/r/7jEi84CFeH",
                      "_blank"
                    );
                  }}
                  className="bg-[#FC9D29] mt-6 py-2 lg:py-4 px-8 text-sm lg:text-2xl font-helvetica font-extrabold text-white rounded-xl  block"
                >
                  Register for FREE
                </button>
              </div>
              <div className="basis-1/2">
                <img
                  src="/bizkid/stage1.svg"
                  alt="stage 1"
                  className="w-full rotate-[8deg]"
                  loading="lazy"
                />
              </div>
            </div>
          )}
          {stage === 2 && (
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-8 bg-[#707EFF] p-8 lg:pl-24 lg:pr-16 lg:py-20 rounded-b-[20px] rounded-tr-[20px] fade-in">
              <div className="basis-1/2">
                <div className="relative">
                  <h2 className="font-helvetica font-extrabold text-[28px] lg:text-[76px] leading-tight text-white">
                    pitch submissions
                  </h2>
                  <img
                    src="/bizkid/star3.svg"
                    alt="star"
                    className="absolute top-0 right-1/2 translate-x-3/4 hidden lg:block"
                    loading="lazy"
                  />
                </div>

                <p className="font-helvetica text-xs lg:leading-tight lg:text-[20px] text-white">
                  In the Pitch Submission stage, you will be required to submit
                  a small pitch of your innovative ideas through a concise
                  written or video pitch. All submissions must be uploaded by
                  the specified deadline, after which our expert panel will
                  evaluate each pitch for originality & impact. Remember, your
                  pitch is the first step to making your idea a reality!
                </p>
                {/* <p className="font-helvetica font-extrabold text-xs lg:text-2xl px-4 lg:px-8 py-2 lg:py-6 border-[4px] border-[#5764ff] w-fit mt-4 lg:mt-8 rounded-[20px] text-white">
                  Deadline: 16TH NOV 24
                </p> */}
              </div>
              <div className="basis-1/2">
                <img
                  src="/bizkid/stage2.svg"
                  alt="stage 1"
                  className="w-3/4 lg:w-full ml-auto lg:ml-0"
                  loading="lazy"
                />
              </div>
            </div>
          )}
          {stage === 3 && (
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-8 bg-[#F2A0FF] lg:pl-24 lg:pr-16 lg:py-16 3xl:py-20 p-8 rounded-b-[20px] rounded-tr-[20px] fade-in">
              <div className="basis-1/2">
                <div className="relative">
                  <h2 className="font-helvetica font-extrabold text-[28px] lg:text-[76px] leading-tight">
                    FINALE BOOTCAMP
                  </h2>
                  <img
                    src="/bizkid/bulb2.svg"
                    alt="star"
                    className="absolute top-0 right-0 2xl:right-1/3 2xl:translate-x-1/3 hidden lg:block"
                    loading="lazy"
                  />
                </div>

                <p className="font-helvetica text-xs lg:leading-tight lg:text-[20px] ">
                  The Finale Bootcamp is an immersive, hands-on experience where
                  you’ll present your business ideas in teams of 3-4 with
                  guidance from industry mentors and experts. It’s an exciting
                  opportunity to gain valuable insights, collaborate with peers,
                  elevate your idea and win exciting cash prizes for the
                  ultimate showcase!
                </p>
                <p className="font-helvetica font-extrabold text-xs lg:text-2xl px-4 lg:px-8 py-2 lg:py-6 border-[4px] border-[#ed88ff] w-fit mt-8 rounded-[20px] text-black">
                  Bootcamp Date: 16th NOV 24
                </p>
              </div>
              <div className="basis-1/2">
                <img
                  src="/bizkid/stage3.svg"
                  alt="stage 1"
                  className="w-3/4 lg:w-full ml-auto lg:ml-0"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
