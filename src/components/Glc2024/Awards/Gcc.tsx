"use client";
import AnimatedTextCharacter from '@/components/AnimatedTextCharacter'
import { useInView } from 'framer-motion';
import React, { useRef, useState } from 'react'
import xicon from "../../../../public/images/glc2024/xiconmedum3.png"

const Gcc = () => {
      const textAnimation1 = useRef(null);
        const text1InView = useInView(textAnimation1, { once: true });
          const animation1 = useRef(null);
            const [isPlaying, setIsPlaying] = useState(false);
  return (
    <><div className='relative'>
      <div className='px-5 lg:px-0 lg:max-w-6xl mx-auto'>
          <h2 className="font-helvetica font-bold lg:text-center lg:font-medium leading-none text-3xl lg:text-[64px]">
            <AnimatedTextCharacter text="GCC 3.0: Reimagining Global Value " />
            
            <AnimatedTextCharacter text="from India" />
          </h2>
          <p
            ref={textAnimation1}
            className={`font-helvetica lg:text-[18px] leading-tight mx-auto lg:text-center max-w-6xl mt-4 ${text1InView ? "text-slide-in" : ""}`}
          >
            Join global CEOs, GCC leaders, and industry pioneers as they explore how India is redefining global value creation. This year’s conference
            will feature panels across Finance, Retail, Healthcare, IT, and talent sharing insights on Innovation, Leadership, and Strategies shaping
            the next wave of Global Capability Centers.
          </p>
          <div className="relative mt-8 overflow-hidden shadow-lg aspect-video bg-black z-10">
          {!isPlaying ? (
            <>
              {/* Thumbnail overlay with play button */}
                <img
                src="https://img.youtube.com/vi/JT98nxWQq0c/maxresdefault.jpg"
                alt="GLC 2024 Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="flex items-center justify-center"
                >
                  <svg className='h-10 w-10 lg:w-[80px] lg:h-[80px]'
                    width="104"
                    height="104"
                    viewBox="0 0 104 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.4">
                      <path
                        d="M51.8506 0.875C23.4079 0.875 0.350586 23.9324 0.350586 52.375C0.350586 80.8177 23.4079 103.875 51.8506 103.875C80.2933 103.875 103.351 80.8177 103.351 52.375C103.32 23.9451 80.2808 0.905391 51.8506 0.875ZM73.5393 54.0159C73.1828 54.7311 72.6032 55.3109 71.8878 55.6674V55.6857L42.4592 70.4001C40.6418 71.3082 38.4325 70.5713 37.5242 68.7538C37.266 68.2372 37.133 67.6668 37.1362 67.0894V37.6609C37.1354 35.6292 38.7814 33.9816 40.8131 33.9805C41.3845 33.9803 41.9482 34.113 42.4592 34.3685L71.8878 49.0828C73.7061 49.989 74.4456 52.1976 73.5393 54.0159Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/JT98nxWQq0c?autoplay=1&rel=0"
              title="GLC 2024 Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
          <div className="absolute hidden lg:block -left-5 xl:left-0 top-5"><img src={xicon.src} alt="" width={350} height={350} /></div>
          </div>
          </div>
        </>
  )
}

export default Gcc
