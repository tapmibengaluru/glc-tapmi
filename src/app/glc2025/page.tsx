"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SpeakerCard from "@/components/SpeakerCard";
import { useEffect, useRef, useState } from "react";
import { speakerData } from "@/utils/data";
import { useInView } from "framer-motion";
import AnimatedTextCharacter from "@/components/AnimatedTextCharacter";
import PanelDiscussion from "@/components/Glc2024/PanelDiscussion";
import Counter from "@/components/Glc2024/Counter";
import DelegateAdvantage from "@/components/Glc2024/DelegateAdvantage";
import GccExellence from "@/components/Glc2024/GccExellence";
import VideoSection from "@/components/Glc2024/VideoSection";
import Footer from "@/components/Glc2024/Footer";
import Hero from "@/components/Glc2024/Hero";
import Learning from "@/components/Glc2024/Learning";
import WorkshopCTA from "@/components/Glc2024/JoinWorkshop";
import Gcc from "@/components/Glc2024/Gcc";
import WorkshopHighlightsLatest from "@/components/Glc2024/WorkshopHighlightsLatest";

export default function Home() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [showSpeakers, setShowSpeakers] = useState(speakerData.slice(0, 4));

  // Section ref
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-20% 0px" });
  // 👆 triggers when ~20% enters viewport

  useEffect(() => {
    if (swiper) {
      if (isInView) {
        swiper.autoplay.start(); // start autoplay
      } else {
        swiper.autoplay.stop(); // stop autoplay
      }
    }
  }, [isInView, swiper]);


  return (
    <main
      className="overflow-x-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px", // size of each box
      }}
    >
      <header className="flex justify-between py-6 container relative z-[99999]">
        <img src={"/images/logo.svg"} className="" alt="logo" width={239} height={63} />
        <img src={"/images/latestHeader.svg"} alt="logo" width={320} height={48} className="hidden lg:block object-contain" />
      </header>
      <section className="mx-auto ">
        <section className="lg2:h-screen xl:h-[80vh] lg:flex  mb-16 lg:mb-20   relative  lg:container ">
          <Hero />
        </section>
        <section className="  lg:py-20 relative">
          <Gcc />
        </section>

        <section className="relative" ref={sectionRef}>
          <div className="py-20 relative lg:py-28 container xl:max-w-[95%]">
            <h2 className="font-helvetica  text-center font-medium leading-none text-[40px] lg:text-[64px]">
              <AnimatedTextCharacter text="Meet our Speakers" />
            </h2>
            <div className="mt-8  lg:mt-12  relative hidden lg:block">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                slidesPerGroup={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  768: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                  },
                  1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                  },
                  1280: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                  },
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper?.realIndex);
                }}
                onSwiper={setSwiper}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay]}
                loop={true}
                className="mySwiper"
              >
                {speakerData.map((speaker, index) => (
                  <SwiperSlide key={"speaker" + index}>
                    <SpeakerCard
                      key={index + "speaker"}
                      blank={speaker.blank}
                      designation={speaker.designation}
                      imageBlack={speaker.imageBlack}
                      imageWhite={speaker.imageWhite}
                      name={speaker.name}
                      role={speaker.role}
                      role2={speaker.role2}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute hidden lg:block -bottom-10 -left-20 w-20 h-32 bg-gradient-to-br from-[#FF9618] to-[#EC2188] "></div>
              <div className="absolute hidden lg:block bottom-20 -right-20 w-20 h-16 bg-gradient-to-br from-[#FF9618] to-[#EC2188] "></div>
            </div>

            <div className="lg:hidden  mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {showSpeakers
                .filter((item) => !item?.blank)
                .map((speaker, index) => (
                  <SpeakerCard
                    key={index + "speaker"}
                    blank={speaker.blank}
                    designation={speaker.designation}
                    imageBlack={speaker.imageBlack}
                    imageWhite={speaker.imageWhite}
                    name={speaker.name}
                    role={speaker.role}
                    role2={speaker.role2}
                    lineBreak={speaker.lineBreak}
                  />
                ))}
            </div>
            <button
              onClick={() => {
                setShowSpeakers(speakerData.filter((item) => !item?.blank));
              }}
              className={`${speakerData.length === showSpeakers.length ? "hidden" : "block"
                } uppercase lg:hidden border-[2px] border-[#F26C21] text-[#F26C21] px-8 py-3 font-helvetica font-bold mt-8 mx-auto`}
            >
              View more
            </button>
          </div>
          <div
            className="absolute hidden lg:block -right-0 xl:-right-0 bg-black p-4  2xl:-right-0 top-1/2 z-50 -translate-y-1/2 cursor-pointer"
            onClick={() => {
              swiper.slideNext();
            }}
          >
            <svg width="24" height="24" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            className="absolute hidden lg:block -left-1 xl:-left-1 bg-black p-4  2xl:-left-1 top-1/2 z-50 -translate-y-1/2 cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <section className="pb-20 lg:py-20 container xl:max-w-[95%]">
          <PanelDiscussion />
        </section>
        <section className=" lg:py-10 ">
          <Counter />
        </section>
        <section className="py-10 lg:pt-2 ">
          <DelegateAdvantage />
        </section>
        <section className="pt-10 lg:pt-10 ">
          <Learning />
        </section>
        <section className=" lg:pt-0 ">
          <WorkshopHighlightsLatest />
        </section>
        <section className=" lg:pt-0 ">
          <WorkshopCTA />
        </section>
        <section className=" ">
          <GccExellence />
        </section>
        {/* <section className="max-w-[1300px] xl:max-w-[1400px] mx-auto">
          <Learning/>
        </section> */}
        <section className="pb-10 lg:py-28">
          <VideoSection />
        </section>
      </section>
      <section className="pb-20 lg:pb-28 container">
        <h2 className="font-helvetica font-medium text-center lg:font-medium leading-none text-[36px] lg:text-[64px]">
          <AnimatedTextCharacter text="Event Venue" />
        </h2>
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4620.794571002948!2d77.59184331614605!3d13.12390103739044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae146c1aeeb9fb%3A0xf51149b8ae2bd6e5!2sT.%20A.%20Pai%20Management%20Institute!5e0!3m2!1sen!2sin!4v1728554812575!5m2!1sen!2sin"
            height="450"
            className="w-full rounded-2xl mt-8 lg:mt-12"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Gradient Overlay */}
          <div className="absolute -bottom-4 -left-7 w-20 h-20 bg-gradient-to-t from-[#EC2188] to-[#FF9618] pointer-events-none"></div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 container">
        <h2 className="font-helvetica font-medium text-center lg:font-medium leading-none text-[36px] lg:text-[64px]">
          <AnimatedTextCharacter text="Agenda" />
        </h2>
        <div className="relative">
          <iframe
            src="/Agenda (1).pdf#view=FitH"
            height="750"
            className="w-full rounded-2xl mt-8 lg:mt-12"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Gradient Overlay */}
          <div className="absolute -bottom-4 -left-7 w-20 h-20 bg-gradient-to-t from-[#EC2188] to-[#FF9618] pointer-events-none"></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
