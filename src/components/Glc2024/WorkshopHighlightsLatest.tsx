"use client";
import React, { useState } from "react";
import AnimatedTextCharacter from "../AnimatedTextCharacter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// ------------------ Dummy Data -------------------
const speakerData = [
  {
    name: "Immersive Arts Experience",

    description: "Engage with art modalities such as Visual Arts, Music, Movement, and Theatre for self-reflection.",
    imageWhite: "/images/glc2024/workshop/L&D Image1.webp",
    blank: false,
  },
  {
    name: "Collaboration in Action",
    description: "Co-create artifacts, share responsibilities, make collective decisions and build a ‘team identity’.",

    imageWhite: "/images/glc2024/workshop/L&D Image2.webp",
    blank: false,
  },
  {
    name: "Safe Space for Expression",
    description: "Question your patterns in a non-evaluative environment that values openness, curiosity, and authenticity.",

    imageWhite: "/images/glc2024/workshop/L&D Image3.webp",
    blank: false,
  },
    {
    name: "Behavioral Agility",

    description: "Hop out of your comfort zones, embrace change, and restructure your mindset.",
    imageWhite: "/images/glc2024/workshop/L&D Image4.webp",
    blank: false,
  },
  {
    name: "Practical Applications",
    description: "Discover how resistance is experienced and learn how it can be dealt with.",

    imageWhite: "/images/glc2024/workshop/L&D Image5.webp",
    blank: false,
  },
  {
    name: "Immersive Arts Experience",

    description: "Engage with art modalities such as Visual Arts, Music, Movement, and Theatre for self-reflection.",
    imageWhite: "/images/glc2024/workshop/L&D Image1.webp",
    blank: false,
  },
  {
    name: "Collaboration in Action",
    description: "Co-create artifacts, share responsibilities, make collective decisions and build a ‘team identity’.",

    imageWhite: "/images/glc2024/workshop/L&D Image2.webp",
    blank: false,
  },
  {
    name: "Safe Space for Expression",
    description: "Question your patterns in a non-evaluative environment that values openness, curiosity, and authenticity.",

    imageWhite: "/images/glc2024/workshop/L&D Image3.webp",
    blank: false,
  },
    {
    name: "Behavioral Agility",

    description: "Hop out of your comfort zones, embrace change, and restructure your mindset.",
    imageWhite: "/images/glc2024/workshop/L&D Image4.webp",
    blank: false,
  },
  {
    name: "Practical Applications",
    description: "Discover how resistance is experienced and learn how it can be dealt with.",

    imageWhite: "/images/glc2024/workshop/L&D Image5.webp",
    blank: false,
  },

];
// -------------------------------------------------

const WorkshopHighlightsLatest = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSpeakers, setShowSpeakers] = useState(
    speakerData.slice(0, 3) // show only few in mobile initially
  );

  return (
    <section className="relative">
    <div className=" relative lg:py-28 px-5 lg:px-10 lg:max-w-6xl mx-auto xl:max-w-[70%]">
      <h2 className="font-helvetica text-center font-medium leading-none text-[36px] lg:text-[64px]">
        <AnimatedTextCharacter text="Workshop Highlights" />
      </h2>

      {/* Swiper for Desktop */}
      <div className="mt-8 lg:mt-12 relative ">
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper?.realIndex);
          }}
          onSwiper={setSwiper}
         
          navigation={true}
          
          loop={true}
          className="mySwiper"
        >
          {speakerData.map((speaker, index) => (
            <SwiperSlide key={"speaker" + index}>
              <SpeakerCard {...speaker} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Grid */}
      {/* <div className="hidden mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {showSpeakers
          .filter((item) => !item?.blank)
          .map((speaker, index) => (
            <SpeakerCard key={index + "speaker"} {...speaker} />
          ))}
      </div> */}

      <button
        onClick={() => {
          setShowSpeakers(speakerData.filter((item) => !item?.blank));
        }}
        className={`${
          speakerData.length === showSpeakers.length ? "hidden" : "block"
        } uppercase hidden border-[2px] border-[#F26C21] text-[#F26C21] px-8 py-3 font-helvetica font-bold mt-8 mx-auto`}
      >
        View more
      </button>
      </div>
       <div
              className="absolute  -right-0 xl:-right-0 bg-black p-4  2xl:-right-0 top-1/2 z-50 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                swiper.slideNext();
              }}
            >
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_20_41587" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="29">
                  <rect x="28" y="28.5" width="28" height="28" transform="rotate(-180 28 28.5)" fill="#EC2188" />
                </mask>
                <g mask="url(#mask0_20_41587)">
                  <path
                    d="M9.33327 2.83341L20.9999 14.5001L9.33327 26.1667L7.26244 24.0959L16.8583 14.5001L7.26244 4.90424L9.33327 2.83341Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
             <div
              onClick={() => {
                swiper.slidePrev();
              }}
              className="absolute  -left-0 xl:-left-0 2xl:-left-0 bg-black   p-4  top-1/2 z-50 -translate-y-1/2 cursor-pointer"
            >
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_20_41590" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="29">
                  <rect y="0.5" width="28" height="28" fill="#EC2188" />
                </mask>
                <g mask="url(#mask0_20_41590)">
                  <path
                    d="M18.6668 26.1666L7.00012 14.4999L18.6668 2.83325L20.7376 4.90409L11.1418 14.4999L20.7376 24.0958L18.6668 26.1666Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
    </section>
  );
};

export default WorkshopHighlightsLatest;

// ------------------ SpeakerCard -------------------
function SpeakerCard({
  imageWhite,
  name,
  description,
  blank,
  lineBreak = 0,
  role,
}: {
  imageWhite?: string;
  name: string;
  description: string;
  blank?: boolean;
  lineBreak?: number;
  role?: string;
}) {
  return (
    <div className="h-full z-50 mx-auto  w-[70%] lg:w-full lg:hover:bg-white fade-in overflow-hidden">
      <div className={`${blank && "bg-white"} mx-auto group w-full h-[15.25rem] lg:h-[25.75rem] lg:hover:bg-white relative z-50`}>
        {!blank && (
          <>
            {/* Mobile Image */}
            <img
              src={imageWhite}
              alt="speaker"
              className="object-cover w-full h-full absolute top-0 left-0 sm:object-contain lg:hidden object-top bg-white"
              loading="lazy"
            />

            {/* Desktop Images */}

            {imageWhite && (
              <img
                src={imageWhite}
                alt="speaker white"
                className="object-cover w-full h-full absolute top-0 left-0 sm:object-contain lg:object-cover object-top transition-opacity duration-500 ease-in-out  hidden lg:block "
                loading="lazy"
              />
            )}
          </>
        )}
      </div>

      <div className="lg:h-full min-h-[8rem] flex flex-col  text-center lg:min-h-[12.25rem] w-full p-2 lg:p-3">
        <h4 className="font-helvetica font-bold lg:text-2xl xl:text-3xl text-[#282828] mt-3">{name}</h4>
        <div className="mt-1">
          <p className="font-helvetica text-center text-xs lg:text-lg">{description}</p>
        </div>
        
      </div>
    </div>
  );
}
