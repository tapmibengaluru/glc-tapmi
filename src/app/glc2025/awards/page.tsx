import AwardCategories from "@/components/Glc2024/Awards/AwardCategories";
import Gcc from "@/components/Glc2024/Awards/Gcc";
import Hero from "@/components/Glc2024/Awards/Hero";
import HeroMobile from "@/components/Glc2024/Awards/HeroMobile";
import Footer from "@/components/Glc2024/Footer";
import React from "react";

const page = () => {
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
      <header className="flex justify-center lg:justify-between py-6 container relative z-[99999]">
        {/* <Image
          src={"/images/logo-mob.svg"}
          className=" lg:hidden"
          alt="logo"
          width={162}
          height={51}
        /> */}
        <img src={"/images/logo.svg"} className="" alt="logo" width={239} height={63} />
        <div className="hidden lg:flex flex-col  items-end">
          <h1 className="text-end text-base text-[#000000CC] font-helvetica ">Co presenting Partner</h1>
          <img src={"/images/awardnav.svg"} alt="logo" width={250} height={48} className="hidden lg:block object-contain" />

          {/* <img src={"/images/latestHeader.svg"} alt="logo"  className="hidden lg:block object-contain" /> */}
        </div>
      </header>
      <section className="hidden  lg2:h-screen xl:h-[90vh] lg:flex    relative  container">
        <Hero />
      </section>
      <section className=" lg:hidden">
        <HeroMobile />
      </section>
      <section className="py-20 mx-auto lg:py-32 ">
        <Gcc />
      </section>
      <section className="lg:pb-20">
        <AwardCategories />
      </section>
      <Footer />
    </main>
  );
};

export default page;
