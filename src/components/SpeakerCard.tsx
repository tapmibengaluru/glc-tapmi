"use client";

import React from "react";

export default function SpeakerCard({
  imageBlack,
  imageWhite,
  name,
  designation,
  blank,
  lineBreak = 0,
  role,
  role2
}: {
  imageBlack: string;
  imageWhite?: string;
  name: string;
  designation: Array<string>;
  blank?: boolean;
  lineBreak?: number;
  role?: string;
  role2?: string;
}) {
  return (
    <div className="h-full z-50 border-2 border-[#D9D9D9] w-full lg:hover:bg-white fade-in">
      <div className={`${blank && "bg-white"} group w-full h-[10.25rem] lg:h-[20.75rem] lg:hover:bg-white relative z-50`}>
        {!blank && (
          <>
            {/* Mobile: show only white image (or black if white not provided) */}
            <img
              src={imageWhite || imageBlack}
              alt="speaker"
              className="object-cover w-full h-full absolute top-0 left-0 sm:object-contain lg:hidden object-top bg-white"
              loading="lazy"
            />

            {/* Desktop (lg+): hover effect between black and white images */}
            <img
              src={imageBlack}
              alt="speaker"
              className="object-cover w-full h-full absolute top-0 left-0 sm:object-contain lg:object-cover object-top transition-opacity duration-500 ease-in-out hidden lg:block lg:group-hover:opacity-0"
              loading="lazy"
            />
            {imageWhite && (
              <img
                src={imageWhite}
                alt="speaker white"
                className="object-cover w-full h-full absolute top-0 left-0 sm:object-contain lg:object-cover object-top transition-opacity duration-500 ease-in-out opacity-0 hidden lg:block lg:group-hover:opacity-100"
                loading="lazy"
              />
            )}
          </>
        )}
      </div>

      <div className="lg:h-full min-h-[8rem] flex flex-col justify-around text-center lg:min-h-[12.25rem] w-full p-2 lg:p-3">
        <h4 className="font-helvetica font-bold lg:text-[21px]">{name}</h4>
        <div className="mt-1">
          {designation.map((desig, index) => (
            <p key={index + name} className="font-helvetica text-xs lg:text-lg">
              {desig}
            </p>
          ))}
        </div>
        {lineBreak==2? <><div className="text-[#F79821] lg:hidden text-lg">{role2 || ""}</div><div className="text-[#F79821] hidden lg:block text-lg">{role || ""}</div></>:<><div className="text-[#F79821] text-lg">{role || ""}</div></>}
      </div>
    </div>
  );
}
