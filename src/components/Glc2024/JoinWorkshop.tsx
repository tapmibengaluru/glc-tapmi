"use client";
import React from "react";

const WorkshopCTA = () => {
  return (
    <section className="relative py-28 text-center font-helvetica overflow-hidden">
      {/* Decorative Squares */}
      <div className="absolute top-10 left-2 lg:left-20 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600"></div>
      <div className="absolute bottom-2 lg:bottom-20 left-10 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600"></div>
      <div className="absolute top-8 right-28 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600"></div>
      <div className="absolute bottom-3 lg:bottom-10 right-0 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600"></div>

      {/* Content */}
      <h2 className="text-3xl md:text-7xl font-helvetica font-medium text-[#000000]">
        Join the Workshop Today!
      </h2>
      <p className="text-lg font-helvetica font-medium md:text-5xl text-[#000000] mt-4">
        Only 30 Seats Available!
      </p>

      <button  onClick={() => {
              window.open("https://forms.gle/hpQYERwHXEXRhsXQ9", "_blank");
            }}  className="mt-8  sm:w-auto px-6 py-3 font-bold text-lg sm:text-xl md:text-2xl text-white bg-[#F7038F] hover:bg-[#ed1d24] ">
        REGISTER NOW
      </button>
    </section>
  );
};

export default WorkshopCTA;
