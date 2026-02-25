import React from "react";
import Image from "next/image";
import jhanani from "../../../public/images/glc2024/Dr. Janani (Ph.D).webp";

const Learning = () => {
  return (
    <div>
      <div className="text-center pt-16  lg:pb-32 relative">
        <div className="absolute hidden lg:block -bottom-0 -right-0 bg-gradient-to-br from-orange-400 to-orange-600 w-16 h-16 md:w-20 md:h-20" />
        <div className="absolute -top-0 right-10 lg:right-32 bg-gradient-to-br from-orange-400 to-orange-600 w-10 h-10 md:w-10 md:h-10" />
        <div className="absolute -top-0 lg:left-32 bg-gradient-to-br from-orange-400 to-orange-600 w-16 h-16 md:w-20 md:h-20" />
        <div className="flex justify-center">
          <img src={"/images/heroIMages/Group 185.svg"} alt="mahe tag" className="hidden lg:block" />
          <img src={"/images/heroIMages/Group 185.svg"} width={350} height={350} alt="mahe tag" className=" lg:hidden mt-10" />
        </div>
      </div>

      <section className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-16 py-12 md:py-20 px-6 md:px-12 font-helvetica">
        {/* Left Orange Squares */}
        <div className="relative flex justify-center ">
          <Image src={jhanani} width={500} height={500} alt="" className="z-30 " />
          <div className="absolute -bottom-4 right-0 lg:right-10 xl:right-32 z-50 bg-gradient-to-br from-orange-400 to-orange-600 w-16 h-16 md:w-20 md:h-20" />
          <div className="bg-gradient-to-br absolute bottom-0 from-orange-400 to-orange-600 w-64 h-64 md:w-[400px] md:h-[300px]"></div>
          <div className="absolute hidden lg:block right-8 top-0 bg-gradient-to-br from-orange-400 to-orange-600 w-16 h-16 md:w-10 md:h-10" />
        </div>

        {/* Right Content */}
        <div className="mx-auto lg:mx-0">
          <p className="text-[#404040] font-helvetica text-lg md:text-[32px]">Workshop Facilitator</p>
          <h2 className="text-3xl md:text-6xl font-helvetica font-bold text-black mt-2">Dr. Janani (Ph.D)</h2>
          <div className="inline-block bg-[#FE8129] leading-[1.1] font-helvetica text-white font-semibold text-sm md:text-[32px] py-3 px-4  mt-3">
            Assistant Professor (Psychology &amp; OB)
          </div>
          <p className="text-[#000000CC] text-justify lg:text-start mt-4 leading-relaxed font-helvetica text-base max-w-xl">
            Dr. Janani, an Assistant Professor at T A Pai Management Institute (TAPMI), MAHE Bengaluru, is an academic and practitioner specializing
            in Arts-Based Management. She holds a doctorate from IIT Madras (Psychology, Organizational Behavior and Arts). Her expertise lies in
            Change Management, Curiosity, Employee Agility, and Arts-Based Pedagogy, with research published in leading international journals such as
            Acta Psychologica and the Journal of Organizational Change Management. With over 9 years of experience as a Counseling Psychologist and
            Arts-Based Therapist, she has curated and facilitated behavioural workshops for organizations including Asian Paints Pvt. Ltd, Canara
            Bank, HCL and Zetwerk Technologies. She has also led impactful projects with The Banyan, Puzhal Prison, and a few renowned educational
            institutions. Committed to inclusivity and well-being, Dr. Janani continues to design holistic interventions that empower employees both
            at an individual and organization-level
          </p>
        </div>
      </section>
    </div>
  );
};

export default Learning;
