"use client";
import React, { useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import xicon from "../../../../public/images/glc2024/xiconmediem.png";
import medumxicon from "../../../../public/images/glc2024/medumxicon.png";

import AnimatedTextCharacter from "@/components/AnimatedTextCharacter";

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
        <div className=" relative z-[70]">
          <div className="flex items-center justify-center gap-2 lg:gap-4 mt-8">
            <p className="font-helvetica text-[36px] lg:text-[60px] font-medium min-w-max">
              <AnimatedTextCharacter text="Award Categories" />
            </p>
          </div>
        </div>

        {/* Awards Grid */}
        <div className=" max-w-[1400px] xl:max-w-[90%] bg-white lg:bg-transparent z-50 relative mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#2B2A2966] mt-10 lg:mt-20 auto-rows-fr ">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="group lg:min-h-[40vh] xl:min-h-[30vh] bg-white lg:bg-transparent flex flex-col items-center justify-between  text-center p-3 border border-gray-200 relative"
            >
              <div className="flex flex-col flex-1 justify-center lg:justify-evenly  items-center ">
              <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 py-2 lg:px-5">{award.title}</h3>

              {/* Subtitle → only on hover */}
              <p className="text-lg text-[#2B2A29CC]/80 mt-4 lg:max-w-[90%] lg:hidden group-hover:block transition duration-300">{award.subtitle}</p>

              {/* Buttons */}
              
                {/* Plus button → visible by default, hidden on hover */}
                <button className="w-8 h-8 lg:flex items-center justify-center rounded border border-gray-400 text-gray-600 transition hidden lg:group-hover:hidden">
                  <FiPlus size={16} />
                </button>

                {/* Nominate button → hidden by default, visible on hover */}
                <button
                  onClick={() => window.open("https://forms.gle/Ng1hxzHHhvYX8aZJ6", "_blank")}
                  className="lg:hidden group-hover:block bg-[#F7038F] px-4 py-2 mt-6 text-white font-bold text-sm lg:text-lg font-helvetica transition"
                >
                  NOMINATE
                </button>
             </div>
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
