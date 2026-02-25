"use client";
import React, { useRef, useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import xicon from "../../../public/images/glc2024/xiconmediem.png";
import medumxicon from "../../../public/images/glc2024/medumxicon.png";


gsap.registerPlugin(ScrollTrigger);

const awards = [
  { title: "Exclusive Innovation", subtitle: "For breakthrough solutions and creative excellence" },
  { title: "Digital Transformation Champion", subtitle: "Recognizing organizations leading the digital era" },
  { title: "Outstanding Leadership", subtitle: "Honoring exceptional guidance and vision" },
  { title: "Customer Input Award", subtitle: "For companies that value and act on customer feedback" },
  { title: "AI/ML Adoption Award", subtitle: "For pioneering artificial intelligence and machine learning" },
  { title: "Best HR Practices", subtitle: "Recognizing innovative people-first initiatives" },
  { title: "Sustainability Champion", subtitle: "For outstanding contributions to green practices" },
  { title: "Young Achiever Award", subtitle: "Celebrating the brightest upcoming talents" },
];

const GccExcellence = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (bgRef.current) {
      const blocks = bgRef.current.querySelectorAll(".stair");

      blocks.forEach((block, index) => {
        gsap.to(block, {
          y: `-${100 * (index + 1)}`,
          ease: "none",
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top 80%",
            end: "bottom 80%",
            scrub: 0.5,
            markers: false,
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative   flex flex-col items-center justify-end md:pt-20 pb-28 overflow-hidden">
      {/* Background staircase */}
      <div ref={bgRef} className="absolute hidden  inset-0  h-full w-full items-start justify-center gap-0 z-0">
        <div className="stair bg-gradient-to-b from-[#F7038F] via-transparent to-transparent w-1/5 rounded-r-xl h-[80vh] mt-[10vh] lg:mt-[5vh]"></div>
        <div className="stair bg-gradient-to-b from-[#F7038F] via-transparent to-transparent w-1/5 h-[70vh] rounded-r-xl mt-[15vh] lg:mt-[15vh]"></div>
        <div className="stair bg-gradient-to-b from-[#F7038F] via-transparent to-transparent w-1/5 h-[60vh] rounded-r-xl mt-[25vh] lg:mt-[25vh]"></div>
        <div className="stair bg-gradient-to-b from-[#F7038F] via-transparent to-transparent w-1/5 h-[50vh] rounded-r-xl mt-[35vh] lg:mt-[35vh]"></div>
        <div className="stair bg-gradient-to-b from-[#F7038F] via-transparent to-transparent w-1/5 h-[40vh] rounded-r-xl mt-[45vh] lg:mt-[45vh]"></div>
      </div>

      {/* Foreground content */}
      <div className="px-5 lg:px-0 relative z-10    flex flex-col justify-center items-center h-full ">
        
       <img src={"/images/heroIMages/Group 189.svg"}  alt="mahe tag" className="lg:block hidden" />
        <img src={"/images/heroIMages/Group 188.svg"}  alt="mahe tag" className="lg:hidden" />
        <div className="flex flex-col  items-center mt-5">
          <h1 className="text-end text-base text-[#000000CC] font-helvetica mb-3">Co presenting Partner</h1>
          <img src={"/images/awardnav.svg"} alt="logo" width={250} height={48} className=" object-contain" />

          {/* <img src={"/images/latestHeader.svg"} alt="logo"  className="hidden lg:block object-contain" /> */}
        </div>

        {/* Awards Grid */}
        <div className=" max-w-[1400px] xl:max-w-[90%] bg-white lg:bg-transparent z-50 relative mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#2B2A2966] mt-20 auto-rows-fr ">
          {awards.map((award, idx) => (
            <div
  key={idx}
  className="group  flex lg:min-h-[40vh] xl:min-h-[30vh] flex-col items-center justify-between p-3  text-center  border border-[#2B2A2966] relative"
>
  <div className="flex flex-col flex-1 justify-center lg:justify-evenly  items-center ">
    {/* Title */}
    <h3 className="text-2xl lg:text-3xl  font-medium text-gray-900 px-5">
      {award.title}
    </h3>

    {/* Subtitle (space is reserved, opacity animates) */}
    <p
      className="
        text-lg text-[#2B2A29CC]/80 mt-4 lg:max-w-[90%] 
       lg:hidden lg:group-hover:block 
        transition-opacity duration-300
      "
    >
      {award.subtitle}
    </p>
    <button
    onClick={() => router.push('/glc2025/awards')}
    className="mt-6 w-8 h-8 flex items-center justify-center border border-[#2B2A29] 
      transition group-hover:border-none group-hover:bg-primary group-hover:text-white"
  >
    <FiPlus size={16} className="hover:text-white" />
  </button>
  </div>

  {/* Icon Button */}
  
</div>

          ))}
          <div className="absolute  -left-36 -bottom-36">
            <img src={xicon.src} alt="" width={250} height={250} />
          </div>
          <div className="absolute -z-10 hidden lg:block -right-36 -top-[420px]">
            <img src={medumxicon.src} alt="" width={400} height={400} />
          </div>
          <div className="absolute  lg:hidden -right-20 -top-[250px]">
            <img src={medumxicon.src} alt="" width={250} height={250} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GccExcellence;
