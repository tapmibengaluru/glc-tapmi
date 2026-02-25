"use client";

import Lottie from "lottie-react";
import backgroundAnimation from "@/animationData/Final full.json";
import backgroundAnimation2 from "@/animationData/Final Web phone.json";
export default function Hero() {
  return (
    <section className="h-[100vh] lg:h-[80vh] xl:h-screen w-full overflow-hidden flex items-center justify-center relative">
     
      <Lottie
        animationData={backgroundAnimation}
        className="static w-[100Vmax] h-[100Vmax] hidden lg:block"
        loop={false}
      />
      <Lottie
        animationData={backgroundAnimation2}
        className="static w-full lg:hidden"
        loop={false}
      />
      <div className="absolute  left-1/2 -translate-x-1/2 fade-in bottom-1/2 lg:bottom-1/2 translate-y-64 lg:translate-y-56 xs:translate-y-72 xl:translate-y-72 3xl:translate-y-80 duration-1000" style={{
        animationDuration: "3s"
      }}>
        <p className="font-helvetica font-black  text-white text-xs lg:text-[24px] lg:leading-tight text-center">
          FINALE BOOTCAMP: <br className="lg:hidden"/> 16th November 2024
        </p>
        <button
          onClick={() => {
            window.open("https://rebrand.ly/bizkid24apply", "_blank");
          }}
          className="bg-[#FC9D29] min-w-max lg:bg-[#F13470] mt-2 lg:mt-4 py-2 px-4 lg:py-3 lg:px-6 lg:text-xl font-helvetica font-extrabold text-white rounded-xl mx-auto block"
        >
          Register Now
        </button>
      </div>
    </section>
  );
}
